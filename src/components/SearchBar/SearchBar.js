import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { baseUrl } from "utils/constants/url";
import { setSearchResults } from "redux/actions/searchResults";
import styles from "components/SearchBar/searchBar.module.scss";

const SearchBar = ({ setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { searchWord } = useSelector(state => state.searchResults);

  const { formSearchBar, searchInput, searchButton } = styles;

  useEffect(() => {
    setSearchQuery(searchWord)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage && setCurrentPage(0);

    try {
      const response = await axios.get(`${baseUrl}/search/?q=${searchQuery}`);
      dispatch(setSearchResults({
        searchResults: response.data.response.docs,
        resultsNumber: response.data.response.numFound,
        searchWord: searchQuery,
      }));
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
        value={searchQuery}
      ></input>
      <button className={searchButton} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  );
};

export default SearchBar;
