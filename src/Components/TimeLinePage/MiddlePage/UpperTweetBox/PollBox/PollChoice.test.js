import { render, screen } from "@testing-library/react";
import PollChoice from "./PollChoice";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<PollChoice naming="x" placeHolder="y"></PollChoice>);
    const element = screen.getByText(/25/i);
    expect(element).toBeInTheDocument();
  });
});
