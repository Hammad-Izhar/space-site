import Navbar from "./components/Navbar";
import LectureSection from "./sections/LectureSection";
import AssignmentSection from "./sections/AssignmentSections";
import LabSection from "./sections/LabSection";
import CalendarSection from "./sections/CalendarSection";
import StaffSection from "./sections/StaffSection";
import AboutSection from "./sections/AboutSection";
import FeatureSection from "./sections/FeatureSection";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <FeatureSection />
      <AboutSection />
      <LectureSection />
      <AssignmentSection />
      <LabSection />
      <CalendarSection />
      <StaffSection />
    </div>
  );
}

export default App;
