import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

test("should render rescard with props data", () => {
  const MOCK_DATA_ADJUSTED = {
    info: MOCK_DATA,
  };
  render(<ResCard resData={MOCK_DATA_ADJUSTED} />);
  const nameElement = screen.getByText("Pizza Hut");
  expect(nameElement).toBeInTheDocument();
});
 