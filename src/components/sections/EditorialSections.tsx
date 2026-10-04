"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowDownRight, ArrowUpRight, BookOpen, GraduationCap, MoveDownRight, Stethoscope } from "lucide-react";
import { useRef, useState } from "react";
import { aboutCards, achievementsData, educationData, subjectsData, valuesData } from "@/data/portfolio";
import { Icon, LocalPhoto, Reveal, SectionHeading } from "@/components/UI";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] about-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <SectionHeading eyebrow="The person behind the purpose" title={<>A little about <em>me.</em></>} number="02" description="A personal introduction to the places, people, and qualities shaping this chapter." />
        <div className="about-layout grid grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] items-stretch gap-[22px] max-[900px]:grid-cols-[1fr_1fr] max-[640px]:grid-cols-1 max-[640px]:gap-[12px]">
          <Reveal className="about-story-card relative min-h-[420px] overflow-hidden rounded-panel p-[39px_40px_33px] max-[900px]:p-[30px_28px] max-[640px]:min-h-[335px] max-[640px]:p-[26px_25px] max-[640px]:rounded-[16px]" y={38} blur={4}>
            <div className="about-card-topline"><span className="micro-label">A NOTE TO MY FUTURE SELF</span><span className="about-star">✳</span></div>
            <p className="about-story-quote">“A meaningful journey is built with <em>patience, purpose,</em> and the courage to keep becoming.”</p>
            <p className="about-story-copy">I&apos;m Tasneem — loyal, kind, hardworking, responsible, and beautiful — learning to grow into the work I hope to do. My story connects the familiar warmth of Satkhira with a new chapter in Dhaka.</p>
            <div className="about-signature"><span className="signature-line" /><span>Tasneem</span></div>
            <div className="about-watermark" aria-hidden="true">T.</div>
          </Reveal>
          <div className="about-facts-grid grid grid-cols-2 gap-[14px] max-[640px]:gap-[9px]">
            {aboutCards.map((card, index) => (
              <Reveal key={card.label} className="flex" delay={index * 0.09} y={28}>
                <article className={`about-fact relative w-full min-h-[202px] flex flex-col items-start p-[24px_25px] overflow-hidden rounded-[16px] max-[900px]:min-h-[203px] max-[900px]:p-[20px] max-[640px]:min-h-[154px] max-[640px]:p-[14px] max-[640px]:rounded-[12px] max-[380px]:p-[12px] about-fact-${index + 1}`}>
                  <div className="fact-icon"><Icon name={card.icon} size={19} /></div>
                  <span className="fact-label">{card.label}</span>
                  <strong>{card.value}</strong>
                  <span className="fact-note">{card.note}</span>
                  <ArrowUpRight className="fact-arrow" size={15} aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="section-ghost-number" aria-hidden="true">01</div>
    </section>
  );
}

function TimelineCard({ year, title, place, note, image, isFuture }: { year: string; title: string; place: string; note: string; image?: string; isFuture: boolean }) {
  return (
    <div className={`timeline-card ${isFuture ? "timeline-card--future" : ""} ${image ? "timeline-card--with-image" : ""}`}>
      {image && <div className="timeline-card-image" aria-hidden="true"><LocalPhoto src={image} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 390px" /></div>}
      <div className="timeline-card-head"><span className="timeline-year">{year}</span><span className="timeline-card-icon">{isFuture ? <Stethoscope size={17} /> : <GraduationCap size={18} />}</span></div>
      <h3>{title}</h3>
      <p className="timeline-place">{place}</p>
      <p className="timeline-note">{note}</p>
      <span className="timeline-card-line" />
    </div>
  );
}

export function EducationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 68%", "end 76%"] });
  const lineProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section id="education" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] education-section section-mist bg-[#eff4ff]">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <SectionHeading eyebrow="The academic chapters" title={<>Learning, one chapter<br className="desktop-only" /> at a time.</>} number="03" description="Milestones from school in Satkhira to medical studies in Dhaka — and a future still taking shape." />
        <div className="timeline-wrap" ref={ref}>
          <div className="timeline-rail" aria-hidden="true"><motion.span style={reduced ? { scaleY: 1 } : { scaleY: lineProgress }} /></div>
          {educationData.map((item, index) => (
            <motion.article
              key={item.year}
              className={`timeline-row relative grid min-h-[205px] grid-cols-[minmax(0,1fr)_68px_minmax(0,1fr)] items-center max-[640px]:min-h-[auto] max-[640px]:grid-cols-[38px_minmax(0,1fr)] max-[640px]:mb-[15px] ${index % 2 === 0 ? "timeline-row--left" : "timeline-row--right"} ${item.kind === "future" ? "timeline-row--future" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduced ? 0.01 : 0.72, delay: reduced ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-side timeline-side--left">{index % 2 === 0 && <TimelineCard {...item} isFuture={item.kind === "future"} />}</div>
              <div className="timeline-center"><span className="timeline-dot"><i /></span><span className="timeline-mobile-year">{item.year}</span></div>
              <div className="timeline-side timeline-side--right">{index % 2 !== 0 && <TimelineCard {...item} isFuture={item.kind === "future"} />}</div>
            </motion.article>
          ))}
        </div>
        <Reveal className="timeline-footnote" delay={0.2}><span className="footnote-icon"><BookOpen size={15} /></span><span>Every milestone is a beginning in its own way.</span><ArrowDownRight size={16} /></Reveal>
      </div>
    </section>
  );
}

const whyPrompts = [
  { number: "01", title: "Why I chose Homeopathy", copy: "Add Tasneem's own reflection on what first drew her to this path." },
  { number: "02", title: "What inspires me", copy: "Share the people, ideas, or experiences that keep this curiosity alive." },
  { number: "03", title: "My view of healthcare", copy: "A personal statement about the kind of care Tasneem hopes to support." },
  { number: "04", title: "My future vision", copy: "Describe the impact she hopes to make as her learning continues." },
];

export function WhyHomeopathy() {
  return (
    <section id="why" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] why-section section-navy bg-navy text-white">
      <div className="why-orbit why-orbit-one" aria-hidden="true" /><div className="why-orbit why-orbit-two" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)] why-container">
        <SectionHeading eyebrow="A story still unfolding" title={<>Why <em>Homeopathy?</em></>} number="05" dark description="This is a space for Tasneem&apos;s own reasons, inspirations, and hopes — ready to be shaped in her words." />
        <div className="why-body grid grid-cols-[minmax(0,.86fr)_minmax(0,1.14fr)] items-center gap-[74px] max-[900px]:gap-[35px] max-[640px]:grid-cols-1 max-[640px]:gap-[25px]">
          <Reveal className="why-manifesto" x={-26}>
            <span className="why-spark">✳</span>
            <p>My reason is a story<br />still being <em>written.</em></p>
            <div className="why-manifesto-foot"><span className="why-rule" /><span>PERSONAL REFLECTION · EDITABLE</span></div>
          </Reveal>
          <div className="why-prompt-list">
            {whyPrompts.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08} x={25}>
                <article className="why-prompt">
                  <span className="why-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="why-bottom-note"><span>AN OPEN PAGE</span><span>—</span><span>THE NEXT CHAPTER IS HERS TO WRITE</span></div>
    </section>
  );
}

export function LearningSubjects() {
  return (
    <section id="learning" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] learning-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="learning-heading-row flex items-end justify-between gap-[30px] max-[640px]:block">
          <SectionHeading eyebrow="Curiosity in practice" title={<>What I&apos;m <em>learning.</em></>} number="06" description="A living list of subjects, questions, and ideas to keep exploring." />
          <Reveal className="learning-side-note flex items-center gap-[13px] mb-[54px] max-[640px]:mb-[24px]" delay={0.15}><span className="learning-side-icon"><BookOpen size={16} /></span><span>Keep learning.<br /><em>Stay curious.</em></span></Reveal>
        </div>
        <div className="subject-grid grid grid-cols-5 gap-[13px] max-[1120px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-[9px]">
          {subjectsData.map((subject, index) => (
            <Reveal key={subject.name} className="flex" delay={index * 0.08} y={32}>
              <article className="subject-card">
                {subject.image && <div className="subject-card-image" aria-hidden="true"><LocalPhoto src={subject.image} sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 220px" /></div>}
                <div className="subject-card-top"><span className="subject-index">{subject.number} / 05</span><span className="subject-icon"><Icon name={subject.icon} size={22} /></span></div>
                <h3>{subject.name}</h3>
                <p>{subject.note}</p>
                <div className="interest-row"><span>Interest · editable</span><span>{subject.interest}%</span></div>
                <div className="interest-track" aria-label={`Editable interest placeholder: ${subject.interest} percent`}><motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: subject.interest / 100 }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.07 + 0.15, ease: [0.22, 1, 0.36, 1] }} /></div>
                <span className="subject-card-arrow"><ArrowUpRight size={16} /></span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="learning-foot"><span className="learning-foot-mark">✳</span><span>Subjects and interest levels are editable placeholders.</span></Reveal>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] achievements-section section-bluewash bg-[#f6f8ff]">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <SectionHeading eyebrow="Little by little, milestone by milestone" title={<>Moments worth <em>remembering.</em></>} number="07" description="A place to celebrate real achievements as they happen — no awards or milestones have been assumed." />
        <div className="achievement-track flex snap-x snap-mandatory gap-[14px] overflow-x-auto mx-[-4px] p-[7px_4px_20px] max-[640px]:gap-[10px] max-[640px]:mr-[-19px] max-[640px]:pr-[19px]" aria-label="Achievement placeholders; scroll horizontally to explore">
          {achievementsData.map((item, index) => (
            <Reveal key={item.mark} delay={index * 0.07} y={26}>
              <article className={`achievement-card achievement-card-${index + 1} ${item.image ? "achievement-card--with-image" : ""}`}>
                {item.image && <div className="achievement-image" aria-hidden="true"><LocalPhoto src={item.image} sizes="(max-width: 640px) 82vw, (max-width: 1024px) 40vw, 260px" /></div>}
                <div className="achievement-card-top"><span>{item.category}</span><span className="achievement-mark">{item.mark}</span></div>
                <div className="achievement-ornament" aria-hidden="true"><span /><span /><span /></div>
                <h3>{item.title}</h3><p>{item.note}</p>
                <span className="achievement-add"><span>ADD A REAL MILESTONE</span><ArrowUpRight size={15} /></span>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="horizontal-hint"><MoveDownRight size={14} /> Swipe or scroll to explore</p>
      </div>
    </section>
  );
}

export function ValuesSection() {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const reduced = useReducedMotion();
  return (
    <section id="values" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] values-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="values-intro flex items-end justify-between gap-[30px] max-[640px]:items-start max-[380px]:block">
          <SectionHeading eyebrow="A quiet compass · editable aspirations" title={<>What kind of doctor<br />do I hope to <em>be?</em></>} number="08" description="Qualities to grow toward—not claims about professional practice today. Tap a card to add a personal reflection." />
          <Reveal className="values-stamp" scale={0.9}><span className="values-stamp-ring">✳ &nbsp; A LIFE IN PROGRESS &nbsp; ✳</span><strong>T.</strong><span>LEARN WITH CARE</span></Reveal>
        </div>
        <div className="values-grid grid grid-cols-3 gap-[12px] max-[1120px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-[9px]">
          {valuesData.map((value, index) => {
            const isActive = activeValue === value.name;
            return (
              <Reveal key={value.name} className="flex" delay={index * 0.075} y={25}>
                <article className={`value-card ${isActive ? "is-expanded" : ""}`}>
                  <button className="value-card-button" type="button" onClick={() => setActiveValue(isActive ? null : value.name)} aria-expanded={isActive}>
                    <span className="value-icon"><Icon name={value.icon} size={21} /></span>
                    <span className="value-count">0{index + 1}</span>
                    <h3>{value.name}</h3><p>{value.note}</p>
                    <span className="value-hover-line" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && <motion.p className="value-card-detail" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduced ? 0.01 : 0.24 }}>{value.detail}</motion.p>}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
