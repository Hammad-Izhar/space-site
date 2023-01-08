import AboutParagraph from "../components/AboutParagraph";
import Sidebar from "../components/Sidebar";

function AboutSection() {
  return (
    <section id="about" className="my-5">
      <div className="flex justify-between flex-wrap mx-10 snap-start">
        <AboutParagraph />
        <Sidebar />
      </div>
    </section>
  );
}

export default AboutSection;
