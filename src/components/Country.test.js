import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import Country, { COUNTRY_QUERY } from "./Country";
import { MemoryRouter } from "react-router-dom";

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

it("renders without error", async () => {
  const component = TestRenderer.create(
    <MemoryRouter initialEntries={['/country/Q889']}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Country match={{params: {
              countryId: "Q889"
          }}} />
        </MockedProvider>
    </MemoryRouter>
  );

  
  const tree = component.toJSON();
  console.log(tree)
  expect(tree.children).toContain("Loading...");
  await component.update()
  .then(console.log(component.toJSON()))
//   console.log(component.toJSON().children)
//   expect(component.toJSON().children).toContain("Loading...");
  
});
