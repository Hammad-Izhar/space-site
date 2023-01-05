import React from "react";
import { LinkProps } from "./Link";

type TableProps = {
  tableHeaders: string[];
  rows: (
    | string
    | React.ReactElement<LinkProps>
    | React.ReactElement<LinkProps>[]
  )[][];
};

function handleTableElement(
  elt: string | React.ReactElement<LinkProps> | React.ReactElement<LinkProps>[],
  unique_key: number
): string | React.ReactElement {
  if (Array.isArray(elt)) {
    return (
      <td key={unique_key}>
        <ul>
          {elt.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </td>
    );
  }

  return <td key={unique_key}>{elt}</td>;
}

function Table(props: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {props.tableHeaders.map((headerValue, index) => (
            <th key={index} scope="col">
              {headerValue}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            {row.map((elt, index) => handleTableElement(elt, index))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
