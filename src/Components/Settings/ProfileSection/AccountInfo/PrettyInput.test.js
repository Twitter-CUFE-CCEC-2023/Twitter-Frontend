import { render, screen } from "@testing-library/react";
import PrettyInput from "./PrettyInput";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(
      <PrettyInput
        naming="confirm password"
        label="confirm password"
        placeHolder="confirm new password"
      ></PrettyInput>
    );
    const element = screen.getByText(/confirm password/i);
    expect(element).toBeInTheDocument();
  });
});
