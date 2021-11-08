import styles from "./DropdownFilter.module.scss";
import { Scrollbars } from "react-custom-scrollbars";

const DropdownFilter = ({ options, onSelectOption, toggleDropdown, value }) => {
  const { dropdownContainer, dropdownOption } = styles;

  const handleOptionClick = (option) => {
    onSelectOption(option);
    toggleDropdown();
  };

  return (
    <div className={dropdownContainer}>
      <Scrollbars style={{ width: 100 }} autoHide>
        {" "}
        {options &&
          options.map((element) => (
            <option
              key={element.name}
              className={dropdownOption}
              onClick={() => handleOptionClick(element.name)}
            >
              {element.name}
            </option>
          ))}
      </Scrollbars>
    </div>
  );
};

export default DropdownFilter;
