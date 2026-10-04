const educationPhotoPaths = {
  school: "/images/education/school.jpg",
  college: "/images/education/college.jpg",
  medicalCollege: "/images/education/medical-college.jpg",
} as const;

export const portfolioImages = {
  hero: "/images/hero/main-photo.jpg",
  about: {
    portrait: "/images/about/portrait.jpg",
    childhood: "/images/about/childhood.jpg",
    personal: "/images/about/personal.jpg",
  },
  journey: {
    satkhira: "/images/journey/satkhira.jpg",
    school: educationPhotoPaths.school,
    college: educationPhotoPaths.college,
    dhaka: "/images/journey/dhaka-riverfront.jpg",
    medicalCollege: educationPhotoPaths.medicalCollege,
    futureDoctor: "/images/journey/future-doctor.jpg",
  },
  education: educationPhotoPaths,
  learning: {
    study: "/images/learning/study.jpg",
    books: "/images/learning/books.jpg",
    medicalStudy: "/images/learning/medical-study.jpg",
  },
  achievements: [
    "/images/achievements/achievement-01.jpg",
    "/images/achievements/achievement-02.jpg",
    "/images/achievements/achievement-03.jpg",
    "/images/achievements/achievement-04.jpg",
  ],
  creativity: {
    drawing: [
      "/images/creativity/drawing/drawing-01.jpg",
      "/images/creativity/drawing/drawing-02.jpg",
      "/images/creativity/drawing/drawing-03.jpg",
      "/images/creativity/drawing/drawing-04.jpg",
      "/images/creativity/drawing/drawing-05.jpg",
    ],
    mehendi: [
      "/images/creativity/mehendi/mehendi-01.jpg",
      "/images/creativity/mehendi/mehendi-02.jpg",
      "/images/creativity/mehendi/mehendi-03.jpg",
      "/images/creativity/mehendi/mehendi-04.jpg",
      "/images/creativity/mehendi/mehendi-05.jpg",
    ],
  },
  favorites: [
    "/images/favorites/favorite-01.jpg",
    "/images/favorites/favorite-02.jpg",
    "/images/favorites/favorite-03.jpg",
    "/images/favorites/favorite-04.jpg",
    "/images/favorites/favorite-05.jpg",
  ],
  dailyLife: {
    morning: "/images/daily-life/morning.jpg",
    studyTime: "/images/daily-life/study-time.jpg",
    collegeLife: "/images/daily-life/college-life.jpg",
    tutoring: "/images/daily-life/tutoring.jpg",
    evening: "/images/daily-life/evening.jpg",
  },
  gallery: [
    "/images/gallery/gallery-01.jpg",
    "/images/gallery/gallery-02.jpg",
    "/images/gallery/gallery-03.jpg",
    "/images/gallery/gallery-04.jpg",
    "/images/gallery/gallery-05.jpg",
    "/images/gallery/gallery-06.jpg",
    "/images/gallery/gallery-07.jpg",
    "/images/gallery/gallery-08.jpg",
    "/images/gallery/gallery-09.jpg",
  ],
  stories: [
    "/images/stories/story-01.jpg",
    "/images/stories/story-02.jpg",
    "/images/stories/story-03.jpg",
    "/images/stories/story-04.jpg",
    "/images/stories/story-05.jpg",
    "/images/stories/story-06.jpg",
  ],
  futureDoctor: {
    medicalDream: "/images/future-doctor/medical-dream.jpg",
    futureDoctor: "/images/future-doctor/future-doctor.jpg",
    hospital: "/images/future-doctor/hospital.jpg",
    doctorLife: "/images/future-doctor/doctor-life.jpg",
  },
  cv: { preview: "/images/cv/cv-preview.jpg" },
} as const;

export type EducationItem = {
  year: string;
  title: string;
  place: string;
  note: string;
  location?: string;
  institution?: string;
  story?: string;
  image?: string;
  kind?: "future";
};

export const educationData: EducationItem[] = [
  { year: "2019", title: "SSC", place: "Satkhira Police Line School", note: "A formative school chapter in Satkhira.", location: "Satkhira", institution: "Satkhira Police Line School", story: "Add a personal memory or detail from this school chapter.", image: portfolioImages.education.school },
  { year: "2021", title: "HSC", place: "Satkhira Government College", note: "The next step in a growing curiosity for learning.", location: "Satkhira", institution: "Satkhira Government College", story: "Add a reflection about this transition when ready.", image: portfolioImages.education.college },
  { year: "2023 — Present", title: "Homeopathy Studies", place: "Government Homeopathic Medical College & Hospital, Dhaka", note: "A continuing chapter of study, practice, and discovery.", location: "Dhaka", institution: "Government Homeopathic Medical College & Hospital", story: "A current chapter. Add a personal note about study life here.", image: portfolioImages.education.medicalCollege },
  { year: "Future", title: "Homeopathic Doctor", place: "A goal in progress", note: "The next chapter is still being written.", location: "Future goal", institution: "Homeopathic doctor", story: "An aspiration, not a current qualification.", kind: "future" },
];

export type LearningSubject = { icon: string; name: string; note: string; interest: number; number: string; image?: string };
export const subjectsData: LearningSubject[] = [
  { icon: "leaf", name: "Materia Medica", note: "A place for current notes, questions, and reflections.", interest: 82, number: "01", image: portfolioImages.learning.medicalStudy },
  { icon: "compass", name: "Organon", note: "Add a short reflection on this area of study.", interest: 72, number: "02", image: portfolioImages.learning.books },
  { icon: "body", name: "Anatomy", note: "Capture the concepts that are most memorable.", interest: 78, number: "03", image: portfolioImages.learning.study },
  { icon: "pulse", name: "Physiology", note: "Keep a few words here about what is being explored.", interest: 68, number: "04" },
  { icon: "flask", name: "Pharmacy", note: "A growing collection of lessons and observations.", interest: 75, number: "05" },
];

export const currentlyData = {
  learning: { label: "Currently learning", value: "Homeopathy", note: "Add a current focus or question to this card.", progress: 72, icon: "book" },
  studying: { label: "Currently studying", value: "Add a subject", note: "A replaceable placeholder for a current module.", progress: 48, icon: "notebook" },
  reading: { label: "Currently reading", value: "Add a title", note: "Add a book or reading list item when ready.", progress: 36, icon: "bookMarked" },
  exploring: { label: "Currently exploring", value: "Add an interest", note: "A new idea, skill, or creative direction.", progress: 58, icon: "spark" },
  goal: { label: "Current goal", value: "Becoming a better doctor", note: "A future-facing goal, still in progress.", progress: 64, icon: "stethoscope" },
};

export const studyDeskData = [
  { id: "books", title: "Medical books", tag: "CURRENTLY LEARNING", detail: "A placeholder for the subjects or resources currently in focus.", icon: "book", object: "books" },
  { id: "notebook", title: "Notebook", tag: "NOTES & REVISION", detail: "A space for notes, revisions, questions, and ideas to revisit.", icon: "notebook", object: "notebook" },
  { id: "stethoscope", title: "Stethoscope", tag: "FUTURE DOCTOR", detail: "A symbolic placeholder for the future-career goal—not a claim of current practice.", icon: "stethoscope", object: "stethoscope" },
  { id: "tea", title: "Tea / coffee", tag: "A STUDY BREAK", detail: "An illustrative desk detail. Replace with a real study ritual if desired.", icon: "coffee", object: "cup" },
  { id: "sticky-notes", title: "Sticky notes", tag: "SMALL REMINDERS", detail: "Add a favorite reminder, question, or short study prompt here.", icon: "notes", object: "notes" },
  { id: "plant", title: "Small plant", tag: "A LITTLE CALM", detail: "A decorative illustration. It does not represent a confirmed personal possession.", icon: "plant", object: "plant" },
  { id: "creative", title: "Creative notebook", tag: "DRAWING & IDEAS", detail: "A place for creative notes, drawing ideas, or future projects.", icon: "pencil", object: "creative" },
];

export type AchievementItem = { category: string; title: string; note: string; mark: string; image?: string };
export const achievementsData: AchievementItem[] = [
  { category: "ACADEMICS", title: "Academic achievement", note: "Add a verified academic milestone here.", mark: "01", image: portfolioImages.achievements[0] },
  { category: "LEARNING", title: "Certificate", note: "Add the certificate name and year when ready.", mark: "02", image: portfolioImages.achievements[1] },
  { category: "PARTICIPATION", title: "Competition", note: "Add a competition or participation highlight.", mark: "03", image: portfolioImages.achievements[2] },
  { category: "COMMUNITY", title: "College activity", note: "Add a college activity or contribution.", mark: "04", image: portfolioImages.achievements[3] },
  { category: "PERSONAL", title: "Personal milestone", note: "Save a meaningful milestone in Tasneem's own words.", mark: "05" },
];

// Aspirational wording: edit these qualities to reflect Tasneem's own voice.
export const valuesData = [
  { icon: "heart", name: "Compassionate", note: "A quality I hope to carry into future care.", detail: "Edit this aspiration in Tasneem's own words." },
  { icon: "hourglass", name: "Patient", note: "A quality to keep practicing in study and life.", detail: "Edit this aspiration in Tasneem's own words." },
  { icon: "shield", name: "Responsible", note: "A principle to grow into with each new chapter.", detail: "Edit this aspiration in Tasneem's own words." },
  { icon: "hand", name: "Empathetic", note: "A reminder to make space for understanding.", detail: "Edit this aspiration in Tasneem's own words." },
  { icon: "spark", name: "Dedicated", note: "A commitment to steady learning and effort.", detail: "Edit this aspiration in Tasneem's own words." },
  { icon: "check", name: "Honest", note: "A value to keep at the center of professional growth.", detail: "Edit this aspiration in Tasneem's own words." },
];

export type ShowcaseArtwork = {
  title: string;
  subtitle: string;
  palette: string;
  motif: "bloom" | "orbit" | "petal" | "line" | "arch" | "botanical";
  image?: string;
  alt?: string;
  description?: string;
};

// Local image paths are centralized in portfolioImages; replace the JPEG file in public/images to update it.
export const drawingData: ShowcaseArtwork[] = [
  { title: "Tea-time illustration", subtitle: "Drawing photo · 01", palette: "lilac", motif: "bloom", image: portfolioImages.creativity.drawing[0], alt: "Tea-themed drawing with cups, a kettle, snacks, and Bengali lettering on a pink background", description: "A tea-themed drawing featuring cups, a kettle, snacks, and Bengali lettering." },
  { title: "Floral welcome", subtitle: "Drawing photo · 02", palette: "blue", motif: "orbit", image: portfolioImages.creativity.drawing[1], alt: "Hand-drawn welcome sign framed with colorful flowers and handwritten lettering", description: "A welcome poster framed by colorful floral illustrations and lettering." },
  { title: "Sketchbook bloom", subtitle: "Drawing photo · 03", palette: "peach", motif: "petal", image: portfolioImages.creativity.drawing[2], alt: "Large pink flower drawing on a sketchbook page", description: "A bright pink flower study drawn on a notebook page." },
  { title: "Citrus study", subtitle: "Drawing photo · 04", palette: "sage", motif: "line", image: portfolioImages.creativity.drawing[3], alt: "Color drawing of whole and sliced oranges against an orange background", description: "A warm-toned study of whole and sliced oranges." },
  { title: "Twin blossoms", subtitle: "Drawing photo · 05", palette: "cream", motif: "arch", image: portfolioImages.creativity.drawing[4], alt: "Two pink flowers with green leaves drawn on a sketchbook page", description: "Two vivid pink blossoms with green leaves on a sketchbook page." },
];

export const mehendiData: ShowcaseArtwork[] = [
  { title: "Paired florals", subtitle: "Mehendi photo · 01", palette: "sand", motif: "botanical", image: portfolioImages.creativity.mehendi[0], alt: "Intricate mehendi patterns across two open palms against purple patterned fabric", description: "An intricate design combining floral forms, fine lines, and dotted details across both palms." },
  { title: "Red-toned motifs", subtitle: "Mehendi photo · 02", palette: "rose", motif: "bloom", image: portfolioImages.creativity.mehendi[1], alt: "Red mehendi floral pattern on the back of a hand against dark teal fabric", description: "A close view of red floral mehendi against deep teal fabric." },
  { title: "Detailed florals", subtitle: "Mehendi photo · 03", palette: "olive", motif: "petal", image: portfolioImages.creativity.mehendi[2], alt: "Dark floral mehendi across the back of a hand with colorful patterned fabric beneath", description: "A bold floral design photographed against a bright patterned backdrop." },
  { title: "Fine-line flourish", subtitle: "Mehendi photo · 04", palette: "cream", motif: "arch", image: portfolioImages.creativity.mehendi[3], alt: "Brown floral and scrollwork mehendi across a hand with pink fabric behind", description: "Fine floral and scroll motifs framed by vivid pink fabric." },
  { title: "Leaf-side detail", subtitle: "Mehendi photo · 05", palette: "peach", motif: "line", image: portfolioImages.creativity.mehendi[4], alt: "Detailed mehendi patterns across an open palm with green leaves behind", description: "An open-palm design photographed against green leaves." },
];

export const littleThingsData = [
  { number: "01", statement: "She loves drawing.", icon: "pencil", note: "A creative detail to keep in the story." },
  { number: "02", statement: "She enjoys creating Mehendi designs.", icon: "flower", note: "A place for patterns, patience, and practice." },
  { number: "03", statement: "She enjoys teaching.", icon: "book", note: "Keep or edit this detail as her interests evolve." },
  { number: "04", statement: "She is building her medical journey.", icon: "stethoscope", note: "A long-term learning story, one step at a time." },
  { number: "05", statement: "She dreams of becoming a doctor.", icon: "spark", note: "A future goal—not a present professional title." },
];

export type FavoriteItem = { icon: string; label: string; value: string; image?: string };
export const favoritesData: FavoriteItem[] = [
  { icon: "palette", label: "Favourite colour", value: "Blue", image: portfolioImages.favorites[0] },
  { icon: "flower", label: "Favourite flower", value: "Rose", image: portfolioImages.favorites[1] },
  { icon: "apple", label: "Favourite fruit", value: "Mango", image: portfolioImages.favorites[2] },
  { icon: "utensils", label: "Favourite food", value: "Beef Vuna", image: portfolioImages.favorites[3] },
  { icon: "cake", label: "Favourite dessert", value: "Mishti", image: portfolioImages.favorites[4] },
  { icon: "cup", label: "Favourite drink", value: "Mango juice" },
  { icon: "paw", label: "Favourite animal", value: "Cat" },
  { icon: "cloud", label: "Favourite weather", value: "Rainy" },
  { icon: "sun", label: "Favourite season", value: "Rainy season" },
  { icon: "map", label: "Favourite place", value: "Her home" },
  { icon: "music", label: "Favourite song", value: "Dekha Hajaro Dafa Apko" },
  { icon: "film", label: "Favourite movie", value: "Frozen" },
];

export type DailyLifeStage = {
  id: string;
  icon: string;
  time: string;
  mood: "morning" | "day" | "evening" | "night";
  note: string;
  image?: string;
};
export const dailyLifeData: DailyLifeStage[] = [
  { id: "morning", icon: "sunrise", time: "Morning", mood: "morning", note: "Add a gentle start-of-day ritual or reflection.", image: portfolioImages.dailyLife.morning },
  { id: "ready", icon: "spark", time: "Getting ready", mood: "morning", note: "Add a small detail about getting ready for the day." },
  { id: "college", icon: "building", time: "College", mood: "day", note: "A placeholder for the shape of a college day.", image: portfolioImages.dailyLife.collegeLife },
  { id: "classes", icon: "stethoscope", time: "Medical classes", mood: "day", note: "Add a note about classes or current areas of study." },
  { id: "study", icon: "book", time: "Study", mood: "day", note: "A space for a study routine or favorite revision method.", image: portfolioImages.dailyLife.studyTime },
  { id: "creative", icon: "pencil", time: "Creative time", mood: "evening", note: "Drawing, Mehendi, or any creative time that belongs here." },
  { id: "evening", icon: "sunset", time: "Evening", mood: "evening", note: "Add an evening pause or transition.", image: portfolioImages.dailyLife.evening },
  { id: "personal", icon: "heart", time: "Personal time", mood: "evening", note: "Keep this stage personal and editable." },
  { id: "night", icon: "moon", time: "Night", mood: "night", note: "A quiet close to the day. Edit this to match real life." },
];

// Retain the old export name for any existing imports.
export const routineData = dailyLifeData;

export const dreamsData = [
  { number: "01", title: "Short-term goals", note: "Add the next small steps Tasneem wants to take.", tone: "light" },
  { number: "02", title: "Long-term goals", note: "Add the bigger milestones she hopes to work toward.", tone: "blue" },
  { number: "03", title: "Career dream", note: "Become a Homeopathic Doctor.", tone: "navy" },
  { number: "04", title: "Personal dreams", note: "Leave room for the dreams that make life feel full.", tone: "gold" },
];

export type JourneyChapter = {
  id: string;
  place: string;
  title: string;
  year: string;
  location: string;
  institution: string;
  note: string;
  detail: string;
  color: string;
  icon: string;
  palette: string;
  motif: ShowcaseArtwork["motif"];
  image?: string;
  imageAlt?: string;
};

export const journeyData: JourneyChapter[] = [
  { id: "satkhira", place: "Satkhira", title: "Where it begins", year: "Hometown", location: "Satkhira, Bangladesh", institution: "Home", note: "A hometown that will always be part of the story.", detail: "Add a personal memory or small story from Satkhira here.", color: "journey-satkhira", icon: "sun", palette: "sage", motif: "botanical", image: portfolioImages.journey.satkhira, imageAlt: "A calm river winding through rice fields and village palms in Satkhira" },
  { id: "school", place: "School", title: "Early chapters", year: "2019", location: "Satkhira", institution: "Satkhira Police Line School", note: "SSC — a formative school chapter.", detail: "Add a favorite school memory, learning moment, or detail in Tasneem's words.", color: "journey-school", icon: "book", palette: "cream", motif: "arch", image: portfolioImages.journey.school },
  { id: "college", place: "College", title: "New questions", year: "2021", location: "Satkhira", institution: "Satkhira Government College", note: "HSC — another step in a growing curiosity for learning.", detail: "Add a reflection about this transition or a memorable college moment.", color: "journey-college", icon: "building", palette: "peach", motif: "orbit", image: portfolioImages.journey.college },
  { id: "dhaka", place: "Dhaka", title: "A new city", year: "2023", location: "Dhaka", institution: "A new chapter", note: "A new setting for the next part of the journey.", detail: "Add a personal note about arriving in Dhaka and what this chapter means.", color: "journey-dhaka", icon: "map", palette: "blue", motif: "line", image: portfolioImages.journey.dhaka, imageAlt: "Dhaka riverfront with small boats and dense city buildings in warm evening light" },
  { id: "medical-college", place: "Medical College", title: "A path of learning", year: "2023 — Present", location: "Dhaka", institution: "Government Homeopathic Medical College & Hospital", note: "Medical studies began in 2023 and continue today.", detail: "Add current reflections on student life, study, or goals—without implying a completed qualification.", color: "journey-study", icon: "leaf", palette: "lilac", motif: "bloom", image: portfolioImages.journey.medicalCollege },
  { id: "future-doctor", place: "Future Doctor", title: "Still becoming", year: "Future", location: "A goal in progress", institution: "Homeopathic doctor", note: "The future is a direction, built one step at a time.", detail: "This is an aspiration. Add a personal future-vision statement when ready.", color: "journey-future", icon: "spark", palette: "sand", motif: "petal", image: portfolioImages.journey.futureDoctor },
];

export const futureDoctorData = [
  { id: "student", title: "Student", note: "A student chapter—curiosity, study, and first steps.", icon: "book", image: portfolioImages.futureDoctor.medicalDream },
  { id: "learner", title: "Learner", note: "Keep building knowledge with patience and reflection.", icon: "brain", image: portfolioImages.futureDoctor.doctorLife },
  { id: "professional", title: "Medical professional", note: "A future milestone, reached only after appropriate education and qualification.", icon: "graduation", image: portfolioImages.futureDoctor.hospital },
  { id: "doctor", title: "Future doctor", note: "A long-term aspiration, not a current title.", icon: "stethoscope", image: portfolioImages.futureDoctor.futureDoctor },
];

export type CinematicStory = {
  id: string;
  label: string;
  title: string;
  location: string;
  note: string;
  palette: string;
  motif: ShowcaseArtwork["motif"];
  image?: string;
};

export const storiesData: CinematicStory[] = [
  { id: "beginnings", label: "CHAPTER 01 · ORIGINS", title: "Where It All Started", location: "Satkhira", note: "A place for a personal story about home and the beginnings of this journey.", palette: "sage", motif: "botanical", image: portfolioImages.stories[0] },
  { id: "dhaka-chapter", label: "CHAPTER 02 · NEW HORIZONS", title: "A New Chapter", location: "Dhaka", note: "Add Tasneem's reflection on moving into this new chapter.", palette: "blue", motif: "orbit", image: portfolioImages.stories[1] },
  { id: "learning-to-heal", label: "CHAPTER 03 · MEDICAL STUDIES", title: "Learning to Heal", location: "Medical College", note: "A placeholder for the lessons, questions, and experiences of student life.", palette: "lilac", motif: "bloom", image: portfolioImages.stories[2] },
  { id: "creating", label: "CHAPTER 04 · LIFE BEYOND STUDY", title: "Creating Along the Way", location: "Drawing & Mehendi", note: "A place to bring together creativity and the rest of the story.", palette: "peach", motif: "petal", image: portfolioImages.stories[3] },
  { id: "small-moments", label: "CHAPTER 05 · EVERYDAY MOMENTS", title: "The Little Details", location: "Everyday life", note: "An editable place for a personal moment that belongs in the story.", palette: "sand", motif: "line", image: portfolioImages.stories[4] },
  { id: "looking-ahead", label: "CHAPTER 06 · WHAT COMES NEXT", title: "Looking Ahead", location: "A future in progress", note: "A future-facing image and note—an aspiration, not an achieved milestone.", palette: "blue", motif: "orbit", image: portfolioImages.stories[5] },
];

export type GalleryCategory = "Portraits" | "Drawing" | "Mehendi" | "College" | "Nature" | "Other";
export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  alt: string;
  palette: string;
  motif: ShowcaseArtwork["motif"];
  height: "short" | "medium" | "tall";
  image?: string;
};

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All", "Portraits", "Drawing", "Mehendi", "College", "Nature", "Other",
];

// Gallery photos use the numbered local-image map; the illustrated fallback remains available.
export const galleryData: GalleryItem[] = [
  { id: "portrait-01", category: "Portraits", title: "Boat-scene portrait", alt: "Two women posing together in a boat-themed indoor display", palette: "portrait", motif: "arch", height: "tall", image: portfolioImages.gallery[0] },
  { id: "other-01", category: "Other", title: "A shared event", alt: "A group portrait with Bengali lettering and decorative clay tea pots in the background", palette: "lilac", motif: "bloom", height: "short", image: portfolioImages.gallery[1] },
  { id: "portrait-02", category: "Portraits", title: "Lights after dark", alt: "A group posing in front of a brightly lit attraction at night", palette: "sage", motif: "botanical", height: "tall", image: portfolioImages.gallery[2] },
  { id: "portrait-03", category: "Portraits", title: "An evening together", alt: "A group seated around a table beneath decorative lights at night", palette: "blue", motif: "orbit", height: "short", image: portfolioImages.gallery[3] },
  { id: "nature-01", category: "Nature", title: "Rain-kissed bloom", alt: "A vivid pink flower with raindrops on its petals and leaves", palette: "sand", motif: "petal", height: "tall", image: portfolioImages.gallery[4] },
  { id: "portrait-04", category: "Portraits", title: "Bamboo backdrop", alt: "A woman seated between panda sculptures against a bamboo mural", palette: "peach", motif: "line", height: "short", image: portfolioImages.gallery[5] },
  { id: "other-02", category: "Other", title: "Gathered together", alt: "A group of women posing before a brightly decorated event display", palette: "rose", motif: "orbit", height: "short", image: portfolioImages.gallery[6] },
  { id: "mehendi-01", category: "Mehendi", title: "Mehendi detail", alt: "Intricate mehendi on the back of a hand resting against red fabric", palette: "olive", motif: "botanical", height: "short", image: portfolioImages.gallery[7] },
  { id: "portrait-05", category: "Portraits", title: "A night-time selfie", alt: "Two women posing for a close-up selfie outdoors at night", palette: "cream", motif: "arch", height: "tall", image: portfolioImages.gallery[8] },
];

export const aboutCards = [
  { icon: "map", label: "Hometown", value: "Satkhira", note: "Roots" },
  { icon: "building", label: "Current chapter", value: "Dhaka", note: "Here & now" },
  { icon: "book", label: "Medical journey", value: "2023", note: "The beginning" },
  { icon: "spark", label: "Looking ahead", value: "Future", note: "Homeopathic doctor" },
];

export const cvContent = {
  profile: "A personal introduction is being prepared. Add a concise, first-person professional summary here.",
  education: [
    "2019 · SSC — Satkhira Police Line School",
    "2021 · HSC — Satkhira Government College",
    "2023–Present · Government Homeopathic Medical College & Hospital, Dhaka",
  ],
  skills: ["Add verified skills", "Add languages", "Add relevant coursework"],
  activities: ["Add college activities or volunteering"],
  interests: ["Drawing", "Mehendi", "Teaching / tutoring (optional)"],
  achievements: ["Add verified achievements and certificates"],
};
