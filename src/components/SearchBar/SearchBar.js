import React, { useState } from "react";
import { baseUrl } from "utils/constants/url";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setSearchResults } from "redux/actions/searchResults";
import { setSearchResultsNumber} from "redux/actions/searchResultsNumber";
import { setSearchWord} from 'redux/actions/searchWord';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "components/SearchBar/searchBar.module.scss";

const SearchBar = ({ setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const { formSearchBar, searchInput, searchButton } = styles;

  const handleSubmit = async (e) => {
    e.preventDefault();   
      setCurrentPage && setCurrentPage(0);
    
    try {
      const response = await axios.get(`${baseUrl}/search/?q=${searchQuery}`);
      dispatch(setSearchResults(response.data.response.docs));
      dispatch(setSearchResultsNumber(response.data.response.numFound));
      dispatch(setSearchWord(searchQuery));
    } catch (error) {
      console.log(error);
    }

    history.push("/rezultate");
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={formSearchBar}>
      <input
        onChange={handleChange}
        className={searchInput}
        type="text"
        placeholder="cautare..."
      ></input>
      <button className={searchButton} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  );
};

export default SearchBar;
