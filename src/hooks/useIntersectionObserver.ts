import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { root = null, rootMargin = '0%', threshold = 0 }: UseIntersectionObserverProps = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, root, rootMargin, threshold]);

  return isIntersecting;
}