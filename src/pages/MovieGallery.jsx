import { URL_POSTER } from 'constants/constants';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieItem, MovieList } from './MovieGallery.styled';

export default function MovieGallery({ movies }) {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, original_title, poster_path, title }, i) => (
        <MovieItem key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={poster_path ? `${URL_POSTER}${poster_path}` : `no image`}
              alt={title}
              width={350}
              height={525}
            />
            <div>
              <p>{original_title}</p>
            </div>
          </NavLink>
        </MovieItem>
      ))}
    </MovieList>
  );
}
