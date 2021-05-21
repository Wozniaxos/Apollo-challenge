import { gql } from "@apollo/client";

const COUNTRIES_QUERY = gql`
  query allCountries($limit: Int, $skip: Int) {
    countries(limit: $limit, skip: $skip) {
      id
      name
      vatRate
      languages {
        id
        name
      }
    }
  }
`;

export default COUNTRIES_QUERY