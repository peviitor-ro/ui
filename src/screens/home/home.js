import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "components/Logo/Logo";
import SearchBar from "components/SearchBar/SearchBar";
import FooterMenu from "components/FooterMenu/FooterMenu";
import SearchFilter from "components/SearchFilter/SearchFilter";
import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import BackgroundSlider from "components/BackgroundSlider/BackgroundSlider";

import {
  setCurrentCountryFilterOption,
  setCurrentCityFilterOption,
  setCurrentCompanyFilterOption,
} from "redux/actions/currentFilterOption";
import styles from "./home.module.scss";
import BurgerMenu from "components/FooterMenu/BurgerMenu";
import { setSwitchBackgroundOff, setSwitchBackgroundOn } from "redux/actions/switchBackground";
import { setBackgroundBtn } from "redux/actions/backgroundBtn";

const Home = (props) => {
  const dispatch = useDispatch();
  const { filterOptions, currentFilterOption, switchBackground, backgroundBtn } = useSelector((state) => state);
  const {
    filtersContainer,
    filtersContainerOff,
    menuContainer,
    overlayContainer,
    landingPageContainerNoOverlay,
    landingPageContainerOverlay,
    noOverlayContainer,
    textInfoDescriptionOn,
    textInfoDescriptionOff,
    textContainer,
    textInfoOff,
    textInfoOn,
    textContainerOverlayOn,
  } = styles;
  useEffect(() => {
    if (!backgroundBtn)
      dispatch(setSwitchBackgroundOff())
    if (backgroundBtn)
      dispatch(setSwitchBackgroundOn())
    console.log("hii")
  }, [dispatch]);
  return (
    <>
      <BackgroundSlider>
        <div
          className={
            switchBackground
              ? landingPageContainerOverlay
              : landingPageContainerNoOverlay
          }
        >
          <div className={menuContainer}>
            <FooterMenu />
            <BurgerMenu />
          </div>
          <div
            className={switchBackground ? overlayContainer : noOverlayContainer}
          >
            <Logo {...{ switchBackground }} />
            <SearchBar {...{ switchBackground }} />
            <div className={switchBackground ? filtersContainer : filtersContainerOff}>
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
          <div
            className={
              switchBackground ? textContainerOverlayOn : textContainer
            }
          >
            <h1 className={switchBackground ? textInfoOn : textInfoOff}>
              motor de căutare
            </h1>
            <h2
              className={
                switchBackground
                  ? textInfoDescriptionOff
                  : textInfoDescriptionOn
              }
            >
              locuri de muncă
            </h2>
          </div>
        </div>
      </BackgroundSlider>
    </>
  );
};
export default Home;
