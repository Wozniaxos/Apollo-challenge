import Countries from "./countries";
import { render, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import COUNTRIES_QUERY from "../queries/countriesQuery";
import { MockedProvider } from "@apollo/client/testing";
const mocks = [
  {
    request: {
      query: COUNTRIES_QUERY,
      variables: {
        limit: 5,
        skip: 0,
      },
    },
    result: {
      data: {
        countries: [
          {
            id: "Q889",
            name: "Afghanistan",
            vatRate: null,
            languages: [
              {
                id: "Q13955",
                name: "Arabic",
              },
              {
                id: "Q58680",
                name: "Pashto",
              },
              {
                id: "Q9267",
                name: "Turkmen",
              },
              {
                id: "Q9264",
                name: "Uzbek",
              },
            ],
          },
          {
            id: "Q222",
            name: "Albania",
            vatRate: 20,
            languages: [],
          },
          {
            id: "Q262",
            name: "Algeria",
            vatRate: 19,
            languages: [
              {
                id: "Q13955",
                name: "Arabic",
              },
            ],
          },
          {
            id: "Q228",
            name: "Andorra",
            vatRate: 4.5,
            languages: [
              {
                id: "Q7026",
                name: "Catalan",
              },
            ],
          },
          {
            id: "Q916",
            name: "Angola",
            vatRate: null,
            languages: [
              {
                id: "Q5146",
                name: "Portuguese",
              },
            ],
          },
        ],
      },
    },
  },
];

const componentToRender = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter initialEntries={["/countries"]}>
        <Route path="/countries">
          <Countries />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  );
afterEach(cleanup);

it("loading state of apollo", async () => {
  const { getByTestId } = componentToRender();
  await waitFor(() => getByTestId("loading"));
});

it("Check if loaded properly", async () => {
  const { getByTestId } = componentToRender();
  await waitFor(() => getByTestId("loading"));
  await waitFor(() => getByTestId("pageName"));
});
