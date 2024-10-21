import { useState } from "react";
import "./country.css";
export default function Country({ country }) {
  const [isVisited, setIsVisited] = useState(false);
  const { name, flags, languages, region, capital } = country;

  const handleClick = () => {
    setIsVisited(!isVisited);
  };

  return (
    <>
      <div className="country">
        <h2>
          Name : {name?.common}{" "}
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
        <p>Official : {name?.official}</p>
        <p>Languages : {languages?.eng}</p>
        <p>Region : {region}</p>
        <p>Capital : {capital}</p>
        <button onClick={handleClick}>{isVisited ? "Visited" : "Going"}</button>
      </div>
    </>
  );
}
