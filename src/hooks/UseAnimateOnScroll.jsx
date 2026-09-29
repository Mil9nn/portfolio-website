import { useState, useEffect, useRef } from 'react';

export function useAnimationOnScroll(options = {}) {
  const {
    threshold = 0.1, // Percentage of element visible to trigger
    rootMargin = '0px', // Margin around the root
    animationClass = 'animate-fade-down', // Default animation
    once = true // Animation triggers only once by default
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    if (!currentElement) return;

    const observerOptions = {
      threshold,
      rootMargin
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        // Add animation class
        currentElement.classList.add(animationClass);

        // If we only want the animation to trigger once, disconnect the observer
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        // For repeating animations, remove the class when out of view
        setIsVisible(false);
        currentElement.classList.remove(animationClass);
      }
    }, observerOptions);

    observer.observe(currentElement);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, animationClass, once]);

  return { ref: elementRef, isVisible };
}