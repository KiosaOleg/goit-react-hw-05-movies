import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-content: center;
  padding-bottom: 7px;
  font-size: 25px;
  font-weight: 700;
  transition: height 400ms ease-out;

  background-color: white;

  transition: height 400ms ease-out;

  border-bottom: 2px solid #000;
`;

export const HomeMovieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 4px;
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
`;
