
import FloatingElement from './FloatingElement';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const SkillBadge = ({ name, icon, className, delay = 0 }: SkillBadgeProps) => {
  return (
    <FloatingElement
      delay={delay}
      sensitivity={60}
      maxTilt={20}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full glass touch-hover touch-active',
        className
      )}
    >
      {icon}
      <span className="font-medium">{name}</span>
    </FloatingElement>
  );
};

export default SkillBadge;
