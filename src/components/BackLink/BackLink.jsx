import { FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

export function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <FaArrowLeft />
      {children}
    </StyledLink>
  );
}

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};
