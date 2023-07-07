import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';
import { URL_POSTER } from 'constants/constants';
import { MovieCastBox } from './MovieCast.styled';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieId() {
      try {
        const idResp = await getMovieCast(movieId);
        console.log(idResp);
        setCast(idResp);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieId();
  }, [movieId]);

  if (cast.length === 0) {
    return "We don't have any cast information on this movie.";
  }

  return (
    <MovieCastBox>
      {cast.map(({ profile_path, name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `${URL_POSTER}${profile_path}`
                  : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'
              }
              alt=""
              width="200"
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </MovieCastBox>
  );
}
