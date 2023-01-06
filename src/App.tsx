import Navbar from "./components/Navbar";
import Home from "./sections/HomeSection";
import ResourceSection from "./sections/ResourceSection";
import LectureSection from "./sections/LectureSection";
import AssignmentSection from "./sections/AssignmentSections";
import LabSection from "./sections/LabSection";
import CalendarSection from "./sections/CalendarSection";
import StaffSection from "./sections/StaffSection";
import StaffCard from "./components/StaffCard";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <>
      <AboutSection />
      <LectureSection />
      <AssignmentSection />
      <LabSection />
      <StaffSection />
    </>
  );
}

export default App;
