import { useLocation } from 'react-router-dom';
import { PageWrapper, PageHead, UsersList } from './Users.styled';
import { BackLink, UserCard } from 'components';

// import hansel from '../../assets/images/Hansel.png';
const users = [
  {
    user: 'Elon Mask',
    tweets: 7777,
    followers: 100500,
    // avatar: '',
    avatar: require('../../assets/images/Hansel.png'),
    id: '1',
  },
  {
    user: 'Keanu Reeves',
    tweets: 555,
    followers: 800300,
    avatar: require('../../assets/images/Hansel.png'),
    id: '2',
  },
  {
    user: 'Joe Biden',
    tweets: 333,
    followers: 1000001,
    avatar: require('../../assets/images/Hansel.png'),
    id: '3',
  },
  {
    user: 'Bill Gates',
    tweets: 1000,
    followers: 7777,
    avatar: require('../../assets/images/Hansel.png'),
    id: '4',
  },
  {
    user: 'Mark Zuckerberg',
    tweets: 999,
    followers: 3003,
    avatar: '',
    id: '5',
  },
];

export default function Users() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <main>
      <PageWrapper>
        <PageHead>
          <BackLink to={backLinkHref}>Back Home</BackLink>
          <span>filter</span>
        </PageHead>
        <UsersList>
          {users.map(user => (
            <li key={user.id}>
              <UserCard user={user}></UserCard>
            </li>
          ))}
        </UsersList>
      </PageWrapper>
    </main>
  );
}
