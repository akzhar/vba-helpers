import React, { useEffect, useState } from 'react';
import Api, { TCategory } from '@services/Api';

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
    <ul>
      { categories.length
        ?
        categories.map((item: TCategory) => {
          const url = api.getByCategoryLink(item.category);
          return <li key={item.id}><a href={url}>{item.category}</a></li>;
        })
        :
        <p>Loading...</p> }
    </ul>
  );
}

export default Categories;
