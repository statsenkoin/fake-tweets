import {
  Card,
  BgImage,
  Logo,
  Divider,
  AvatarFrame,
  AvatarBg,
  Meta,
  FollowBtn,
} from './UserCard.styled';

import bgImage from '../../assets/images/bgPicture.png';
import logo from '../../assets/images/logoGoIT.png';

export function UserCard({ user }) {
  const { tweets, followers, avatar, user: userName } = user;
  return (
    <Card>
      <BgImage src={bgImage} alt="background_picture" />
      <Logo src={logo} alt="GoIT logo" />
      <Divider />
      <AvatarFrame>
        <AvatarBg>
          <img
            width="62px"
            height="62px"
            // src={require('../../assets/images/Hansel.png')}
            src={avatar}
            alt={userName}
          />
        </AvatarBg>
      </AvatarFrame>
      <Meta>{tweets.toLocaleString('en-US')} tweets</Meta>
      <Meta>{followers.toLocaleString('en-US')} followers</Meta>
      <FollowBtn type="button">follow</FollowBtn>
    </Card>
  );
}
