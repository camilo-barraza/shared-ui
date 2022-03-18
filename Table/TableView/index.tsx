import React, { useState } from "react";
import { AutoSizer, Grid } from "react-virtualized";
import styled, { css } from "styled-components";
import { Div, DivThemeCSSProps } from "../../styledConfig/utils";
import { Spinner } from "../../Spinner";
import { SortBy } from "../TableDataProvider";
import { TableHeaders } from "./TableHeaders";
import { TableRow } from "./TableRow";
export * from "./common";
export * from "./TableHeaders";
export * from "./TableRow";
export { TableView };

type TableViewWrapperProps = {
  isLoading: boolean;
};
export const TableViewWrapper = styled(Div)<TableViewWrapperProps>`
  ${(p: any) =>
    p.isLoading &&
    css`
      opacity: 0.5;
    `}
  border-radius: 8px;
  border: solid 1px ${(p) => p.theme.colors.gray300};
  overflow: hidden;

  // prevents clipped dropdowns
  .ReactVirtualized__Grid__innerScrollContainer {
    overflow: visible !important;
  }
  .ReactVirtualized__Table__row {
    overflow: visible !important;
  }
`;

const SpinnerWrapper = styled(Div)`
  pointer-events: none;
  z-index: 100;
`;

const tableHeaderId = "tableHeaderId";

export type TableViewColumn = {
  header?: string;
  Header?: (p: any) => JSX.Element;
  Content?: (p: any) => JSX.Element;
  dataAccessor?: string;
  preventRowClick?: boolean;
  disableSort?: boolean;
  width?: number;
};
type TableSection = {
  rowStartIndex?: number;
  rowStopIndex?: number;
  data?: any[];
};
export type TableViewProps = {
  data: any[];
  columns: TableViewColumn[];
  sortBy?: SortBy;
  setSortBy?: React.Dispatch<React.SetStateAction<SortBy>>;
  isLoading?: boolean;
  pageSize?: number;
  highlightFirstRow?: boolean;
  rowWidth?: number;
  rowHeight?: number;
  onSectionRendered?: (section: TableSection) => void;
  onTableScroll?: (scrollTop: number) => void;
  onRowClick?: (row: any) => void;
} & DivThemeCSSProps;
const TableView = ({
  data,
  columns,
  pageSize,
  onRowClick = null,
  sortBy = { field: null, direction: null },
  isLoading = false,
  highlightFirstRow = false,
  setSortBy = null,
  rowWidth = 1,
  onSectionRendered,
  rowHeight = 70,
  h = 500,
  onTableScroll = null,
  ...props
}: TableViewProps) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const tableHeadersHeight =
    document.getElementById(tableHeaderId)?.clientHeight || 0;

  const tableHeadersUI = (
    <>
      {data.length > 0 && (
        <TableHeaders
          id={tableHeaderId}
          {...{ rowHeight, rowWidth, scrollLeft, columns, sortBy, setSortBy }}
        />
      )}
    </>
  );

  const onScroll = ({ scrollTop, scrollLeft: _scrollLeft }) => {
    setScrollLeft(_scrollLeft);
    if (onTableScroll) onTableScroll(scrollTop);
  };

  const _onSectionRendered = ({ rowStartIndex, rowStopIndex }) => {
    if (onSectionRendered)
      onSectionRendered({
        rowStartIndex,
        rowStopIndex,
        data: data.slice(rowStartIndex, rowStopIndex + 1),
      });
  };

  const rowRenderer = ({ rowIndex, key, style }) => (
    <Div style={style} key={key}>
      <TableRow
        {...{
          columns,
          onRowClick,
          highlightFirstRow,
        }}
        row={data[rowIndex]}
        indexI={rowIndex}
        isLast={rowIndex === data.length - 1}
        pRelative
      />
    </Div>
  );

  const loadingUI = (
    <>
      {isLoading && (
        <SpinnerWrapper pRelative>
          <Div w100 h100 centered h={400} pAbsolute>
            <Spinner />
          </Div>
        </SpinnerWrapper>
      )}
    </>
  );

  const tableHeight = pageSize
    ? pageSize * rowHeight + tableHeadersHeight + 3
    : h;
  return (
    <TableViewWrapper {...{ isLoading }} h={tableHeight} {...props}>
      {tableHeadersUI}
      {loadingUI}
      <AutoSizer>
        {({ width, height }) => {
          /* using style={{ willChange: "unset" }} is important for having items 
            like backdrops with position fixed inside of the table working as 
            expected. Required for dropdowns in cells */
          let gridStyles: React.CSSProperties = {
            outline: "none",
            willChange: "unset",
          };
          if (rowWidth === 1)
            gridStyles = {
              ...gridStyles,
              overflowX: "hidden",
              overflowY: "visible",
            };

          return (
            <Grid
              scrollLeft={scrollLeft}
              style={gridStyles}
              width={width}
              columnCount={1}
              onSectionRendered={_onSectionRendered}
              onScroll={onScroll}
              columnWidth={Math.floor(width * rowWidth)}
              height={height - tableHeadersHeight}
              rowHeight={rowHeight}
              cellRenderer={rowRenderer}
              rowCount={data.length}
            />
          );
        }}
      </AutoSizer>
    </TableViewWrapper>
  );
};
