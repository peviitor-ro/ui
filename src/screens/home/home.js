import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    switchBackgroundOn,
    switchBackgroundOff,
} from "../../redux/actions/background";
import Logo from "components/Logo/Logo";
import SearchBar from "components/SearchBar/SearchBar";
import SearchFilter from "../../componentsTemporary/SearchFilter";
import {
    faGlobeEurope,
    faBuilding,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "components/SearchBar/SearchBar";
import styles from "./home.module.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const { isBackground } = useSelector((state) => state);
  const filterOptions = useSelector((state) => state.filterOptions);
  const { welcome, notWelcome } = styles;
  return (
    <>
      <Logo />
      <SearchBar />
      <div className={isBackground ? `${welcome}` : `${notWelcome}`}>
        <div className="inside"> Hello from home </div>
        Hello from home
        <button
          onClick={() => {
            dispatch(switchBackgroundOn());
          }}
        >
          Put this on
        </button>
        <button
          onClick={() => {
            dispatch(switchBackgroundOff());
          }}
        >
          Put this off
        </button>
<<<<<<< HEAD
        <SearchFilter icon={faGlobeEurope} text={'Tara'} />
        <SearchFilter icon={faMapMarkerAlt} text={'Oras'} />
        <SearchFilter icon={faBuilding} text={'Companie'} />
=======
        <SearchFilter
          icon={faGlobeEurope}
          text={"Tara"}
          options={filterOptions.countries}
        />
        <SearchFilter
          icon={faMapMarkerAlt}
          text={"Oras"}
          options={filterOptions.cities}
        />
        <SearchFilter
          icon={faBuilding}
          text={"Companie"}
          options={filterOptions.companies}
        />
>>>>>>> origin/testing
      </div>
    </>
  );

};
export default Home;
