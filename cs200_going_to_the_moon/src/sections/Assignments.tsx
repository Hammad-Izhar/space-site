import Table from "../components/Table";
import { Homework, Project } from "../data/types";
import { homeworkList, projectList } from "../data/assigments";
import React from "react";

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

function Assignments() {
  return (
    <section>
      <h2>Assignments</h2>

      <h3>Homeworks</h3>
      <Table
        tableHeaders={["Assignment", "Out", "In"]}
        rows={convertHomeworkToTableRows(homeworkList)}
      />

      <h3>Projects</h3>
      <Table
        tableHeaders={["Project", "Out", "In", "Gear-Up"]}
        rows={convertProjectToTableRows(projectList)}
      />
    </section>
  );
}

export default Assignments;
