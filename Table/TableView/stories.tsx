import React from "react";
import { TableView } from ".";
import { TableViewColumn } from "./index";

export default {
  component: TableView,
  title: "TableView",
};

const tableColumns: TableViewColumn[] = [
  {
    header: "Column 1",
    width: 1,
    Content: ({ col1 }) => <div>{col1}</div>,
  },
  {
    header: "Column 2",
    width: 2,
    Content: ({ col2 }) => <div>{col2}</div>,
  },
  {
    header: "Column 3",
    width: 2,
    Content: ({ col3 }) => <div>{col3}</div>,
  },
];

const data = [
  { col1: "value 0 c1", col2: "value 0 c2", col3: "long value 0 c3" },
  { col1: "value 1 c1", col2: "value 1 c2", col3: "long value 1 c3" },
  { col1: "value 2 c1", col2: "value 2 c2", col3: "long value 2 c3" },
];

export const Base = () => {
  return (
    <>
      <TableView data={data} columns={tableColumns} />
    </>
  );
};
