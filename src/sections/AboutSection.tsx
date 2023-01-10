import AboutParagraph from "../components/AboutParagraph";
import Sidebar from "../components/Sidebar";

function AboutSection() {
  return (
    <section id="about" className="min-h-screen">
      <div className="flex justify-between flex-wrap min-h-screen mx-10">
        <AboutParagraph />
        <Sidebar />
      </div>
    </section>
  );
}

export default AboutSection;
