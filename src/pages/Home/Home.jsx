import { Link, useLocation } from 'react-router-dom';
import { PageWrapper, Text } from './Home.styled';

export default function Home() {
  const location = useLocation();
  return (
    <PageWrapper>
      <Text>
        This small SPA (single page application) presents a simple connection to
        the{' '}
        <span>
          <a href="https://mockapi.io/projects" target="blank">
            mocapi.io
          </a>
        </span>{' '}
        server to display a list of "fake tweets" users, perform some simple
        operations, and navigate the page.
      </Text>
      <Text>
        More in "Footer" and on the{' '}
        <span>
          <Link to="/users" state={{ from: location }}>
            User Page
          </Link>
        </span>
      </Text>
    </PageWrapper>
  );
}
