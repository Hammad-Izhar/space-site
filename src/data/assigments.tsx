import { Link } from "../components/Link";
import { Homework, Project } from "./types";

export const homeworkList: Homework[] = [
  {
    name: "Homework 0 (Setup)",
    handout: <Link text="Homework 0 (Setup)" href="" />,
    out: "1/25",
    due: "1/27",
  },
  {
    name: "Homework 1a (CS15)",
    handout: <Link text="Homework 1a (CS15)" href="" />,
    out: "1/27",
    due: "1/31",
  },
  {
    name: "Homework 1a (CS17/111/112/19)",
    handout: <Link text="Homework 1a (CS17/111/112/19)" href="" />,
    out: "1/27",
    due: "1/31",
  },
  {
    name: "Homework 1b (CS15)",
    handout: <Link text="Homework 1b (CS15)" href="" />,
    out: "2/1",
    due: "2/6",
  },
  {
    name: "Homework 1b (CS17/111/112/19)",
    handout: <Link text="Homework 1b (CS17/111/112/19)" href="" />,
    out: "2/1",
    due: "2/6",
  },
  {
    name: "Homework 1c (CS15)",
    handout: <Link text="Homework 1c (CS15)" href="" />,
    out: "2/6",
    due: "2/10",
  },
  {
    name: "Homework 1c (CS17/111/112/19)",
    handout: <Link text="Homework 1c (CS17/111/112/19)" href="" />,
    out: "2/6",
    due: "2/10",
  },
  {
    name: "Homework 2 (Doubly Linked Lists)",
    handout: <Link text="Homework 2 (Doubly Linked Lists)" href="" />,
    out: "2/10",
    due: "2/16",
  },
  {
    name: "Homework 3 (Hashtables)",
    handout: <Link text="Homework 3 (Hashtables)" href="" />,
    out: "3/3",
    due: "3/9",
  },
  {
    name: "Homework 4 (Intro to Python)",
    handout: <Link text="Homework 4 (Intro to Python)" href="" />,
    out: "4/3",
    due: "4/7",
  },
  {
    name: "Homework 5 (Dynamic Programming)",
    handout: <Link text="Homework 5 (Dynamic Programming)" href="" />,
    out: "4/8",
    due: "4/14",
  },
  {
    name: "Homework 6 (Search)",
    handout: <Link text="Homework 6 (Search)" href="" />,
    out: "4/16",
    due: "5/2",
  },
];

export const projectList: Project[] = [
  {
    name: "Decision Tree",
    handout: <Link text="Decision Tree" href="" />,
    out: "2/17",
    due: "3/2",
    gearup: [
      <Link text="Gear-Up Video" href="" />,
      <Link text="Gear-Up Slides" href="" />,
    ],
  },
  {
    name: "Travel Planner",
    handout: <Link text="Travel Planner" href="" />,
    out: "3/10",
    due: "3/23",
    gearup: [
      <Link text="Gear-Up Video" href="" />,
      <Link text="Gear-Up Slides" href="" />,
    ],
  },
];
