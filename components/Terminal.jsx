import React, { Component } from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import TerminalOutput from './TerminalOutput';


const StyledScreen = styled.div`
  background-color: #3F3F3F;
  color: #F0DFAF;
  margin: auto;
  // margin-top: 5%;
  // width: 60%;
  width: 1200px;
  height: 80vh;
  border: 0.3em double #F0DFAF;
  box-sizing: border-box;
  font-family: 'Cascadia Code', sans-serif;
  font-size: 18px;
  padding: 1em;
  white-space: pre-wrap;
  overflow: auto;
`;

const StyledInput = styled.input`
  color: #F0DFAF;
  border: none;
  outline: none;
  width: 47%; // 100% adds a horizontal scrollbar for some reason
              // has to also accomodate for the label
  margin: 0;
  background-color: transparent;
  // font-family: 'Source Sans Pro', sans-serif;
  font-family: 'Cascadia Code', sans-serif;
  font-size: 18px;
`;



/**
 * Output is saved in the state so that it can be added to
 * so the terminal doesn't overwrite itself
 */
export function Terminal() {

  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState(["greeting"]); // list of command strings, display greeting initially
  const inputRef= useRef();

  // defaultly sets the cursor to the text box
  useEffect(() => {
    inputRef.current.focus()
  },[]);

  return (
    <div>
      <StyledScreen onClick={e => {inputRef.current.focus()}}>

        {/* TerminalOutputs rendered here */}
        { output.map((command, idx) => <TerminalOutput command={command} idx={idx} key={idx}/>) }

        {/* Input line rendered here */}
        <label htmlFor="command">guest@cbmckeown.com $ </label>
        <StyledInput 
          id="command"
          ref={inputRef}
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={e => {
            if (e.key === "Enter") {
              output.push(input);
              setOutput(output);
              setInput("");
            }
          }}
        />
      </StyledScreen>
    </div>
  )
}