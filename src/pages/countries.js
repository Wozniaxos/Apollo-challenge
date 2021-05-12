import { useQuery, gql } from "@apollo/client";
import { Link, useLocation, useHistory } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import { useState, useEffect } from "react";

export const COUNTRIES_QUERY = gql`
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

function useQueryUrl() {
  return new URLSearchParams(useLocation().search);
}

const Countries = (props) => {
  const query = useQueryUrl();
  const history = useHistory();

  const countriesPerPage = 5;
  const [page, setPage] = useState(query.get("page"));

  useEffect(() => {
    setPage(query.get("page"));
  }, [query.get("page")]);

  const variables = {
    variables: { limit: countriesPerPage, skip: page * countriesPerPage },
  };

  const { loading, error, data } = useQuery(COUNTRIES_QUERY, variables);

  const getNextPageNumber = () => {
    const currPage = parseInt(query.get("page")) || 0;
    const nextPage = currPage + 1;
    return nextPage;
  };
  const getPreviousPageNumber = () => {
    const currPage = parseInt(query.get("page"));
    if (currPage >= 1) {
      const previousPage = currPage - 1;
      return previousPage;
    } else {
      return 0;
    }
  };
  const handleOnClickPrevious = () =>
    history.push(`/countries?page=${getPreviousPageNumber()}`);
  const handleOnClickNext = () =>
    history.push(`/countries?page=${getNextPageNumber()}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  return (
    <div>
      <p>Cinema page</p>
      <div>
        <button onClick={() => handleOnClickPrevious()} disabled={page <= 0}>
          Wróć
        </button>
        <button onClick={() => handleOnClickNext()} disabled={page > 20}>
          Dalej
        </button>
      </div>
      <div>
        <CountriesList data={data} />
      </div>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default Countries;
