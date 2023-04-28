import { useState } from 'react';
import { FollowBtn } from 'components/Button/Button.styled';
import {
  Card,
  BgImage,
  Logo,
  UserData,
  AvatarFrame,
  AvatarBg,
  Avatar,
  Meta,
} from './UserCard.styled';

export function UserCard({ user, followingUsers, handleFollowingButton }) {
  const isFollowingUser = followingUsers.some(({ id }) => user.id === id);
  const [btnActive, setBtnActive] = useState(isFollowingUser);

  const { tweets, followers, avatar, user: userName } = user;

  const handleBtnActive = () => {
    setBtnActive(!btnActive);
    handleFollowingButton(user);
  };

  return (
    <Card>
      <Logo />
      <BgImage />
      <UserData>
        <AvatarFrame>
          <AvatarBg>
            <Avatar src={avatar} alt={userName} />
          </AvatarBg>
        </AvatarFrame>
        <Meta>{tweets.toLocaleString('en-US')} tweets</Meta>
        <Meta>{followers.toLocaleString('en-US')} followers</Meta>
        <FollowBtn
          type="button"
          $mode={btnActive ? 'active' : ''}
          onClick={handleBtnActive}
        >
          {btnActive ? 'following' : 'follow'}
        </FollowBtn>
      </UserData>
    </Card>
  );
}
