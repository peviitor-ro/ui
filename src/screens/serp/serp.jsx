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
import { setSwitchBackgroundOff } from "redux/actions/switchBackground";
import { baseUrl, jobsPerPage } from "utils/constants/url";
import { parseURLParams } from "utils/helperFunctions/queries";
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

  const { searchWord, resultsNumber } = searchResults || {};
  const [currentPage, setCurrentPage] = useState(0);
  const pageRangeDisplay = isMobile ? 1 : 3;
  const intemsPerPage = jobsPerPage;
  const pageCount = Math.ceil((resultsNumber || 0) / intemsPerPage);
  const dispatch = useDispatch();

  const queryParams = window.location.href;
  const newParams = new URL(queryParams);
  const paramsObject = parseURLParams(newParams.search);

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
    resultsNumberText,
  } = styles;

  useEffect(() => {
    dispatch(setSwitchBackgroundOff());
  }, [dispatch]);

  const onPageChange = async ({ selected }) => {
    setCurrentPage(selected);
    try {
      const start = selected * intemsPerPage;
      let callQuery;
      if (paramsObject) {
        const { q, city, country, company } = paramsObject;
        callQuery = `${baseUrl}/search/?q=${encodeURIComponent(q || searchWord || "")}&city=${encodeURIComponent(city || "")}&country=${encodeURIComponent(country || "")}&company=${encodeURIComponent(company || "")}&start=${start}`;
      } else {
        callQuery = `${baseUrl}/search/?q=${encodeURIComponent(searchWord || "")}&start=${start}`;
      }
      const response = await axios.get(callQuery);
      dispatch(
        setSearchResults({
          searchResults: response.data?.response?.docs || [],
          resultsNumber: response.data?.response?.numFound || 0,
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
            <SearchBar {...{ setCurrentPage, switchBackground }} />
          </div>
          <div className={filtersContainer}>
            <SearchFilter
              icon={faGlobeEurope}
              text={currentFilterOption?.country || "Țară"}
              options={filterOptions?.countries || []}
              onSelectOption={(data) => {
                dispatch(setCurrentCountryFilterOption(data));
              }}
            />
            <SearchFilter
              icon={faMapMarkerAlt}
              text={currentFilterOption?.city || "Oraș"}
              options={filterOptions?.cities || []}
              onSelectOption={(data) =>
                dispatch(setCurrentCityFilterOption(data))
              }
            />
            <SearchFilter
              icon={faBuilding}
              text={currentFilterOption?.company || "Companie"}
              options={filterOptions?.companies || []}
              onSelectOption={(data) =>
                dispatch(setCurrentCompanyFilterOption(data))
              }
            />
          </div>
        </div>
      </div>
      <div className={resultsNumberText}>
        {resultsNumber ? (
          <div>
            Rezultate <b>{resultsNumber}</b>
          </div>
        ) : null}
      </div>
      <div className={searchResultsList}>
        {searchResults?.searchResults?.map((job) => (
          <Link
            className={searchResultsList__link}
            to={{ pathname: job.job_link }}
            target="_blank"
            key={job.id}
          >
            <JobCard {...job} />
          </Link>
        ))}
      </div>
      {resultsNumber > intemsPerPage && (
        <div className={paginationContainer}>
          <ReactPaginate
            previousLabel={
              <FontAwesomeIcon icon={faAngleDoubleLeft} className={arrowIcons} />
            }
            nextLabel={
              <FontAwesomeIcon icon={faAngleDoubleRight} className={arrowIcons} />
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
      {resultsNumber === 0 && (
        <SearchMessage
          icon={faFrown}
          text="Nu am găsit nici un rezultat, te rugăm să verifici dacă ai scris corect sau încearcă din nou."
        />
      )}
    </>
  );
};

export default Serp;
