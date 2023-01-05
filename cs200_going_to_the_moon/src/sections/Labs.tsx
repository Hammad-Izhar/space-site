import { SectionTitle } from "../components/SectionTitle";
import Table from "../components/Table";
import { labs } from "../data/labs";
import { Lab } from "../data/types";

function convertLabsToTableRows(
  labs: Lab[]
): (string | React.ReactElement)[][] {
  return labs.map((lab) => [lab.handout, lab.out, lab.solution]);
}

function Labs() {
  return (
    <section>
      <SectionTitle text="Labs" />
      <Table
        tableHeaders={["Lab", "Out", "Solutions"]}
        rows={convertLabsToTableRows(labs)}
      />
    </section>
  );
}

export default Labs;
