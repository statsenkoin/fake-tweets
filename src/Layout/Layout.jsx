import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingPage, Footer, Header } from 'components';
import { PageWrap, ContentWrap } from './Layout.styled';

export function Layout() {
  return (
    <PageWrap>
      <Header />
      <ContentWrap>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </ContentWrap>
      <Footer />
    </PageWrap>
  );
}
