import { useLayoutEffect, useRef } from "react";

export default function useScrollReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const reveal = (element: HTMLElement) => {
      element.dataset.revealState = "visible";
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    for (const element of elements) {
      if (preference.matches) {
        reveal(element);
      } else {
        element.dataset.revealState = "pending";
        observer.observe(element);
      }
    }

    const revealAll = () => {
      if (!preference.matches) return;
      observer.disconnect();
      elements.forEach(reveal);
    };
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const element = event.target.closest<HTMLElement>("[data-reveal]");
      if (element) {
        reveal(element);
        observer.unobserve(element);
      }
    };

    preference.addEventListener("change", revealAll);
    root.addEventListener("focusin", revealFocused);

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", revealAll);
      root.removeEventListener("focusin", revealFocused);
      elements.forEach((element) => delete element.dataset.revealState);
    };
  }, []);

  return rootRef;
}
