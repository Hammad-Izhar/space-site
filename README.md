# CS0200 Spring 2023 Space Site

## Overview

This website is built using Vite + React + TypeScript and styled using TailwindCSS. All 3D renders are done using `react-three-fiber` which lightly wraps `three-js`. To run this website locally:

```bash
git clone <REPO_NAME> # Update this name
cd space-site
npm install
vite run dev
```

To deploy to Github Pages:

```bash
npm run deploy
```

# Structure

All relevant code files are in the `src/` directory with the `favicon.ico` in the `public/` directory. To change the page title or edit the available fonts go to `index.html` located in the `root` directory.

## `App.tsx`

As is the case with most React apps, this is the place where everything comes together to form the webpage. It is currently a little cluttered with the scroll logic but hopefully we can find a way to clean it up!

## `three-js-renders/`

This directory contains the component `ThreeCanvas` which can be used to record the ThreeJS canvas. This is helpful for renders that are very intensive that might be best suited to be added as a looped video on the website (such as the Nebula!).

## `sections/`

This directory contains all the main "pages" of the website. Currently the website is using a single page type layout but it can be updated to instead have multiple static HTML pages.

## `data/`

This directory contains all the files that the components/pages pull data from to populate the website.

### `assignments.tsx`

Exports two arrays containing the information about all homework assignments and projects.

```ts
type Homework = {
    // Name of the HW assignment
    // NOTE: not rendered in the table
    name: string;

    // Link to the handout for the HW assignment
    // NOTE: this is the text that is rendered in the table
    handout: ReactElement<LinkProps>;

    // The date that the assignment is released formatted as ____
    out: string;

    // The date that the assignment is due formatted as ____
    due: string;
};

type Project = {
    // Name of the project
    // NOTE: not rendered in the table
    name: string;

    // Link to the handout for the project
    // NOTE: this is the text that is rendered in the table
    handout: ReactElement<LinkProps>;

    // The date that the project is released formatted as ____
    out: string;

    // The date that the project is due formatted as ____
    due: string;

    // A pair of links to the gear-up slides + video for the project
    gearup: ReactElement<LinkProps>[];
};
```

### `labs.tsx`

Exports an array containing the information about all labs.

```ts
type Lab = {
    // Name of the lab
    // NOTE: not rendered in the table
    name: string;

    // Link to the lab handout
    // NOTE: this is the text that is rendered in the table
    handout: ReactElement<LinkProps>;

    // The date that the lab is released formatted as ____
    out: string;

    // An empty string if the solutions have not been released or a link to the solutions
    solution: "" | ReactElement<LinkProps>;
};
```

### `lectures.tsx`

Exports an array containing the information about all lectures.

```ts
type Lecture = {
    // The date that the lectures was held on formatted as ____
    date: string;

    // The general topic of the lecture formatted as ____
    topic: string;

    // A link to to the Panopto video or the empty string if the video has not been released
    video_url: string | ReactElement<LinkProps>;

    // Links to any handouts required for the lecture
    lecture_handout: ReactElement<LinkProps>[];

    // Links to any files required for the lecture
    lecture_files: ReactElement<LinkProps>[];
};
```

### `staff.tsx`

Exports three arrays containing information about each of the professors, HTAs, and UTAs.

```ts
type Person = {
    // Name of the person
    name: string;

    // Pronouns of the person
    pronouns: string;

    // Hometown of the person
    hometown: string;

    // Small blurb to appear on card
    about: string;

    // Path to the image of the person
    // NOTE: relative to /src/assets/staff-images
    image: string;
};
```

## `components/`

This directory contains all the minor/reusable parts of the website.

## `hooks/`

This directory contains hooks used throughout the website.

### `useScrollCapture.tsx`

Contains the `useScrollCapture` hook which takes in a callback function and an initial state. Every time a scroll event is captured the callback is called and the value is returned.

### `useResizeCapture.tsx`

The same as the above hook except on window resize!

## `assets/`

This directory contains all the pictures and videos used in the website.

Note: Vite mangles the names to the files in this directory, therefore, to reference files in this directory one must either directly import it (if the file is known beforehand) or one must dynamically import it by first converting it to a `URL` and getting its `href`.

```ts
// Static Import
import exampleURL from "path/to/img";

// Dynamic Import
const exampleURL = new URL(`path/to/${img}}`, import.meta.url).href;
```

# TODOs/Ideas

## General

-   Make the website more responsive for mobile layouts! Mostly navbar + about section
-   Is there a difference between lecture handouts and lecture files?
-   Overall documentation
-   Make bundle size smaller
-   Take a look at the Google Lighthouse Report

## `App.tsx`

-   Dynamically determine the scroll padding of the page so we can compute the section heights without requiring the _magic_ number

## `ThreeCanvas.tsx`

-   Make more general by adding `props`

## `Planet.tsx`

-   Add custom rotation/position/size settings for each planet?
-   Height maps for the terrestrial planets would be cool!
-   Better lighting/colors/textures?
-   Instead of the moon and the earth seperate, have the moon orbit around the earth to scale?

## `data/`

-   Update the Project type to use a tuple rather than an array of links
-   Update lectures info
-   Update dates (+ decide on date format, YYYY-MM-DD or something else)
-   Update staff info
-   Update links

## Styling/Visuals

-   Change color scheme to use custom Tailwind properties (`primary`, `secondary`, `accent`, etc.) for easy changing later on
-   Make styling nicer?
-   Add _stars_
-   New color scheme?/check for accesibility?
-   Fill in more of the empty void perhaps?
