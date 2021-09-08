import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import BackgroundSlider from '../../components/BackgroundSlider/BackgroundSlider';

import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  setCurrentCountryFilterOption,
  setCurrentCityFilterOption,
  setCurrentCompanyFilterOption,
} from 'redux/actions/currentFilterOption';
import styles from './home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.filterOptions);
  const currentFilterOption = useSelector((state) => state.currentFilterOption);

  const { filtersContainer, homeContainer } = styles;
  return (
    <div className={homeContainer}>
      <BackgroundSlider>
        <Logo />
        <SearchBar />
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
      </BackgroundSlider>
    </div>
  );
};
export default Home;
