// src/hooks/useScrollTo.js
import { useCallback } from "react";
import useLenis from "./useLenis";

export default function useScrollTo() {
  const lenisRef = useLenis();

  const scrollTo = useCallback((target, options = {}) => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (typeof target === "string") {
      // Selector
      const el = document.querySelector(target);
      if (el) {
        lenis.scrollTo(el, options);
      }
    } else if (target instanceof HTMLElement) {
      // Direct DOM element
      lenis.scrollTo(target, options);
    } else if (typeof target === "number") {
      // Pixel value
      lenis.scrollTo(target, options);
    } else {
      console.warn("Invalid scroll target:", target);
    }
  }, [lenisRef]);

  return scrollTo;
}
