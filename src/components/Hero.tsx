"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { MagneticLink, PortraitIllustration } from "@/components/UI";
import { portfolioImages } from "@/data/portfolio";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -38]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.97]);
  const letters = Array.from("Tasneem");

  return (
    <section id="home" ref={ref} className="hero-section relative flex min-h-[max(730px,100svh)] items-center overflow-hidden pt-[122px] pb-[80px] scroll-mt-0 text-white max-[900px]:min-h-[max(740px,100svh)] max-[900px]:pt-[105px] max-[640px]:min-h-[100svh] max-[640px]:pt-[92px] max-[640px]:pb-[65px] max-[640px]:items-start">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>

      <div className="hero-inner relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)] grid min-h-[590px] grid-cols-[minmax(0,1fr)_minmax(380px,495px)] items-center gap-[clamp(55px,8vw,126px)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(330px,410px)] max-[1120px]:gap-[50px] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(290px,350px)] max-[900px]:gap-[32px] max-[640px]:flex max-[640px]:min-h-0 max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-0">
        <div className="hero-copy relative z-[2] max-w-[610px] pt-[12px]">
          <motion.div className="hero-eyebrow inline-flex items-center gap-[10px] mb-[34px] max-[640px]:mb-[14px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            <span className="hero-eyebrow-dot" /> A PERSONAL JOURNEY IN CARE & CURIOSITY
          </motion.div>
          <motion.p className="hero-hello" initial={{ opacity: 0, y: 15, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>Hello, I&apos;m</motion.p>
          <h1 className="hero-name" aria-label="Tasneem">
            {letters.map((letter, index) => (
              <motion.span key={`${letter}-${index}`} aria-hidden="true" initial={{ opacity: 0, y: "0.62em", rotateX: -65, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }} transition={{ duration: 0.82, delay: 0.33 + index * 0.055, ease: [0.2, 0.8, 0.2, 1] }}>
                {letter}
              </motion.span>
            ))}
            <motion.i initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring", stiffness: 250, damping: 16 }} aria-hidden="true">.</motion.i>
          </h1>
          <motion.p className="hero-role" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}>
            Homeopathy Student <span>·</span> Future Doctor <span>·</span> Artist
          </motion.p>
          <motion.p className="hero-intro max-w-[455px] mt-[24px] max-[640px]:max-w-[440px] max-[640px]:mt-[16px] max-[640px]:mx-auto" initial={{ opacity: 0, y: 18, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.83, ease: [0.22, 1, 0.36, 1] }}>
            I&apos;m Tasneem, a homeopathy student from Satkhira, currently pursuing my medical journey in Dhaka. I believe in learning with patience, growing with purpose, and becoming a doctor who cares.
          </motion.p>
          <motion.div className="hero-actions flex flex-wrap items-center gap-[28px] mt-[32px] max-[640px]:justify-center max-[640px]:gap-[14px] max-[640px]:mt-[21px] max-[380px]:gap-[10px]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 1.02, ease: [0.22, 1, 0.36, 1] }}>
            <MagneticLink href="#about" variant="light">Explore my journey</MagneticLink>
            <a href="#education" className="hero-text-link inline-flex items-center gap-[6px]">A little more about me <ArrowUpRight size={15} aria-hidden="true" /></a>
          </motion.div>
          <motion.div className="hero-location flex items-center gap-[10px] mt-[51px] max-[640px]:justify-center max-[640px]:mt-[23px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.15 }}>
            <span className="hero-location-line w-[32px] h-px" /> <span>Satkhira</span><span className="location-arrow">→</span><span>Dhaka</span>
          </motion.div>
        </div>

        <motion.div className="hero-portrait-wrap" style={{ y: portraitY, scale: portraitScale }} initial={{ opacity: 1, scale: 0.97, clipPath: "inset(0 0 0% 0 round 220px 220px 14px 14px)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0 round 220px 220px 14px 14px)" }} transition={{ duration: 1.15, delay: 0.28, ease: [0.76, 0, 0.24, 1] }}>
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-frame">
            <PortraitIllustration className="hero-portrait" label="Illustrated portrait fallback for Tasneem, a future doctor" />
            <div className="hero-photo-wrap">
              <Image
                key="hero-main-photo"
                src={portfolioImages.hero}
                alt="Portrait of Tasneem"
                fill
                priority
                unoptimized={process.env.NODE_ENV === "development"}
                sizes="(max-width: 640px) 62vw, (max-width: 1024px) 42vw, 455px"
                className="hero-photo"
              />
            </div>
            <div className="portrait-stamp"><span>STUDENT</span><i /> <span>ARTIST</span></div>
          </div>
          <motion.div className="portrait-note portrait-note-top" initial={{ opacity: 0, x: 16, rotate: 6 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ delay: 1.05, duration: 0.55 }}>
            <span className="note-icon"><span>✳</span></span><span><small>GROWING WITH</small><strong>Purpose</strong></span>
          </motion.div>
          <motion.div className="portrait-note portrait-note-bottom" initial={{ opacity: 0, x: -14, y: 8 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 1.16, duration: 0.58 }}>
            <span className="portrait-note-number">01</span><span><small>CHAPTER ONE</small><strong>Medical journey</strong></span>
          </motion.div>
          <div className="portrait-ring" aria-hidden="true" />
        </motion.div>
      </div>
      <a className="hero-scroll absolute left-[max(40px,calc((100%_-_1240px)/2))] bottom-[26px] flex items-center gap-[11px] max-[640px]:left-[20px] max-[640px]:bottom-[14px] max-[640px]:gap-[7px]" href="#about" aria-label="Scroll to the About section"><span>SCROLL TO EXPLORE</span><motion.i className="grid h-[28px] w-[28px] place-items-center rounded-full max-[640px]:h-[23px] max-[640px]:w-[23px]" animate={reduced ? undefined : { y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}><ArrowDown size={14} /></motion.i></a>
      <div className="hero-index absolute right-[max(40px,calc((100%_-_1240px)/2))] bottom-[34px] flex items-center gap-[9px] max-[640px]:right-[19px] max-[640px]:bottom-[19px]" aria-hidden="true"><span>01</span><i className="w-[32px] h-px max-[640px]:w-[19px]" /> <span>17</span></div>
    </section>
  );
}
