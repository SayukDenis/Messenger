import React from "react";
import MainForSearchForAllPages from "./Search for all pages containers/MainForSearchForAllPages";
import HeaderForSearchForAllPages from "./Search for all pages containers/HeaderForSearchForAllPages";

interface SearchForAllPagesProps {
  navigation:any;
}
const SearchForAllPages: React.FC<SearchForAllPagesProps> = ({navigation}) => {
  return (
    <>
      <HeaderForSearchForAllPages navigation={navigation}/>
      <MainForSearchForAllPages />
    </>
  );
};
export default SearchForAllPages;
