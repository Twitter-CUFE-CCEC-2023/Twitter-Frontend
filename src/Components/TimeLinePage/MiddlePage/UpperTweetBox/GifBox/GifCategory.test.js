import { render, screen } from "@testing-library/react";
import GifCategory from "./GifCategory";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<GifCategory name="test"></GifCategory>);
    const element = screen.getByText(/test/i);
    expect(element).toBeInTheDocument();
  });
});
