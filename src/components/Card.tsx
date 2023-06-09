import React from 'react';

interface CardProps {
  width: string;
  height: string;
  title: string;
  backgroundColor: string;
  children: React.ReactNode;
  onPositionChange: () => void
}

const Card: React.FC<CardProps> = ({ width, height, title, backgroundColor, onPositionChange, children }) => {

const[position, setPosition] = React.useState<'left'| 'right' >('left')

const togglePosition = () => {
    setPosition(position === 'left' ? 'right' : 'left');
    onPositionChange();
  };

  const cardStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    padding: '1rem',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginLeft: position === 'right' ? 'auto' : '0',
    marginRight: position === 'left' ? 'auto' : '0',
  };

  return <div className='card' style={cardStyle}>
    <h1>{title}</h1>
     <button onClick={togglePosition}>Toggle Position</button>
    {children}</div>;
};

export default Card;
