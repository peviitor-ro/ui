import { React, useEffect, useState } from "react";
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
import { baseUrl, jobsPerPage } from "utils/constants/url";
import paginationStyles from "components/Pagination/Pagination.module.scss";
import filterStyles from "screens/serp/serp.module.scss";
import styles from "screens/serp/serp.module.scss";
import {
  setSwitchBackground,
  setSwitchBackgroundOff,
} from "redux/actions/switchBackground";

export const getQueryWithFilters = (query, currentFilterOption) => {
  let { city, company, country } = currentFilterOption;

  if (city !== "Oraș" && city !== "Toate orașele")
    query = query + `&city=${city}`;
  if (country !== "Țară") query = query + `&country=${country}`;
  if (company !== "Toate companiile" && company !== "Companie")
    query = query + `&company=${company}`;
  console.log("from function", query);
  return query;
};

export const createQueryString = (
  searchWord,
  baseUrl,
  selectedPage = false
) => {
  let url = `${baseUrl}/search/?`;
  if (selectedPage) url = url + `&page=${selectedPage + 1}`;

  if (searchWord) {
    const encodedQuery = encodeURIComponent(searchWord);
    url = url + "&q=" + encodedQuery;
  }
  return url;
};

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
  } = styles;

  useEffect(() => {
    if (switchBackground) dispatch(setSwitchBackgroundOff());
  }, [dispatch]);

  const onPageChange = async ({ selected }) => {
    setCurrentPage(selected);

    try {
      console.log(selected);
      const response = await axios.get(
        getQueryWithFilters(
          createQueryString(searchWord, baseUrl, selected),
          currentFilterOption
        )
      );
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
