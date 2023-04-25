import { HeaderStyled, NavBox, NavLinkStyled } from './Header.styled';

export function Header() {
  return (
    <HeaderStyled>
      <NavBox>
        <NavLinkStyled to="/" end>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/users">Users</NavLinkStyled>
      </NavBox>
    </HeaderStyled>
  );
}
