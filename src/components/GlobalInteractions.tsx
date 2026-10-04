"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { useEffect, useRef, useState } from "react";

const progressSections = [
  ["home", "Home"], ["about", "About"], ["education", "Education"], ["journey", "Journey"], ["why", "Why homeopathy"],
  ["learning", "Learning"], ["currently", "Currently"], ["studydesk", "Study desk"], ["achievements", "Milestones"], ["values", "Values"],
  ["creativity", "Creativity"], ["little-things", "Little things"], ["favorites", "Favourites"], ["day-in-life", "A day in my life"],
  ["dreams", "Dreams"], ["gallery", "Gallery"], ["stories", "Photo stories"], ["future-doctor", "Future doctor"], ["resume", "CV"], ["contact", "Contact"], ["closing", "Closing"]
] as const;

export function ScrollProgress() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: .18 });

  useEffect(() => {
    const sections = progressSections.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const candidates = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (candidates[0]) {
        const index = progressSections.findIndex(([id]) => id === candidates[0].target.id);
        if (index >= 0) setActive(index);
      }
    }, { rootMargin: "-32% 0px -54% 0px", threshold: [0, .12, .28, .48, .68] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const number = String(active + 1).padStart(2, "0");
  const label = progressSections[active][1];

  return (
    <>
      <div className="page-progress-track" aria-hidden="true"><motion.span style={{ scaleX: reduced ? scrollYProgress : progress }} /></div>
      <div className="section-progress-status" role="status" aria-live="polite" aria-label={`Section ${number}: ${label}`}>
        <span className="section-progress-number">{number}</span>
        <span className="section-progress-separator" />
        <span className="section-progress-label">{label}</span>
        <span className="section-progress-total">/ {String(progressSections.length).padStart(2, "0")}</span>
      </div>
    </>
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1025px)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }
    const cursor = cursorRef.current;
    if (!cursor) return;
    document.body.classList.add("has-custom-cursor");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
        cursor.classList.add("is-visible");
      });
    };
    const over = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a, button, [data-cursor]") : null;
      cursor.classList.toggle("is-hovering", Boolean(target));
      cursor.classList.toggle("is-view", target?.getAttribute("data-cursor") === "view");
      cursor.classList.toggle("is-link", Boolean(target && target.getAttribute("data-cursor") !== "view"));
    };
    const leave = () => cursor.classList.remove("is-visible", "is-hovering", "is-view", "is-link");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span /></div>;
}
