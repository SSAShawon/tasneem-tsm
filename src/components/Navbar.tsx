"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Learning", href: "#learning", id: "learning" },
  { label: "Currently", href: "#currently", id: "currently" },
  { label: "Study desk", href: "#studydesk", id: "studydesk" },
  { label: "Creativity", href: "#creativity", id: "creativity" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Dreams", href: "#dreams", id: "dreams" },
  { label: "Future", href: "#future-doctor", id: "future-doctor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = [...links.map((link) => document.getElementById(link.id)), document.getElementById("contact")].filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visibleEntries[0]) setActive(visibleEntries[0].target.id);
    }, { rootMargin: "-28% 0px -54% 0px", threshold: [0, 0.15, 0.35, 0.65] });
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header fixed top-[13px] right-0 left-0 z-[100] text-white transition-colors duration-300 max-[900px]:top-[10px] ${scrolled ? "is-scrolled" : ""}`}>
        <nav className={`nav-shell mx-auto flex h-[66px] w-[min(1392px,calc(100%_-_40px))] items-center justify-between gap-6 rounded-[17px] border border-transparent px-[22px] transition-[background,border-color,box-shadow,height] duration-300 ease-[ease] max-[1120px]:w-[calc(100%_-_28px)] max-[1120px]:gap-[15px] max-[1120px]:px-[17px] max-[900px]:h-[58px] max-[900px]:rounded-[15px] max-[640px]:h-[54px] max-[640px]:w-[calc(100%_-_22px)] max-[640px]:px-[13px] ${scrolled ? "bg-[rgba(255,255,255,.83)] border-[rgba(18,42,91,.1)] shadow-[0_10px_35px_rgba(21,39,77,.09)] backdrop-blur-[18px]" : ""}`} aria-label="Main navigation">
          <a href="#home" className="brand-mark inline-flex min-w-[195px] items-center gap-[11px] max-[900px]:[min-width:auto]" aria-label="Tasneem — home" onClick={closeMenu}>
            <span className="brand-monogram grid h-[36px] w-[36px] place-items-center rounded-full max-[640px]:h-[33px] max-[640px]:w-[33px] max-[640px]:text-[20px]">T<span>.</span></span>
            <span className="brand-name">tasneem<span> / portfolio</span></span>
          </a>

          <div className="nav-links flex h-full items-center gap-[clamp(12px,1.7vw,25px)] max-[1120px]:gap-[12px] max-[900px]:hidden" aria-label="Portfolio sections">
            {links.map((link) => (
              <a key={link.id} href={link.href} aria-current={active === link.id ? "location" : undefined} className={`nav-link relative inline-flex h-full items-center text-[10px] tracking-[.035em] max-[1120px]:text-[9px] ${active === link.id ? "is-active" : ""}`}>
                <span>{link.label}</span>
                {active === link.id && <motion.i className="nav-active-line absolute bottom-[13px] left-0 right-0 h-[2px] rounded-[2px] bg-gold" layoutId="nav-active" transition={{ type: "spring", stiffness: 440, damping: 34 }} />}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-contact flex h-[39px] items-center gap-[9px] rounded-full px-[13px] text-[10px] tracking-[.02em] max-[900px]:hidden">
            <span>Let&apos;s connect</span><ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <ThemeToggle />

          <button className="mobile-menu-toggle hidden h-[44px] w-[44px] cursor-pointer place-items-center rounded-full border border-[rgba(255,255,255,.32)] bg-[rgba(255,255,255,.08)] text-inherit max-[900px]:grid max-[640px]:h-[41px] max-[640px]:w-[41px]" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={menuOpen ? "close" : "open"} initial={{ opacity: 0, rotate: -30, scale: 0.8 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 30, scale: 0.8 }} transition={{ duration: reduced ? 0.01 : 0.16 }}>
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0 round 24px)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 24px)" }}
            exit={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0 round 24px)" }}
            transition={{ duration: reduced ? 0.01 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-top"><span>EXPLORE THE PORTFOLIO</span><span>01 — 12</span></div>
            <div className="mobile-menu-links">
              {links.map((link, index) => (
                <motion.a key={link.id} href={link.href} onClick={closeMenu} aria-current={active === link.id ? "location" : undefined} className={active === link.id ? "is-active" : ""} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : 0.05 + index * 0.035, duration: reduced ? 0.01 : 0.27 }}>
                  <span className="mobile-link-number">{String(index + 1).padStart(2, "0")}</span><span>{link.label}</span><ArrowUpRight size={18} aria-hidden="true" />
                </motion.a>
              ))}
              <motion.a href="#contact" onClick={closeMenu} aria-current={active === "contact" ? "location" : undefined} className={active === "contact" ? "is-active" : ""} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : 0.05 + links.length * 0.035, duration: reduced ? 0.01 : 0.27 }}>
                <span className="mobile-link-number">12</span><span>Contact</span><ArrowUpRight size={18} aria-hidden="true" />
              </motion.a>
            </div>
            <div className="mobile-menu-foot"><span>Satkhira <i>→</i> Dhaka</span><span>Future doctor, in progress.</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
