import React from "react";

import { noop } from "neetocist";
import { Table as NeetoUITable } from "neetoui";

import { DEFAULT_PAGE_SIZE } from "components/constants";
import TableWrapper from "neetomolecules/TableWrapper";

import { getColumnData } from "./utils";

const Table = ({ page, rowData, setPage = noop }) => (
  <TableWrapper>
    <NeetoUITable
      fixedHeight
      columnData={getColumnData()}
      currentPageNumber={page}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      handlePageChange={setPage}
      rowData={rowData}
    />
  </TableWrapper>
);

export default Table;
