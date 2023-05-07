import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  fetchUsers,
  updateUser,
  PER_RAGE,
  fetchAllUsers,
} from 'services/usersApi';
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
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [maxPages, setMaxPages] = useState(1);
  const [maxDbPages, setMaxDbPages] = useState(1);

  let cashedUsers = useRef([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  /** Get localStorage */
  useEffect(
    () => storage.save('followingUsers', followingUsers),
    [followingUsers]
  );

  /** Init page */
  useEffect(() => {
    async function initPage() {
      try {
        const length = await fetchAllUsers();
        setMaxDbPages(calculateMaxPages(length));
        setMaxPages(calculateMaxPages(length));
        setIsLoadMoreBtnVisible(length ? true : false);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    initPage();
  }, []);

  /** Handle page, filter change */
  useEffect(() => {
    const getUsers = async () => {
      if (filter !== 'followings') {
        try {
          const newUsers = await fetchUsers(page);
          filterUsers(newUsers);
        } catch (error) {
          console.log('error :>> ', error);
        }
      }
    };
    getUsers();
    // eslint-disable-next-line
  }, [page, filter]);

  /** Set loadMore button visible*/
  useEffect(() => {
    setIsLoadMoreBtnVisible(page >= maxPages ? false : true);
    if (page > 1) {
      window.scrollBy(0, window.innerHeight / 2);
    }
  }, [maxPages, page]);

  /** Update maxPages */
  useEffect(() => {
    setMaxPages(
      filter === 'followings'
        ? calculateMaxPages(followingUsers.length)
        : maxDbPages
    );
  }, [filter, followingUsers.length, maxDbPages]);

  /** Set filter */
  const filterOption = value => {
    cashedUsers.current = [];
    setPage(1);
    setUsers([]);
    setFilter(value);
  };

  /** Filter fetched users */
  const filterUsers = newUsers => {
    if (filter === 'all') {
      setUsers(prev => [...prev, ...newUsers]);
    } else if (filter === 'follow') {
      const ids = followingUsers.map(({ id }) => id);
      const filteredUsers = newUsers.filter(({ id }) => !ids.includes(id));
      cashedUsers.current = [...cashedUsers.current, ...filteredUsers];

      /** If render list length < page*PER_PAGE -> add next page */
      const delta = cashedUsers.current.length % PER_RAGE;
      if (delta) {
        const temp = [...cashedUsers.current];
        temp.splice(-delta, delta);
        newUsers = temp;
      } else {
        newUsers = cashedUsers.current;
      }

      if (page === maxPages) newUsers = cashedUsers.current;
      if (
        cashedUsers.current.length - users.length < PER_RAGE &&
        page < maxPages
      ) {
        handleLoadMore();
      }

      setUsers(newUsers);
    }
  };

  /** filter users to render */
  const filteredUserList = () => {
    switch (filter) {
      case 'followings':
        return [...followingUsers].splice(0, page * PER_RAGE);
      case 'follow':
        return cashedUsers.current;
      default:
        return users;
    }
  };

  /** add/remove user to/from following/followUsers list */
  const handleFollowingButton = user => {
    const isFollowingUser = followingUsers.some(({ id }) => user.id === id);
    if (isFollowingUser) {
      user.followers -= 1;
      setFollowingUsers(followingUsers.filter(({ id }) => id !== user.id));
    } else {
      user.followers += 1;
      setFollowingUsers(prev => [...prev, user]);
    }
    if (filter === 'follow') updateFollowUsers(user);

    updateFollowers(user);
  };

  /**
   * Remove user from list on followingButton click
   * and add next page if need
   */
  const updateFollowUsers = user => {
    const index = users.findIndex(({ id }) => user.id === id);

    const oldCashedUsers = [...cashedUsers.current];
    cashedUsers.current.splice(index, 1);

    let newUsers = [];
    const delta = cashedUsers.current.length % PER_RAGE;
    const temp = [...cashedUsers.current];
    temp.splice(-delta, delta);
    if (
      (oldCashedUsers.length % PER_RAGE) -
        (cashedUsers.current.length % PER_RAGE) <
      0
    ) {
      filterUsers(newUsers);
    } else {
      newUsers = temp;
      if (page === maxPages) newUsers = cashedUsers.current;
      setUsers(newUsers);
    }
  };

  /** Update user data on server */
  const updateFollowers = async user => {
    try {
      await updateUser(user);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const calculateMaxPages = length => Math.ceil(length / PER_RAGE);

  const handleLoadMore = () => setPage(prev => prev + 1);

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
      {isLoadMoreBtnVisible && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </PageWrapper>
  );
}
