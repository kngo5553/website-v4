import React, { useState } from 'react';
import { CGContainer, CGConvo } from "./Styled";
import StyledTextArea from "./Styled/StyledTextArea";

const ChatGPT = ({ data }) => {

  return (
    <CGContainer>
      <CGConvo></CGConvo>
      <StyledTextArea maxRows={4} sx={{ m: '1rem', width: 'calc(100% - 2rem)' }} />
    </CGContainer>
  );
};

export default React.memo(ChatGPT);