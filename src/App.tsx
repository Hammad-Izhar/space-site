import Navbar from "./components/Navbar";
import LectureSection from "./sections/LectureSection";
import AssignmentSection from "./sections/AssignmentSections";
import LabSection from "./sections/LabSection";
import CalendarSection from "./sections/CalendarSection";
import StaffSection from "./sections/StaffSection";
import AboutSection from "./sections/AboutSection";
import FeatureSection from "./sections/FeatureSection";
import { Footer } from "./components/Footer";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  const sizeStyles = "w-screen h-screen overflow-x-hidden overflow-y-scroll";
  const scrollStyles = "scroll-smooth scroll-pt-36";
  const appRef = useRef<HTMLDivElement>(null!);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState<number[]>([]);

  const onScroll = () => {
    setScrollPosition(appRef.current.scrollTop);

    const navbarSectionIDs = [
      "about",
      "lectures",
      "assignments",
      "labs",
      "hours",
      "staff",
    ];

    setSectionOffsets(
      navbarSectionIDs.map(
        (sectionID) =>
          (document.getElementById(sectionID)?.offsetTop as number) - 144
      )
    );
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll, true);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition, sectionOffsets]);

  return (
    <div
      ref={appRef}
      className={`${sizeStyles} ${scrollStyles} bg-neutral-800`}
    >
      {/* <FeatureSection /> */}
      <Navbar
        scrollPosition={scrollPosition}
        sectionPositions={sectionOffsets}
      />
      <AboutSection />
      <LectureSection />
      <AssignmentSection />
      <LabSection />
      <CalendarSection />
      <StaffSection />
      <Footer />
    </div>
  );
}

export default App;
