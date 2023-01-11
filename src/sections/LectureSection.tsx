import { LinkProps } from "../components/Link";
import { SectionTitle } from "../components/SectionTitle";
import Table from "../components/Table";
import { lectures } from "../data/lectures";
import { Lecture } from "../data/types";

const convertLecturesToTableRows = (
    lectures: Lecture[]
): (
    | string
    | React.ReactElement<LinkProps>
    | React.ReactElement<LinkProps>[]
)[][] => {
    return lectures.map((lecture) => [
        lecture.date,
        lecture.topic,
        lecture.video_url,
        lecture.lecture_handout,
        lecture.lecture_files,
    ]);
};

export const LectureSection = () => {
    return (
        <section id="lectures" className="min-h-screen">
            <SectionTitle text="Lectures" />
            <div className="flex justify-center">
                <Table
                    tableHeaders={[
                        "Date",
                        "Topic",
                        "Video",
                        "Handouts",
                        "Files",
                    ]}
                    tableAlignment={["c", "l", "c", "c", "c"]}
                    rows={convertLecturesToTableRows(lectures)}
                />
            </div>
        </section>
    );
};
