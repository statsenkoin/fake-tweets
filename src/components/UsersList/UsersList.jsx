import { List } from './UsersList.styled';
import { UserCard } from 'components';

export function UsersList({
  filteredUserList,
  followingUsers,
  handleFollowingButton,
}) {
  return (
    <List>
      {filteredUserList().map(user => (
        <li key={user.id}>
          <UserCard
            user={user}
            followingUsers={followingUsers}
            handleFollowingButton={handleFollowingButton}
          ></UserCard>
        </li>
      ))}
    </List>
  );
}
