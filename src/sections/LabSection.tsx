import { SectionTitle } from "../components/SectionTitle";
import Table from "../components/Table";
import { labs } from "../data/labs";
import { Lab } from "../data/types";

export const convertLabsToTableRows = (
    labs: Lab[]
): (string | React.ReactElement)[][] => {
    return labs.map((lab) => [lab.handout, lab.out, lab.solution]);
};

export const LabSection = () => {
    return (
        <section id="labs" className="min-h-screen">
            <SectionTitle text="Labs" />

            <div className="flex justify-center">
                <Table
                    tableHeaders={["Lab", "Out", "Solutions"]}
                    tableAlignment={["l", "c", "c"]}
                    rows={convertLabsToTableRows(labs)}
                />
            </div>
        </section>
    );
};
