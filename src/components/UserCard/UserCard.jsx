import {
  Card,
  BgImage,
  Logo,
  Divider,
  AvatarFrame,
  AvatarBg,
  Meta,
  // FollowBtn,
} from './UserCard.styled';
import { FollowBtn } from 'components/Button/Button.styled';

import bgImage from '../../assets/images/bgPicture.png';
import logo from '../../assets/images/logoGoIT.png';
import { useState } from 'react';

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
          <img width="62px" height="62px" src={avatar} alt={userName} />
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
