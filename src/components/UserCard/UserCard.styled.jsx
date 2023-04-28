import styled from 'styled-components';

import bgImage from '../../assets/images/bgPicture.png';
import logo from '../../assets/images/logoGoIT.png';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  text-align: center;
  background: var(--linear-gradient);
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BgImage = styled.div`
  width: 380px;
  height: 210px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Logo = styled.div`
  position: absolute;
  width: 76px;
  height: 22px;
  top: 20px;
  left: 20px;
  background-image: url(${logo});
`;

export const UserData = styled.div`
  padding-top: 62px;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 8px;
    top: -4px;
    background: var(--color-bg-light-btn);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.06), inset 0px -2px 3px #ae7be3,
      inset 0px 3px 3px #fbf8ff;
  }
`;

export const AvatarFrame = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -40px;
  left: 150px;
  width: 80px;
  height: 80px;
  background: var(--color-bg-light-btn);
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;

export const AvatarBg = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: var(--color-bg-dark-main);
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Meta = styled.p`
  margin-bottom: 16px;
  text-transform: uppercase;
  color: var(--color-text-light);
`;
