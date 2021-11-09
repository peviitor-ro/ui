import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Logo from "components/Logo/Logo";
import SearchBar from "components/SearchBar/SearchBar";
import JobCard from "components/JobCard/JobCard";
import SearchFilter from "components/SearchFilter/SearchFilter";
import { Link } from "react-router-dom";
import FooterMenu from "components/FooterMenu/FooterMenu";
import BurgerMenu from "components/FooterMenu/BurgerMenu";
import SearchMessage from "components/SearchMessage/SearchMessage";

import {
  setCurrentCountryFilterOption,
  setCurrentCityFilterOption,
  setCurrentCompanyFilterOption,
} from "redux/actions/currentFilterOption";

import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

import { setSearchResults } from "redux/actions/searchResults";
import { setSwitchBackgroundOff } from "redux/actions/switchBackground";
import { baseUrl, jobsPerPage } from "utils/constants/url";
import paginationStyles from "components/Pagination/Pagination.module.scss";
import filterStyles from "screens/serp/serp.module.scss";
import styles from "screens/serp/serp.module.scss";

const Serp = () => {
  const {
    searchResults,
    isMobile,
    filterOptions,
    currentFilterOption,
    switchBackground,
  } = useSelector((state) => state);
  const { searchWord, resultsNumber } = searchResults;
  const [currentPage, setCurrentPage] = useState(0);
  const pageRangeDisplay = isMobile ? 1 : 3;
  const intemsPerPage = jobsPerPage;
  const pageCount = Math.ceil(resultsNumber / intemsPerPage);
  const dispatch = useDispatch();

  const queryParams = window.location.href;
  //const searchParams = useLocation().search;
  //const params = new URLSearchParams(searchParams);
  // let paramObj = {};
  // for (let value of params.keys()) {
  //   paramObj[value] = params.getAll(value)
  // };
  const newParams = new URL(queryParams);

  const parseParams = (querystring) => {
    // parse query string
    const params = new URLSearchParams(querystring);
    const obj = {};
    // iterate over all keys
    for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
        obj[key] = params.getAll(key);
      } else {
        obj[key] = params.get(key);
      }
    }
    return obj;
  };

  const paramObj = parseParams(newParams.search);
  console.log(parseParams(paramObj))

  const {
    pagination,
    paginationPage,
    paginationActive,
    paginationArrow,
    arrowIcons,
    paginationDisabled,
  } = paginationStyles;
  const { filtersContainer } = filterStyles;
  const {
    headerContainer,
    filterSearchContainer,
    logoContainer,
    search,
    searchResultsList,
    searchResultsList__link,
    menuContainer,
    paginationContainer,
    numberContainer,
    horizontalLine,
    resultsText,
  } = styles;

  useEffect(() => {
    if (switchBackground) dispatch(setSwitchBackgroundOff());
  }, [dispatch]);

  const searchByURL = async () => {
    try {
      const response = await axios.get(`${baseUrl}/search/${newParams.search}`);
      dispatch(
        setSearchResults({
          searchResults: response.data.response.docs,
          resultsNumber: response.data.response.numFound,
          searchWord: searchWord,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updatePageFromURL = () => {
    if (paramObj.page) {
      setCurrentPage(Number(paramObj.page) - 1)
    } else {
      setCurrentPage(0);
    }
  }

  useEffect(() => {
    searchByURL();
    //paramObj.page && setCurrentPage(Number(paramObj.page) - 1);
    updatePageFromURL();
  }, [newParams.search])

  const onPageChange = async ({ selected }) => {
    //setCurrentPage(selected);
    newParams.searchParams.set('page', selected + 1)
    window.history.pushState({}, '', newParams);

    try {
      const response = await axios.get(`${baseUrl}/search/${newParams.search}`);
      dispatch(
        setSearchResults({
          searchResults: response.data.response.docs,
          resultsNumber: response.data.response.numFound,
          searchWord: searchWord,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={menuContainer}>
        <FooterMenu />
        <BurgerMenu />
      </div>
      <div className={headerContainer}>
        <div className={logoContainer}>
          <Logo />
        </div>
        <div className={filterSearchContainer}>
          <div className={search}>
            <SearchBar {...{ setCurrentPage }} />
          </div>
          <div className={filtersContainer}>
            <SearchFilter
              icon={faGlobeEurope}
              text={currentFilterOption.country}
              options={filterOptions.countries}
              onSelectOption={(data) => {
                dispatch(setCurrentCountryFilterOption(data));
              }}

            />
            <SearchFilter
              icon={faMapMarkerAlt}
              text={currentFilterOption.city}
              options={filterOptions.cities}
              onSelectOption={(data) =>
                dispatch(setCurrentCityFilterOption(data))
              }
            />
            <SearchFilter
              icon={faBuilding}
              text={currentFilterOption.company}
              options={filterOptions.companies}
              onSelectOption={(data) =>
                dispatch(setCurrentCompanyFilterOption(data))
              }
            />
          </div>
        </div>
      </div>
      <div className={numberContainer}>
        <hr className={horizontalLine}></hr>
        <div className={resultsText}>{resultsNumber} rezultate</div>
      </div>
      <div className={searchResultsList}>
        {searchResults.searchResults &&
          searchResults.searchResults.map((job) => (
            <Link
              className={searchResultsList__link}
              to={{ pathname: job.job_link }}
              target="_blank"
              key={job.id}
            >
              {" "}
              <JobCard {...job} />{" "}
            </Link>
          ))}
      </div>
      {resultsNumber > intemsPerPage && (
        <div className={paginationContainer}>
          <ReactPaginate
            previousLabel={
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className={arrowIcons}
              />
            }
            nextLabel={
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className={arrowIcons}
              />
            }
            pageCount={pageCount}
            onPageChange={onPageChange}
            activeClassName={paginationActive}
            containerClassName={pagination}
            pageClassName={paginationPage}
            previousClassName={paginationArrow}
            nextClassName={paginationArrow}
            disabledClassName={paginationDisabled}
            breakClassName={paginationPage}
            pageRangeDisplayed={pageRangeDisplay}
            marginPagesDisplayed={1}
            forcePage={currentPage}
          />
        </div>
      )}

      {searchWord !== undefined && resultsNumber === 0 && (
        <SearchMessage
          message={"Nu a fost găsit nici un rezultat!"}
          icon={<FontAwesomeIcon icon={faFrown} size="6x" />}
        />
      )}
    </>
  );
};

export default Serp;
