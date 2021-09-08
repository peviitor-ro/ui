import styles from './DropdownFilter.module.scss';

const DropdownFilter = ({options}) => {
  const { dropdownContainer, dropdownOption } = styles;
  return (
    <div className={dropdownContainer}>
      {options && options.map((element) => (
        <div key={element.name} className={dropdownOption}>{element.name}</div>
      ))}
    </div>
  );
};

export default DropdownFilter;
