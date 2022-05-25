import React, { Component } from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';


const Screen = styled.div`
  background-color: #3F3F3F;
  color: #F0DFAF;
  margin: auto;
  margin-top: 5%;
  width: 90%;
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

// displays on connection (ES6 template literal)
const greeting = `
   ______                                __  ___     __ __                       
  / ____/___  ____  ____  ____  _____   /  |/  /____/ //_/__  ____ _      ______ 
 / /   / __ \\/ __ \\/ __ \\/ __ \\/ ___/  / /|_/ / ___/ ,< / _ \\/ __ \\ | /| / / __ \\
/ /___/ /_/ / / / / / / / /_/ / /     / /  / / /__/ /| /  __/ /_/ / |/ |/ / / / /
\\____/\\____/_/ /_/_/ /_/\\____/_/     /_/  /_/\\___/_/ |_\\___/\\____/|__/|__/_/ /_/ 
                                       
Type 'help' to see a list of available commands.

`;



/**
 * Output is saved in the state so that it can be added to
 * so the terminal doesn't overwrite itself
 */
export function Terminal() {

  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState(greeting); // display greeting initially
  const inputRef= useRef();

  // defaultly sets the cursor to the text box
  useEffect(() => {
    inputRef.current.focus()
  },[]);

  return (
    <div>
      <Screen onClick={e => {inputRef.current.focus()}}>
        {output}
        <label htmlFor="command">guest@cbmckeown.com $ </label>
        <StyledInput 
          id="command"
          ref={inputRef}
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={e => {
            if (e.key === "Enter") {
              let newOutput = "";
              newOutput = output  + "guest@cbmckeown.com $ " + input + "\n";

              switch (input) {
                case "": 
                  break;

                case "help":
                  newOutput += "this is the help command\n";
                  break;
                
                case "clear":
                  newOutput = "";
                  break;
                  
                default:
                  newOutput += "Invalid command\n";
                  break;
              }

              setOutput(newOutput);
              setInput("");
            }
          }}
        />
      </Screen>
    </div>
  )
}