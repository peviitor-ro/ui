import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropdownFilter from '../DropdownFilter/DropdownFilter';

import styles from './SearchFilter.module.scss';
const SearchFilter = ({ icon, text, options }) => {
  const [isActiveDropdown, setActiveDropDown] = useState(false);
  const toggleDropdown = () => {
    setActiveDropDown(!isActiveDropdown);
  };

  const { searchFilterContainer, searchFilterText } = styles;
  return (
    <div className={searchFilterContainer} onClick={toggleDropdown}>
      <FontAwesomeIcon icon={icon} />
      <h3 className={searchFilterText}>{text}</h3>
      {isActiveDropdown && <DropdownFilter {...{ options }} />}
    </div>
  );
};

export default SearchFilter;
