import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    switchBackgroundOn,
    switchBackgroundOff,
} from "../../redux/actions/background";
import Logo from "components/Logo/Logo";
import SearchBar from "components/SearchBar/SearchBar";
import FooterMenu from "components/FooterMenu/FooterMenu";
import SearchFilter from "components/SearchFilter/SearchFilter";
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
import BurgerMenu from 'components/FooterMenu/BurgerMenu';

const Home = (props) => {
    const dispatch = useDispatch();
    const { isBackground } = useSelector((state) => state);
    const filterOptions = useSelector((state) => state.filterOptions);
    const currentFilterOption = useSelector((state) => state.currentFilterOption);
    const { welcome, notWelcome, filtersContainer, menuContainer } = styles;
    return (
        <>
            <div className={menuContainer}>
                <FooterMenu />
                <BurgerMenu />
            </div>
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
                    onSelectOption={(data) => dispatch(setCurrentCityFilterOption(data))}
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


        </>
    );
};
export default Home;
