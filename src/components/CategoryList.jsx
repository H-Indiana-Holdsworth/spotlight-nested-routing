import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function CategoryList({ movieCategories }) {
  console.log('movieCategories', movieCategories);
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h1>Categories</h1>
      {movieCategories.map(({ category, id }) => (
        <Link key={id} to={`${url}/${id}`}>
          {category}
        </Link>
      ))}
    </div>
  );
}
