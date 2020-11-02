import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from 'components/shared/Icon';
import Logo from 'components/shared/Logo';
import Content from 'components/shared/Content';
import menuIcon from 'assets/icons/menu.svg';
import Links from 'components/Navigation/Links';
import Sidenav from 'components/Navigation/Sidenav';
import useMedia from 'hooks/useMedia';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.navSize.mobile};
  z-index: 100;
  transform: ${({ navHidden, theme }) =>
    navHidden ? `translate3d(0, -${theme.navSize.mobile}, 0)` : 'none'};
  transition: transform ease-in-out 250ms;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.mq.lg} {
    height: ${({ theme }) => theme.navSize.desktop};
    transform: ${({ navHidden, theme }) =>
      navHidden ? `translate3d(0, -${theme.navSize.desktop}, 0)` : 'none'};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinksWrapper = styled.div`
  display: none;
  width: 100%;
  padding: 0 10px;
  ${({ theme }) => theme.mq.lg} {
    display: flex;
    justify-content: space-evenly;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  height: ${({ theme }) => theme.navSize.mobile};
  ${({ theme }) => theme.mq.s} {
    padding: 0 15px;
  }
  ${({ theme }) => theme.mq.lg} {
    height: ${({ theme }) => theme.navSize.desktop};
  }
`;

const MenuButton = styled.button`
  display: block;
  background: transparent;
  cursor: pointer;
  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;

const Navigation = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isSidenavVisible, setIsSidenavVisible] = useState(false);

  let prevScroll = 0;

  const handleScroll = e => {
    const window = e.currentTarget;

    if (prevScroll > window.scrollY) {
      setIsNavHidden(false);
    } else if (window.scrollY >= 100) {
      setIsNavHidden(true);
    }
    prevScroll = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', e => handleScroll(e));

    return () => {
      window.removeEventListener('scroll', e => handleScroll(e));
    };
  }, []);

  const hideNav = () => {
    if (window.scrollY >= 100) setIsNavHidden(true);
  };

  const closeSidenav = () => {
    setIsSidenavVisible(false);
    setTimeout(hideNav, 800);
    document.body.style.overflow = 'auto';
  };

  const openSidenav = () => {
    setIsSidenavVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const matchesLG = useMedia('lg');

  return (
    <>
      {!matchesLG && (
        <Sidenav isVisible={isSidenavVisible} close={closeSidenav} />
      )}
      <Wrapper navHidden={isNavHidden}>
        <Content>
          <InnerWrapper>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            {matchesLG && (
              <LinksWrapper>
                <Links close={() => setTimeout(hideNav, 800)} />
              </LinksWrapper>
            )}
            {!matchesLG && (
              <MenuButton onClick={openSidenav}>
                <Icon size={40} src={menuIcon} />
              </MenuButton>
            )}
          </InnerWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Navigation;
