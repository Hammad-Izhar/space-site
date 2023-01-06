import { ReactElement } from "react";
import { LinkProps } from "../components/Link";

export type Homework = {
  name: string;
  handout: ReactElement<LinkProps>;
  out: string;
  due: string;
};

export type Project = {
  name: string;
  handout: ReactElement<LinkProps>;
  out: string;
  due: string;
  gearup: ReactElement<LinkProps>[];
};

export type Lecture = {
  date: string;
  topic: string;
  video_url: string | ReactElement<LinkProps>;
  lecture_handout: ReactElement<LinkProps>[];
  lecture_files: ReactElement<LinkProps>[];
};

export type Lab = {
  name: string;
  handout: ReactElement<LinkProps>;
  out: string;
  solution: string | ReactElement<LinkProps>;
};

export type Person = {
  name: string;
  pronouns: string;
  hometown: string;
  about: string;
  image: string;
};
