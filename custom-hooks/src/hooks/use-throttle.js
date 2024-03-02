import { useEffect, useState, useRef } from "react";

const useThrottle = (fn, delay) => {
  let [throttledValue, setThrottledValue] = useState(null);
  let lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecuted.current;

      if (timeElapsed >= delay) {
        setThrottledValue(fn);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [fn, delay]);

  return throttledValue;
};

export default useThrottle;
