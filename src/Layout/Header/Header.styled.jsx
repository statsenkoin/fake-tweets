import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 24px;
  box-shadow: var(--box-shadow);

  background: var(--linear-gradient);
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px 20px;
  border: 1px solid var(--color-text-dark);
  border-radius: 6px;
  text-decoration: none;
  color: var(--color-text-light);
  transition: box-shadow 250ms linear, transform 250ms linear;
  &.active {
    color: var(--color-text-active);
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: var(--box-shadow);
  }
`;
