"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowUpRight, Download, Eye, FileText, Mail, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cvContent, futureDoctorData } from "@/data/portfolio";
import { Icon, LocalPhoto, MagneticLink, PortraitIllustration, Reveal, SectionHeading } from "@/components/UI";
import { portfolioImages } from "@/data/portfolio";

function FutureGrowthPath() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 44%"] });
  const progress = useTransform(scrollYProgress, [0, .92], [0, 1]);
  useMotionValueEvent(progress, "change", (value) => {
    setActiveIndex(Math.min(futureDoctorData.length - 1, Math.floor(value * futureDoctorData.length)));
  });

  return (
    <div className="future-growth" ref={ref}>
      <div className="future-growth-heading"><span>THE PATH TAKES TIME</span><span>ASPIRATION · NOT A CURRENT TITLE</span></div>
      <div className="future-growth-track relative grid grid-cols-4 gap-[15px] max-[640px]:grid-cols-1 max-[640px]:gap-[4px] max-[640px]:pl-[5px]">
        <div className="future-growth-rail future-growth-rail--horizontal" aria-hidden="true"><motion.span style={reduced ? { scaleX: 1 } : { scaleX: progress }} /></div>
        <div className="future-growth-rail future-growth-rail--vertical" aria-hidden="true"><motion.span style={reduced ? { scaleY: 1 } : { scaleY: progress }} /></div>
        {futureDoctorData.map((stage, index) => (
          <motion.article key={stage.id} className={`future-growth-step relative z-[1] min-h-[146px] p-[0_11px_12px] max-[900px]:px-[6px] max-[640px]:grid max-[640px]:grid-cols-[48px_26px_1fr] max-[640px]:grid-rows-[auto_auto] max-[640px]:items-center max-[640px]:gap-x-[9px] max-[640px]:min-h-[85px] max-[640px]:p-[8px_0] ${activeIndex === index ? "is-active" : ""}`} onViewportEnter={() => setActiveIndex((current) => Math.max(current, index))} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: reduced ? .01 : .55, delay: index * .07 }}>
            <span className="future-growth-photo" aria-hidden="true"><LocalPhoto src={stage.image} sizes="(max-width: 640px) 40vw, 25vw" /></span>
            <span className="future-growth-icon"><Icon name={stage.icon} size={19} /></span><span className="future-growth-number">0{index + 1}</span><h3>{stage.title}</h3><p>{stage.note}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export function FutureDoctor() {
  return (
    <section id="future-doctor" className="future-section section-navy bg-navy text-white">
      <div className="future-ambient future-ambient-one" aria-hidden="true" /><div className="future-ambient future-ambient-two" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)] future-container grid grid-cols-[minmax(0,1fr)_minmax(335px,440px)] items-center gap-x-[clamp(50px,8vw,120px)] max-[1120px]:gap-x-[60px] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(270px,335px)] max-[900px]:gap-[45px] max-[640px]:grid-cols-1 max-[640px]:gap-[36px]">
        <div className="future-copy">
          <Reveal className="future-eyebrow"><span className="future-eyebrow-dot" /> 15 · THE VISION AHEAD · EDITABLE DRAFT</Reveal>
          <Reveal delay={0.08} y={42} blur={7}><h2>The Doctor<br />I Want to <em>Become.</em></h2></Reveal>
          <Reveal delay={0.16} y={24}><p className="future-statement">I hope to become a doctor who listens closely, treats each person with respect, and keeps learning throughout a lifetime of care.</p></Reveal>
          <Reveal delay={0.22} className="future-points">
            <span><i /> A personal vision to keep shaping</span>
            <span><i /> Rooted in care, curiosity, and responsibility</span>
          </Reveal>
          <Reveal delay={0.28} className="future-quote"><span className="future-quote-mark">“</span><p>My future is not a title I&apos;ve reached.<br /><em>It&apos;s a promise I&apos;m learning to keep.</em></p><span className="future-quote-rule" /></Reveal>
        </div>
        <motion.div className="future-portrait-wrap" initial={{ opacity: 0, scale: 0.92, clipPath: "inset(0 0 100% 0 round 200px 200px 20px 20px)" }} whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0 round 200px 200px 20px 20px)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
          <div className="future-portrait-glow" aria-hidden="true" />
          <div className="future-portrait-frame">
            <PortraitIllustration className="future-portrait" label="Illustrated future-doctor portrait fallback" />
            <LocalPhoto src={portfolioImages.futureDoctor.futureDoctor} alt="Future-career portrait placeholder" className="future-portrait-photo" sizes="(max-width: 640px) 72vw, (max-width: 1024px) 38vw, 420px" />
          </div>
          <div className="future-portrait-label"><span>THE PERSON I AM BECOMING</span><span>✳</span></div>
          <div className="future-side-note">CARE · CURIOSITY · GROWTH</div>
        </motion.div>
        <FutureGrowthPath />
        <Reveal className="future-signoff" delay={0.3}><span className="future-signoff-line" /><span><strong>Tasneem</strong><small>Future Homeopathic Doctor</small></span><span className="future-signoff-mark">T.</span></Reveal>
      </div>
      <div className="future-bottom-label"><span>STILL LEARNING</span><i /><span>STILL BECOMING</span></div>
    </section>
  );
}

function ResumeModal({ close }: { close: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", onKey); };
  }, [close]);

  return (
    <motion.div className="cv-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <motion.div className="cv-modal" role="dialog" aria-modal="true" aria-labelledby="cv-modal-title" initial={reduced ? false : { opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: reduced ? 0.01 : 0.3 }}>
        <button ref={closeRef} className="cv-modal-close" type="button" aria-label="Close CV preview" onClick={close}><X size={18} /></button>
        <div className="cv-paper">
          <div className="cv-paper-head"><span className="cv-monogram">T.</span><span className="cv-placeholder-tag">EDITABLE PLACEHOLDER</span></div>
          <h2 id="cv-modal-title">Tasneem</h2><p className="cv-profession">Homeopathy Student <span>·</span> Future Doctor</p>
          <div className="cv-contact-row"><span>Satkhira → Dhaka</span><span>email@example.com</span></div>
          <div className="cv-profile"><span className="cv-section-label">PROFILE</span><p>{cvContent.profile}</p></div>
          <div className="cv-preview-grid grid grid-cols-[1.3fr_.7fr] gap-[21px_28px] mt-[23px]">
            <div><span className="cv-section-label">EDUCATION</span><ul>{cvContent.education.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><span className="cv-section-label">SKILLS</span><ul>{cvContent.skills.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><span className="cv-section-label">ACTIVITIES</span><ul>{cvContent.activities.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><span className="cv-section-label">INTERESTS</span><ul>{cvContent.interests.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><span className="cv-section-label">ACHIEVEMENTS</span><ul>{cvContent.achievements.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <div className="cv-paper-foot">Replace placeholders with verified details before sharing.</div>
        </div>
        <a className="cv-modal-download" href="/tasneem-cv-placeholder.pdf" download><Download size={16} /> Download placeholder CV</a>
      </motion.div>
    </motion.div>
  );
}

export function ResumeSection() {
  const [showCv, setShowCv] = useState(false);
  return (
    <section id="resume" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] resume-section section-paper bg-white">
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="resume-layout grid grid-cols-[minmax(0,1fr)_minmax(310px,.75fr)] items-center gap-x-[95px] max-[1120px]:gap-x-[54px] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(260px,.75fr)] max-[900px]:gap-[45px] max-[640px]:grid-cols-1 max-[640px]:gap-[35px]">
          <div className="resume-copy">
            <SectionHeading eyebrow="A professional snapshot" title={<>Growing skills.<br /><em>Growing purpose.</em></>} number="16" description="A living CV, ready to grow alongside Tasneem&apos;s education and experience." />
            <Reveal className="resume-actions" delay={0.16}>
              <button className="button inline-flex min-h-[50px] items-center justify-center gap-[17px] rounded-full px-[22px] text-[11px] font-semibold cursor-pointer border border-transparent tracking-[.015em] transition-[color,background,border-color,box-shadow,transform] duration-[250ms] ease-[ease] button--blue" type="button" onClick={() => setShowCv(true)}><span>View CV</span><Eye size={16} /></button>
              <a className="button inline-flex min-h-[50px] items-center justify-center gap-[17px] rounded-full px-[22px] text-[11px] font-semibold cursor-pointer border border-transparent tracking-[.015em] transition-[color,background,border-color,box-shadow,transform] duration-[250ms] ease-[ease] button--outline" href="/tasneem-cv-placeholder.pdf" download><span>Download CV</span><Download size={16} /></a>
            </Reveal>
            <Reveal className="resume-disclaimer" delay={0.2}><FileText size={15} /><span>The CV is a placeholder. Replace details with verified information before sharing.</span></Reveal>
          </div>
          <Reveal className="resume-sheet-wrap" x={30}>
            <div className="resume-sheet-shadow" />
            <div className="resume-sheet">
              <div className="resume-sheet-header"><span className="resume-sheet-monogram">T.</span><span className="resume-sheet-label">CURRICULUM VITAE</span><span className="resume-sheet-dot" /></div>
              <div className="resume-sheet-photo" aria-hidden="true"><LocalPhoto src={portfolioImages.cv.preview} sizes="80px" /></div>
              <h3>Tasneem</h3><p>Homeopathy Student<br />Future Doctor</p>
              <div className="resume-sheet-divider" />
              <div className="resume-sheet-lines"><span /><span /><span className="short" /><span className="space" /><span /><span className="medium" /><span /><span className="short" /></div>
              <div className="resume-sheet-stamp">WORK<br />IN<br />PROGRESS</div>
              <div className="resume-sheet-footer"><span>Satkhira → Dhaka</span><span>EDITABLE PLACEHOLDER</span></div>
            </div>
          </Reveal>
          <div className="resume-topics" aria-label="CV sections">
            {["Education", "Skills", "Activities", "Interests", "Achievements"].map((topic, index) => <Reveal key={topic} delay={index * 0.04}><span className="resume-topic"><i>0{index + 1}</i>{topic}</span></Reveal>)}
          </div>
        </div>
      </div>
      <AnimatePresence>{showCv && <ResumeModal close={() => setShowCv(false)} />}</AnimatePresence>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] contact-section section-mist bg-[#eff4ff]">
      <div className="contact-light contact-light-one" aria-hidden="true" /><div className="contact-light contact-light-two" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)] contact-container grid grid-cols-[minmax(0,1fr)_minmax(330px,.78fr)] items-center gap-x-[100px] max-[1120px]:gap-x-[54px] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(290px,.85fr)] max-[900px]:gap-[44px] max-[640px]:grid-cols-1 max-[640px]:gap-[34px]">
        <div className="contact-main">
          <Reveal className="contact-kicker"><span className="contact-kicker-line" /> 17 · A NEW CONVERSATION STARTS HERE</Reveal>
          <Reveal delay={0.08} y={38} blur={4}><h2>Let&apos;s keep<br />in <em>touch.</em></h2></Reveal>
          <Reveal delay={0.16} y={18}><p>For a thoughtful conversation, a professional connection, or simply to say hello.</p></Reveal>
          <Reveal delay={0.22}><MagneticLink href="mailto:email@example.com" variant="blue">Write me a note</MagneticLink></Reveal>
        </div>
        <Reveal className="contact-card" delay={0.13} x={30}>
          <div className="contact-card-top"><span>OPEN TO CONNECTION</span><span className="contact-online-dot" /></div>
          <div className="contact-detail grid grid-cols-[39px_1fr_15px] items-center gap-[12px] py-[18px_0]"><span className="contact-detail-icon"><Mail size={18} /></span><span className="flex min-w-0 flex-col gap-[5px]"><small>EMAIL</small><a href="mailto:email@example.com">email@example.com</a></span><ArrowUpRight size={15} /></div>
          <div className="contact-detail grid grid-cols-[39px_1fr_15px] items-center gap-[12px] py-[18px_0]"><span className="contact-detail-icon"><MapPin size={18} /></span><span className="flex min-w-0 flex-col gap-[5px]"><small>LOCATION</small><strong>Satkhira <i>→</i> Dhaka</strong></span><ArrowUpRight size={15} /></div>
          <div className="contact-links"><span>PROFESSIONAL & SOCIAL LINKS</span><div className="mt-[10px] flex flex-wrap gap-[7px]"><span className="contact-link-placeholder">Add LinkedIn URL <i>↗</i></span><span className="contact-link-placeholder">Add social link <i>↗</i></span></div></div>
          <div className="contact-card-foot"><span>AVAILABLE FOR A HELLO</span><span>✳</span></div>
        </Reveal>
        <div className="contact-bottom"><span>Satkhira <i>→</i> Dhaka</span><span>One step at a time.</span></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
        <div className="footer-top relative grid grid-cols-[1.2fr_1fr_auto] items-start gap-[40px] pb-[43px] max-[640px]:grid-cols-[1fr_auto] max-[640px]:gap-[27px_15px] max-[640px]:pb-[29px]">
          <div className="footer-brand"><a href="#home" className="footer-logo">T<span>.</span></a><div><strong>Tasneem</strong><span>Homeopathy Student <i>·</i> Future Doctor</span><small>Satkhira <i>→</i> Dhaka</small></div></div>
          <div className="footer-nav"><span>EXPLORE</span><div><a href="#about">About</a><a href="#education">Education</a><a href="#journey">Journey</a><a href="#gallery">Gallery</a><a href="#dreams">Dreams</a><a href="#contact">Contact</a></div></div>
          <a href="#home" className="back-top" aria-label="Back to top"><span>BACK TO TOP</span><span className="back-top-arrow">↑</span></a>
        </div>
        <div className="footer-bottom relative flex justify-between gap-[20px] pt-[17px] max-[640px]:grid max-[640px]:grid-cols-[1fr_auto] max-[640px]:gap-[10px]"><span>© {new Date().getUTCFullYear()} Tasneem. A personal portfolio.</span><span className="max-[640px]:col-start-1 max-[640px]:row-start-2">Made with care <i>✳</i> Always becoming.</span><a className="max-[640px]:col-start-2 max-[640px]:row-start-1 max-[640px]:text-right" href="#home">Return to the beginning ↑</a></div>
      </div>
    </footer>
  );
}
