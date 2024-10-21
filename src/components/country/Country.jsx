import "./country.css";
export default function Country({ country }) {
  return (
    <div className="country">
      <h3>Name : {country?.name?.common}</h3>
      <img src={country?.flags?.png} alt={country?.name?.common} />
    </div>
  );
}
