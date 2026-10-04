import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { CustomCursor, ScrollProgress } from "@/components/GlobalInteractions";
import Hero from "@/components/Hero";
import {
  AboutSection,
  Achievements,
  EducationTimeline,
  LearningSubjects,
  ValuesSection,
  WhyHomeopathy,
} from "@/components/sections/EditorialSections";
import {
  CreativeShowcases,
  DailyRoutine,
  DreamsSection,
  FavouriteThings,
  JourneyStory,
} from "@/components/sections/LifeSections";
import {
  CinematicStories,
  ClosingSection,
  CurrentlyDashboard,
  LittleThings,
  StudyDesk,
} from "@/components/sections/InteractiveSections";
import Gallery from "@/components/sections/Gallery";
import {
  ContactSection,
  Footer,
  FutureDoctor,
  ResumeSection,
} from "@/components/sections/FutureAndContact";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function HomePage() {
  return (
    <ThemeProvider>
      <MotionProvider>
        <Preloader />
        <Navbar />
        <ScrollProgress />
        <CustomCursor />
        <main className="min-h-screen overflow-x-clip bg-paper text-ink">
          <Hero />
          <AboutSection />
          <EducationTimeline />
          <JourneyStory />
          <WhyHomeopathy />
          <LearningSubjects />
          <CurrentlyDashboard />
          <StudyDesk />
          <Achievements />
          <ValuesSection />
          <CreativeShowcases />
          <LittleThings />
          <FavouriteThings />
          <DailyRoutine />
          <DreamsSection />
          <Gallery />
          <CinematicStories />
          <FutureDoctor />
          <ResumeSection />
          <ContactSection />
          <ClosingSection />
        </main>
        <Footer />
      </MotionProvider>
    </ThemeProvider>
  );
}
