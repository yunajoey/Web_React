import styled from "styled-components";
import React, { useState, useCallBack } from "react";

const PromptStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin: 10px 10px;
  border-radius: 30px;
  width: 80%;
  border: 1px solid black;
`;

function PromptForm({ onChange }) {
  const [prompt, setPrompt] = useState("");
  const handlePromptChange = useCallBack((e) => {
    const result = e.target.value;
    setPrompt(result);
  }, []);

  const handleClick = () => {
    if (prompt === "") {
      return;
    }
    onChange(prompt);
    setPrompt(""); // 추가 후 input 을 비워주기 위해 state 를 초기화 합니다.
  };

  return (
    <PromptStyle>
      <form className="PromptForm">
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter_Your_Prompt_Here"
        />
      </form>
      <button onClick={handleClick}>추가</button>
    </PromptStyle>
  );
}

export default PromptForm;
