import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: ${({color}) => (color ? color : 'var(--color-white)')};
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : 'none')};
  border: none;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-mainDark);
    color: var(--color-white);
  }
`;

const Button = ({ children, disabled, ...rest }) => {
  return (
    <StyledButton 
      disabled={disabled} 
      backgroundColor={rest.backgroundColor}
      color={rest.color}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;