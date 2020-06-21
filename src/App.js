import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'lib/Card'

const ThinnerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <div>
      <ThinnerCard 
        coverImage="https://www.fillmurray.com/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100" 
        title="Here is my card" 
        secondaryText="You know you love it!">
          Children of this card
        </ThinnerCard>

      <Card title="Look here!" secondaryText="Another card"/>

      <Card>
        <h1>Hello from the children!</h1>
      </Card>
    </div>
  )
}
