import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  display: block;
  padding: 16px;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  box-shadow: 0 1px 30px -5px rgba(0, 0, 0, 0.2);
  ${({ submit }) =>
    submit &&
    css`
      position: relative;
      height: 50px;
      &:before {
        content: '';
        position: absolute;
        top: 27%;
        left: 45%;
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
