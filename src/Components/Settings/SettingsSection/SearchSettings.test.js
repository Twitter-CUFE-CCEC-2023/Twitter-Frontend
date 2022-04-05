import { render, screen } from "@testing-library/react";
import SearchSettings from "./SearchSettings";
describe("testing SearchSettings component", () => {
  test("the component renders successfully", () => {
    render(<SearchSettings></SearchSettings>);
    const element = screen.getByPlaceholderText(/Search settings/i);
    expect(element).toBeInTheDocument();
  });
});
