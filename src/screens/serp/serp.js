import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchResults } from 'redux/actions/searchResults';

import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';
import JobCard from 'components/JobCard/JobCard';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import { baseUrl, jobsPerPage } from 'utils/constants/url';
import paginationStyles from 'components/Pagination/Pagination.module.scss';
import styles from 'screens/serp/serp.module.scss';


const Serp = () => {
  const { searchResults, searchWord, searchResultsNumber } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageRangeDisplay, setPageRangeDisplay] = useState(1);  
  const intemsPerPage = jobsPerPage;
  const pageCount = Math.ceil(searchResultsNumber / intemsPerPage);
  const dispatch = useDispatch();

  const { pagination, paginationPage, paginationActive, paginationArrow, arrowIcons, paginationDisabled } = paginationStyles;
  const {
    headerContainer,
    filterSearchContainer,
    logoContainer,
    filters,
    search,
    searchResultsList,
    searchResultsList__link,
    paginationContainer,
  } = styles;

  ////needs refactoring
  useEffect(() => {
    if(window.innerWidth > 481)
    setPageRangeDisplay(3)
    if(window.innerWidth < 481)
    setPageRangeDisplay(1)
  }, [window.innerWidth])
  ////
  const onPageChange = async ({ selected }) => {
    setCurrentPage(selected);
    try {
      const start = selected * intemsPerPage;
      const response = await axios.get(`${baseUrl}/search/?q=${searchWord}&start=${start}`);
      dispatch(setSearchResults(response.data.response.docs));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={headerContainer}>
        <div className={logoContainer}>
          <Logo />
        </div>
        <div className={filterSearchContainer}>
          <div className={search}>
            <SearchBar />
          </div>
          <div className={filters}>
            <SearchFilter icon={faGlobeEurope} text={'Tara'} />
            <SearchFilter icon={faMapMarkerAlt} text={'Oras'} />
            <SearchFilter icon={faBuilding} text={'Companie'} />
          </div>
        </div>
      </div>
      <div className={searchResultsList}>
        {searchResults.map((job) => (
          <Link
            className={searchResultsList__link}
            to={{ pathname: job.job_link }}
            target="_blank"
            key={job.id}
          >
            {' '}
            <JobCard {...job} />{' '}
          </Link>
        ))}
      </div>
      {searchResultsNumber > intemsPerPage &&
      <div className={paginationContainer}>
        <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft}  className={arrowIcons}/>}
        nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} className={arrowIcons}/>}
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
        />
      </div>
      }
      {/* to be replaced with a react component */}
      {searchWord && searchResultsNumber === 0 &&
        <p>Nu a fost gasit nici un rezultat!</p>
      }
    </>
  );
};

export default Serp;
