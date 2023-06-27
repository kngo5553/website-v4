import React, { useState } from 'react';
import { CGContainer, CGConvo, CGMessage } from "./Styled";
import StyledTextArea from "./Styled/StyledTextArea";

const ChatGPT = ({ data }) => {

  return (
    <CGContainer>
      <CGConvo>
        <CGMessage user={true}>&gt; Who are you?</CGMessage>
        <CGMessage>Beep boop, I am an unfinished implementation of ChatGPT</CGMessage>
        <CGMessage user={true}>&gt; Can you send back a real response?</CGMessage>
        <CGMessage>Pay me first!</CGMessage>
        <CGMessage user={true}>&gt; NO!!! Anyways, cats or dogs?</CGMessage>
        <CGMessage>
          As an AI, I don't have personal preferences. The choice between cats and dogs is subjective and depends on individual preferences and lifestyle. Both cats and dogs can make wonderful pets, but they have different characteristics.
          <br /><br />
          Cats are generally more independent and require less attention and maintenance. They are known for their grace, agility, and ability to entertain themselves. Cats are often more low-maintenance and can be left alone for longer periods of time. They are also generally cleaner and easier to house-train.
          <br /><br />
          Dogs, on the other hand, are often more social and require more attention and care. They are loyal, trainable, and often highly energetic. Dogs generally require daily exercise, regular grooming, and more interaction with their owners. They thrive on companionship and are known for their loyalty and protective nature.
          <br /><br />
          Ultimately, the choice between cats and dogs depends on your lifestyle, living situation, and personal preferences. It's important to consider factors such as the amount of time and effort you can dedicate to a pet, your living arrangements, and any specific needs or allergies you may have.
        </CGMessage>
        <CGMessage user={true}>&gt; When will you take over my job?</CGMessage>
        <CGMessage>As an AI language model, I don't have the capability to take over human jobs. My purpose is to assist and provide information to the best of my abilities. 
          While AI technology has advanced in various fields, there are still many tasks and roles that require human expertise, creativity, and empathy. 
          AI is designed to complement human abilities and assist in areas such as data analysis, customer support, and automation, but it is not intended to replace humans in their jobs entirely. 
          The future of work is likely to involve a collaboration between humans and AI, where they work together to enhance productivity and efficiency.
          <br /><br />
          JOKES, it is already happening 🤖
        </CGMessage>
      </CGConvo>
      <StyledTextArea maxRows={4} sx={{ m: '1rem', width: 'calc(100% - 2rem)' }} />
    </CGContainer>
  );
};

export default React.memo(ChatGPT);