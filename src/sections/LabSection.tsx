import { SectionTitle } from "../components/SectionTitle";
import Table from "../components/Table";
import { labs } from "../data/labs";
import { Lab } from "../data/types";

function convertLabsToTableRows(
  labs: Lab[]
): (string | React.ReactElement)[][] {
  return labs.map((lab) => [lab.handout, lab.out, lab.solution]);
}

function LabSection() {
  return (
    <section id="labs">
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
}

export default LabSection;
