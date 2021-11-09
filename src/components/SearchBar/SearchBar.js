import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setSearchResults } from "redux/actions/searchResults";
import { setSwitchBackgroundOff } from "redux/actions/switchBackground";
import { getQueryWithFilters } from "utils/helperFunctions/queries";
import { baseUrl } from "utils/constants/url";
import styles from "components/SearchBar/searchBar.module.scss";

const SearchBar = ({ setCurrentPage, switchBackground }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    formSearchBar,
    searchInputBlack,
    searchInputWhite,
    searchButtonBlack,
    searchButtonWhite,
  } = styles;

  const { searchResults, currentFilterOption } = useSelector((state) => state);
  const { searchWord } = searchResults;
  const baseQueryStr = window.location.origin;
  const queryString = getQueryWithFilters(baseQueryStr, searchQuery, currentFilterOption);
  const callQuery = `${baseUrl}/search/${queryString}`;

  useEffect(() => {
    setSearchQuery(searchWord);
  }, []);

  const newSearch = async () => {
    setCurrentPage && setCurrentPage(0);
    try {
      const response = await axios.get(callQuery);
      dispatch(
        setSearchResults({
          searchResults: response.data.response.docs,
          resultsNumber: response.data.response.numFound,
          searchWord: searchQuery,
        })
      );
    } catch (error) {
      console.log(error);
    }
    history.push(`/rezultate/${queryString}`);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    newSearch();
    dispatch(setSwitchBackgroundOff());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBlur = (e) => {
    dispatch(
      setSearchResults({
        ...searchResults,
        searchWord: e.target.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={formSearchBar}>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          switchBackground === undefined
            ? searchInputBlack
            : switchBackground
              ? searchInputWhite
              : searchInputBlack
        }
        type="text"
        placeholder="căutare..."
        value={searchQuery}
      ></input>
      <button
        className={
          switchBackground === undefined
            ? searchButtonBlack
            : switchBackground
              ? searchButtonWhite
              : searchButtonBlack
        }
        type="submit"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
