import { useEffect, useState } from "react";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <h1>Hello From Countries</h1>
    </>
  );
}
