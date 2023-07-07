import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const MovieInfoBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 20px;
  margin-top: 50px;
`;

export const BackDiv = styled.div`
  margin-left: 45px;
  margin-top: 10px;

  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;

  &.active {
    color: red;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 250ms ease-out;
  }
`;

export const GoBack = styled(NavLink)`
  position: absolute;
  z-index: 200;
  padding: 0;
  color: black;
  border-radius: 10px;
`;

export const Poster = styled.img`
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.72) 0px 5px 15px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Score = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 5px 20px;
  padding-bottom: 10px;
`;

export const OverviewTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-decoration-line: underline;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const OverviewContent = styled.p`
  font-size: 18px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const GenresTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-decoration-line: underline;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const GenresContent = styled.p`
  font-size: 18px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PosterandBtnContainer = styled.div`
  position: relative;
  margin-left: 40px;
  width: 300px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-top: 10px;
`;

export const NavlinkComtainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CastReviewsList = styled.ul`
  padding-bottom: 15px;
  display: flex;
  justify-content: center;

  list-style: none;
`;

export const CastReviewsItem = styled(Link)`
  padding: 7px 10px;
  margin-right: 17px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;

  color: black;
  border-radius: 10px;

  &.active {
    color: black;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    transform: translateY(-2px);
  }
`;
