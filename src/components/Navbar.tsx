import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "./NavLink";
import rocketURL from "../assets/imgs/rocketship.svg";

type NavbarProps = {
    scrollPosition: number;
    sectionPositions: number[];
};

const determineRocketPosition = (
    liPositions: number[],
    sectionPositions: number[],
    scrollPosition: number
) => {
    sectionPositions.sort((a, b) => a - b);

    const navbarSectionIDs = [
        "about",
        "lectures",
        "assignments",
        "labs",
        "hours",
        "staff",
    ];
    const prevSectionIndex = insertIndex(sectionPositions, scrollPosition) - 1;
    const nextSectionIndex = prevSectionIndex + 1;

    const prevSectionPosition = sectionPositions[prevSectionIndex];
    const nextSectionPosition = sectionPositions[nextSectionIndex];

    const prevSectionLIPosition = liPositions[prevSectionIndex];
    const nextSectionLIPosition = liPositions[nextSectionIndex];

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

function Navbar({ scrollPosition, sectionPositions }: NavbarProps) {
    const navLinks: [string, string][] = [
        ["about", "earth.svg"],
        ["lectures", "mars.svg"],
        ["assignments", "jupiter.svg"],
        ["labs", "saturn.svg"],
        ["hours", "uranus.svg"],
        ["staff", "neptune.svg"],
    ];

    const ulRef = useRef<HTMLUListElement>(null!);
    const rocketRef = useRef<HTMLImageElement>(null!);
    const [liPositions, setLIPositions] = useState<number[]>([]);

    useEffect(() => {
        const liElements = [...ulRef.current.children];
        setLIPositions(
            liElements.map((li) => {
                const left = li.getBoundingClientRect().left;
                const right = li.getBoundingClientRect().right;

                // Must subtract off half the rocket width to ensure the rocket is centered
                return (
                    (left +
                        right -
                        rocketRef.current.getBoundingClientRect().width) /
                    2
                );
            })
        );
    }, []);

    return (
        <nav className="sticky top-0 bg-neutral-800 z-50">
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
                    ref={rocketRef}
                    src={rocketURL}
                />
                <ul
                    ref={ulRef}
                    className="flex w-full h-full items-stretch justify-around"
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
}

export default Navbar;

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
