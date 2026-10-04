# Portfolio image library

All portfolio image paths are centralized in `portfolioImages` in `src/data/portfolio.ts`. Every photo slot has one source file; responsive sizes are handled by the image component and CSS, not separate phone/desktop files.

To change the **main portrait**, replace `public/images/hero/main-photo.jpg` with your photo, keeping that exact filename. It is the only Hero photo on desktop, tablet, and mobile; no code edit is needed. In local development, the Hero image is served directly so replacing the file is easier to see.

Other image slots use their own local files; some remain visual placeholders. Replace any placeholder with a photograph using the **same filename and subfolder path**; the page will use it automatically without a React/TypeScript edit.

```text
public/images/
├── hero/                 main-photo.jpg  ← replace this for the main Hero portrait
├── about/                portrait.jpg, childhood.jpg, personal.jpg
├── journey/              satkhira.jpg, dhaka-riverfront.jpg, future-doctor.jpg
├── education/            school.jpg, college.jpg, medical-college.jpg
│                         (school/college/medical-college are shared with Journey)
├── learning/             study.jpg, books.jpg, medical-study.jpg
├── achievements/         achievement-01.jpg … achievement-04.jpg
├── creativity/
│   ├── drawing/          drawing-01.jpg … drawing-05.jpg
│   └── mehendi/          mehendi-01.jpg … mehendi-05.jpg
├── favorites/            favorite-01.jpg … favorite-05.jpg
├── daily-life/           morning.jpg, study-time.jpg, college-life.jpg,
│                         tutoring.jpg, evening.jpg
├── gallery/              gallery-01.jpg … gallery-09.jpg
├── stories/              story-01.jpg … story-06.jpg
├── future-doctor/        medical-dream.jpg, future-doctor.jpg,
│                         hospital.jpg, doctor-life.jpg
└── cv/                   cv-preview.jpg
```

## Where each image set appears

- **Hero:** `hero/main-photo.jpg` is the single source for desktop, tablet, and mobile. CSS `object-fit` and `object-position` preserve a portrait-friendly crop, and the inline SVG remains the fallback.
- **About:** The three files are reserved for future About imagery. The current About design has no dedicated photograph slot, so they are not forced into it.
- **Journey:** Six images map by milestone and appear in both the milestone cards and selected-chapter panel. Satkhira and Dhaka use generated editorial landscape/cityscape images; School, College, and Medical College share their corresponding Education photo files, with no duplicate copies.
- **Education:** School, college, and medical-college images appear in the timeline and are reused by the matching Journey chapters from the same three files.
- **Learning:** Study, books, and medical-study images appear in the matching subject-card visual headers.
- **Achievements:** The first four achievement cards use the four numbered placeholders; replace them only with verified material.
- **Creativity:** The Drawing and Mehendi arrays each use five matching local image files. Both sets are now populated with user-supplied photos.
- **Favourite Things:** The first five editable favourite cards have visual image slots.
- **Daily Life:** Morning, college, study, and evening appear in matching routine stages. `tutoring.jpg` is used in the optional Teaching / tutoring note; the routine remains nine stages.
- **Gallery:** The nine user-supplied photos populate Gallery items 01–09 in order. Their titles, categories, and accessible alt text are editable in `src/data/portfolio.ts`.
- **Stories:** Six cinematic story cards map in order to `story-01.jpg` through `story-06.jpg`.
- **Future Doctor:** The portrait and four aspirational growth-path visuals use this folder’s four files. The path remains an aspiration, not an achieved qualification.
- **CV:** `cv-preview.jpg` appears as a small visual placeholder in the on-page CV sheet. The existing PDF download is unchanged and remains a separate file at `/tasneem-cv-placeholder.pdf`.

## Replacing a placeholder

1. Keep the exact lowercase filename **and subfolder path**; the site does not discover newly named files automatically. If a photo is shared between sections, replace its one file and both sections update.
2. Replace the file itself in place with a real JPEG (recommended: JPG/JPEG, sRGB, landscape or portrait crop as appropriate). Renaming a copy without overwriting the mapped file will not change the page.
3. Refresh the page. If the old image is still showing in the local development preview, stop the dev server, remove `.next/cache/images`, restart `npm run dev`, and hard-refresh the browser (`Ctrl+Shift+R`). A deployed site needs a new build/deploy; a CDN may also need its cache purged.

**Special cases:** the Hero uses only `hero/main-photo.jpg` at every screen size. The `about/` photos are reserved and are not currently displayed in the About section.

Rendering uses responsive local Next.js image slots where appropriate. If a file is missing or fails to load, that image layer is hidden and the existing illustration, gradient, or card design remains visible. Avoid adding remote image URLs.
