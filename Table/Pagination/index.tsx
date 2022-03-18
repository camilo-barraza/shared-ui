import React from "react";
import { useTableContext } from "../TableDataProvider";
import {
  jumpToFirst,
  jumpToLast,
  nextPage,
  PaginationIcon,
  previousPage,
} from "./icons";
import styled from "styled-components";
import { Div, colors } from "../../styledConfig";

const Container = styled(Div)`
  border: solid 1px ${(p) => p.theme.colors.gray300};
  border-top: none;
  overflow: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Pagination = () => {
  const {
    totalPages,
    totalCount,
    pageSize,
    currentPage,
    setCurrentPage,
  } = useTableContext();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const cursor = (currentPage - 1) * pageSize;

  const buttonsUI = (
    <Div mr={25} dflex>
      <PaginationIcon
        isDisabled={isFirstPage}
        onClick={() => setCurrentPage(1)}
      >
        {jumpToFirst}
      </PaginationIcon>
      <PaginationIcon
        isDisabled={isFirstPage}
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
      >
        {previousPage}
      </PaginationIcon>
      <Div centered ml={10}>
        {cursor + 1}-{Math.min(cursor + pageSize, totalCount)} of {totalCount}
      </Div>
      <PaginationIcon
        isDisabled={isLastPage}
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
      >
        {nextPage}
      </PaginationIcon>
      <PaginationIcon
        isDisabled={isLastPage}
        onClick={() => setCurrentPage(totalPages)}
      >
        {jumpToLast}
      </PaginationIcon>
    </Div>
  );

  return (
    <Container w100>
      <Div h={38} bg={colors.gray50} justifyEnd>
        <Div dflex alignCenter body2 c={colors.text}>
          {buttonsUI}
        </Div>
      </Div>
    </Container>
  );
};

export { Pagination };
