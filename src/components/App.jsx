import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieReviews from './MovieReviews/MovieReviews';
import MovieCast from './MovieCast/MovieCast';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
