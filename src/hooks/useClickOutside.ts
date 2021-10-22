import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = (
  callback: () => void
): RefObject<HTMLElement> => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: Event) => {
      if (elementRef?.current && !elementRef.current.contains(target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, false);

    return () =>
      document.removeEventListener('mousedown', handleClickOutside, false);
  }, [callback]);

  return elementRef;
};
