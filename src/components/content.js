import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

export const Content = () => {
  const [files, setFiles] = useState(null)

  const handleDeleteAndRefresh = (_id) => {
    fetch(`http://localhost:8080/fileuploads/${_id}`, {
      method: 'DELETE'
    })
      .then(
        window.location.reload(false)
      )
  }

  useEffect(() => {
    fetch('http://localhost:8080/fileuploads')
      .then((res) => res.json())
      .then((json) => {
        setFiles(json)
      })
  }, [])

  return (
    <div>
      {files && files.map((item) => (
        <FileContainer key={item._id}>
          <StyledA href={item.fileUrl} target="_blank" rel="noopener noreferrer">{item.fileId}</StyledA>
          <Description>{item.description}</Description>
          <UploadedBy>{item.uploadedBy}</UploadedBy>
          <DeleteButton type="button" onClick={() => handleDeleteAndRefresh(item._id)}><img src="/x_01.svg" alt="delete button" /></DeleteButton>
        </FileContainer>
      ))}
    </div>
  )
}

const FileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 30%;
  margin-left: 15px;
  color: #325E86;
  cursor: pointer;

  &:visited {
    color: #5E9596;
  }

  &:hover {
    color: #EDB751;
  }
`

const Description = styled.p`
  color: #325E86;
  width: 15%;
`

const UploadedBy = styled.p`
  color: #325E86;
  width: 15%;
  font-weight: 800;
`

const DeleteButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 15px;
  background-color: #edb751;
  color: #fff;
  border-radius: 3px;
  border: none;
  align-self: center;
  padding: 5px 10px;

  &:hover {
    background-color: #cda88c;
  }
`