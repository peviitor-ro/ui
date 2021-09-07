import styles from './DropdownFilter.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const DropdownFilter = ({ options, onSelectOption }) => {
  const { dropdownContainer, dropdownOption } = styles;
  return (
    <div className={dropdownContainer}>
      <Scrollbars style={{ width: 200 }} autoHide>
        {options &&
          options.map((element) => (
            <div
              key={element.name}
              className={dropdownOption}
              onClick={(e) => onSelectOption(element.name)}
            >
              {element.name}
            </div>
          ))}
      </Scrollbars>
    </div>
  );
};

export default DropdownFilter;
