
import React from "react";
import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';
import JobCard from "components/JobCard/JobCard";
import SearchFilter from 'components/SearchFilter/SearchFilter';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import styles from 'screens/serp/serp.module.scss';

const Serp = () => {
  const { searchResults } = useSelector((state) => state);
  const {
    headerContainer,
    filterSearchContainer,
    logoContainer,
    filters,
    search,
    searchResultsList,
    searchResultsList__link,
  } = styles;

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
    </>
  );
};

export default Serp;
