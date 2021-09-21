import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setSearchResults } from "redux/actions/searchResults";
import { getQueryWithFilters } from "../../screens/serp/serp";
import { setSwitchBackground } from "redux/actions/switchBackground";

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

  useEffect(() => {
    setSearchQuery(searchWord);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage && setCurrentPage(0);
    let url = `${baseUrl}/search/?`
    if(searchQuery) {
      const sq = encodeURIComponent(searchQuery);
      url = url + "q=" + sq;
    }

    try {
      const response = await axios.get(
        getQueryWithFilters(
          url,
          currentFilterOption,
        )
      );
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

    history.push("/rezultate");
    dispatch(setSwitchBackground())
  };

  useEffect(() => {
    (async () => {
      //const sq = encodeURIComponent(searchWord);
      let url = `${baseUrl}/search/?`
      if(searchWord) {
      const sq = encodeURIComponent(searchWord);
      url = url + "q=" + sq;
    }
      try {
        const response = await axios.get(
          getQueryWithFilters(
            url,
            currentFilterOption
          )
        );
        dispatch(
          setSearchResults({
            ...searchResults,
            searchResults: response.data.response.docs,
            resultsNumber: response.data.response.numFound,
          })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentFilterOption]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={formSearchBar}>
      <input
        onChange={handleChange}
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
