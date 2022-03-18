import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import { Spinner } from "../Spinner";

export enum SortDirection {
  asc = "asc",
  desc = "desc",
}
export type SortBy = {
  field: any;
  direction: SortDirection;
};
type State = {
  data: any[];
  isLoading: boolean;
  currentPage: number;
  totalPages: any;
  pageSize: number;
  totalCount: number;
  sortBy: SortBy;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  getData: () => Promise<void>;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const TableContext = createContext<State>({} as State);

export const TableDataProvider = ({
  children,
  dataUrl,
  query = "",
  filters = null,
  defaultSortBy = { field: null, direction: null },
  onGetData = null,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(7);

  const getData = async () => {
    setLoading(true);
    const { data: payload } = await api.get(dataUrl, {
      params: {
        query,
        page: currentPage,
        per_page: pageSize,
        sort: sortBy.field,
        sort_direction: sortBy.direction,
        filters: filters || {},
      },
    });

    if (onGetData) {
      onGetData(payload);
    }
    setData(payload.data);
    setTotalPages(payload.pagination?.total_pages);
    setTotalCount(payload.pagination?.total_count);
    setLoading(false);
  };

  const resetPagination = () => {
    setCurrentPage(null);
    setTimeout(() => {
      setCurrentPage(1);
    }, 10);
  };

  useEffect(() => {
    resetPagination();
  }, [query, dataUrl, sortBy, filters, pageSize]);

  useEffect(() => {
    if (currentPage) {
      getData();
    }
  }, [currentPage]);

  const value = {
    data,
    isLoading,
    currentPage,
    totalPages: totalPages || 1,
    sortBy,
    pageSize,
    totalCount,
    setPageSize,
    getData,
    setSortBy,
    setCurrentPage,
  };
  return (
    <TableContext.Provider value={value}>
      {data ? children : isLoading && <Spinner mt={200} />}
    </TableContext.Provider>
  );
};

export const useTableContext = () => useContext(TableContext);
