import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';

const Home = lazy(() => import('../pages/Home/Home'));
const Users = lazy(() => import('../pages/Users/Users'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
