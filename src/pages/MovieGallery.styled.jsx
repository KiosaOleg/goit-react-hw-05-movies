import styled from '@emotion/styled';

export const MovieList = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-content: start;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  position: relative;

  margin: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: box-shadow 250ms ease-in-out, transform 400ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.02);
    color: red;
  }
`;
