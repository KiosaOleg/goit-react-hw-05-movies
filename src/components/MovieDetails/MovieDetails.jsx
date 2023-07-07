import { getMovieDetails } from 'api/api';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { HiBackspace } from 'react-icons/hi';
import { URL_POSTER } from 'constants/constants';
import {
  AdditionalInfo,
  BackDiv,
  CastReviewsItem,
  CastReviewsList,
  GenresContent,
  GenresTitle,
  GoBack,
  MovieInfoBox,
  NavlinkComtainer,
  OverviewContent,
  OverviewTitle,
  Poster,
  PosterandBtnContainer,
  Score,
  Title,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(0);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovieId() {
      try {
        const idResp = await getMovieDetails(movieId);
        setMovie(idResp);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieId();
  }, [movieId]);

  const from = location.state?.from ?? '/';

  const getYear = () => new Date(`${movie.release_date}`).getFullYear();
  const getScore = () => Math.round(`${movie.vote_average}` * 10);

  return (
    <MovieInfoBox>
      {movie && (
        <div>
          <GoBack to={from}>
            <BackDiv>
              <HiBackspace size={35} />
            </BackDiv>
          </GoBack>

          <div>
            <PosterandBtnContainer>
              <Poster
                src={
                  movie.poster_path
                    ? `${URL_POSTER}${movie.poster_path}`
                    : 'no image'
                }
                alt={movie.original_title}
                width="300"
                height="450"
              />
            </PosterandBtnContainer>
            <div>
              <Title>
                {movie.original_title} ({getYear()})
              </Title>
              <Score>Use Score : {getScore()}%</Score>
              <OverviewTitle>Overview:</OverviewTitle>
              <OverviewContent>{movie.overview}</OverviewContent>
              <GenresTitle>Genres:</GenresTitle>
              <GenresContent>
                {movie.genres.map(genre => genre.name).join(', ')}
              </GenresContent>
            </div>
          </div>

          <div>
            <AdditionalInfo> Additional information</AdditionalInfo>
            <NavlinkComtainer>
              <CastReviewsList>
                <li>
                  <CastReviewsItem to="cast" state={{ from }}>
                    Cast
                  </CastReviewsItem>
                </li>
                <li>
                  <CastReviewsItem to="reviews" state={{ from }}>
                    Reviews
                  </CastReviewsItem>
                </li>
              </CastReviewsList>
            </NavlinkComtainer>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </MovieInfoBox>
  );
}
