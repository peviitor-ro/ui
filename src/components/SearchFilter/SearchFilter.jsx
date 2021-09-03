import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchFilter.module.scss';
import DropdownFilter from '../DropdownFilter/DropdownFilter';

const SearchFilter = ({ icon, text }) => {
  const [isActiveDropdown, setActiveDropDown] = useState(false);
  const toggleDropdown = () => {
    setActiveDropDown(!isActiveDropdown);
  };

  const { searchFilterContainer, searchFilterText } = styles;
  return (
    <>
      <div className={searchFilterContainer} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={icon} />
        <h3 className={searchFilterText}>{text}</h3>
        {/* <div>{isActiveDropdown ? 'Dropdown' : ''}</div> */}
      </div>
      {isActiveDropdown && <DropdownFilter />}
    </>
  );
};

export default SearchFilter;
