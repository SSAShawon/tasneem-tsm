"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, ZoomIn, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { dailyLifeData, drawingData, dreamsData, favoritesData, journeyData, mehendiData, portfolioImages, type ShowcaseArtwork } from "@/data/portfolio";
import { ArtworkVisual, Icon, LocalPhoto, Reveal, SectionHeading } from "@/components/UI";

function ArtworkCard({ artwork, index, onClick, decorative = false }: { artwork: ShowcaseArtwork; index: number; onClick?: () => void; decorative?: boolean }) {
  const content = (
    <>
      <span className="showcase-art-image"><ArtworkVisual artwork={artwork} showImage={!decorative} /></span>
      <span className="showcase-art-caption"><span><small>{String(index + 1).padStart(2, "0")}</small><strong>{artwork.title}</strong></span><span className="art-caption-mark">↗</span></span>
      <span className="showcase-art-subtitle">{artwork.subtitle}</span>
    </>
  );
  return decorative ? (
    <div className="showcase-art-card" aria-hidden="true">{content}</div>
  ) : (
    <button className="showcase-art-card" type="button" onClick={onClick} aria-label={`View ${artwork.title} fullscreen`} data-cursor="view">{content}</button>
  );
}

function MarqueeShowcase({ title, eyebrow, data, id, assetType = "placeholder" }: { title: string; eyebrow: string; data: ShowcaseArtwork[]; id?: string; assetType?: "placeholder" | "photo" }) {
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeArtwork = data[activeIndex];
  const moveTo = useCallback((nextIndex: number) => {
    setActiveIndex((nextIndex + data.length) % data.length);
    setZoomed(false);
  }, [data.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowRight") moveTo(activeIndex + 1);
      if (event.key === "ArrowLeft") moveTo(activeIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, activeIndex, moveTo]);

  const onTouchEnd = (endX: number) => {
    if (touchStartX === null) return;
    const delta = touchStartX - endX;
    if (Math.abs(delta) > 48) moveTo(activeIndex + (delta > 0 ? 1 : -1));
    setTouchStartX(null);
  };

  return (
    <div className="creative-showcase" id={id}>
      <div className="creative-showcase-head">
        <div><span className="eyebrow inline-flex items-center gap-[9px] text-royal text-[9px] font-bold uppercase tracking-[.17em] max-[640px]:text-[8px] max-[640px]:tracking-[.14em]">{eyebrow}</span><h3>{title}</h3></div>
        <button className="marquee-control" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? `Play ${title} showcase` : `Pause ${title} showcase`} aria-pressed={paused}>
          {paused ? <Play size={13} fill="currentColor" /> : <Pause size={13} fill="currentColor" />}<span>{paused ? "PLAY" : "PAUSE"}</span>
        </button>
      </div>

      <div className="art-feature-layout">
        <button className="art-feature-media" type="button" onClick={() => setLightboxOpen(true)} aria-label={`Open ${activeArtwork.title} fullscreen`} data-cursor="view">
          <ArtworkVisual artwork={activeArtwork} />
          <span className="art-feature-badge">{assetType === "photo" ? "FEATURED PHOTO" : "FEATURED PLACEHOLDER"}</span>
          <span className="art-feature-view">VIEW ARTWORK <ZoomIn size={14} /></span>
        </button>
        <div className="art-feature-copy">
          <div className="art-feature-kicker"><span>0{activeIndex + 1} / {String(data.length).padStart(2, "0")}</span><span>{title.toUpperCase()} · COLLECTION</span></div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeArtwork.title} className="art-feature-copy-main" initial={reduced ? false : { opacity: 0, y: 8, filter: "blur(3px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -5 }} transition={{ duration: reduced ? 0.01 : .28 }}>
              <h4>{activeArtwork.title}</h4>
              <p>{activeArtwork.description ?? "Add a short note about this artwork here."}</p>
            </motion.div>
          </AnimatePresence>
          <div className="art-feature-thumbnails" aria-label={`Choose a ${title.toLowerCase()} artwork`}>
            {data.map((item, index) => (
              <button key={item.title} className={`art-thumb ${activeIndex === index ? "is-active" : ""}`} type="button" onClick={() => { moveTo(index); setLightboxOpen(true); }} aria-label={`View ${item.title} fullscreen`} aria-pressed={activeIndex === index}>
                <ArtworkVisual artwork={item} showImage={false} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="art-feature-controls"><span>{assetType === "photo" ? "SWIPE OR SELECT A PHOTO" : "SWIPE OR SELECT A STUDY"}</span><div><button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label={`Previous ${title} artwork`}><ArrowLeft size={16} /></button><button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label={`Next ${title} artwork`}><ArrowRight size={16} /></button></div></div>
        </div>
      </div>

      <div className={`marquee-window ${paused ? "is-paused" : ""}`}>
        <div className="marquee-track">
          {data.map((artwork, index) => <ArtworkCard key={`${artwork.title}-${index}`} artwork={artwork} index={index} onClick={() => { moveTo(index); setLightboxOpen(true); }} />)}
          <div className="marquee-duplicate" aria-hidden="true">
            {data.map((artwork, index) => <ArtworkCard key={`copy-${artwork.title}-${index}`} artwork={artwork} index={index} decorative />)}
          </div>
        </div>
      </div>
      <div className="showcase-line-foot"><span>{assetType === "photo" ? "USER-PROVIDED PHOTOS · LOCAL FILES" : "LOCAL PLACEHOLDER ART · REPLACE IN DATA"}</span><span>PAUSE, HOVER, OR OPEN A PIECE <ArrowRight size={13} /></span></div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div className="art-lightbox-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setLightboxOpen(false); }}>
            <motion.div className="art-lightbox" role="dialog" aria-modal="true" aria-label={`${title} artwork viewer`} initial={reduced ? false : { opacity: 0, y: 18, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .985 }} transition={{ duration: reduced ? .01 : .3 }}>
              <button ref={closeRef} className="art-lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Close artwork viewer"><X size={20} /></button>
              <button className="art-lightbox-zoom" type="button" onClick={() => setZoomed((value) => !value)} aria-label={zoomed ? "Fit artwork to view" : "Zoom artwork"} aria-pressed={zoomed}><ZoomIn size={16} /> {zoomed ? "FIT" : "ZOOM"}</button>
              <div className={`art-lightbox-media ${zoomed ? "is-zoomed" : ""}`} onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)} onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}>
                <ArtworkVisual artwork={activeArtwork} />
              </div>
              <div className="art-lightbox-caption"><div><span>{title.toUpperCase()} · {String(activeIndex + 1).padStart(2, "0")}</span><h4>{activeArtwork.title}</h4><p>{activeArtwork.description}</p></div><div className="art-lightbox-arrows"><button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Previous artwork"><ArrowLeft size={19} /></button><button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Next artwork"><ArrowRight size={19} /></button></div></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CreativeShowcases() {
  return (
    <section id="creativity" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] creative-section section-navy bg-navy text-white">
      <div className="creative-deco creative-deco-one" aria-hidden="true" /><div className="creative-deco creative-deco-two" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="creative-topline"><span className="eyebrow inline-flex items-center gap-[9px] text-[#b5c7ff] text-[8px] font-bold uppercase tracking-[.17em]">Life beyond the lecture notes</span><span className="creative-chapter">09 <i /> 10</span></div>
        <Reveal className="creative-heading" y={36} blur={5}><h2>Made by hand.<br /><em>Made with feeling.</em></h2><p>A creative side of the story — a place for drawings, mehendi, and anything else that brings joy to the process.</p></Reveal>
        <MarqueeShowcase title="Drawing" eyebrow="A practice in seeing" data={drawingData} id="drawing-showcase" assetType="photo" />
        <MarqueeShowcase title="Mehendi" eyebrow="Patterns, patience & detail" data={mehendiData} id="mehendi-showcase" assetType="photo" />
        <Reveal className="teaching-note" delay={0.1}>
          <span className="teaching-note-icon"><Icon name="book" size={20} /></span>
          <span><small>AN OPTIONAL CHAPTER</small><strong>Teaching / tutoring</strong><em>Add a note here if teaching or tutoring belongs in this story.</em></span>
          <span className="teaching-note-photo" aria-hidden="true"><LocalPhoto src={portfolioImages.dailyLife.tutoring} sizes="80px" /></span>
          <ArrowUpRight size={17} className="teaching-note-arrow" />
        </Reveal>
      </div>
    </section>
  );
}

export function FavouriteThings() {
  const reduced = useReducedMotion();
  return (
    <section id="favorites" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] favourites-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="favourites-heading flex items-end justify-between gap-[30px] max-[640px]:block">
          <SectionHeading eyebrow="A few small favourites" title={<>Little things,<br /><em>big smiles.</em></>} number="11" description="A playful corner for the favourites that make the everyday feel a little more personal." />
          <Reveal className="favourites-edit-note" delay={0.18}><span>HER PERSONAL PICKS</span><span className="editable-chip">EDITABLE DETAILS</span><span className="favourites-doodle">✳</span></Reveal>
        </div>
        <div className="favourites-grid grid grid-cols-4 gap-[12px] max-[640px]:grid-cols-2 max-[640px]:gap-[8px]">
          {favoritesData.map((favorite, index) => (
            <motion.article key={favorite.label} className="favorite-card" initial={reduced ? false : { opacity: 0, y: 20, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: reduced ? 0.01 : 0.54, delay: reduced ? 0 : (index % 6) * 0.055, ease: [0.22, 1, 0.36, 1] }} whileHover={reduced ? undefined : { y: -5, rotate: index % 2 === 0 ? -1 : 1, transition: { duration: 0.22 } }}>
              {favorite.image && <span className="favorite-photo" aria-hidden="true"><LocalPhoto src={favorite.image} sizes="(max-width: 640px) 40vw, 160px" /></span>}
              <span className="favorite-icon"><Icon name={favorite.icon} size={19} /></span>
              <span className="favorite-label">{favorite.label}</span>
              <span className="favorite-answer">{favorite.value}</span>
              <span className="favorite-pencil">✳</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DailyRoutine() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 76%", "end 72%"] });
  const progress = useTransform(scrollYProgress, [0, .9], [0, 1]);
  const active = dailyLifeData[activeIndex];

  return (
    <section id="day-in-life" ref={sectionRef} className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] routine-section section-mist bg-[#eff4ff]" data-mood={active.mood}>
      <div className="routine-atmosphere" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="routine-header flex items-end justify-between gap-[30px] max-[640px]:block">
          <SectionHeading eyebrow="A rhythm of my own" title={<>A day in Tasneem&apos;s <em>life.</em></>} number="12" description="A visual outline, not a fixed schedule. Every stage and description is an editable placeholder." />
          <Reveal className="routine-clock" delay={0.15}><span className="routine-clock-face"><i /><b /></span><span>ONE DAY<br /><em>AT A TIME</em></span></Reveal>
        </div>
        <div className="daily-daypart-label"><span className="daily-daypart-icon"><Icon name={active.icon} size={15} /></span><span>{active.mood === "night" ? "A QUIET CLOSE" : active.mood === "evening" ? "THE DAY SOFTENS" : active.mood === "day" ? "THE STUDY HOURS" : "A NEW MORNING"}</span><i /></div>
        <div className="routine-track routine-track--interactive relative grid grid-cols-[repeat(7,minmax(0,1fr))] gap-[10px] max-[640px]:grid-cols-1 max-[640px]:gap-0 max-[640px]:pl-[5px]">
          <div className="routine-connector" aria-hidden="true"><motion.span style={reduced ? { scaleX: 1 } : { scaleX: progress }} /></div>
          {dailyLifeData.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 0.045} y={22} className="routine-item-wrap">
              <article className={`routine-item ${activeIndex === index ? "is-active" : ""}`}>
                <button className="routine-select" type="button" onClick={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-label={`${stage.time}: show editable daily-life note`}>
                  <span className="routine-node"><Icon name={stage.icon} size={17} /></span>
                  <span className="routine-step">0{index + 1}</span>
                  <span className="routine-stage-name">{stage.time}</span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active.id} className={`routine-detail ${active.image ? "routine-detail--with-image" : ""}`} initial={reduced ? false : { opacity: 0, y: 9, filter: "blur(3px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -5 }} transition={{ duration: reduced ? 0.01 : .3 }} aria-live="polite">
            {active.image && <div className="routine-detail-photo" aria-hidden="true"><LocalPhoto src={active.image} sizes="(max-width: 640px) 80px, 180px" /></div>}
            <span className="routine-detail-icon"><Icon name={active.icon} size={19} /></span>
            <div><span className="routine-detail-label">A MOMENT IN THE DAY · EDITABLE</span><h3>{active.time}</h3><p>{active.note}</p></div>
            <span className="routine-detail-number">{String(activeIndex + 1).padStart(2, "0")}<i> / 09</i></span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function DreamsSection() {
  return (
    <section id="dreams" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] dreams-section section-paper bg-white">
      <div className="dreams-aura" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)] dreams-container">
        <div className="dreams-top flex items-end justify-between gap-[30px] max-[640px]:block">
          <SectionHeading eyebrow="A horizon to work toward" title={<>Dreams &amp; <em>goals.</em></>} number="13" description="Some next steps are still to be named. Others already have a direction." />
          <Reveal className="dreams-note" delay={0.12}><span className="dreams-star">✳</span><p>Not a finish line.<br /><em>A direction.</em></p><span className="micro-label">PROGRESS, NOT PERFECTION</span></Reveal>
        </div>
        <div className="dreams-grid grid grid-cols-4 gap-[13px] max-[640px]:grid-cols-2 max-[640px]:gap-[9px]">
          {dreamsData.map((dream, index) => (
            <Reveal key={dream.number} className="flex" delay={index * 0.08} y={30}>
              <article className={`dream-card dream-card--${dream.tone}`}>
                <div className="dream-card-top"><span>{dream.number} / 04</span><ArrowUpRight size={18} /></div>
                <div className="dream-star" aria-hidden="true">✳</div>
                <h3>{dream.title}</h3><p>{dream.note}</p>
                {dream.number !== "03" && <span className="dream-placeholder">EDITABLE GOAL</span>}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="dreams-footer"><span className="dreams-footer-dash" /><span>Small steps have a way of becoming a long way.</span><span className="dreams-footer-dash" /></Reveal>
      </div>
    </section>
  );
}

export function JourneyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, journeyData.findIndex((item) => item.id === "dhaka")));
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 72%", "end 74%"] });
  const progress = useTransform(scrollYProgress, [0, 0.92], [0, 1]);
  const chapter = journeyData[activeIndex];
  const moveTo = (nextIndex: number) => setActiveIndex((nextIndex + journeyData.length) % journeyData.length);
  const art = { title: chapter.place, subtitle: chapter.institution, palette: chapter.palette, motif: chapter.motif, image: chapter.image, alt: chapter.imageAlt ?? `${chapter.place} journey image` };

  return (
    <section id="journey" ref={sectionRef} className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] journey-section section-bluewash bg-[#f6f8ff]">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="journey-heading-row flex items-end justify-between gap-[25px] max-[640px]:block">
          <SectionHeading eyebrow="The story so far" title={<>Satkhira <span className="journey-arrow-inline">→</span> <em>what comes next.</em></>} number="04" description="A visual story through the places, studies, and aspirations that shape Tasneem's journey." />
          <Reveal className="journey-side-label" delay={0.15}><span>SELECT A CHAPTER</span><span className="journey-side-arrow"><ArrowRight size={20} /></span></Reveal>
        </div>
        <div className="journey-scroll mr-[-40px] overflow-x-auto snap-x snap-mandatory p-[4px_40px_19px_0] max-[1120px]:mr-[-28px] max-[640px]:m-0 max-[640px]:overflow-visible max-[640px]:p-0" aria-label="Interactive medical journey">
          <div className="journey-track relative flex w-max items-stretch gap-[17px] pt-[28px] pr-[max(40px,calc((100vw_-_1240px)/2))] max-[640px]:flex-col max-[640px]:w-full max-[640px]:gap-[11px] max-[640px]:p-[7px_0_8px_27px]">
            <div className="journey-rail journey-rail--horizontal" aria-hidden="true"><motion.span style={reduced ? { scaleX: 1 } : { scaleX: progress }} /></div>
            <div className="journey-rail journey-rail--vertical" aria-hidden="true"><motion.span style={reduced ? { scaleY: 1 } : { scaleY: progress }} /></div>
            {journeyData.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.045} y={26} className="journey-card-reveal">
                <article className={`journey-card ${activeIndex === index ? "is-active" : ""}`}>
                  <button className={`journey-scene journey-card-button ${item.color}`} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-label={`Explore ${item.place}, ${item.year}`} data-cursor="view">
                    <span className="journey-card-visual" aria-hidden="true"><ArtworkVisual artwork={{ title: item.place, subtitle: item.institution, palette: item.palette, motif: item.motif, image: item.image, alt: item.imageAlt ?? `${item.place} journey image` }} /></span>
                    <span className="journey-scene-texture" aria-hidden="true" />
                    <span className="journey-card-count">0{index + 1}</span>
                    <span className="journey-scene-icon"><Icon name={item.icon} size={21} /></span>
                    <span className="journey-place">{item.place}</span>
                    <span className="journey-scene-mark" aria-hidden="true">✳</span>
                    <span className="journey-scene-caption">{item.year}</span>
                  </button>
                  <div className="journey-card-copy">
                    <span className="journey-copy-line" />
                    <span className="journey-card-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="journey-progress-copy"><span>01</span><i /><span>{String(activeIndex + 1).padStart(2, "0")} / {String(journeyData.length).padStart(2, "0")}</span><span>CHOOSE A MILESTONE TO READ MORE</span></div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.article key={chapter.id} className="journey-detail" initial={reduced ? false : { opacity: 0, y: 12, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -7, filter: "blur(3px)" }} transition={{ duration: reduced ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }} aria-live="polite">
            <div className="journey-detail-media"><ArtworkVisual artwork={art} /><span className="journey-detail-media-label">CHAPTER IMAGE · EDITABLE</span></div>
            <div className="journey-detail-copy">
              <div className="journey-detail-kicker"><span>CHAPTER {String(activeIndex + 1).padStart(2, "0")}</span><i /> <span>{chapter.year}</span></div>
              <h3>{chapter.place}</h3>
              <p className="journey-detail-note">{chapter.note}</p>
              <p className="journey-detail-story">{chapter.detail}</p>
              <div className="journey-detail-facts">
                <div><span>LOCATION</span><strong>{chapter.location}</strong></div>
                <div><span>INSTITUTION / CHAPTER</span><strong>{chapter.institution}</strong></div>
              </div>
              <div className="journey-detail-controls">
                <span>AN OPEN, EDITABLE STORY</span>
                <div><button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Previous journey milestone"><ArrowLeft size={17} /></button><button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Next journey milestone"><ArrowRight size={17} /></button></div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
        <p className="journey-scroll-hint"><span>FOLLOW THE JOURNEY · SELECT A MILESTONE</span><ArrowRight size={14} /></p>
      </div>
    </section>
  );
}
