import { Navbar } from "./components/Navbar";
import { LectureSection } from "./sections/LectureSection";
import { AssignmentSection } from "./sections/AssignmentSections";
import { LabSection } from "./sections/LabSection";
import { CalendarSection } from "./sections/CalendarSection";
import { StaffSection } from "./sections/StaffSection";
import { AboutSection } from "./sections/AboutSection";
import { FeatureSection } from "./sections/FeatureSection";
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <div
            id="App"
            className={
                "w-screen h-screen overflow-x-hidden overflow-y-scroll scroll-smooth scroll-pt-24 bg-neutral-800"
            }
        >
            <FeatureSection />
            <Navbar />
            <AboutSection />
            <LectureSection />
            <AssignmentSection />
            <LabSection />
            <CalendarSection />
            <StaffSection />
            <Footer />
        </div>
    );
};
