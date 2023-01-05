import { LinkProps } from "../components/Link";
import { SectionTitle } from "../components/SectionTitle";
import Table from "../components/Table";
import { lectures } from "../data/lectures";
import { Lecture } from "../data/types";

function convertLecturesToTableRows(
  lectures: Lecture[]
): (
  | string
  | React.ReactElement<LinkProps>
  | React.ReactElement<LinkProps>[]
)[][] {
  return lectures.map((lecture) => [
    lecture.date,
    lecture.topic,
    lecture.video_url,
    lecture.lecture_handout,
    lecture.lecture_files,
  ]);
}

function Lectures() {
  return (
    <section>
      <SectionTitle text="Lecture" />
      <Table
        tableHeaders={["Date", "Topic", "Video", "Handouts", "Files"]}
        rows={convertLecturesToTableRows(lectures)}
      />
    </section>
  );
}

export default Lectures;
