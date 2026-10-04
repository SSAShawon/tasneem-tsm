"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { currentlyData, littleThingsData, storiesData, studyDeskData } from "@/data/portfolio";
import { ArtworkVisual, Icon, Reveal, SectionHeading } from "@/components/UI";

export function CurrentlyDashboard() {
  const cards = Object.entries(currentlyData);
  return (
    <section id="currently" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] currently-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="currently-heading-row flex items-end justify-between gap-[25px] max-[640px]:block">
          <SectionHeading eyebrow="A snapshot of right now" title={<>What I&apos;m up to <em>currently.</em></>} description="A small, editable dashboard for the interests and goals shaping this chapter." />
          <Reveal className="currently-live-mark flex items-center gap-[8px] mb-[49px] max-[640px]:mb-[20px]" delay={0.14}><span /><span>UPDATED WHENEVER LIFE CHANGES</span></Reveal>
        </div>
        <div className="currently-grid grid grid-cols-5 gap-[11px] max-[1120px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-[8px]">
          {cards.map(([key, item], index) => (
            <Reveal key={key} className={`flex ${index === cards.length - 1 ? "max-[640px]:col-span-full" : ""}`} delay={index * .065} y={24}>
              <article className={`currently-card currently-card--${key}`}>
                <div className="currently-card-top"><span>{item.label}</span><span className="currently-card-icon"><Icon name={item.icon} size={18} /></span></div>
                <h3>{item.value}</h3><p>{item.note}</p>
                <div className="currently-progress-meta"><span>PLACEHOLDER PROGRESS</span><span>{item.progress}%</span></div>
                <div className="currently-progress"><motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: item.progress / 100 }} viewport={{ once: true }} transition={{ duration: .85, delay: index * .07 + .14, ease: [0.22, 1, 0.36, 1] }} /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudyDesk() {
  const [activeId, setActiveId] = useState(studyDeskData[0].id);
  const reduced = useReducedMotion();
  const active = studyDeskData.find((item) => item.id === activeId) ?? studyDeskData[0];

  return (
    <section id="studydesk" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] study-desk-section section-mist bg-[#eff4ff]">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="study-desk-heading">
          <SectionHeading eyebrow="A little corner for curiosity" title={<>My Study <em>Desk.</em></>} description="An illustrated study scene. Tap or hover on an object to reveal editable placeholder notes—not a list of confirmed personal belongings." />
          <Reveal className="desk-coordinate" delay={.15}><span>STUDY CORNER</span><span>01 — 07</span></Reveal>
        </div>
        <div className="study-desk-layout grid grid-cols-[minmax(0,1.55fr)_minmax(210px,.55fr)] items-center gap-[38px] max-[1120px]:grid-cols-[minmax(0,1.35fr)_minmax(190px,.65fr)] max-[1120px]:gap-[25px] max-[900px]:grid-cols-1">
          <div className="desk-scene" aria-label="Illustrated interactive study desk">
            <div className="desk-window" aria-hidden="true"><span /><i /><b /></div>
            <div className="desk-light-glow" aria-hidden="true" />
            <div className="desk-tabletop" aria-hidden="true" />
            <div className="desk-scene-caption"><span>THE STUDY SPACE</span><span>ILLUSTRATED PLACEHOLDERS</span></div>
            {studyDeskData.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                className={`desk-object desk-object--${item.object} ${activeId === item.id ? "is-active" : ""}`}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                aria-pressed={activeId === item.id}
                aria-label={`${item.title}: ${item.tag}`}
                whileHover={reduced ? undefined : { y: -4, rotate: index % 2 ? 1.5 : -1.5, scale: 1.025 }}
                whileTap={reduced ? undefined : { scale: .98 }}
              >
                <span className="desk-object-art"><Icon name={item.icon} size={index === 2 ? 27 : 22} /></span>
                <span className="desk-object-title">{item.title}</span>
              </motion.button>
            ))}
            <span className="desk-decorative-star desk-decorative-star--one" aria-hidden="true">✳</span>
            <span className="desk-decorative-star desk-decorative-star--two" aria-hidden="true">✦</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active.id} className="desk-info-card" initial={reduced ? false : { opacity: 0, y: 8, filter: "blur(3px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -4 }} transition={{ duration: reduced ? .01 : .26 }} aria-live="polite">
                <span className="desk-info-icon"><Icon name={active.icon} size={17} /></span><span className="desk-info-text"><small>{active.tag} · EDITABLE</small><strong>{active.title}</strong><em>{active.detail}</em></span><ArrowUpRight size={15} className="desk-info-arrow" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="desk-side-copy">
            <Reveal className="desk-side-label"><span className="desk-side-line" /> A DESK FULL OF POSSIBILITIES</Reveal>
            <Reveal delay={.08} y={26}><p>Little pieces of a learning life, arranged as an <em>illustration</em> rather than a claim.</p></Reveal>
            <Reveal delay={.16}><div className="desk-side-check"><span>✳</span><span>Every item and description can be changed in <code>studyDeskData</code>.</span></div></Reveal>
            <Reveal delay={.22}><a href="#learning" className="desk-learning-link">Explore the learning list <ArrowRight size={15} /></a></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LittleThings() {
  return (
    <section id="little-things" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] little-things-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <SectionHeading eyebrow="Personal, in the small details" title={<>Little Things About <em>Tasneem.</em></>} description="A few simple statements that make this portfolio feel like a person, not just a list of milestones." />
        <div className="little-things-list grid grid-cols-5 gap-[10px] max-[1120px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-[8px]">
          {littleThingsData.map((item, index) => (
            <Reveal key={item.number} className="flex" delay={index * .07} x={index % 2 ? 18 : -18}>
              <article className="little-thing-card">
                <span className="little-thing-number">{item.number}</span>
                <span className="little-thing-icon"><Icon name={item.icon} size={19} /></span>
                <div><h3>{item.statement}</h3><p>{item.note}</p></div>
                <span className="little-thing-arrow"><ArrowUpRight size={17} /></span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CinematicStories() {
  return (
    <section id="stories" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] cinematic-stories-section section-navy bg-navy text-white">
      <div className="cinematic-story-aura" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="cinematic-stories-heading">
          <SectionHeading eyebrow="A few frames from the way" title={<>The places behind<br /><em>the person.</em></>} dark description="Four editable photo-story placeholders, connecting home, study, and creativity." />
          <Reveal className="cinematic-stories-aside" delay={.14}><span>SCROLL TO EXPLORE</span><ArrowRight size={18} /></Reveal>
        </div>
        <div className="cinematic-story-track">
          {storiesData.map((story, index) => (
            <Reveal key={story.id} delay={index * .07} y={32} className="cinematic-story-wrap">
              <article className="cinematic-story-card">
                <div className="cinematic-story-image" data-cursor="view">
                  <ArtworkVisual artwork={{ title: story.title, subtitle: story.location, palette: story.palette, motif: story.motif, image: story.image, alt: `${story.title} image placeholder` }} />
                  <span className="cinematic-story-image-label">PHOTO STORY · PLACEHOLDER</span>
                  <span className="cinematic-story-count">0{index + 1}</span>
                  <span className="cinematic-story-location">{story.location}</span>
                </div>
                <div className="cinematic-story-copy"><span>{story.label}</span><h3>{story.title}</h3><p>{story.note}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="cinematic-stories-foot"><Sparkles size={14} /> Replace each illustration through <code>storiesData</code>; no remote images are required.</p>
      </div>
    </section>
  );
}

export function ClosingSection() {
  const reduced = useReducedMotion();
  return (
    <section id="closing" className="closing-section" aria-labelledby="closing-title">
      <div className="closing-glow closing-glow--one" aria-hidden="true" /><div className="closing-glow closing-glow--two" aria-hidden="true" />
      <div className="closing-particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)] closing-content">
        <Reveal className="closing-eyebrow"><span /> THE STORY CONTINUES</Reveal>
        <Reveal delay={.08} y={42} blur={7}><h2 id="closing-title">Every journey begins<br />with a <em>dream.</em></h2></Reveal>
        <Reveal delay={.2} className="closing-signature"><span className="closing-rule" /><span><strong>Tasneem</strong><small>Homeopathy Student <i>·</i> Future Doctor</small></span><span className="closing-mark">✳</span></Reveal>
        <Reveal delay={.28}><a className="closing-back-top" href="#home" aria-label="Return to the top of the portfolio">BACK TO THE BEGINNING <ArrowUpRight size={14} /></a></Reveal>
      </div>
      {!reduced && <motion.div className="closing-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 68, repeat: Infinity, ease: "linear" }}><i /></motion.div>}
    </section>
  );
}
