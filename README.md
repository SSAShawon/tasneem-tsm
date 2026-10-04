# Tasneem — Personal Portfolio

A responsive personal portfolio for Tasneem, presenting her education, creative work, daily-life placeholders, medical studies, aspirations, gallery, and contact information. The existing royal-blue visual identity and original sections remain the foundation; the added sections extend that portfolio rather than replace it.

The project is a front-end website built with **Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, and Lucide React**. It has no backend, authentication, database, or remote image-service dependency. Personal statements, study details, contact links, achievements, and images should be checked and edited before the portfolio is published.

Tailwind is the primary layer for utility-friendly component structure: layout, spacing, alignment, responsive breakpoints, and common typography are kept beside the relevant TSX markup where practical. Global CSS is reserved for essential resets and theme hooks, plus bespoke visual treatments, animation, complex interaction states, and effects that do not translate cleanly to utilities. The migration preserves the existing portfolio identity, content, components, and behavior; it is not a redesign.

## Contents

- [Run and verify](#run-and-verify)
- [Page sections: what each one does](#page-sections-what-each-one-does)
- [Project structure](#project-structure)
- [Where to edit content](#where-to-edit-content)
- [Images and CV](#images-and-cv)
- [Interactions and accessibility](#interactions-and-accessibility)

## Run and verify

**Requirements:** Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Available checks and production commands:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The current implementation has passed lint, TypeScript, and production-build checks. The development page also returned HTTP 200. Screenshot-based browser testing was not available in the implementation environment.

## Page sections: what each one does

The page is composed in order in `src/app/page.tsx`. Each section has an anchor ID used by in-page links, the navigation, or the scroll indicator.

| Order | Section / anchor | Component | What it does |
|---:|---|---|---|
| 1 | **Home** `#home` | `Hero` — `src/components/Hero.tsx` | Introduces Tasneem, her study and creative identity, and the Satkhira-to-Dhaka journey. All screen sizes use the single `public/images/hero/main-photo.jpg` file; replace it to change the main portrait. The inline SVG portrait remains as a fallback. |
| 2 | **About** `#about` | `AboutSection` — `EditorialSections.tsx` | Presents a short introduction and four editable facts about hometown, current chapter, medical journey, and future direction. About image placeholders are reserved in the library; the current layout has no photo area, so they are not forced into this section. |
| 3 | **Education** `#education` | `EducationTimeline` — `EditorialSections.tsx` | Shows school, college, current medical studies, and the future-doctor aspiration on an animated timeline. The school, college, and medical-college photos are single shared files also used by the matching Journey chapters; the future item remains a goal, not a qualification. |
| 4 | **Journey** `#journey` | `JourneyStory` — `LifeSections.tsx` | Interactive milestones for Satkhira → School → College → Dhaka → Medical College → Future Doctor. Each card and the selected-chapter panel use its matching local image; the School, College, and Medical College cards share the corresponding Education photo files. Selection still updates the story, location, institution/chapter, and year. |
| 5 | **Why Homeopathy** `#why` | `WhyHomeopathy` — `EditorialSections.tsx` | Provides editable prompts for Tasneem’s reasons, inspirations, view of healthcare, and future vision. The prompts are intended to be replaced with her own words. |
| 6 | **Learning** `#learning` | `LearningSubjects` — `EditorialSections.tsx` | Displays study-subject cards, three local study/book image headers, and editable interest-level bars. Treat the values as placeholders until confirmed. |
| 7 | **Currently** `#currently` | `CurrentlyDashboard` — `InteractiveSections.tsx` | A five-card snapshot for current learning, study, reading, exploration, and goals. Card details and progress percentages are editable placeholders. |
| 8 | **Study Desk** `#studydesk` | `StudyDesk` — `InteractiveSections.tsx` | An illustrated desk with tappable, keyboard-focusable objects. Selecting one shows its editable note; the objects are illustrations, not claims about possessions. |
| 9 | **Achievements** `#achievements` | `Achievements` — `EditorialSections.tsx` | Holds cards for verified academic, learning, participation, community, and personal milestones. Four local photo slots are ready for certificates or academic moments; replace prompts only with real achievements. |
| 10 | **Values** `#values` | `ValuesSection` — `EditorialSections.tsx` | Shows expandable quality cards. These are framed as professional aspirations and editable reflections, not claims about current professional practice. |
| 11 | **Creativity: Drawing & Mehendi** `#creativity` | `CreativeShowcases` — `LifeSections.tsx` | Contains separate Drawing (`#drawing-showcase`) and Mehendi (`#mehendi-showcase`) collections, each with five connected local images, featured art, thumbnails, a pauseable marquee, and a fullscreen artwork viewer. |
| 12 | **Little Things About Tasneem** `#little-things` | `LittleThings` — `InteractiveSections.tsx` | A short set of editable personal statements and supporting notes. Confirm the statements before publishing. |
| 13 | **Favourite Things** `#favorites` | `FavouriteThings` — `LifeSections.tsx` | Provides editable prompts for favourite colour, flower, food, drink, music, places, and other preferences. The first five cards have local photo accents; answers are not pre-filled. |
| 14 | **A Day in Tasneem’s Life** `#day-in-life` | `DailyRoutine` — `LifeSections.tsx` | A nine-stage interactive daily-life outline. Selecting a stage reveals its editable description, a matching local image when available, and the morning/day/evening/night atmosphere. It is not a fixed or verified schedule. |
| 15 | **Dreams & Goals** `#dreams` | `DreamsSection` — `LifeSections.tsx` | Separates short-term, long-term, career, and personal aspirations. Non-career goals are editable prompts. |
| 16 | **Gallery** `#gallery` | `Gallery` — `src/components/sections/Gallery.tsx` | Filterable local-image masonry gallery with Portraits, Drawing, Mehendi, College, Nature, and Other categories. Selecting a tile opens a lightbox with previous/next controls and touch swipe; missing images fall back to the illustration. |
| 17 | **Photo Stories** `#stories` | `CinematicStories` — `InteractiveSections.tsx` | Six editable story cards for origins, new horizons, study, creativity, everyday moments, and the future. Each uses a replaceable local image. |
| 18 | **Future Doctor** `#future-doctor` | `FutureDoctor` — `FutureAndContact.tsx` | An aspirational future-career statement, replaceable local portrait, and animated growth path with four matching local images: Student → Learner → Medical Professional → Future Doctor. It does not describe a completed qualification. |
| 19 | **CV** `#resume` | `ResumeSection` — `FutureAndContact.tsx` | Shows a CV-style placeholder. “View CV” opens an on-page preview populated from editable data; “Download CV” downloads the separate placeholder PDF. |
| 20 | **Contact** `#contact` | `ContactSection` — `FutureAndContact.tsx` | Displays contact and social-link placeholders. Replace `email@example.com` and the link prompts with verified details before sharing. |
| 21 | **Closing** `#closing` | `ClosingSection` — `InteractiveSections.tsx` | A cinematic end card after Contact and before the Footer, with a link back to the beginning. |
| 22 | **Footer** | `Footer` — `FutureAndContact.tsx` | Provides portfolio navigation, location line, and a return-to-top link. |

### Navigation and global page controls

- The glass-style navigation links to the main portfolio sections; the Contact call-to-action is available on desktop and in the mobile menu.
- The day/night theme toggle saves its choice in local storage under `tasneem-theme`.
- The scroll progress line and section label show reading progress through the page.
- The custom cursor cue is limited to wide screens with a fine pointer; touch devices do not use it.
- The opening preloader is brief and respects reduced-motion settings.

## Project structure

```text
src/
├── app/
│   ├── layout.tsx                 # Metadata, viewport, and global stylesheet imports
│   ├── page.tsx                   # Providers and complete page-section order
│   ├── globals.css                # Essential globals, theme hooks, and bespoke visual rules
│   └── enhancements.css           # Bespoke interaction, animation, theme, and accessibility styles
├── components/
│   ├── Hero.tsx                   # Hero introduction and portrait illustration
│   ├── Navbar.tsx                 # Desktop/mobile navigation and theme control
│   ├── Preloader.tsx              # Opening transition
│   ├── ThemeProvider.tsx          # Persistent day/night theme
│   ├── MotionProvider.tsx         # Framer Motion reduced-motion configuration
│   ├── useReducedMotion.ts        # Hydration-safe device motion preference hook
│   ├── GlobalInteractions.tsx     # Scroll progress and desktop cursor
│   ├── UI.tsx                     # Shared icons, illustrations, reveal and link components
│   └── sections/
│       ├── EditorialSections.tsx  # About, education, Why, Learning, Achievements, Values
│       ├── LifeSections.tsx       # Journey, Drawing/Mehendi, favourites, routine, dreams
│       ├── InteractiveSections.tsx  # Currently, Study Desk, Little Things, stories, closing
│       ├── Gallery.tsx            # Filterable gallery and lightbox
│       └── FutureAndContact.tsx   # Future Doctor, CV, Contact, Footer
└── data/
    └── portfolio.ts               # Central editable content and TypeScript data types

public/
├── icon.svg
├── tasneem-cv-placeholder.pdf     # Download placeholder; replace before sharing
└── images/README.md               # Suggested local-image paths and guidance
```

## Where to edit content

Most repeated content and local image paths are centralized in `src/data/portfolio.ts`. The main editable exports include:

- `portfolioImages` (the local folder/path map)
- `educationData`, `journeyData`, `futureDoctorData`
- `dailyLifeData`, `currentlyData`, `studyDeskData`
- `drawingData`, `mehendiData`, `galleryData`, `storiesData`
- `valuesData`, `littleThingsData`, `favoritesData`, `dreamsData`
- `subjectsData`, `achievementsData`, `aboutCards`, `cvContent`

Some narrative copy lives alongside its section component: for example, the Why Homeopathy prompts and About introduction are in `EditorialSections.tsx`, the future-career and Contact copy are in `FutureAndContact.tsx`, and the hero text is in `Hero.tsx`. Edit these too when personalizing the site.

## Images and CV

All image paths are centralized in `portfolioImages` in `src/data/portfolio.ts`. The `public/images/` tree has dedicated folders for hero, about, journey, education, learning, achievements, creativity, favourites, daily life, gallery, stories, future doctor, and CV assets. The Hero, Education, Drawing, and Mehendi slots use user-supplied photos; remaining local slots stay editable and may be placeholders.

To update a connected photo, replace its JPEG **in place with the exact same filename**. For example, replacing `public/images/journey/satkhira.jpg` updates the Satkhira Journey card and detail panel without a code edit. The image system also connects the hero, education cards, learning cards, achievement cards, drawing/Mehendi show cases, favourite visual cards, selected routine stages, Gallery, six Photo Stories, Future Doctor growth path, and the CV sheet preview.

The About image files are reserved but intentionally not placed into the current About layout because that section has no photo area. The optional tutoring image is used in the existing Teaching / tutoring note. The image catalogue and replacement notes are in `public/images/README.md`.

Images use responsive local Next.js image rendering where appropriate. If a local photo fails to load, its image layer is hidden and the existing inline illustration, gradient, or card background remains visible. No remote image URLs are required.

The CV preview text reads from `cvContent` in `src/data/portfolio.ts`, and the new `cv-preview.jpg` is only a visual thumbnail. The Download CV button still serves `public/tasneem-cv-placeholder.pdf`; that separate PDF functionality is unchanged. Replace both preview data and the PDF with verified CV details before sharing.

## Interactions and accessibility

- The Drawing and Mehendi viewers support thumbnails, previous/next navigation, zoom, Escape/arrow-key controls, and touch swipe. Their marquees have a pause/play control.
- The Gallery supports category filters, a keyboard-operable lightbox, previous/next controls, and touch swipe.
- Journey milestones, routine stages, desk objects, and value cards are keyboard-operable controls with state labels.
- Shared Framer Motion configuration and CSS respect `prefers-reduced-motion`; mobile layouts and touch controls are styled in `enhancements.css`.
- New image and story areas use local placeholders rather than depending on remote assets.
