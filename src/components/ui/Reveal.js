"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ as: Tag = "div", children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    document.documentElement.dataset.motion = "ready";
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={elementRef} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}
