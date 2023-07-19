import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GitGrid key={category} category={category} />
      ))}

      {/* GIF ITEM */}
    </>
  );
};
