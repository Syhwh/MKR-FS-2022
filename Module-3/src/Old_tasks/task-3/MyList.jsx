import styles from './MyList.module.css';

export const MyList = () => {
  const carBrands = [
    'Mazda',
    'Toyota',
    'Chevrolet',
    'Nissan',
    'Hyundai',
    'Ferrari',
    'Mercedes',
    'Ford',
    'Romeo',
    'Mac',
    'Lamborghini'
  ];
  return (
    <ul>
      {carBrands.map((brand, index) => {
        return (
          <li
            className={index % 2 === 0 ? styles.text : styles.odd}
            data-testid="list"
            key={index}
          >
            {brand} - Available Units:xxx
          </li>
        );
      })}
    </ul>
  );
};
