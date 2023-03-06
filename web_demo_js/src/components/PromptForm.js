import styled from 'styled-components';
import React, { useState } from 'react';  

const PromptStyle = styled.form` 
        display: flex;
        flex-direction: column;
        padding: 10px 10px ; 
        margin: 10px 10px ; 
        border-radius: 30px;   
        width: 80%;
        border: 1px solid black;       
 `; 


function PromptForm(){
  const [prompt, setPrompt] = useState(''); 
  const handlePromptChange = (e) => {
    setPrompt(e.target.value); 
  }
  return(
    <PromptStyle>
      <form className="PromptForm">  
          <textarea value={prompt} onChange={handlePromptChange} placeholder='Enter_Your_Prompt_Here' />      
      </form> 
    </PromptStyle>
  )  
}  

export default PromptForm; 