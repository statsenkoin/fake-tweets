import { FooterStyled, Text } from './Footer.styled';
import { AiOutlineCopyright } from 'react-icons/ai';

export function Footer() {
  return (
    <FooterStyled>
      <Text>Disigned by Ihor Statsenko</Text>
      <AiOutlineCopyright />
      <Text>GoIT 2023</Text>
    </FooterStyled>
  );
}
