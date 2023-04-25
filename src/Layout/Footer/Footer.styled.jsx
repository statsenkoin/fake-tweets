import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #d1d1d1;
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
`;

export const Text = styled.a`
  padding-inline: 8px;
  font-size: 18px;
  color: #d1d1d1;
  text-decoration: none;

  &:hover {
    color: #ffff00;
  }
`;
