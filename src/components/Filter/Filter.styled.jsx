import styled from 'styled-components';
import { BsFilter } from 'react-icons/bs';

export const Wrapper = styled.div`
  position: relative;
  border-radius: 5px;

  &:hover,
  &:hover > :first-child {
    transform: scale(1.05);
    color: #ffff00;
    background-color: #3f51b5;
  }
`;
export const Icon = styled(BsFilter)`
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 26px;
`;

export const Select = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  font-family: inherit;
  outline: none;

  padding: 5px 30px 5px 15px;
  font-size: 18px;
  font-weight: 600;
  color: #5736a3;

  border-radius: 5px;
  border-color: transparent;
  background-color: #fcfcfc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.05);

  transition: background-color 300ms linear, transform 300ms ease-in-out;
`;
