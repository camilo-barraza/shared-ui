import styled, { css } from "styled-components";
import { Div } from "../../styledConfig/utils";
import { TableViewColumn } from ".";

export const columnWidthPercentage = (
  column: TableViewColumn,
  columns: TableViewColumn[]
) => {
  const totalColumnWidthCount = columns.reduce((sum, c) => {
    return sum + (c.width ? c.width : 1);
  }, 0);

  return totalColumnWidthCount
    ? `${(column.width || 1 / totalColumnWidthCount) * 100}%`
    : `0%`;
};

export const TableViewCellContainer = styled(Div)`
  display: flex;
  padding-left: 16px;
  align-items: center;
  ${(p) =>
    p.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
  ${(p) => p.theme.css.body3};
  color: ${(p) => p.theme.colors.textPrim};
`;
