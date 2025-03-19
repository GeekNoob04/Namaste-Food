import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test case", () => {
  it("should load Contact us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button us Component", () => {
    render(<Contact />);
    const button = screen.getByText("Contact Us");
    expect(button).toBeInTheDocument();
  });
});
