import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import MovieList from './MovieList';

export default function CategoryList({ movieCategories }) {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h1>Categories</h1>
      {movieCategories.map(({ category, id }) => (
        <Link key={id} to={`${url}/${id}`}>
          {category}
        </Link>
      ))}

      <Route path={`${path}/:categoryId`}>
        <MovieList />
      </Route>
    </div>
  );
}
