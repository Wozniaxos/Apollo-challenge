import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import Countries, { COUNTRIES_QUERY } from "./countries";
import { MemoryRouter } from "react-router-dom";

const mocks = [
  {
    request: {
      query: COUNTRIES_QUERY,
      variables: {
        limit: 10,
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
          {
            id: "Q781",
            name: "Antigua and Barbuda",
            vatRate: null,
            languages: [
              {
                id: "Q1860",
                name: "English",
              },
            ],
          },
          {
            id: "Q414",
            name: "Argentina",
            vatRate: 21,
            languages: [
              {
                id: "Q1321",
                name: "Spanish",
              },
            ],
          },
          {
            id: "Q399",
            name: "Armenia",
            vatRate: 20,
            languages: [],
          },
          {
            id: "Q408",
            name: "Australia",
            vatRate: 10,
            languages: [
              {
                id: "Q1860",
                name: "English",
              },
            ],
          },
          {
            id: "Q40",
            name: "Austria",
            vatRate: 20,
            languages: [
              {
                id: "Q188",
                name: "German",
              },
            ],
          },
        ],
      },
    },
  },
];

it("renders without error", () => {
  const component = TestRenderer.create(
    <MemoryRouter >
      <MockedProvider mocks={mocks} addTypename={false}>
        <Countries />
      </MockedProvider>
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});
