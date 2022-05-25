import { render, screen } from "@testing-library/react";
import PrettyInputOnly from "./PrettyInputOnly";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<PrettyInputOnly></PrettyInputOnly>);
    const element = screen.getByText(/25/i);
    expect(element).toBeInTheDocument();
  });
});
