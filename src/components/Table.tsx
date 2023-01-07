import React from "react";
import { LinkProps } from "./Link";

type TableProps = {
  tableHeaders: string[];
  tableAlignment: ("c" | "l")[];
  rows: (
    | string
    | React.ReactElement<LinkProps>
    | React.ReactElement<LinkProps>[]
  )[][];
};

function handleTableElement(
  elt: string | React.ReactElement<LinkProps> | React.ReactElement<LinkProps>[],
  col_index: number,
  tableAlignment: ("c" | "l")[]
): string | React.ReactElement {
  const styles = `px-5 py-3 ${
    tableAlignment[col_index] === "c" ? "text-center" : "text-left"
  }`;

  if (Array.isArray(elt)) {
    return (
      <td key={col_index} className={styles}>
        <ul>
          {elt.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </td>
    );
  }

  return (
    <td className={styles} key={col_index}>
      {elt}
    </td>
  );
}

function Table({ tableHeaders, tableAlignment, rows }: TableProps) {
  return (
    <div className="rounded-lg overflow-hidden h-fit w-fit m-5">
      <table className="table-auto border-separate border-spacing-x-0 border-spacing-y-0">
        <thead>
          <tr className="bg-neutral-700">
            {tableHeaders.map((headerValue, index) => (
              <th key={index} className="px-5 py-3">
                {headerValue}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="odd:bg-neutral-800 even:bg-neutral-700">
              {row.map((elt, index) =>
                handleTableElement(elt, index, tableAlignment)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
