import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { formatDate } from '../utility/utilities';
import { useCities } from '../context/CitiesContext';


export function CityItem({city}) {
  const {currentCity} = useCities();
    const {cityName, emoji, date, id} = city;
    return <li >
      <Link to={`${id}`} className={`${styles.cityItem} ${id===currentCity.id ? styles['cityItem--active']: ""}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
        </Link>
    </li>
}