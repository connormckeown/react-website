import React, { Component } from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import TerminalOutput from './TerminalOutput';


const StyledScreen = styled.div`
  background-color: #3F3F3F;
  color: #F0DFAF;
  margin: auto;
  height: 100vh;
  border: 0.4em double #F0DFAF;
  box-sizing: border-box;
  font-family: 'Cascadia Code', sans-serif;
  font-size: 16px;
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
  font-size: 16px;
`;

export const prompt = 
  <>
    <span style={{color: "orange"}}>guest</span>
    <span>@</span>
    <span style={{color: "lightgreen"}}>cbmckeown.com</span>
    <span>:$ </span>
  </>
; 

/**
 * Output is saved in the state so that it can be added to
 * so the terminal doesn't overwrite itself
 */
export function Terminal() {

  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState(["greeting"]); // list of command strings, display greeting initially
  const inputRef= useRef();
  const scrollRef = useRef();

  // defaultly sets the cursor to the text box
  useEffect(() => {
    inputRef.current.focus()
  },[]);

  // scrolls to the bottom of the terminal when output is updated
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [output]);

  return (
    <div>
      <StyledScreen onClick={e => {inputRef.current.focus()}}>

        {/* TerminalOutputs here */}
        { output.map((command, idx) => <TerminalOutput command={command} idx={idx} key={idx}/>) }

        {/* Input line here */}
        <label htmlFor="command">{prompt}</label>
        <StyledInput 
          id="command"
          ref={inputRef}
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            setOutput(output);
            if (e.key == "Enter") {
              // have to clear screen here, not in TerminalOutput
              if (input === "clear") {
                setOutput([]);
              } else {
                setOutput(arr => [...arr, input]);  // set new output state
              }
              setInput(""); // clear text box
            }
          }}
        />

        {/* dummy div for the scroll ref */}
        <div ref={scrollRef} />

      </StyledScreen>
    </div>
  )
}