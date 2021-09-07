import React from 'react';
import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';
import JobCard from 'components/JobCard/JobCard';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentCountryFilterOption,
  setCurrentCityFilterOption,
  setCurrentCompanyFilterOption,
} from 'redux/actions/currentFilterOption';

import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import styles from 'screens/serp/serp.module.scss';
import filterStyles from 'screens/home/home.module.scss';

const Serp = () => {
  const { searchResults } = useSelector((state) => state);
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.filterOptions);
  const currentFilterOption = useSelector((state) => state.currentFilterOption);
  const { filtersContainer } = filterStyles;
  const {
    headerContainer,
    filterSearchContainer,
    logoContainer,
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
