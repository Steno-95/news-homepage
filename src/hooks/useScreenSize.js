import { useEffect, useState } from "react";

function useScreenSize(screenSize) {
  const [isDesktop, setIsDesktop] = useState(false);
  let isMobile = !isDesktop;

  useEffect(() => {
    const matchQuery = screenSize
      ? window.matchMedia(`screen and (min-width: ${screenSize})`)
      : window.matchMedia("screen and (min-width: 1024px)");
    setIsDesktop(matchQuery.matches);

    function updateSize(e) {
      setIsDesktop(e.matches);
    }

    matchQuery.addEventListener("change", updateSize);

    return () => matchQuery.removeEventListener("change", updateSize);
  }, [screenSize]);

  return { isMobile, isDesktop };
}

export default useScreenSize;
