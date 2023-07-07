import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'api/api';
import { FaSearch } from 'react-icons/fa';
import MovieGallery from './MovieGallery';
import { Form } from './Movie.styled';

export default function Movie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const onFormSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;

    async function renderSearchMovies() {
      try {
        const moviesResp = await searchMovie(movieSearch);
        setMovies(moviesResp);
      } catch (error) {
        console.log('Ooops, something went wrong');
      }
    }
    renderSearchMovies();
  }, [movieSearch]);

  return (
    <div movies={movies.toString()}>
      <Form action="" onSubmit={onFormSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            placeholder="Please write a name movie"
          />
          <button type="submit">
            <FaSearch size={25} />
          </button>
        </label>
      </Form>

      {movies && <MovieGallery movies={movies} />}

      {movies.length === 0 && 'There is no movies with that request...'}
    </div>
  );
}
