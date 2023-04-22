import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingPage, Footer } from 'components';
import {
  Header,
  NavBox,
  NavLinkStyled,
  PageWrap,
  ContentWrap,
} from './Layout.styled';

export function Layout() {
  return (
    <PageWrap>
      <Header>
        <NavBox>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/users">Users</NavLinkStyled>
        </NavBox>
      </Header>
      <ContentWrap>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </ContentWrap>
      <Footer />
    </PageWrap>
  );
}
