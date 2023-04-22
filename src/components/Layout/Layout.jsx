import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </div>
  );
}
