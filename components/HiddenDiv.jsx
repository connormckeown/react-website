import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { StyledLink } from './TerminalOutput'

/**
 * Hovering the link will reveal the hidden div
 */
function HiddenDiv ({ linkText, hiddenText, link }) {

  const [style, setStyle] = useState({display: 'none'});

  return(  
    <>
      <StyledLink 
        href={link} 
        target="_blank"
        onMouseEnter={e => {
          setStyle({display: 'block'});
        }}
        onMouseLeave={e => {
          setStyle({display: 'none'})
        }}
      >
        {linkText}
      </StyledLink>
      <div style={style}>{"\n"}{hiddenText}</div>
    </>
  );
}

export default HiddenDiv;