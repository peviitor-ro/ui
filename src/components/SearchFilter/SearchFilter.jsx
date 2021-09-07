import { React, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropdownFilter from '../DropdownFilter/DropdownFilter';

import styles from './SearchFilter.module.scss';
const SearchFilter = ({ icon, text, options, onSelectOption }) => {
  const [isActiveDropdown, setActiveDropDown] = useState(false);
  const toggleDropdown = () => {
    setActiveDropDown(!isActiveDropdown);
  };
  const dropdownContainerRef = useRef(null);
  useEffect(() => {
    if (isActiveDropdown) {
      function handleClickOutside(event) {
        if (
          dropdownContainerRef.current &&
          !dropdownContainerRef.current.contains(event.target)
        ) {
          toggleDropdown();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isActiveDropdown]);

  const { searchFilterContainer, searchFilterText, textIconFilterContainer } =
    styles;
  return (
    <div className={searchFilterContainer} ref={dropdownContainerRef}>
      <div className={textIconFilterContainer} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={icon} />
        <h3 className={searchFilterText}>{text}</h3>
      </div>
      {isActiveDropdown && (
        <DropdownFilter {...{ options, onSelectOption, toggleDropdown }} />
      )}

    </div>
  );
};

export default SearchFilter;
