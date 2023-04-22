import { Link, useLocation } from 'react-router-dom';

export default function Tweets() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      Tweets
      <Link to={backLinkHref}>Back to products</Link>
    </>
  );
}
