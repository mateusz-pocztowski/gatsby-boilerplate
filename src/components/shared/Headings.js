import styled from 'styled-components';

export const HeadingOne = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.semiBold};
  line-height: 100%;
`;

export const HeadingTwo = styled.h2`
  font-size: ${({ theme }) => `calc(${theme.fontSize.xxl} - 2.5rem)`};
  font-weight: ${({ theme }) => theme.semiBold};
  text-align: ${({ align }) => align || 'center'};
  padding: ${({ nopadding }) => (nopadding ? '0' : '0 0 45px')};
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => `calc(${theme.fontSize.xxl} - 2rem)`};
  }
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => `calc(${theme.fontSize.xxl} - 1rem)`};
  }
  ${({ theme }) => theme.mq.xl} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const HeadingThree = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-weight: ${({ theme }) => theme.medium};
`;

export const HeadingFour = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.medium};
`;
