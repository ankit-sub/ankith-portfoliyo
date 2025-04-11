
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  sensitivity?: number;
  maxTilt?: number;
  resetTime?: number;
  delay?: number;
  animationType?: 'float' | 'float-subtle' | 'pulse' | 'scale-pulse' | 'none';
}

const FloatingElement = ({
  children,
  className,
  sensitivity = 40,
  maxTilt = 15,
  resetTime = 500,
  delay = 0,
  animationType = 'float-subtle'
}: FloatingElementProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: `transform ${resetTime}ms ease-out`,
    opacity: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setStyle(prev => ({ ...prev, opacity: 1 }));
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateY = ((e.clientX - centerX) / sensitivity) * -1;
      const rotateX = (e.clientY - centerY) / sensitivity;
      
      // Limit tilt
      const clampedRotateX = Math.max(-maxTilt, Math.min(maxTilt, rotateX));
      const clampedRotateY = Math.max(-maxTilt, Math.min(maxTilt, rotateY));
      
      setStyle({
        transform: `perspective(1000px) rotateX(${clampedRotateX}deg) rotateY(${clampedRotateY}deg) scale(1.05)`,
        transition: 'transform 100ms cubic-bezier(0.17, 0.67, 0.83, 0.67)',
        opacity: 1
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: `transform ${resetTime}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        opacity: 1
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateY = ((touch.clientX - centerX) / sensitivity) * -1;
        const rotateX = (touch.clientY - centerY) / sensitivity;
        
        const clampedRotateX = Math.max(-maxTilt, Math.min(maxTilt, rotateX));
        const clampedRotateY = Math.max(-maxTilt, Math.min(maxTilt, rotateY));
        
        setStyle({
          transform: `perspective(1000px) rotateX(${clampedRotateX}deg) rotateY(${clampedRotateY}deg) scale(1.05)`,
          transition: 'transform 100ms cubic-bezier(0.17, 0.67, 0.83, 0.67)',
          opacity: 1
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('touchmove', handleTouchMove);
    card.addEventListener('touchend', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('touchmove', handleTouchMove);
      card.removeEventListener('touchend', handleMouseLeave);
    };
  }, [maxTilt, resetTime, sensitivity]);

  return (
    <div 
      ref={cardRef} 
      style={style}
      className={cn(
        'cursor-pointer transition-all duration-500',
        animationType === 'float' && 'animate-float',
        animationType === 'float-subtle' && 'animate-float-subtle',
        animationType === 'pulse' && 'animate-pulse-subtle',
        animationType === 'scale-pulse' && 'animate-scale-pulse',
        isVisible ? 'animate-expand opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
