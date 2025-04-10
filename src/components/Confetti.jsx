import React from 'react';

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 10 + 5;
        const left = `${Math.random() * 100}%`;
        const animationDuration = `${Math.random() * 3 + 2}s`;
        const backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        return (
          <div
            key={i}
            className="absolute top-0 rounded-full"
            style={{
              left,
              width: size + 'px',
              height: size + 'px',
              backgroundColor,
              animation: `confetti ${animationDuration} ease-in forwards`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Confetti;