import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #5736a3;
  text-decoration: none;
  border-radius: 5px;
  background-color: #fcfcfc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.05);

  transition: background-color 300ms linear, transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: #ffff00;
    background-color: #5736a3;
  }
`;
