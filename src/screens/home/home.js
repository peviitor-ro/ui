import React from 'react';
import Logo from 'components/Logo/Logo';

import { useDispatch, useSelector } from 'react-redux';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import {
  switchBackgroundOn,
  switchBackgroundOff,
} from '../../redux/actions/background';

import {
  faGlobeEurope,
  faBuilding,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import styles from './home.module.scss';

const Home = (props) => {
  const dispatch = useDispatch();
  const { isBackground } = useSelector((state) => state);
  const { welcome, notWelcome } = styles;

  return (
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
      <SearchFilter icon={faGlobeEurope} text={'Tara'} />
      <SearchFilter icon={faMapMarkerAlt} text={'Oras'} />
      <SearchFilter icon={faBuilding} text={'Companie'} />
    </div>
  );
};
export default Home;
