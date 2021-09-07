import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  switchBackgroundOn,
  switchBackgroundOff,
} from "../../redux/actions/background";
import Logo from "components/Logo/Logo";
import SearchBar from "components/SearchBar/SearchBar";
import SearchFilter from "components/SearchFilter/SearchFilter";
import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import styles from './home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  // const { isBackground } = useSelector((state) => state);
  const { search, filters } = styles;

  return (
    <>
      <Logo />


      <SearchBar />

      <div className={filters}>
        <SearchFilter icon={faGlobeEurope} text={"Tara"} />
        <SearchFilter icon={faMapMarkerAlt} text={"Oras"} />
        <SearchFilter icon={faBuilding} text={"Companie"} />
      </div>

    </>
  );
};
export default Home;
