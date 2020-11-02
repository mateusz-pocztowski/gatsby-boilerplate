import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/shared/Icon';
import logoIcon from 'assets/icons/github.svg';

const Wrapper = styled(Link)`
  display: block;
  width: 160px;
  @media (min-width: 1600px) {
    width: 220px;
  }
`;

const Logo = ({ close }) => (
  <Wrapper to="/" onClick={() => close !== null && close()}>
    <Icon src={logoIcon} alt="logo" full />
  </Wrapper>
);

Logo.propTypes = {
  close: PropTypes.func,
};

Logo.defaultProps = {
  close: null,
};

export default Logo;
