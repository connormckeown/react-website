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
      <NavButton text="contact" color="#F0DFAF" />
      <NavButton text="social" color="#F0DFAF" />
      <NavButton text="projects" color="#F0DFAF" />
      <NavButton text="about" color="#F0DFAF" />
    </StyledDiv>
  );
}

export default Navbar;