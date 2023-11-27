import React from "react";

import { noop } from "neetocist";
import { Table as NeetoUITable } from "neetoui";
import { DEFAULT_PAGE_SIZE } from "src/constants";

import TableWrapper from "neetomolecules/TableWrapper";

import { buildColumnData } from "./utils";

const Table = ({
  page,
  rowData,
  setIsDeleteAlertOpen,
  setSelectedContact,
  setPage = noop,
}) => {
  const handleDeleteContact = contact => {
    setSelectedContact(contact);
    setIsDeleteAlertOpen(true);
  };

  return (
    <TableWrapper>
      <NeetoUITable
        fixedHeight
        columnData={buildColumnData({ handleDeleteContact })}
        currentPageNumber={page}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        handlePageChange={setPage}
        rowData={rowData}
      />
    </TableWrapper>
  );
};

export default Table;
