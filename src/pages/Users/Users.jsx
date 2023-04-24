import { useLocation } from 'react-router-dom';
import { PageWrapper, PageHead, UsersList } from './Users.styled';
import { BackLink, UserCard } from 'components';
import { useEffect, useState } from 'react';
import { fetchUsers, updateUser } from 'services/usersApi';

import { Button } from 'components/Button/Button.styled';

export default function Users() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // ==================================================
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [isBtnLoadMore, setIsBtnLoadMore] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const userList = await fetchUsers(page);
        userList.length > 0
          ? setUsers(prev => [...prev, ...userList])
          : setIsBtnLoadMore(false);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getUsers();
  }, [page]);

  const handleFollowingButton = user => {
    const index = users.findIndex(({ id }) => user.id === id);
    const isFollowingUser = followingUsers.some(({ id }) => user.id === id);
    if (isFollowingUser) {
      users[index].followers -= 1;
      setFollowingUsers(followingUsers.filter(({ id }) => id !== user.id));
    } else {
      users[index].followers += 1;
      setFollowingUsers(prev => [...prev, user]);
    }
    updateFollowers(user);
  };

  async function updateFollowers(user) {
    try {
      await updateUser(user);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  const handleLoadMore = () => setPage(prev => prev + 1);

  // ==================================================
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
              <UserCard
                user={user}
                followingUsers={followingUsers}
                handleFollowingButton={handleFollowingButton}
              ></UserCard>
            </li>
          ))}
        </UsersList>
        {isBtnLoadMore && (
          <Button type="button" onClick={handleLoadMore}>
            Load more
          </Button>
        )}
      </PageWrapper>
    </main>
  );
}
