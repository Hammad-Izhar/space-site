import { SectionTitle } from "../components/SectionTitle";

function CalendarSection() {
  return (
    <section id="hours" className="flex flex-col">
      <SectionTitle text="Hours and Assignments" />
      <div className="flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_f077fbe477fe2c900ebc080bf297615d5113790281a39a4f3e699e03fbb535f8%40group.calendar.google.com&ctz=America%2FNew_York"
          className="border-none"
          width="800"
          height="600"
        ></iframe>
      </div>
    </section>
  );
}

export default CalendarSection;
