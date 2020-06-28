import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'

export const InputForm = () => {
  const [uploadedBy, setUploadedBy] = useState('')
  const [fileName, setFileName] = useState('')
  const [description, setDescription] = useState('')
  const fileInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:8080/fileuploads', {
      method: 'POST',
      body: JSON.stringify({
        description,
        uploadedBy
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          console.log({ message: 'error' })
        } else {
          console.log(res.json)
          return res.json()
        }
      })
      .then(({ _id }) => {
        const formData = new FormData()
        formData.append('file', fileInput.current.files[0]);
        // formData.append('name', fileName);

        fetch(`http://localhost:8080/fileuploads/${_id}`, {
          method: 'POST',
          body: formData
        })
          .then((res) => res.json())
          .then(
            setDescription(''),
            setUploadedBy(''),
            setFileName('')
          )
          .catch((error) => console.log(error))
      })
  }

  return (
    <StyledDiv>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <ButtonLabel>
          + File input
          <input
            required
            type="file"
            ref={fileInput}
            style={{ display: 'none' }}
            placeholder="File"
            onChange={(event) => { setFileName(event.target.files[0].name) }} />
        </ButtonLabel>
        <FileName>{fileName}</FileName>

        <StyledLabel>
          Uploaded By:
          <StyledInput
            required
            type="text"
            onChange={(event) => setUploadedBy(event.target.value)}
            value={uploadedBy}
            placeholder="Name of uploader" />
        </StyledLabel>

        <StyledLabel>
          Description:
          <StyledInput
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            placeholder="What does the file contain?" />
        </StyledLabel>

        <StyledButton type="submit">
          Submit
        </StyledButton>
      </StyledForm>
    </StyledDiv>

  )
}

const StyledDiv = styled.div`
  display: flex;
`

const StyledForm = styled.form`
  flex-direction: column;
  width: 20%;
  position: absolute;
`

const ButtonLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 14px;
  background-color: #E77A5C;
  color: #F1F0EB;
  width: 120px;
  border: none;
  padding: 10px;
  border-radius: 3px;
  margin: 20px 0 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #d65f42;
  }
`

const FileName = styled.p`
  font-size: 12px;
  color: #F9B5A2;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #325e86;
  margin: 20px 0;
`

const StyledInput = styled.input`
  background: #F9B5A2;
  color:  #F1F0EB;
  border: none;
  padding: 7px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #F1F0EB;
    font-family: 'Montserrat', sans-serif;
  }
  :-ms-input-placeholder {
    color: #F1F0EB;
    font-family: 'Montserrat', sans-serif;
  }

  &:hover {
    opacity: .7;
  }

`

const StyledButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 900;
  background-color: #edb751;
  color: #F1F0EB;
  border: none;
  border-radius: 3px;
  width: 100px;
  margin: 20px 0;
  padding: 10px;

  &:hover {
    background-color: #cda88c;
  }
`
