import { useEffect, useState } from "react";
import Country from "../country/Country";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      {countries.map((country) => (
        <Country key={country.cca3} country={country} />
      ))}
    </>
  );
}
