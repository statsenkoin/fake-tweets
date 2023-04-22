import { useLocation } from 'react-router-dom';
import { PageWrapper, PageHead } from './Users.styled';
import { BackLink } from 'components';

export default function Users() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <main>
      <PageWrapper>
        <PageHead>
          <BackLink to={backLinkHref}>Back to Home</BackLink>
          <span>filter</span>
        </PageHead>
        <h3>Users</h3>
      </PageWrapper>
    </main>
  );
}
