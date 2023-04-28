import styled from 'styled-components';

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;
  padding: 6px 30px 6px 15px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-width: 1px;
  border-color: var(--color-bg-light-btn);

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
`;

export const FollowBtn = styled(Button)`
  ${props => {
    switch (props.$mode) {
      case 'active':
        return `
          border-color: var(--color-bg-light-btn-active);
          background-color: var(--color-bg-light-btn-active);
        `;
      default:
        return `
          background-color: var(--color-bg-light-btn);
        `;
    }
  }}
`;
