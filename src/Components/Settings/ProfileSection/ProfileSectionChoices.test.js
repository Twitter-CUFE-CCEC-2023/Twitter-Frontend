import { render, screen } from "@testing-library/react";
import ProfileSectionChoices from "./ProfileSectionChoices";
describe("testing choices component", () => {
  test("the component renders successfully", () => {
    render(<ProfileSectionChoices></ProfileSectionChoices>);
    const element = screen.getByText("Account information");
    expect(element).toBeInTheDocument();
  });
});
