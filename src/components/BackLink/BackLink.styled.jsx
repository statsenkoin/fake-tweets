import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 6px;
  box-shadow: var(--box-shadow);

  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    color: var(--color-text-active);
    background-color: var(--color-bg-dark-main);
  }
`;
