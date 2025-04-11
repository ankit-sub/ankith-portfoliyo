
import { useEffect, useState } from 'react';

const BackgroundShapes = () => {
  const [shapes, setShapes] = useState<Array<{ id: number; left: string; top: string; size: string; animationDelay: string; blur: string; color: string; type: string; duration: string }>>([]);

  useEffect(() => {
    const shapeData = Array.from({ length: 20 }, (_, i) => {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const size = `${Math.random() * 150 + 50}px`;
      const animationDelay = `${Math.random() * 10}s`;
      const blur = `${Math.random() * 30 + 5}px`;
      const duration = `${Math.random() * 15 + 10}s`;
      
      // Shape type (circle, triangle, square)
      const types = ['circle', 'square', 'square-rotated'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      // Random colors from our palette with gradient
      const colors = [
        'linear-gradient(135deg, rgba(155, 135, 245, 0.2), rgba(14, 165, 233, 0.1))', // primary-purple to ocean-blue
        'linear-gradient(135deg, rgba(126, 105, 171, 0.2), rgba(155, 135, 245, 0.1))', // secondary-purple to primary-purple
        'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(155, 135, 245, 0.1))',  // ocean-blue to primary-purple
        'linear-gradient(135deg, rgba(110, 89, 165, 0.2), rgba(14, 165, 233, 0.1))',  // tertiary-purple to ocean-blue
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        id: i,
        left,
        top,
        size,
        animationDelay,
        blur,
        color,
        type,
        duration
      };
    });
    
    setShapes(shapeData);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.type === 'square-rotated' ? 'rotate-45' : ''}`}
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
            filter: `blur(${shape.blur})`,
            background: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '30%' : '0',
            animationDelay: shape.animationDelay,
            animation: `float-subtle ${shape.duration} ease-in-out infinite`,
            opacity: '0.6',
            zIndex: '-10',
            boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;
