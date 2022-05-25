import { render, screen } from "@testing-library/react";
import ChangePassword from "./ChangePassword";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<ChangePassword></ChangePassword>);
    const element = screen.getByText(/new password/i);
    expect(element).toBeInTheDocument();
  });
});
