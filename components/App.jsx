import React from 'react'
import styled from 'styled-components'
import { Terminal } from './Terminal';
import { Navbar } from './Navbar'

const ColorScheme = {
  primary: "#3F3F3F",
  secondary: "#F0DFAF",
  tertiary: "#EFEFEF",
};

const StyledContainer = styled.div`
  background-image: url(${'/bg-vancouver.jpg'});
  background-position: center;
  background-size: cover;
  position: fixed;
  inset: 0 0 0 0;
`;

export class App extends React.Component {
  render() {
    return (
      <div>
        <StyledContainer>
          <Navbar />
          <Terminal />
        </StyledContainer>
      </div>
    )
  }
}

export default App