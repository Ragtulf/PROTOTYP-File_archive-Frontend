import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
-webkit-box-shadow: 10px 10px 7px -7px rgba(194,194,194,1);
-moz-box-shadow: 10px 10px 7px -7px rgba(194,194,194,1);
box-shadow: 10px 10px 7px -7px rgba(194,194,194,1);
border-radius: 6px;
background: #fff;
margin-bottom: 20px;
`
const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`
const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b; 
  font-weight: 100;
`
const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${((props) => props.url)});
  background-size: cover;
  margin-right: 10px;
`
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`
const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`
const Content = styled.div`
  padding: 20px;
`

const ChildrenContent = styled.div`
  background: #fff2f2;
  padding: 10px;
`


export const Card = ({ title, secondaryText, thumbnailUrl, coverImage, className, children }) => {
  return (
    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
          <div>
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </div>
        </TitleBar>
        {children && <ChildrenContent>{children}</ChildrenContent>}
      </Content>
    </Container>
  )
}