import styles from './DropdownFilter.module.scss';
const cities = [
  { name: 'Other', jobs: 775 },
  { name: 'Bangalore', jobs: 726 },
  { name: '', jobs: 607 },
  { name: 'Cluj-Napoca', jobs: 494 },
  { name: 'Krakow', jobs: 269 },
  { name: 'Palo Alto', jobs: 233 },
  { name: 'Wroclaw', jobs: 230 },
  { name: 'Kyiv', jobs: 218 },
  { name: 'Product Development', jobs: 205 },
  { name: 'Columbus', jobs: 189 },
  { name: 'Minsk', jobs: 187 },
  { name: 'Bucuresti', jobs: 176 },
  { name: 'Kharkiv', jobs: 171 },
  { name: 'Bucharest', jobs: 163 },
  { name: 'Budapest', jobs: 152 },
  { name: 'Ottawa', jobs: 130 },
  { name: 'London', jobs: 121 },
  { name: 'Dnipro', jobs: 119 },
  { name: 'Gdansk', jobs: 117 },
];
const DropdownFilter = () => {
  const { dropdownContainer, dropdownOption } = styles;
  return (
    <div className={dropdownContainer}>
      {cities.map((element) => (
        <div className={dropdownOption}>{element.name}</div>
      ))}
    </div>
  );
};

export default DropdownFilter;
