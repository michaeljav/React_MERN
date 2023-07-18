import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newValue) => {
    if (newValue.trim().length <= 1) return;
    setCategories((prevCategories) => [...prevCategories, newValue]);
  };
  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
      {/* INPUT */}
      <AddCategory onAddCategory={onAddCategory} />
      {/* LISTADO DE GIF */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* GIF ITEM */}
    </>
  );
};
