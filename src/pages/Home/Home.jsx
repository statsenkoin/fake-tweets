import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  return (
    <>
      <Link to="/tweets" state={{ from: location }}>
        Home
      </Link>
    </>
  );
}
