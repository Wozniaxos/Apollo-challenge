import { Link } from "react-router-dom";
const CountriesList = ({ data }) => {
  return (
    <div>
      {data.countries.map((country) => (
        <div key={country.id}>
          <Link to={`/countries/${country.id}`}>
            <h2>{country.name}</h2>
          </Link>
          <h3>Languages used:</h3>
          <ul>
            {country.languages.map((language) => (
              <li key={language.id}>{language.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
