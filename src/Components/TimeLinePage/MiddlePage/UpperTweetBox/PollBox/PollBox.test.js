import { render, screen } from "@testing-library/react";
import PollBox from "./PollBox";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<PollBox></PollBox>);
    const element = screen.getByText(/Remove Pull/i);
    expect(element).toBeInTheDocument();
  });
});
