import { useQuery, gql } from "@apollo/client";

export const COUNTRY_QUERY = gql`
  query getCountry($Id: ID!) {
    countries(where: { id: { eq: $Id } }) {
      name
      vatRate
      id
      capital {
        name
      }
      cities {
        name
      }
    }
  }
`;

const Country = (props) => {

  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { Id: props.match.params.countryId },
  });

  if (loading) return <div>Loading...</div>
  if (error) return <div>something is wrong</div>
  console.log('dupa') // ;-)
  
  return (
    <div>
      {data ?
        (data.countries.map((country, index) => (
          <div key={country.id}>
            <h1>{country.name}</h1>
            {country.capital && (
              <h2>
                The capital of the given country is:{" "}
                <i>{country.capital.name}</i>
              </h2>
            )}
            <h2>The cities in given country:</h2>
            <ul>
              {country.cities.map((city, index) => (
                <li>{city.name}</li>
              ))}
            </ul>
          </div>
        ))) : (<div>Something went really wrong</div>)
    }
    </div>
  );
};

export default Country;
