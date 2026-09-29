import React from 'react';
import styled, { keyframes } from 'styled-components';

const Milan3DText = () => {
  return (
    <NameContainer className='w-fit'>
      {['M', 'i', 'l', 'a', 'n'].map((letter, index) => (
        <Letter3D
          key={index}
          style={{
            '--delay': `${index * 0.2}s`,
            '--hue': index * 60,
          }}
        >
          {letter}
        </Letter3D>
      ))}
    </NameContainer>
  );
};

// Floating animation
const floatAnimation = keyframes`
  0%, 100% { transform: rotateY(0) translateY(0) translateZ(0); }
  50% { transform: rotateY(15deg) translateY(-5px) translateZ(10px); }
`;

const NameContainer = styled.div`
  display: flex;
  perspective: 500px;
  transform-style: preserve-3d;
  will-change: transform;
  gap: 0.2rem;
`;

const Letter3D = styled.div`
  font-family: 'Arial Black', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: hsl(var(--hue), 100%, 65%);
  transform: rotateY(0) translateZ(0);
  animation: ${floatAnimation} 4s ease-in-out infinite;
  animation-delay: var(--delay);
  text-shadow: 
    0 1px 3px hsla(var(--hue), 100%, 50%, 0.3),
    0 0 5px hsla(var(--hue), 100%, 50%, 0.1);
  will-change: transform;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

export default React.memo(Milan3DText);