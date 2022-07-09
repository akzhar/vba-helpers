import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Api, { TCategory } from '@services/Api';

import Loader from '@components/Loader';
import Header from '@components/Header';
import Button from '@components/Button';
import { AppRoutes } from '@consts/const';
import ActionCreator from '@store/actions';

const Categories: React.FC = () => {

  const api = new Api();
  const [categories, setCategories] = useState<TCategory[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {

    const fetchCategories = async () => await api.getCategories();

    fetchCategories()
      .then(categories => setCategories(categories))
      .catch((err) => {
        console.error('Fetch categories error:', err);
        dispatch(ActionCreator.setWarningMessage(
          { label: '😭', text: 'Ошибка получения категорий' }
        ));
      })

  }, []);

  return (
    <section className="categories">
      <Header id="categories" text="Категории хелперов" />
      <ul>
        { categories.length
          ?
          categories.map((item: TCategory) => {
            const searchUrl = `${AppRoutes.SEARCH}?type=c&query=${item.category}`
            return (
              <li key={item.id}>
                <Button url={searchUrl}>{item.category}</Button>
                <span className="helpers-counter">{`( ${item.helpersCount} )`}</span>
              </li>
            );
          })
          :
          <Loader size={100} /> }
      </ul>
    </section>
  );
}

export default Categories;
