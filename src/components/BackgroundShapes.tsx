
import { useEffect, useState } from 'react';

const BackgroundShapes = () => {
  const [shapes, setShapes] = useState<Array<{ id: number; left: string; top: string; size: string; animationDelay: string; blur: string; color: string; type: string }>>([]);

  useEffect(() => {
    const shapeData = Array.from({ length: 15 }, (_, i) => {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const size = `${Math.random() * 100 + 50}px`;
      const animationDelay = `${Math.random() * 10}s`;
      const blur = `${Math.random() * 20 + 5}px`;
      
      // Shape type (circle, triangle, square)
      const types = ['circle', 'square'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      // Random colors from our palette
      const colors = [
        'rgba(155, 135, 245, 0.15)', // primary-purple
        'rgba(126, 105, 171, 0.15)', // secondary-purple
        'rgba(110, 89, 165, 0.15)',  // tertiary-purple
        'rgba(14, 165, 233, 0.15)',  // ocean-blue
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
        type
      };
    });
    
    setShapes(shapeData);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute animate-float-subtle opacity-60`}
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
            filter: `blur(${shape.blur})`,
            backgroundColor: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '10%' : '0',
            animationDelay: shape.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;
