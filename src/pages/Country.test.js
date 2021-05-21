import { MockedProvider } from "@apollo/client/testing";
import Country from "./Country";
import COUNTRY_QUERY from '../queries/countryQuery'
import { MemoryRouter } from "react-router-dom";
import { render,waitFor,cleanup } from "@testing-library/react";

const mocks = [
  {
    request: {
      query: COUNTRY_QUERY,
      variables: {
        id: "Q889",
      },
    },
    result: {
      data: {
        countries: [
          {
            name: "Afghanistan",
            vatRate: null,
            id: "Q889",
            cities: [
              {
                name: "Jalalabad",
              },
              {
                name: "Sheberghan",
              },
              {
                name: "Sar-e Pol",
              },
              {
                name: "Mazar-i-Sharif",
              },
              {
                name: "Khost",
              },
              {
                name: "Khan Abad",
              },
              {
                name: "Taloqan",
              },
              {
                name: "Lashkar Gah",
              },
              {
                name: "Kandahar",
              },
              {
                name: "Baghlan",
              },
              {
                name: "Kholm",
              },
              {
                name: "Kabul",
              },
              {
                name: "Ghazni",
              },
              {
                name: "Pul-e Khomri",
              },
              {
                name: "Herat",
              },
            ],
            capital: {
              name: "Kabul",
            },
          },
        ],
      },
    },
  },
];


  const componentToRender = () => render(
    <MemoryRouter initialEntries={['/country/Q889']}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Country match={{params: {
              countryId: "Q889"
          }}} />
        </MockedProvider>
    </MemoryRouter>
  );

  afterEach(cleanup)
  it("Properly renders country loading state", async () => {
    const { getByText } = componentToRender();
    await waitFor(() => getByText(/Loading.../i));
  });

  it("Properly renders country data", async () => {
    const { getByText } = componentToRender();
    await waitFor(() => getByText(/Afghanistan.../i));
  });


