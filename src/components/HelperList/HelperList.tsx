import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Api, { THelper } from '@services/Api';
import getNoun from '@utils/getNoun';

import Loader from '@components/Loader';
import HelperItem from '@components/HelperItem';
import ActionCreator from '@store/actions';
import { TState } from '@store/reducer';


const HelperList: React.FC = () => {

  const api = new Api();
  const [isLoading, setIsloading] = useState(false);
  const [helpers, setHelpers] = useState<THelper[]>([]);

  const { type: searchType, query: searchQuery } = useSelector((state: TState) => state.search.params);
  const { run: searchRunFlag } = useSelector((state: TState) => state.search);

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
      default:
        break;
    }
    const fetchHelpers = async () => await getHelpers(searchQuery);

    if(searchRunFlag && searchType && searchQuery) {
      setIsloading(true);
      fetchHelpers()
        .then((helpers: THelper[]) => {
          setHelpers(helpers);
          const count = helpers.length;
          const foundWord = getNoun(count, 'Найден', 'Найдено', 'Найдено');
          const helperWord = getNoun(count, 'хелпер', 'хелпера', 'хелперов');
          dispatch(ActionCreator.setInfoMessage(
            { label: '😊', text: `${foundWord} ${count} ${helperWord}` }
          ));
        })
        .catch((err) => {
          console.error('Fetch helpers error:', err);
          dispatch(ActionCreator.setWarningMessage(
            { label: '😭', text: 'Ошибка получения хелперов' }
          ));
        })
        .finally(() => {
          setIsloading(false);
          dispatch(ActionCreator.setSearchRunFlag({ run: false }));
        });
    }

  }, [searchRunFlag]);

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
                <HelperItem {...item} />
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
