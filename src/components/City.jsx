import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../utility/utilities";
import styles from "./City.module.css";
import { useCities } from "../context/CitiesContext";
import { useEffect } from "react";
import { Spinner } from "./Spinner";


export function City() {
  const {id} = useParams();
  // TEMP DATA
  const {currentCity, getCity, isLoading} = useCities();

  const { cityName, emoji, date, notes } = currentCity;

  const navigate = useNavigate();

  useEffect(function() {
    getCity(id)
  }, [id])

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        {/* <ButtonBack /> */}
        <button onClick={(e) => {e.preventDefault(); navigate(-1)}}>&larr; Back</button>
      </div>
    </div>
  );
}

