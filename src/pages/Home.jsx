import React, { useEffect, useState } from 'react';
import { fetchTrendMovie } from 'api/api';
import MovieGallery from './MovieGallery';
import { HomeTitle, SwiperContainer } from './Home.styled';

export default function Home() {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    const renderTrendMovies = async () => {
      try {
        const trendMovies = await fetchTrendMovie();
        setTrendMovie(trendMovies);
      } catch (error) {
        console.error();
      }
    };
    renderTrendMovies();
  }, []);

  return (
    <SwiperContainer>
      <HomeTitle>Trending movies today</HomeTitle>
      <MovieGallery movies={trendMovie} />
    </SwiperContainer>
  );
}
