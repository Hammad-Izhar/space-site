import Table from "../components/Table";
import { Homework, Project } from "../data/types";
import { homeworkList, projectList } from "../data/assignments";
import React from "react";
import { SectionTitle } from "../components/SectionTitle";

const convertHomeworkToTableRows = (
    assignments: Homework[]
): (string | React.ReactElement)[][] => {
    return assignments.map((assignment) => [
        assignment.handout,
        assignment.out,
        assignment.due,
    ]);
};

const convertProjectToTableRows = (
    assignments: Project[]
): (string | React.ReactElement | React.ReactElement[])[][] => {
    return assignments.map((assignment) => [
        assignment.handout,
        assignment.out,
        assignment.due,
        assignment.gearup,
    ]);
};

export const AssignmentSection = () => {
    return (
        <section id="assignments" className="my-5 min-h-screen">
            <SectionTitle text="Assignments" />

            <div className="flex flex-wrap justify-between">
                <div className="flex justify-center basis-1/2 flex-grow">
                    <Table
                        tableHeaders={["Assignment", "Out", "In"]}
                        tableAlignment={["l", "c", "c"]}
                        rows={convertHomeworkToTableRows(homeworkList)}
                    />
                </div>
                <div className="flex justify-center basis-1/2 flex-grow">
                    <Table
                        tableHeaders={["Project", "Out", "In", "Gear-Up"]}
                        tableAlignment={["l", "c", "c"]}
                        rows={convertProjectToTableRows(projectList)}
                    />
                </div>
            </div>
        </section>
    );
};
