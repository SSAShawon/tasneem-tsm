"use client";

import Image from "next/image";
import {
  Activity,
  Apple,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  BookMarked,
  BookOpen,
  BookOpenText,
  BrainCircuit,
  Coffee,
  Building2,
  CakeSlice,
  Check,
  ChevronDown,
  CircleDot,
  Clapperboard,
  CloudSun,
  Compass,
  CupSoda,
  Download,
  Eye,
  Flower2,
  FlaskConical,
  GraduationCap,
  HandHeart,
  Heart,
  Hourglass,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Moon,
  Music2,
  Palette,
  PawPrint,
  Pencil,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  StickyNote,
  Sprout,
  Sunrise,
  Sunset,
  MoonStar,
  NotebookPen,
  HeartHandshake,
  Sun,
  Utensils,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import type { ReactNode, MouseEvent } from "react";
import type { ShowcaseArtwork } from "@/data/portfolio";

export function LocalPhoto({
  src,
  alt = "",
  className="",
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw",
  priority = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={(event) => { event.currentTarget.style.display = "none"; }}
    />
  );
}

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  apple: Apple,
  arrowDownRight: ArrowDownRight,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  asterisk: Asterisk,
  book: BookOpen,
  bookMarked: BookMarked,
  bookText: BookOpenText,
  body: BrainCircuit,
  brain: BrainCircuit,
  building: Building2,
  cake: CakeSlice,
  check: Check,
  chevronDown: ChevronDown,
  circle: CircleDot,
  film: Clapperboard,
  cloud: CloudSun,
  compass: Compass,
  coffee: Coffee,
  cup: CupSoda,
  download: Download,
  eye: Eye,
  flower: Flower2,
  flask: FlaskConical,
  graduation: GraduationCap,
  hand: HandHeart,
  heart: Heart,
  heartHandshake: HeartHandshake,
  hourglass: Hourglass,
  leaf: Leaf,
  mail: Mail,
  map: MapPin,
  menu: Menu,
  moon: Moon,
  moonStar: MoonStar,
  music: Music2,
  notebook: NotebookPen,
  notes: StickyNote,
  palette: Palette,
  paw: PawPrint,
  pencil: Pencil,
  shield: ShieldCheck,
  spark: Sparkles,
  stethoscope: Stethoscope,
  plant: Sprout,
  sunrise: Sunrise,
  sunset: Sunset,
  sun: Sun,
  utensils: Utensils,
  x: X,
};

export function Icon({ name, size = 20, strokeWidth = 1.7, className }: { name: string; size?: number; strokeWidth?: number; className?: string }) {
  const IconComponent = iconMap[name] ?? Sparkles;
  return <IconComponent size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}

export function Reveal({
  children,
  className="",
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  blur = 0,
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y, x, scale, filter: blur ? `blur(${blur}px)` : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0.01 : 0.75, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
  number,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  number?: string;
}) {
  return (
    <div className={`section-heading relative max-w-[760px] mb-[51px] max-[640px]:mb-[36px] ${align === "center" ? "mx-auto text-center" : ""} ${dark ? "section-heading--dark" : ""}`}>
      <Reveal className={`section-eyebrow-row flex items-center gap-[10px] mb-[20px] max-[640px]:mb-[16px] ${align === "center" ? "justify-center" : ""}`}>
        {number && <span className={`section-index grid h-[27px] w-[27px] place-items-center rounded-full border border-[rgba(65,105,225,.19)] font-display text-[10px] text-[#7a8ab0] max-[640px]:h-[25px] max-[640px]:w-[25px] ${dark ? "border-[rgba(255,255,255,.2)] text-[rgba(255,255,255,.56)]" : ""}`}>{number}</span>}
        <span className={`eyebrow inline-flex items-center gap-[9px] text-royal text-[9px] font-bold uppercase tracking-[.17em] max-[640px]:text-[8px] max-[640px]:tracking-[.14em] ${dark ? "text-[#9bb5ff]" : ""}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08} y={34} blur={5}>
        <h2 className={`section-title m-0 font-display text-[clamp(42px,5.2vw,68px)] font-normal tracking-[-.052em] leading-[.99] text-ink max-[640px]:text-[clamp(39px,11vw,56px)] max-[640px]:leading-[.98] max-[380px]:text-[38px] ${dark ? "text-white" : ""}`}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16} y={22}>
          <p className={`section-description max-w-[505px] mt-[20px] text-[13px] leading-[1.85] text-[#717b90] max-[640px]:mt-[16px] max-[640px]:text-[11px] max-[640px]:leading-[1.78] ${align === "center" ? "mx-auto" : ""} ${dark ? "[color:rgba(235,241,255,.6)]" : ""}`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export function MagneticLink({
  href,
  children,
  className="",
  variant = "light",
  download,
  target,
  rel,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "light" | "blue" | "outline" | "gold";
  download?: string | boolean;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.25 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || window.matchMedia("(hover: none)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  };

  return (
    <motion.a
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={reduced ? undefined : { x: springX, y: springY }}
      className={`button inline-flex min-h-[50px] items-center justify-center gap-[17px] rounded-full px-[22px] text-[11px] font-semibold cursor-pointer border border-transparent tracking-[.015em] transition-[color,background,border-color,box-shadow,transform] duration-[250ms] ease-[ease] button--${variant} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
    </motion.a>
  );
}

export function PortraitIllustration({ className="", label = "Illustrated portrait placeholder" }: { className?: string; label?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 650" role="img" aria-label={label} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="portrait-bg" x1="52" y1="41" x2="469" y2="625" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDE8FF" />
          <stop offset="1" stopColor="#AFC5F7" />
        </linearGradient>
        <linearGradient id="coat" x1="166" y1="365" x2="360" y2="648" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E5EDFF" />
        </linearGradient>
        <linearGradient id="hair" x1="180" y1="77" x2="367" y2="407" gradientUnits="userSpaceOnUse">
          <stop stopColor="#352A36" />
          <stop offset="1" stopColor="#161A2C" />
        </linearGradient>
        <linearGradient id="skin" x1="214" y1="178" x2="339" y2="365" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFC9AA" />
          <stop offset="1" stopColor="#D99D78" />
        </linearGradient>
        <clipPath id="portrait-clip">
          <path d="M61 34H459C474 34 486 46 486 61V589C486 604 474 616 459 616H61C46 616 34 604 34 589V61C34 46 46 34 61 34Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#portrait-clip)">
        <path fill="url(#portrait-bg)" d="M0 0H520V650H0z" />
        <circle cx="409" cy="116" r="112" fill="#fff" fillOpacity=".28" />
        <circle cx="81" cy="516" r="118" fill="#6B8BE5" fillOpacity=".16" />
        <path d="M400 130c25 11 41 32 49 64" stroke="#fff" strokeOpacity=".72" strokeWidth="2" strokeLinecap="round" />
        <path d="M78 112c21-24 43-37 68-42" stroke="#fff" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" />
        <path d="M114 677c13-143 69-229 153-229 88 0 143 86 154 229H114Z" fill="url(#coat)" />
        <path d="M205 432c10-35 12-62 9-93h94c-4 37-2 65 15 94l-56 64-62-65Z" fill="url(#skin)" />
        <path d="M150 234c-5-95 39-159 117-159 80 0 123 62 117 160l-10 91c-9 69-52 112-105 112-55 0-98-45-106-113l-13-91Z" fill="url(#hair)" />
        <path d="M191 217c0-61 30-107 78-107 54 0 82 45 82 110v86c0 66-34 111-82 111-46 0-78-44-78-111v-89Z" fill="url(#skin)" />
        <path d="M183 236c-19-88 16-161 84-161 69 0 112 51 117 147-14-11-22-20-32-38-27 13-55 18-88 16-29-2-52-10-72-23-1 27-3 44-9 61Z" fill="url(#hair)" />
        <path d="M192 235c-18 10-25 29-22 51 3 19 12 34 25 38l-3-89Z" fill="#322735" />
        <path d="M346 232c18 7 28 25 27 48-1 20-9 36-23 42l-4-90Z" fill="#2B2332" />
        <path d="M222 250c10-8 21-8 31-2" stroke="#554043" strokeWidth="3" strokeLinecap="round" />
        <path d="M294 248c10-8 21-8 31-2" stroke="#554043" strokeWidth="3" strokeLinecap="round" />
        <path d="M230 269c7 0 11 4 11 10s-4 10-11 10-11-4-11-10 4-10 11-10ZM306 269c7 0 11 4 11 10s-4 10-11 10-11-4-11-10 4-10 11-10Z" fill="#27304C" />
        <circle cx="233" cy="272" r="2.4" fill="white" /><circle cx="309" cy="272" r="2.4" fill="white" />
        <path d="M268 276c-3 17-7 31-13 44 7 6 15 8 24 5" stroke="#B97F68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M249 342c11 9 26 11 41 2" stroke="#9E5E60" strokeWidth="3" strokeLinecap="round" />
        <path d="M208 372c20 30 39 43 60 43 23 0 45-15 62-45" fill="#F2CDB4" />
        <path d="M171 485c30-20 65-29 96-29 33 0 68 10 100 32l31 189H122l49-192Z" fill="url(#coat)" />
        <path d="m226 454 42 47-37 58-36-78 31-27ZM302 454l-34 47 37 58 39-78-42-27Z" fill="#4169E1" fillOpacity=".88" />
        <path d="M267 503v129" stroke="#D7E0F5" strokeWidth="2" />
        <path d="M174 484c-21 21-31 58-36 104M361 483c22 20 32 58 36 105" stroke="#D4DFF6" strokeWidth="3" strokeLinecap="round" />
        <path d="M313 460c22 10 38 27 47 49-25 30-35 77-36 137" stroke="#9FB4E8" strokeWidth="3" strokeLinecap="round" />
        <path d="M313 460c12 2 25 10 36 23l-23 30-17-53 4 0Z" fill="#fff" />
        <path d="M331 515c24 8 31 28 25 49-4 16-15 28-29 28" stroke="#4169E1" strokeWidth="4" strokeLinecap="round" />
        <circle cx="326" cy="589" r="7" fill="#D4AF37" />
        <circle cx="179" cy="554" r="4" fill="#D4AF37" fillOpacity=".8" />
        <path d="M432 437c12-13 23-18 34-19M61 432c10 2 20 8 27 17" stroke="#fff" strokeOpacity=".72" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path d="M61 34H459C474 34 486 46 486 61V589C486 604 474 616 459 616H61C46 616 34 604 34 589V61C34 46 46 34 61 34Z" stroke="#fff" strokeOpacity=".75" strokeWidth="2" />
    </svg>
  );
}

const paletteClasses: Record<string, string> = {
  lilac: "art-palette-lilac",
  blue: "art-palette-blue",
  peach: "art-palette-peach",
  sage: "art-palette-sage",
  sand: "art-palette-sand",
  rose: "art-palette-rose",
  olive: "art-palette-olive",
  cream: "art-palette-cream",
  portrait: "art-palette-portrait",
};

function Motif({ type }: { type: ShowcaseArtwork["motif"] }) {
  if (type === "orbit") {
    return <svg className="art-motif art-motif-orbit" viewBox="0 0 260 260" aria-hidden="true"><circle cx="130" cy="130" r="74" /><circle cx="130" cy="130" r="48" /><ellipse cx="130" cy="130" rx="110" ry="44" transform="rotate(-36 130 130)" /><circle className="motif-dot" cx="211" cy="77" r="8" /><path d="M74 176c36-61 78-93 130-97" /></svg>;
  }
  if (type === "line") {
    return <svg className="art-motif art-motif-line" viewBox="0 0 260 260" aria-hidden="true"><path d="M54 190c28-70 39-125 72-125 23 0 27 42 48 42 18 0 25-27 46-27" /><path d="M66 213c32-49 52-58 72-58 34 0 47 35 72 22" /><circle cx="127" cy="65" r="5" /><circle cx="174" cy="108" r="4" /><path d="M131 65c-4 45 4 67 20 90" /></svg>;
  }
  if (type === "arch") {
    return <svg className="art-motif art-motif-arch" viewBox="0 0 260 260" aria-hidden="true"><path d="M61 210V115a69 69 0 0 1 138 0v95" /><path d="M84 210v-90a46 46 0 0 1 92 0v90" /><path d="M46 210h168M130 45v35" /><circle cx="130" cy="36" r="6" /></svg>;
  }
  if (type === "petal" || type === "bloom") {
    const count = type === "bloom" ? 8 : 6;
    return <svg className={`art-motif ${type === "bloom" ? "art-motif-bloom" : "art-motif-petal"}`} viewBox="0 0 260 260" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => <ellipse key={index} cx="130" cy="88" rx={type === "bloom" ? 23 : 29} ry={type === "bloom" ? 53 : 61} transform={`rotate(${(360 / count) * index} 130 130)`} />)}
      <circle className="motif-core" cx="130" cy="130" r="17" />
      <path d="M130 147c0 30-11 46-28 72M116 181c-22-12-38-12-52-7M131 196c22-17 39-20 56-16" />
    </svg>;
  }
  return <svg className="art-motif art-motif-botanical" viewBox="0 0 260 260" aria-hidden="true"><path d="M128 222c12-54 13-116-1-181M128 172c-40-4-70-23-79-57 39-7 72 10 79 57ZM131 141c36-8 65-32 70-68-36 0-64 22-70 68ZM128 108c-30-8-51-27-56-56 30-1 52 18 56 56ZM132 192c32-4 52 5 66 21-24 12-50 5-66-21Z" /><circle cx="127" cy="40" r="5" /></svg>;
}

export function ArtworkVisual({ artwork, className="", showImage = true }: { artwork: ShowcaseArtwork; className?: string; showImage?: boolean }) {
  return (
    <div className={`art-visual ${paletteClasses[artwork.palette] ?? "art-palette-blue"} ${className}`}>
      <div className="art-grain" aria-hidden="true" />
      <div className="art-orb art-orb-one" aria-hidden="true" />
      <div className="art-orb art-orb-two" aria-hidden="true" />
      <Motif type={artwork.motif} />
      {showImage && artwork.image && (
        <LocalPhoto
          src={artwork.image}
          alt={artwork.alt ?? ""}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, (max-width: 1440px) 32vw, 28vw"
          className="art-real-image"
        />
      )}
    </div>
  );
}
