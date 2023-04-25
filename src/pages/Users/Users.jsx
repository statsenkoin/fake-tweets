import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsers, updateUser } from 'services/usersApi';
import { localStorageService as storage } from 'services/localStorageService ';
import { BackLink, Filter, UsersList } from 'components';
import { Button } from 'components/Button/Button.styled';
import { PageWrapper, PageTab } from './Users.styled';

export default function Users() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(
    storage.load('followingUsers') ?? []
  );
  const [isBtnLoadMore, setIsBtnLoadMore] = useState(true);
  const [filter, setFilter] = useState('all');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

  const filterOption = value => setFilter(value);

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

  return (
    <PageWrapper>
      <PageTab>
        <BackLink to={backLinkHref}>Back Home</BackLink>
        <Filter filterOption={filterOption} />
      </PageTab>
      <UsersList
        filteredUserList={filteredUserList}
        followingUsers={followingUsers}
        handleFollowingButton={handleFollowingButton}
      />
      {isBtnLoadMore && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </PageWrapper>
  );
}
