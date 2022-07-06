import React, { useEffect, useState } from 'react';
import Api, { TCategory } from '@services/Api';

import Loader from '@components/Loader';
import Button from '@components/Button';

const Categories: React.FC = () => {

  const api = new Api();
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {

    const fetchCategories = async () => await api.getCategories();

    fetchCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.error(err));

  }, []);

  return (
    <ul className="categories">
      { categories.length
        ?
        categories.map((item: TCategory) => {
          const url = api.getByCategoryLink(item.category);
          return (
            <li key={item.id}>
              <Button url={url} title={item.category} />
              <span className="categories__counter">{`( ${item.helpersCount} )`}</span>
            </li>
          );
        })
        :
        <Loader size={100} /> }
    </ul>
  );
}

export default Categories;
