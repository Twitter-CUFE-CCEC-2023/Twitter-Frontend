import { render, screen } from "@testing-library/react";
import UserNameItem from "./UserNameItem";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<UserNameItem value="x" id="y"></UserNameItem>);
    const element = screen.getByText(/save/i);
    expect(element).toBeInTheDocument();
  });
});
