import React, { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>;{/* INPUT */}
      {/* LISTADO DE GIF */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* GIF ITEM */}
    </>
  );
};
