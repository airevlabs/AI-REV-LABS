import React, { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade' | 'slide' | 'scale';
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  type = 'slide'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to keep it visible
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    switch (type) {
      case 'fade':
        return isVisible ? 'opacity-100' : 'opacity-0';
      case 'scale':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      case 'slide':
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};