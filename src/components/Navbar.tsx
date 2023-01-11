import { NavLink } from "./NavLink";
import { useScrollCapture } from "../hooks/useScrollCapture";
import { useResizeCapture } from "../hooks/useResizeCapture";
import rocketURL from "../assets/imgs/rocketship.svg";

const lerp = (
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number,
    val: number
) => ((val - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;

const insertIndex = (list: number[], val: number) => {
    for (let i = 0; i < list.length; i++) {
        if (val < list[i]) return i;
    }
    return list.length;
};

const determineRocketPosition = (
    liPositions: number[],
    sectionPositions: number[],
    scrollPosition: number
) => {
    sectionPositions.sort((a, b) => a - b);

    const prevSectionIndex = insertIndex(sectionPositions, scrollPosition) - 1;
    const nextSectionIndex = prevSectionIndex + 1;

    if (prevSectionIndex < 0) {
        return liPositions[0];
    }

    if (prevSectionIndex === liPositions.length - 1) {
        return liPositions[liPositions.length - 1];
    }

    const lerpVal = lerp(
        sectionPositions[prevSectionIndex],
        sectionPositions[nextSectionIndex],
        liPositions[prevSectionIndex],
        liPositions[nextSectionIndex],
        scrollPosition
    );

    return lerpVal;
};

export const Navbar = () => {
    const scrollPosition = useScrollCapture(computeScrollPosition, 0);
    const [sectionPositions, liPositions] = useResizeCapture(computeOffsets, [
        [],
        [],
    ]);
    const navLinks: [string, string][] = [
        ["about", "earth.svg"],
        ["lectures", "mars.svg"],
        ["assignments", "jupiter.svg"],
        ["labs", "saturn.svg"],
        ["hours", "uranus.svg"],
        ["staff", "neptune.svg"],
    ];

    return (
        <nav className="sticky top-0 z-50">
            <div className="flex relative">
                <img
                    className="w-16 z-10 absolute top-2"
                    style={{
                        left: `${determineRocketPosition(
                            liPositions,
                            sectionPositions,
                            scrollPosition
                        )}px`,
                    }}
                    src={rocketURL}
                    id="rocket"
                />
                <ul
                    className="flex w-full h-full items-stretch justify-around"
                    id="primary-navigation"
                >
                    {navLinks.map(([link, img], index) => (
                        <li className="w-full h-full" key={index}>
                            <NavLink title={link} img={img} />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const computeOffsets = (): [number[], number[]] => {
    const sectionIDs = [
        "about",
        "lectures",
        "assignments",
        "labs",
        "hours",
        "staff",
    ];

    const sectionOffsets = sectionIDs.map(
        (sectionID) =>
            (document.getElementById(sectionID)?.offsetTop as number) - 96
    );

    const navbarID = "primary-navigation";
    const rocketID = "rocket";
    const ul = document.getElementById(navbarID) as HTMLElement;
    const rocket = document.getElementById(rocketID) as HTMLElement;

    const liElements = [...ul.children];
    const liOffsets = liElements.map((li) => {
        const left = li.getBoundingClientRect().left;
        const right = li.getBoundingClientRect().right;

        // Must subtract off half the rocket width to ensure the rocket is centered
        return (
            ((left + right - rocket.getBoundingClientRect().width) as number) /
            2
        );
    });

    return [sectionOffsets, liOffsets];
};

const computeScrollPosition = () => {
    const appID = "App";
    const app = document.getElementById(appID) as HTMLElement;

    return app.scrollTop;
};
