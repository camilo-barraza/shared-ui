import React from "react";
import { Div, DivThemeCSSProps } from "shared-ui/styledConfig";
import styled, { css } from "styled-components";
import { Pagination } from "./Pagination";
import { useTableContext } from "./TableDataProvider";
import { TableView as TableViewBase } from "./TableView";

type TableViewProps = {
  withPagination?: boolean;
};
const TableView = styled(TableViewBase)<TableViewProps>`
  ${(p) =>
    p.withPagination &&
    css`
      border-radius: 0px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    `}
`;

type Props = {
  blankState?: JSX.Element | null;
  columns: any[];
  onRowClick?: (row: any) => void;
} & DivThemeCSSProps;

const Table = ({
  columns,
  onRowClick = null,
  blankState = null,
  ...props
}: Props): JSX.Element => {
  const { data, isLoading, sortBy, setSortBy, totalPages } = useTableContext();
  const withPagination = data.length > 0 && totalPages > 1;

  const paginationUI = (
    <>
      {withPagination && (
        <Div dflex justifyCenter pb={50}>
          <Pagination />
        </Div>
      )}
    </>
  );

  return (
    <Div {...props}>
      {data.length ? (
        <TableView
          pageSize={data.length}
          withPagination={withPagination}
          {...{ isLoading, data, columns, sortBy, setSortBy, onRowClick }}
        />
      ) : (
        blankState
      )}
      {paginationUI}
    </Div>
  );
};

export { Table };
export * from "./TableDataProvider";
