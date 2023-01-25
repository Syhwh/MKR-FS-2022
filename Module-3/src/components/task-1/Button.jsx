import React from 'react';
import styled from 'styled-components';

export const Button = ({ onClick, text }) => {
  return (
    // <button onClick={onClick}>{text}</button>
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover {
    color: red; 
  };
`
