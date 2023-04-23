import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  text-align: center;
  background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BgImage = styled.img`
  margin: 28px 36px 14px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Divider = styled.div`
  width: 380px;
  height: 8px;
  margin-bottom: 62px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.06), inset 0px -2px 3px #ae7be3,
    inset 0px 3px 3px #fbf8ff;
`;
export const AvatarFrame = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;

export const AvatarBg = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5736a3;
`;

export const Meta = styled.p`
  margin-bottom: 16px;
  /* font-family: 'Montserrat'; */
  /* font-style: normal; */
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  /* font-style: normal; */
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  &:hover,
  &.active {
    background: #5cd3a8;
  }
`;
