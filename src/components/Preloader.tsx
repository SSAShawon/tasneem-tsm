"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduced ? 260 : 1050);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10, transition: { duration: reduced ? 0.18 : 0.45, ease: [0.7, 0, 0.2, 1] } }}
          aria-label="Loading Tasneem's portfolio"
          role="status"
        >
          <div className="preloader-glow" />
          <motion.div className="preloader-mark relative flex flex-col items-center gap-[14px] text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <span className="preloader-monogram">T<span>.</span></span>
            <span className="preloader-label">A personal journey in care & curiosity</span>
          </motion.div>
          <div className="preloader-rule relative mt-[42px] h-px w-[124px] bg-[rgba(255,255,255,.17)]"><motion.span className="absolute inset-0 origin-left bg-gold" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0.1 : 0.85, ease: [0.72, 0, 0.28, 1] }} /></div>
          <span className="preloader-caption">PLEASE WAIT A MOMENT</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
