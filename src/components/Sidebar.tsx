import { Link } from "./Link";
import { LinkList } from "./LinkList";

export const Sidebar = () => {
    const courseMaterials = [
        <Link key={0} text="Syllabus" href="" />,
        <Link key={1} text="EdStem" href="" />,
        <Link key={2} text="Gradescope" href="" />,
        <Link key={3} text="Hours" href="" />,
        <Link key={4} text="Extension Request Form" href="" />,
    ];

    const labForms = [
        <Link key={0} text="Permanant Lab Switch Form" href="" />,
        <Link key={1} text="Temporary Lab Switch Form" href="" />,
    ];

    const generalResources = [
        <Link key={0} text="Collaboration Policy" href="" />,
        <Link key={1} text="Github Guide" href="" />,
        <Link key={2} text="RegExp Guide" href="" />,
        <Link key={3} text="TA Hours Guide" href="" />,
        <Link key={4} text="Terminal Commands" href="" />,
        <Link key={5} text="Gradescope Submission Guide" href="" />,
        <Link key={6} text="Memory Diagram Guide" href="" />,
    ];

    const javaGuides = [
        <Link key={0} text="IntelliJ Setup Guide" href="" />,
        <Link key={1} text="Java Style Guide" href="" />,
    ];

    const pythonGuides = [
        <Link key={0} text="Java to Python Guide" href="" />,
        <Link key={1} text="VSCode and Python Setup Guide" href="" />,
        <Link key={2} text="Python Style Guide" href="" />,
        <Link key={3} text="Python Testing Guide" href="" />,
    ];

    return (
        <div className="basis-1/3">
            <h2 className="font-orbitron font-bold text-3xl mt-8 mb-3">
                Resources
            </h2>

            <LinkList title="Course Materials" links={courseMaterials} />
            <LinkList title="Lab Forms" links={labForms} />
            <LinkList title="General Resources" links={generalResources} />
            <LinkList title="Java Guides" links={javaGuides} />
            <LinkList title="Python Guides" links={pythonGuides} />
        </div>
    );
};
