import React from 'react'
import styled from 'styled-components'
import { Terminal } from './Terminal';

const ColorScheme = {
  primary: "#3F3F3F",
  secondary: "#F0DFAF",
  tertiary: "#EFEFEF",
};

const Container = styled.div`
  // background-color: ${ColorScheme.primary};
  background-color: black;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export class App extends React.Component {
  render() {
    return (
      <Container>
        <Terminal />
      </Container>
    )
  }
}

export default App
