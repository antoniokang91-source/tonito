"use client";
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the container itself if it has .reveal
    if (el.classList.contains("reveal")) obs.observe(el);
    // Observe all .reveal children
    el.querySelectorAll<HTMLElement>(".reveal").forEach((t) => obs.observe(t));

    return () => obs.disconnect();
  }, []);

  return ref;
}
