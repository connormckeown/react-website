import React from 'react'
import styled from 'styled-components'
import { prompt } from './Terminal'
import HiddenDiv from './HiddenDiv'

// displays on connection (ES6 template literal)
const greeting = `
   ______                                __  ___     __ __                       
  / ____/___  ____  ____  ____  _____   /  |/  /____/ //_/__  ____ _      ______ 
 / /   / __ \\/ __ \\/ __ \\/ __ \\/ ___/  / /|_/ / ___/ ,< / _ \\/ __ \\ | /| / / __ \\
/ /___/ /_/ / / / / / / / /_/ / /     / /  / / /__/ /| /  __/ /_/ / |/ |/ / / / /
\\____/\\____/_/ /_/_/ /_/\\____/_/     /_/  /_/\\___/_/ |_\\___/\\____/|__/|__/_/ /_/ 
                                       
Type 'help' to see a list of available commands.

`;

const help = `

Available commands:

about
projects
social
contact
clear

`;

const about = `
I am a recent Computer Science graduate living in Metro Vancouver who is passionate about designing and building exciting products. My current interests include computer graphics, machine learning, game design, and front-end development with React but I'm always eager to explore and learn new fields.

I have experience writing in C/C++, Java, Python, JavaScript and am familiar with popular technologies used in large software projects such as Docker and Google Cloud Platform.

`;



const facialFeatureDesc = "Web app that highlights facial features of the person(s) in the uploaded image. Consists of a Python client that communicates with an Express server via a REST API to receive the uploaded image. The client calls a C++ program to do feature detection and sends the result back to the server. Builds with Docker.";
const sokobanSolverDesc = "Solver written in C++ for the Japanese puzzle game 'Sokoban' which returns an optimal solution (fewest moves). Uses IDA* search with a min-cost matching heuristic.";
const decafCompilerDesc = "Compiler for Decaf, a strongly typed C-like language. Built with lex, yacc, and LLVM.";
const rayTracerDesc = "Ray tracer written in C++ which uses the GLM library for math and OpenGL to render the image to a window. Uses the Phong illumination model.";

const projects =
  <>
    {"\n"}
    <p>Click to view source or hover for a description.</p>
    <HiddenDiv hiddenText={facialFeatureDesc} link={"https://github.com/connormckeown/Facial-Feature-Detector"} linkText={"Facial Feature Detector"} />{"\n"}
    <HiddenDiv hiddenText={sokobanSolverDesc} link={"https://github.com/connormckeown/Sokoban_Solver"} linkText={"Sokoban Solver"} />{"\n"}
    <HiddenDiv hiddenText={decafCompilerDesc} link={"https://github.com/connormckeown/Decaf-Compiler"} linkText={"Decaf Compiler"} />{"\n"}
    <HiddenDiv hiddenText={rayTracerDesc} link={"https://github.com/connormckeown/RayTracer"} linkText={"Ray Tracer"} />{"\n"}
    {"\n"}
  </>
;

// text-decoration: "none";
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
          {prompt}{command}
          {help}
        </div>
      );

    case "about":
      return (
        <div>
          {prompt}{command}{"\n"}
          {about}
        </div>
      );

    case "projects":
      return (
        <>
          {prompt}{command}
          {projects}
        </>
      );

    case 'greeting':
      return (
        <div>
          {idx != 0 &&
            <div>
              {prompt}{command}{"\n"}
            </div>
          }   
          {greeting}
        </div>
      );

    case "":
      return (
        <div>
          {prompt}{"\n"}
        </div>
      );

    default:
      return (
        <div >
          {prompt}{command} {"\n"}Invalid command
        </div>
      );
  }
};

// Memoize output already rendered so it doesnt re-render ?
// export default React.memo(TerminalOutput);
export default TerminalOutput;