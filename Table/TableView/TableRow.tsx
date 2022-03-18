import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { TableViewProps } from ".";
import { Div, DivThemeCSSProps } from "../../styledConfig/utils";
import { columnWidthPercentage, TableViewCellContainer } from "./common";

export const Cell = (props: any) => {
  const { row, children, ...cellProps } = props;
  return useMemo(
    () => (
      <TableViewCellContainer {...cellProps}>{children}</TableViewCellContainer>
    ),
    // using [row] with usememo optimizes table renders but disables react hotreloading
    // [row, children] enables hotreloading, missing tests for optimizations
    // should we use [row] instead of [row, children] for table optimization ?
    [row]
  );
};

type TableViewRowProps = {
  isHighlighted: boolean;
  isLast: boolean;
};
export const TableViewRow = styled(Div)<TableViewRowProps>`
  height: 70px;
  background-color: white;
  ${(p) =>
    !p.isLast &&
    css`
      box-shadow: inset 0 -1px 0 ${(p) => p.theme.colors.gray300};
    `}
  ${(p) =>
    p.isHighlighted &&
    css`
      background: ${p.theme.colors.blue100};
      box-shadow: inset 0 0 0 3px ${p.theme.colors.blue500};
    `}
`;

type Props = Pick<
  TableViewProps,
  "columns" | "onRowClick" | "highlightFirstRow"
> & {
  row: any;
  indexI: number;
  isLast?: boolean;
} & DivThemeCSSProps;
export const TableRow = ({
  row,
  indexI,
  columns,
  onRowClick,
  isLast,
  highlightFirstRow,
  ...props
}: Props) => {
  const isHighlighted = indexI === 0 && highlightFirstRow;
  return (
    <>
      <TableViewRow dflex {...{ isHighlighted, isLast }} {...props}>
        {columns.map((column, indexJ) => {
          const { Content } = column;
          return (
            <Cell
              row={row}
              key={indexJ}
              onClick={
                onRowClick && !column.preventRowClick
                  ? () => {
                      onRowClick(row);
                    }
                  : null
              }
              w={columnWidthPercentage(column, columns)}
            >
              <>
                {Content ? (
                  <Content {...row} rowIndex={indexI} />
                ) : (
                  <Div truncateText>{row[column.dataAccessor] || "-"}</Div>
                )}
              </>
            </Cell>
          );
        })}
      </TableViewRow>
    </>
  );
};
