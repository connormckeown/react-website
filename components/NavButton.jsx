import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${props => props.color ? props.color : "white"};
  background: transparent;
  font-size: 18px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.color ? props.color : "white"};
  border-radius: 10px;
  //opacity: 0.5;
  float: right;
  transition: color 0.5s, background-color 0.5s;
  cursor: pointer;

  &:hover {
    color: #3F3F3F;
    background-color: ${props => props.color ? props.color : "white"};
  }

  &:active {
    transform: translateY(3px);
  }
`;

/**
 * When a button is clicked, that command is run in the terminal
 */
function handleClick() {
  
}


export function NavButton({ text, color }) {
  return (
    <StyledButton onClick={handleClick} color={color}>{text}</StyledButton>
  )
}

export default NavButton;