import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageWrap = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px 20px;
  border: 1px solid #2c3b8d;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  color: #d1d1d1;
  transition: box-shadow 250ms linear, transform 250ms linear;
  &.active {
    color: yellow;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const ContentWrap = styled.div`
  padding-bottom: 70px;
`;
