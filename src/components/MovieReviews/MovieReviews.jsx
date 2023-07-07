import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';
import { ReviewsItem, AuthorP, ReviewsContent } from './MovieReviews.styled';
import NoReviews from './NoReviews/NoReviews';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieId() {
      try {
        const idResp = await getMovieReviews(movieId);
        setReviews(idResp);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieId();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <NoReviews />
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <AuthorP>Author: {author}</AuthorP>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))}
        </ul>
      )}
    </>
  );
}
