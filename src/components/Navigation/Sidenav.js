/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import useOutsideClick from 'hooks/useOutsideClick';
import Links from 'components/Navigation/Links';
import Logo from 'components/shared/Logo';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.35);
  z-index: 110;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      & > ${Wrapper} {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }
    `}
`;

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 14;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  will-change: transform;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 2px 0 10px rgba(54, 54, 54, 0.2),
    -2px 0 10px rgba(54, 54, 54, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  transform: translateX(100vw);
  ${({ theme }) => theme.mq.s} {
    width: 400px;
    transform: translateX(400px);
  }
`;

const NavHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 10px 15px 20px;
  border-bottom: 2px solid
    ${({ theme }) => theme.lighten(0.3, theme.colors.orange)};
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  span {
    display: block;
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: ${({ theme }) => theme.light};
    transform: rotate(45deg);
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.gray100};
    }
  }
`;

const Sidenav = ({ isVisible, close }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, close);

  return (
    <Overlay isVisible={isVisible}>
      <Wrapper ref={wrapperRef}>
        <NavHeading>
          <Logo close={close} />
          <CloseBtn onClick={close}>
            <span>+</span>
          </CloseBtn>
        </NavHeading>
        <InnerWrapper>
          <Links close={close} />
        </InnerWrapper>
      </Wrapper>
    </Overlay>
  );
};

Sidenav.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Sidenav;
