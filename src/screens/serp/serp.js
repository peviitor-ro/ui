import React from "react";
import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';
import JobCard from "components/JobCard/JobCard";
import SearchFilter from 'componentsTemporary/SearchFilter';
import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import styles from 'screens/serp/serp.module.scss';

const Serp = () => {

  const { headerContainer, filterSearchContainer, logoContainer, filters, search } = styles;

  return (
    <div className={headerContainer}>
      <div className={logoContainer}>
        <Logo />
      </div>
      <div className={filterSearchContainer}>
        <div className={search}>
          <SearchBar />
        </div>
        <div className={filters}>
          <SearchFilter icon={faGlobeEurope} text={"Tara"} />
          <SearchFilter icon={faMapMarkerAlt} text={"Oras"} />
          <SearchFilter icon={faBuilding} text={"Companie"} />
        </div>
      </div>
      <JobCard />
    </div>
  )
}

export default Serp;
