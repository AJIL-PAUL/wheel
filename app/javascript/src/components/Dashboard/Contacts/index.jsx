import React, { useState } from "react";

import { isNotEmpty } from "neetocist";
import { Container } from "neetoui/layouts";
import { filter } from "ramda";

import NoData from "components/commons/NoData";
import { useSearchTerm } from "hooks/useSearchTerm";

import { INITIAL_CONTACT_LIST } from "./constants";
import Header from "./Header";
import ContactsTable from "./Table";

const Contacts = () => {
  const [page, setPage] = useState(1);

  const { searchTerm, searchProps } = useSearchTerm();

  const contacts = INITIAL_CONTACT_LIST;

  const filteredContacts = filter(
    ({ firstName, lastName, email }) =>
      `${firstName} ${lastName}`.toLowerCase().includes(searchTerm) ||
      email.toLowerCase().includes(searchTerm),
    contacts
  );

  return (
    <Container>
      <Header searchProps={searchProps} />
      {isNotEmpty(filteredContacts) ? (
        <ContactsTable
          page={page}
          rowData={filteredContacts}
          setPage={setPage}
        />
      ) : (
        <NoData entityTranslationKey="labels.contact" onClick={() => {}} />
      )}
    </Container>
  );
};

export default Contacts;
