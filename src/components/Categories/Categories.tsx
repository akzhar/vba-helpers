import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TCategory } from '@services/Api';

import Loader from '@components/Loader';
import Header from '@components/Header';
import Button from '@components/Button';
import { AppRoutes } from '@consts/const';
import ActionCreator from '@store/actions';
import { TState } from '@store/reducer';

const Categories: React.FC = () => {

  const isLoading = useSelector((state: TState) => state.categories.isLoading);
  const categories = useSelector((state: TState) => state.categories.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!categories.length) {
      dispatch(ActionCreator.loadCategories());
    }
  }, []);

  return (
    <section className="categories">
      <Header text="Categories" />
        <>
        { isLoading
          ?
          <Loader size={100} />
          :
          (
            categories.length
            ?
            <ul className="categories__list">
            { categories.map((item: TCategory) => {
                const searchUrl = `${AppRoutes.SEARCH}?type=c&query=${item.category}`
                return (
                  <li key={item.id}>
                    <Button url={searchUrl}>
                      <span>{item.category}</span>
                      <span className="helpers-counter">{`${item.helpersCount}`}</span>
                    </Button>
                  </li>
                );
              })}
            </ul>
            :
            <p className="categories__empty-msg">Sorry, no category was found</p>
          )
        }
      </>
    </section>
  );
}

export default Categories;
