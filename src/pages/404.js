import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from 'components/shared/SEO';
import Section from 'components/shared/Section';
import Button from 'components/shared/Button';
import { HeadingTwo } from 'components/shared/Headings';

const StyledSection = styled(Section)`
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding: 0 !important;
  background: linear-gradient(
    to left top,
    rgba(255, 252, 245, 0.5),
    rgba(227, 227, 227, 0.7)
  );
`;

const OuterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  min-height: 500px;
  width: 92%;
  height: 95%;
  ${({ theme }) => theme.mq.s} {
    padding: 50px 65px;
    width: 90%;
    height: 90%;
  }
  ${({ theme }) => theme.mq.xl} {
    width: auto;
    height: auto;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.dark};
    top: 12px;
    left: 12px;
    z-index: -1;
  }
`;

const Subtitle = styled.p`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.medium};
  ${({ theme }) => theme.mq.xxl} {
    font-size: 3rem;
  }
`;

const Title = styled(HeadingTwo)`
  margin: 10px 0 35px;
`;

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Nie znaleziono strony" />
      <main>
        <StyledSection>
          <OuterWrapper>
            <Wrapper>
              <Subtitle>404</Subtitle>
              <Title as="h1" nopadding>
                Nie znaleziono strony
              </Title>
              <Button as={Link} to="/">
                Strona główna
              </Button>
            </Wrapper>
          </OuterWrapper>
        </StyledSection>
      </main>
    </>
  );
};

export default NotFoundPage;
