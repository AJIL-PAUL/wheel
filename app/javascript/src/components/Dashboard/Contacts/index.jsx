import React, { useState } from "react";

import { isNotEmpty } from "neetocist";
import { Container } from "neetoui/layouts";
import { filter } from "ramda";

import NoData from "components/commons/NoData";
import { useSearchTerm } from "hooks/useSearchTerm";

import { INITIAL_CONTACT_LIST } from "./constants";
import Header from "./Header";
import CreateContactPane from "./Pane/Create";
import ContactsTable from "./Table";

const Contacts = () => {
  const [isCreateContactPaneOpen, setIsCreateContactPaneOpen] = useState(false);
  const [contacts, setContacts] = useState(INITIAL_CONTACT_LIST);
  const [page, setPage] = useState(1);

  const { searchTerm, searchProps } = useSearchTerm();

  const filteredContacts = filter(
    ({ firstName, lastName, email }) =>
      `${firstName} ${lastName}`.toLowerCase().includes(searchTerm) ||
      email.toLowerCase().includes(searchTerm),
    contacts
  );

  const handleClickAddContact = () => setIsCreateContactPaneOpen(true);

  return (
    <Container>
      <Header
        searchProps={searchProps}
        onClickAddContact={handleClickAddContact}
      />
      {isNotEmpty(filteredContacts) ? (
        <ContactsTable
          page={page}
          rowData={filteredContacts}
          setPage={setPage}
        />
      ) : (
        <NoData
          entityTranslationKey="labels.contact"
          onClick={handleClickAddContact}
        />
      )}
      <CreateContactPane
        isOpen={isCreateContactPaneOpen}
        setContacts={setContacts}
        onClose={() => setIsCreateContactPaneOpen(false)}
      />
    </Container>
  );
};

export default Contacts;
