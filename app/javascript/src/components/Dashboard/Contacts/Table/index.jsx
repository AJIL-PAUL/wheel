import React from "react";

import { Table as NeetoUITable } from "neetoui";

import TableWrapper from "neetomolecules/TableWrapper";

import { getColumnData } from "./utils";

const Table = ({ page, rowData, setPage }) => (
  <TableWrapper>
    <NeetoUITable
      fixedHeight
      columnData={getColumnData()}
      currentPageNumber={page}
      defaultPageSize={15}
      handlePageChange={setPage}
      rowData={rowData}
    />
  </TableWrapper>
);

export default Table;
