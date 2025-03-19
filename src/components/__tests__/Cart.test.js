import { render } from "@testing-library/react";
import { act } from "react";
import ResMenu from "../ResMenu";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should load restaurant menu component", async () => {
  await act(async () => render(<ResMenu />));
});
