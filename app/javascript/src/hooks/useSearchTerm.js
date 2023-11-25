import { useState } from "react";

import { useDebounce } from "neetocommons/react-utils";

export const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm).toLowerCase().trim();

  const handleChange = ({ target }) => setSearchTerm(target.value);

  return {
    searchTerm: debouncedSearchTerm,
    searchProps: { value: searchTerm, onChange: handleChange },
  };
};
