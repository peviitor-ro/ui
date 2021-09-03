import React, { useState } from "react";
import { baseUrl } from "utils/constants/url";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setSearchResults } from "redux/actions/searchResults";

import styles from "components/SearchBar/searchBar.module.scss";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const { formSearchBar, searchInput, searchButton } = styles;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${baseUrl}/search/?q=${searchQuery}`);
      dispatch(setSearchResults(response.data.response.docs));
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
      <button className={searchButton} type="submit"></button>
    </form>
  );
};

export default SearchBar;
