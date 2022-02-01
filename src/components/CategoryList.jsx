import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function CategoryList({ movieCategories }) {
  console.log('movieCategories', movieCategories);
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
}
