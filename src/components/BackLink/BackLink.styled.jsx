import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  margin: 10px;
  font-weight: 700;
  color: #555;
  text-decoration: none;
  border-radius: 5px;
  background-color: #fcfcfc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.05);
  transition: 300ms;

  &:hover,
  &:focus {
    transition: 300ms;
    scale: 1.05;
    font-weight: 500;
    color: yellow;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
