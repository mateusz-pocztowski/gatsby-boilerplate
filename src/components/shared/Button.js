import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Button = styled.button`
  display: block;
  padding: 16px 30px;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  box-shadow: 0 1px 30px -5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.dark};
    }
  }
  ${({ submit }) =>
    submit &&
    css`
      position: relative;
      height: 50px;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border: 3px solid ${({ theme }) => theme.white};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-radius: 50%;
        opacity: ${({ disabled }) => (disabled ? '1' : '0')};
        animation: ${spin} 1s ease infinite;
      }
    `}
`;

export default Button;
