"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useReducedMotion } from "@/components/useReducedMotion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { galleryCategories, galleryData, type GalleryItem } from "@/data/portfolio";
import { ArtworkVisual, Reveal, SectionHeading } from "@/components/UI";

function toArtwork(item: GalleryItem) {
  return { title: item.title, subtitle: item.category, alt: item.alt, palette: item.palette, motif: item.motif, image: item.image };
}

export default function Gallery() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const reduced = useReducedMotion();
  const visibleItems = category === "All" ? galleryData : galleryData.filter((item) => item.category === category);
  const selectedIndex = selected ? galleryData.findIndex((item) => item.id === selected.id) : -1;

  useEffect(() => {
    if (!selected) return;
    document.body.classList.add("modal-open");
    window.setTimeout(() => closeRef.current?.focus(), 40);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected(galleryData[(selectedIndex + 1) % galleryData.length]);
      if (event.key === "ArrowLeft") setSelected(galleryData[(selectedIndex - 1 + galleryData.length) % galleryData.length]);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, selectedIndex]);

  return (
    <>
      <section id="gallery" className="relative scroll-mt-[82px] overflow-clip py-[120px] max-[900px]:py-[94px] max-[640px]:py-[78px] gallery-section section-paper bg-white">
        <div className="relative z-[1] mx-auto w-[calc(100%_-_80px)] max-w-page max-[1120px]:w-[calc(100%_-_56px)] max-[1120px]:max-w-[1060px] max-[900px]:w-[calc(100%_-_48px)] max-[640px]:w-[calc(100%_-_38px)] max-[380px]:w-[calc(100%_-_32px)]">
          <div className="gallery-heading-row flex items-end justify-between gap-[25px] max-[640px]:items-start">
            <SectionHeading eyebrow="Collected along the way" title={<>A gallery of <em>chapters.</em></>} number="14" description="A growing collection of portraits, outings, nature, and creative details." />
            <Reveal className="gallery-count flex items-center gap-[10px] mr-[4px] mb-[51px] max-[640px]:mt-[9px] max-[640px]:mr-0 max-[640px]:mb-0 max-[640px]:gap-[6px]" delay={0.14}><strong>{String(galleryData.length).padStart(2, "0")}</strong><span>FRAMES<br />& COUNTING</span></Reveal>
          </div>
          <div className="gallery-filter-wrap" role="group" aria-label="Filter gallery by category">
            {galleryCategories.map((filter) => (
              <button key={filter} type="button" className={`gallery-filter ${category === filter ? "is-active" : ""}`} onClick={() => setCategory(filter)} aria-pressed={category === filter}>
                <span>{filter}</span><i>{filter === "All" ? galleryData.length : galleryData.filter((item) => item.category === filter).length}</i>
              </button>
            ))}
          </div>
          <LayoutGroup>
            <motion.div layout className="gallery-grid grid grid-cols-4 auto-rows-[102px] grid-flow-dense gap-[12px] max-[900px]:grid-cols-3 max-[900px]:auto-rows-[99px] max-[640px]:grid-cols-2 max-[640px]:auto-rows-[82px] max-[640px]:gap-[8px] max-[380px]:auto-rows-[74px]">
              <AnimatePresence mode="popLayout">
                {visibleItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    layout
                    type="button"
                    className={`gallery-tile relative min-w-0 p-0 overflow-hidden border-0 rounded-[13px] bg-[#eaf0ff] cursor-zoom-in isolate text-left ${item.height === "tall" ? "row-span-4" : item.height === "medium" ? "row-span-3" : "row-span-2"}`}
                    onClick={() => setSelected(item)}
                    aria-label={`View ${item.title}, ${item.category}`}
                    data-cursor="view"
                    initial={reduced ? false : { opacity: 0, scale: 0.94, y: 18, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.94, transition: { duration: reduced ? 0.01 : 0.18 } }}
                    transition={{ duration: reduced ? 0.01 : 0.52, delay: reduced ? 0 : (index % 4) * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ArtworkVisual artwork={toArtwork(item)} className="gallery-visual" />
                    <span className="gallery-tile-overlay"><span className="gallery-tile-category">{item.category}</span><span className="gallery-tile-title">{item.title}</span><span className="gallery-open-icon"><ArrowUpRight size={17} /></span></span>
                    <span className="gallery-tile-index">{String(galleryData.findIndex((galleryItem) => galleryItem.id === item.id) + 1).padStart(2, "0")}</span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
          <Reveal className="gallery-edit-note"><span className="gallery-note-star">✳</span><span>Browse by category or open any frame to view a photo in full.</span></Reveal>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0.01 : 0.22 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
            <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selected.title} gallery image`} initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: reduced ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <button ref={closeRef} className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close gallery image"><X size={20} /></button>
              <div className="lightbox-image" data-cursor="view" onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const startX = touchStartX.current; const delta = startX === null ? 0 : startX - (event.changedTouches[0]?.clientX ?? startX); if (Math.abs(delta) > 48) setSelected(galleryData[(selectedIndex + (delta > 0 ? 1 : -1) + galleryData.length) % galleryData.length]); touchStartX.current = null; }}><ArtworkVisual artwork={toArtwork(selected)} className="lightbox-art" /></div>
              <div className="lightbox-details"><div><span>{selected.category} · {String(selectedIndex + 1).padStart(2, "0")}</span><h3>{selected.title}</h3><p>{selected.alt}</p></div><div className="lightbox-controls"><button type="button" onClick={() => setSelected(galleryData[(selectedIndex - 1 + galleryData.length) % galleryData.length])} aria-label="Previous gallery image"><ArrowLeft size={18} /></button><button type="button" onClick={() => setSelected(galleryData[(selectedIndex + 1) % galleryData.length])} aria-label="Next gallery image"><ArrowRight size={18} /></button></div></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
