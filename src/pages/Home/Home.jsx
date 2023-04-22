import { Link, useLocation } from 'react-router-dom';
import { PageWrapper } from './Home.styled';

export default function Home() {
  const location = useLocation();
  return (
    <main>
      <PageWrapper>
        <Link to="/users" state={{ from: location }}>
          Home
        </Link>
      </PageWrapper>
    </main>
  );
}
