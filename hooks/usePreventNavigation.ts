import { RefObject, useEffect, useRef } from "react";

// Stop the history navigation gesture on touch devices
export const usePreventNavigation = () => {
  const sliderContainerRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    let refValue: any = null;
    const preventNavigation = (event: any) => {
      const touchXPosition = event.touches[0].pageX;
      const touchXRadius = event.touches[0].radiusX || 0;
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };
    if (sliderContainerRef.current) {
      refValue = sliderContainerRef.current;
      sliderContainerRef.current.addEventListener(
        "touchstart",
        preventNavigation,
        {
          passive: true,
        }
      );
    }

    return () => {
      if (refValue) {
        refValue.removeEventListener("touchstart", preventNavigation, {
          passive: true,
        });
      }
    };
  }, []);

  return [sliderContainerRef];
};
