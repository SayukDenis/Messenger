import React from "react";
import MainForSearchForAllPages from "./Search for all pages containers/MainForSearchForAllPages";
import HeaderForSearchForAllPages from "./Search for all pages containers/HeaderForSearchForAllPages";

interface SearchForAllPagesProps {}
const SearchForAllPages: React.FC<SearchForAllPagesProps> = ({}) => {
  return (
    <>
      <HeaderForSearchForAllPages />
      <MainForSearchForAllPages />
    </>
  );
};
export default SearchForAllPages;
