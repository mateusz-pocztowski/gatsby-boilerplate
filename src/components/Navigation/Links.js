import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scrollToSection from 'utils/scrollToSection';

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.mq.lg} {
    flex-direction: row;
  }
`;

const LinkItem = styled.li`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin: 20px 0;
  cursor: pointer;
  transition: 0.3s;
  @media (hover: hover) {
    &:hover {
      &:after {
        transform: translateX(-50%) scaleX(1);
        ${({ theme }) => theme.mq.lg} {
          transform: scaleX(1);
        }
      }
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 80px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.dark};
    transition: 0.3s;
    transform: translateX(-50%) scaleX(0);
  }
  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize.m};
    &:after {
      left: 0;
      transform-origin: 0 50%;
      transform: scaleX(0);
      width: 50px;
    }
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Links = ({ close }) => {
  return (
    <>
      <List>
        <LinkItem onClick={close}>
          <StyledLink onClick={() => scrollToSection('#link')}>
            Section 1
          </StyledLink>
        </LinkItem>
        <LinkItem onClick={close}>
          <StyledLink onClick={() => scrollToSection('#link')}>
            Section 2
          </StyledLink>
        </LinkItem>
        <LinkItem onClick={close}>
          <StyledLink onClick={() => scrollToSection('#link')}>
            Section 3
          </StyledLink>
        </LinkItem>
        <LinkItem onClick={close}>
          <StyledLink onClick={() => scrollToSection('#link')}>
            Section 4
          </StyledLink>
        </LinkItem>
        <LinkItem onClick={close}>
          <StyledLink onClick={() => scrollToSection('#link')}>
            Section 5
          </StyledLink>
        </LinkItem>
      </List>
    </>
  );
};

Links.propTypes = {
  close: PropTypes.func,
};

Links.defaultProps = {
  close: () => null,
};

export default Links;
