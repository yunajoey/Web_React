import React, { useState } from 'react';  
import './PromptForm.module.css'
function PromptForm(){
  const [prompt, setPrompt] = useState(''); 
  const handlePromptChange = (e) => {
    setPrompt(e.target.value); 
  }
  return(
    <form className="PromptForm">  
        <textarea value={prompt} onChange={handlePromptChange} placeholder='EnterYourPromptHere' />
        <button type="submit">확인</button>
    </form> 
  )  
}  

export default PromptForm; 