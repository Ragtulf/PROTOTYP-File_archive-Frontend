import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Content } from './components/content'
import { InputForm } from './components/inputForm'

export const App = () => {
  const [showInputForm, setShowInputForm] = useState(false)

  // The input form only showes if you push a button. Then that button disappears and the input form mounts. 
  const handleClick = () => {
    setShowInputForm(!showInputForm)
  }

  return (
    <div>
      <Heading>File Archive!</Heading>
      {!showInputForm && <StyledButton
        type="button"
        onClick={() => handleClick()}>
        Upload file
      </StyledButton>}
      {showInputForm && <InputForm />}
      <Content />
    </div>
  )
}

const Heading = styled.h1`
  font-size: 100px;
  color: #E77A5C;
  margin: 20px 0 80px 0 ;
`

const StyledButton = styled.button`
  width: 150px;
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  background-color: #E77A5C;
  color: #F1F0EB;
  border: none;
  padding: 10px;
  border-radius: 3px;
  margin: 30px 0;
  cursor: pointer;

  &:hover {
    background-color: #d65f42;
  }
`
