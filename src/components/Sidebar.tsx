import { Link } from "./Link";
import LinkList from "./LinkList";

function Sidebar() {
    const courseMaterials = [
        <Link text="Syllabus" href="" />,
        <Link text="EdStem" href="" />,
        <Link text="Gradescope" href="" />,
        <Link text="Hours" href="" />,
        <Link text="Extension Request Form" href="" />,
    ];

    const labForms = [
        <Link text="Permanant Lab Switch Form" href="" />,
        <Link text="Temporary Lab Switch Form" href="" />,
    ];

    const generalResources = [
        <Link text="Collaboration Policy" href="" />,
        <Link text="Github Guide" href="" />,
        <Link text="RegExp Guide" href="" />,
        <Link text="TA Hours Guide" href="" />,
        <Link text="Terminal Commands" href="" />,
        <Link text="Gradescope Submission Guide" href="" />,
        <Link text="Memory Diagram Guide" href="" />,
    ];

    const javaGuides = [
        <Link text="IntelliJ Setup Guide" href="" />,
        <Link text="Java Style Guide" href="" />,
    ];

    const pythonGuides = [
        <Link text="Java to Python Guide" href="" />,
        <Link text="VSCode and Python Setup Guide" href="" />,
        <Link text="Python Style Guide" href="" />,
        <Link text="Python Testing Guide" href="" />,
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
}

export default Sidebar;
