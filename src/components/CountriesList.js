import { useState } from "react";
import { Link } from "react-router-dom";
const CountriesList = ({ data}) => {
  console.log(data);

  return (
    <div>
      {data.countries.map((country, index) => (
        <div key={country.id}>
          <Link to={`/country/${country.id}`}>
            <h2>{country.name}</h2>
          </Link>
          <h3>Languages used:</h3>
          <ul>
            {country.languages.map((language, index) => (
              <li key={language.id}>{language.name}</li>
            ))}
          </ul>
        </div>
      ))}

      
    </div>
  );
};

export default CountriesList;
