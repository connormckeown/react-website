import React from 'react'
import styled from 'styled-components'

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
 * This component is what gets placed above the Terminal components input line
 * 
 * Returns different output depending on the prop command
 */
function TerminalOutput ({ command, idx }) {

  
  switch (command) {
    case "help":
      return (
        <div>
          guest@cbmckeown.com $ {command} {"\n"}this is the help command
        </div>
      );

    case "":
      return (
        <div>
          guest@cbmckeown.com $ {"\n"}
        </div>
      );

    case 'greeting':
      return (
        <div>
          {idx != 0 &&
            <div>
              guest@cbmckeown.com $ {command} {"\n"}
            </div>
          }   
          {greeting}
        </div>
      );

    default:
      return (
        <div >
          guest@cbmckeown.com $ {command} {"\n"}Invalid command
        </div>
      );
  }
};

// Memoize output already rendered so it doesnt re-render ?
// export default React.memo(TerminalOutput);
export default TerminalOutput;