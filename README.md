# CS0200 Spring 2023 Space Site

## Overview

This website is built using Vite + React + TypeScript and styled using TailwindCSS. All 3D renders are done using `react-three-fiber` which lightly wraps `three-js`. To run this website locally:

```bash
git clone <REPO_NAME> # Update this name
cd space-site
npm install
vite run dev
```

Alternatively, to deploy to Github Pages:

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

## `components/`

This directory contains all the minor/reusable parts of the website.

## `assets/`

This directory contains all the pictures and videos used in the website.

Note: Vite mangles the names to the files in this directory, therefore, to reference files in this directory one must either directly import it (if the file is known beforehand) or one must dynamically import it by first converting it to a `URL` and getting its `href`.

```js
// Static Import
import exampleURL from "path/to/img";

// Dynamic Import
const exampleURL = new URL(`path/to/${img}}`, import.meta.url).href;
```

# TODOs

## General

-   Make the website more responsive for mobile layouts! Mostly navbar + about section
-   New color scheme?/check for accesibility?
-   Change color scheme to use custom Tailwind properties (`primary`, `secondary`, `accent`, etc.) for easy changing later on
-   Overall documentation
-   Make styling nicer?
-   Add _stars_
-   Fill in more of the empty void perhaps?
-   Update lectures info
-   Update dates
-   Update staff info
-   Update links
-   Make bundle size smaller
-   Take a look at the Google Lighthouse Report

## `App.tsx`

-   Dynamically determine the scroll padding of the page so we can compute the section heights without requiring the _magic_ number
-   Maybe make a `useScroll` hook? Not sure if this is even the right use case of React hooks, but worth investigating to make the entire scroll code nicer to look at!

## `ThreeCanvas.tsx`

-   Make more general by adding `props`
