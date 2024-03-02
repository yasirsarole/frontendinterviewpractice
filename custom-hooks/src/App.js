import { useState, useEffect } from "react";
import useThrottle from "./hooks/use-throttle";
import "./App.css";

function App() {
  let [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, []);

  return (
    <div className="App">
      Window Size {windowSize.width} x {windowSize.height}
    </div>
  );
}

export default App;
