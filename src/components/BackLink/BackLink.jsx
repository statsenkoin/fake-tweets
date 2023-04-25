import { FaArrowLeft } from 'react-icons/fa';
import { StyledLink } from './BackLink.styled';

export function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <FaArrowLeft />
      {children}
    </StyledLink>
  );
}
