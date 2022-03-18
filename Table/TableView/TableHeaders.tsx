import React, { useRef } from "react";
import { Div, DivThemeCSSProps } from "shared-ui/styledConfig";
import styled, { css } from "styled-components";
import { TableViewProps } from ".";
import { chevronDown as chevronDownIcon } from "../icons";
import { SortDirection } from "../TableDataProvider";
import { columnWidthPercentage, TableViewCellContainer } from "./common";

type TableViewHeaderProps = {
  isLast: boolean;
};
type TVHP = TableViewHeaderProps;
export const TableViewHeader = styled(TableViewCellContainer)<TVHP>`
  border-bottom: solid 1px ${(p) => p.theme.colors.gray300};
  background-color: ${(p) => p.theme.colors.white50};
  height: 47px;
  ${(p) => p.theme.css.body2};
  color: ${(p) => p.theme.colors.text};
  ${(p) =>
    p.isLast &&
    css`
      border-right: solid 1px transparent !important;
    `}
`;

type SortIndicatorProps = {
  direction: SortDirection;
};
export const SortIndicator = styled(Div)<SortIndicatorProps>`
  margin-left: 10px;
  margin-top: -4px;
  ${(p) =>
    p.direction === SortDirection.asc &&
    css`
      margin-top: 3px;
      transform: rotate(180deg);
    `}
  svg {
    path {
      fill: ${(p) => p.theme.colors.gray300};
    }
  }
`;

export const TableHeadersContainer = styled(Div)`
  overflow-x: hidden;
`;

export const TableHeadersContent = styled(Div)`
  /* table scrollbar offset */
  border-right: solid 10px ${(p) => p.theme.colors.gray50};
`;

type TableHeadersProps = Pick<
  TableViewProps,
  "columns" | "sortBy" | "setSortBy" | "rowHeight" | "rowWidth"
> & {
  scrollLeft: number;
} & DivThemeCSSProps;
export const TableHeaders = ({
  scrollLeft = 0,
  columns,
  sortBy,
  setSortBy,
  rowHeight,
  rowWidth = 1,
  ...props
}: TableHeadersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  if (containerRef.current) containerRef.current.scrollLeft = scrollLeft;

  return (
    <TableHeadersContainer ref={containerRef} {...props}>
      <TableHeadersContent dflex w={`${100 * rowWidth}%`}>
        {columns.map((column, index) => {
          const { header, Header } = column;
          const onHeaderClick = () => {
            if (!setSortBy || column.disableSort) return;
            const field = column.dataAccessor;

            if (
              sortBy?.field === field &&
              sortBy?.direction === SortDirection.asc
            ) {
              setSortBy({
                field,
                direction: SortDirection.desc,
              });
            } else {
              setSortBy({
                field,
                direction: SortDirection.asc,
              });
            }
          };

          return (
            <TableViewHeader
              key={index}
              isLast={index === columns.length - 1}
              w={columnWidthPercentage(column, columns)}
              onClick={onHeaderClick}
            >
              <>{Header ? <Header /> : header}</>
              {sortBy?.field === column.dataAccessor && (
                <SortIndicator direction={sortBy?.direction}>
                  {chevronDownIcon}
                </SortIndicator>
              )}
            </TableViewHeader>
          );
        })}
      </TableHeadersContent>
    </TableHeadersContainer>
  );
};
