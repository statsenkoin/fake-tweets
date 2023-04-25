import styled from 'styled-components';
import { BsFilter } from 'react-icons/bs';

export const Wrapper = styled.div`
  position: relative;
  border-radius: 6px;

  &:hover,
  &:hover > :first-child {
    transform: scale(1.05);
    color: var(--color-text-active);
    background-color: var(--color-bg-dark-main);
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
  outline: none;
  padding: 6px 30px 6px 15px;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-dark);
  background-color: var(--color-bg-light-main);
  border-radius: 6px;
  border-color: transparent;
  box-shadow: var(--box-shadow);

  transition: var(--transition);
`;
