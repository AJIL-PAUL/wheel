import React, { useState } from "react";

import { isNotEmpty } from "neetocist";
import { Container } from "neetoui/layouts";
import { filter } from "ramda";

import NoData from "components/commons/NoData";
import { useSearchTerm } from "hooks/useSearchTerm";

import { INITIAL_CONTACT_LIST } from "./constants";
import DeleteAlert from "./Delete";
import Header from "./Header";
import CreatePane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [isCreateContactPaneOpen, setIsCreateContactPaneOpen] = useState(false);
  const [contacts, setContacts] = useState(INITIAL_CONTACT_LIST);
  const [page, setPage] = useState(1);

  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const { searchTerm, searchProps } = useSearchTerm();

  const filteredContacts = filter(
    ({ firstName, lastName, email }) =>
      `${firstName} ${lastName}`.toLowerCase().includes(searchTerm) ||
      email.toLowerCase().includes(searchTerm),
    contacts
  );

  const handleAddContact = () => setIsCreateContactPaneOpen(true);

  const handleCloseDeleteAlert = () => setIsDeleteAlertOpen(false);

  return (
    <Container>
      <Header searchProps={searchProps} onClickAddContact={handleAddContact} />
      {isNotEmpty(filteredContacts) ? (
        <Table
          page={page}
          rowData={filteredContacts}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          setPage={setPage}
          setSelectedContact={setSelectedContact}
        />
      ) : (
        <NoData
          entityTranslationKey="labels.contact"
          onClickPrimaryButton={handleAddContact}
        />
      )}
      <CreatePane
        isOpen={isCreateContactPaneOpen}
        setContacts={setContacts}
        onClose={() => setIsCreateContactPaneOpen(false)}
      />
      <DeleteAlert
        isOpen={isDeleteAlertOpen}
        selectedContact={selectedContact}
        setContacts={setContacts}
        onClose={handleCloseDeleteAlert}
      />
    </Container>
  );
};

export default Contacts;
