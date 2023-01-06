import Table from "../components/Table";
import { Homework, Project } from "../data/types";
import { homeworkList, projectList } from "../data/assigments";
import React from "react";
import { SectionTitle } from "../components/SectionTitle";

function convertHomeworkToTableRows(
  assignments: Homework[]
): (string | React.ReactElement)[][] {
  return assignments.map((assignment) => [
    assignment.handout,
    assignment.out,
    assignment.due,
  ]);
}
function convertProjectToTableRows(
  assignments: Project[]
): (string | React.ReactElement | React.ReactElement[])[][] {
  return assignments.map((assignment) => [
    assignment.handout,
    assignment.out,
    assignment.due,
    assignment.gearup,
  ]);
}

function AssignmentSection() {
  return (
    <section id="assignments" className="w-screen min-h-screen">
      <SectionTitle text="Assignments" />

      <div className="flex justify-center space-x-4">
        <Table
          tableHeaders={["Assignment", "Out", "In"]}
          tableAlignment={["l", "c", "c"]}
          rows={convertHomeworkToTableRows(homeworkList)}
        />
        <Table
          tableHeaders={["Project", "Out", "In", "Gear-Up"]}
          tableAlignment={["l", "c", "c"]}
          rows={convertProjectToTableRows(projectList)}
        />
      </div>
    </section>
  );
}

export default AssignmentSection;
