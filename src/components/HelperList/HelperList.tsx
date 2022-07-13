import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Api, { THelper } from '@services/Api';
import getNoun from '@utils/getNoun';

import Loader from '@components/Loader';
import HelperItem from '@components/HelperItem';
import ActionCreator from '@store/actions';
import { TState } from '@store/reducer';

const HelperList: React.FC = () => {

  const api = new Api();
  const [helpers, setHelpers] = useState<THelper[]>([]);

  const { params: { type: searchType, query: searchQuery }, isLoading } = useSelector(
    (state: TState) => state.search,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {

    let getHelpers: (query: string) => Promise<THelper[]>;

    // Select API method by stored search type
    switch(searchType) {
      case 't':
        getHelpers = api.getHelpersByTitle;
        break;
      case 'c':
        getHelpers = api.getHelpersByCategory;
        break;
      case 'k':
        getHelpers = api.getHelpersByKeyword;
        break;
      case 'n':
        getHelpers = api.getHelpersByName;
        break;
      case 'i':
        getHelpers = api.getHelpersById;
        break;
      default:
        break;
    }

    const fetchHelpers = async () => await getHelpers(searchQuery);

    if(isLoading && searchType && searchQuery) {
      fetchHelpers()
        .then((helpers: THelper[]) => {
          if(!Array.isArray(helpers)) {
            if(Object.prototype.hasOwnProperty.call(helpers, 'id')) {
              helpers = [helpers];
            } else {
              helpers = [];
            }
          }
          setHelpers(helpers);
          const count = helpers.length;
          if(count) {
            const foundWord = getNoun(count, 'Найден', 'Найдено', 'Найдено');
            const helperWord = getNoun(count, 'хелпер', 'хелпера', 'хелперов');
            dispatch(ActionCreator.setInfoMessage(
              { label: '😊', text: `${foundWord} ${count} ${helperWord}` }
            ));
          } else {
            dispatch(ActionCreator.setWarningMessage(
              { label: '😭', text: 'Хелперы не найдены' }
            ));
          }
        })
        .catch((err) => {
          console.error('Fetch helpers error:', err);
          dispatch(ActionCreator.setWarningMessage(
            { label: '😭', text: 'Ошибка получения хелперов' }
          ));
        })
        .finally(() => {
          dispatch(ActionCreator.setSearchIsLoading({ flag: false }));
        });
    }

  }, [isLoading]);

  return (
    <>
      { isLoading
        ?
        <Loader size={100} />
        :
        (
          helpers.length
          ?
          <ul className="helpers">
            {helpers.map((item: THelper) => (
              <li key={item.id} className="helpers__item">
                <HelperItem helper={item} open={helpers.length === 1} />
              </li>
            ))}
          </ul>
          :
          <></>
        )
      }
    </>
  );

}

export default HelperList;
