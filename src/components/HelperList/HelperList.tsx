import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { THelper } from '@services/Api';

import Loader from '@components/Loader';
import HelperItem from '@components/HelperItem';
import ActionCreator from '@store/actions';
import { TState } from '@store/reducer';

const HelperList: React.FC = () => {

  const isLoading = useSelector((state: TState) => state.helpers.isLoading);
  const helpers = useSelector((state: TState) => state.helpers.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!isLoading) {
      dispatch(ActionCreator.showMessage());
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
              <li
                key={item.id}
                data-testid={`helper-${item.id}`}
                className={`helpers__item${helpers.length === 1 ? ' helpers__item--single' : ''}`}
              >
                <HelperItem helper={item} isOpen={helpers.length === 1} />
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
