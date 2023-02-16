import { useState, useEffect } from "react";

export default function useResolution() {
  const [isMobile, setIsMobile] = useState(false);
  const handleScreenSize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else if (window.innerWidth >= 768) {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
  }, [isMobile]);

  return { isMobile };
}
