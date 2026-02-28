import React, { useMemo } from 'react';

interface SparkleProps {
  color?: string;
  count?: number;
  className?: string;
}

const generateSparkles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 80 + 10 + '%', // Keep within 10-90% height
    left: Math.random() * 100 + '%',
    size: Math.random() * 12 + 10 + 'px', // Slightly larger: 10px to 22px
    delay: Math.random() * 2 + 's',
    duration: Math.random() * 2 + 2 + 's', // Slower duration: 2s to 4s for gears
  }));
};

const SparklesComponent: React.FC<SparkleProps> = ({ 
  color = '#9CA3AF', // Gray-400 default
  count = 5, 
  className = '' 
}) => {
  const sparkles = useMemo(() => generateSparkles(count), [count]);

  return (
    <div className={`pointer-events-none z-20 ${className}`}>
      <style>
        {`
          @keyframes sparkle-twinkle {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1) rotate(180deg); opacity: 1; }
            100% { transform: scale(0) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute inline-block"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            color: color,
            animation: `sparkle-twinkle ${s.duration} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.45l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.27.25.45.5.45h4c.25 0 .46-.18.5-.45l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
          </svg>
        </span>
      ))}
    </div>
  );
};

export const Sparkles = React.memo(SparklesComponent);