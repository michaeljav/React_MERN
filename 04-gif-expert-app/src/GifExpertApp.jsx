import React, { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories((prev) => [...prev, 'JAVIERa']);
  };
  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>;{/* INPUT */}
      {/* LISTADO DE GIF */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* GIF ITEM */}
    </>
  );
};
