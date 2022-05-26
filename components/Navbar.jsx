import React from 'react'
import styled from 'styled-components'
import { NavButton } from './NavButton'

const StyledDiv = styled.div`
  margin: auto;
  margin-top: 1%;
  width: 1200px;
  height: 75px;
  box-sizing: border-box;
`;

export function Navbar() {
  return (
    <StyledDiv>
      <NavButton text="contact" color="#3F3F3F" />
      <NavButton text="social" color="#3F3F3F" />
      <NavButton text="projects" color="#3F3F3F" />
      <NavButton text="about" color="#3F3F3F" />
    </StyledDiv>
  );
}

export default Navbar;