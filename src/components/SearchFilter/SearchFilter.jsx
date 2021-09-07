import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropdownFilter from '../DropdownFilter/DropdownFilter';

import styles from './SearchFilter.module.scss';
const SearchFilter = ({ icon, text, options, onSelectOption }) => {
  const [isActiveDropdown, setActiveDropDown] = useState(false);
  const toggleDropdown = () => {
    setActiveDropDown(!isActiveDropdown);
  };

  const { searchFilterContainer, searchFilterText } = styles;
  return (
    <div className={searchFilterContainer}>
      <FontAwesomeIcon icon={icon} onClick={toggleDropdown} />
      <h3 className={searchFilterText} onClick={toggleDropdown}>
        {text}
      </h3>
      {isActiveDropdown && <DropdownFilter {...{ options, onSelectOption }} />}
    </div>
  );
};

export default SearchFilter;
