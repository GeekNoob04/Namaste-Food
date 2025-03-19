import { render } from "@testing-library/react";
import Body2 from "../Body2";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("should render the Body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body2 />
      </BrowserRouter>
    )
  );
});
