import { useState } from 'react';
import { FollowBtn } from 'components/Button/Button.styled';
import {
  Card,
  BgImage,
  Logo,
  Divider,
  AvatarFrame,
  AvatarBg,
  Avatar,
  Meta,
} from './UserCard.styled';

import bgImage from '../../assets/images/bgPicture.png';
import logo from '../../assets/images/logoGoIT.png';

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
      <BgImage src={bgImage} alt="background_picture" />
      <Logo src={logo} alt="GoIT logo" />
      <Divider />
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
    </Card>
  );
}
