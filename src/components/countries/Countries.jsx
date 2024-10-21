import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Country from "../country/Country";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleMarkAsVisited = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  //   const handleDelete = (countries) => {
  //     console.log(countries);
  //     // const restVisitedCountry = visitedCountries.filter((rest) => {
  //     //   rest.countries !== visitedCountries.countries;
  //     // });
  //     setVisitedCountries(visitedCountries.length - 1);
  //   };

  return (
    <>
      <div>
        <h2>Countries : {countries.length}</h2>
        <h2>Visited Countries : {visitedCountries.length}</h2>
        <ul>
          {visitedCountries.map((countries) => (
            <li key={countries} className="visited-country">
              {countries} <RxCross2 />
              {/* onClick={() => handleDelete(countries)} */}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid-view">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            onMarked={handleMarkAsVisited}
          />
        ))}
      </div>
    </>
  );
}
