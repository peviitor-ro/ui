import { React, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import DropdownFilter from '../DropdownFilter/DropdownFilter';

import styles from './SearchFilter.module.scss';
const SearchFilter = ({ icon, text, options, onSelectOption }) => {
  const [isActiveDropdown, setActiveDropDown] = useState(false);
  const switchBackground = useSelector((state) => state.switchBackground);
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

  const { searchFilterContainer, searchFilterTextOff, searchFilterTextOn, textIconFilterContainerOff, textIconFilterContainerOn } =
    styles;
  return (
    <div className={searchFilterContainer} ref={dropdownContainerRef}>
      <div className={textIconFilterContainerOff} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={icon} color={!switchBackground ? '#000000' : '#ffffff'} />
        <h3 className={!switchBackground ? searchFilterTextOff : searchFilterTextOn}>{text}</h3>
      </div>
      {isActiveDropdown && (
        <DropdownFilter {...{ options, onSelectOption, toggleDropdown }} />
      )}

    </div>
  );
};

export default SearchFilter;
