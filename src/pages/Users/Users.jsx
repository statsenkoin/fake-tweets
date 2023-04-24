import { useLocation } from 'react-router-dom';
import { PageWrapper, PageHead, UsersList } from './Users.styled';
import { BackLink, UserCard } from 'components';
import { useEffect, useState } from 'react';
import { fetchUsers, updateUser } from 'services/usersApi';
import { localStorageService as storage } from 'services/localStorageService ';

import { Button } from 'components/Button/Button.styled';

export default function Users() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // ==================================================
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(
    storage.load('followingUsers') ?? []
  );
  const [isBtnLoadMore, setIsBtnLoadMore] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(
    () => storage.save('followingUsers', followingUsers),
    [followingUsers]
  );

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

  // useEffect(() => setIsBtnLoadMore(filter === 'all'), [filter]);

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

  const filterOption = e => setFilter(e.target.value);

  const filteredUserList = () => {
    const ids = followingUsers.map(({ id }) => id);
    switch (filter) {
      case 'follow':
        return users.filter(({ id }) => !ids.includes(id));
      case 'followings':
        return users.filter(({ id }) => ids.includes(id));
      default:
        return users;
    }
  };

  // ==================================================
  return (
    <main>
      <PageWrapper>
        <PageHead>
          <BackLink to={backLinkHref}>Back Home</BackLink>
          <label>
            Filter by:
            <select name="followers" onChange={filterOption} defaultValue="all">
              <option value="all">All</option>
              <option value="follow">Follow</option>
              <option value="followings">Followings</option>
            </select>
          </label>
        </PageHead>
        <UsersList>
          {filteredUserList().map(user => (
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
