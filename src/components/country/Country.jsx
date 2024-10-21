import { useState } from "react";
import "./country.css";
export default function Country({ country, onMarked }) {
  const [isVisited, setIsVisited] = useState(false);
  const { name, flags, languages, region, capital } = country;

  const handleClick = () => {
    setIsVisited(!isVisited);
  };

  return (
    <>
      <div className="country">
        <h2>
          {name?.common}{" "}
          {isVisited ? (
            <sup>
              <small>
                <span className="visited">visited</span>
              </small>
            </sup>
          ) : (
            ""
          )}
        </h2>
        <div className="flag-container">
          <img src={flags?.png} alt={name?.common} className="flag" />
        </div>
        {/* <p>{name?.official}</p> */}
        <p>Languages : {languages?.eng}</p>
        <p>Region : {region}</p>
        <p>Capital : {capital}</p>
        <div className="btn-container">
          <button onClick={handleClick}>
            {isVisited ? "Visited" : "Going"}
          </button>
          <button onClick={() => onMarked(name?.common)}>
            Mark as Visited
          </button>
        </div>
        {isVisited && <p className="message">Click again to Going</p>}
      </div>
    </>
  );
}
