import React, { FC } from 'react'
import Card from '../components/Card';

const CardPage:FC = () => {
  return (
    <Card 
          width="300px" 
          height="200px" 
          title='Card TypeScript Example'
          backgroundColor="lightblue"
          onPositionChange={() => {
            console.log('Position changed');
          }}
          >
        
        <p>This is a simple card component.</p>
      </Card>
  )
}

export default CardPage