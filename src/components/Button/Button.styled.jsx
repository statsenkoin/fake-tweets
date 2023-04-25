import styled from 'styled-components';

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;
  background: #ebd8ff66;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-width: 1px;
  border-color: #ebd8ff66;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  &:hover {
    scale: 1.05;
  }
`;

export const FollowBtn = styled(Button)`
  ${props => {
    switch (props.$mode) {
      case 'active':
        return `
          background-color: #5cd3a8;
        `;
      default:
        return `
          background-color: #ebd8ff;
        `;
    }
  }}
`;
