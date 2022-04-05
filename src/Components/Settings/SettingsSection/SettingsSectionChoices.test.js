import { render, screen } from "@testing-library/react";
import SettingsSectionChoices from "./SettingsSectionChoices";
describe("testing SettingsSectionChoices component", () => {
  test("the component renders successfully", () => {
    render(<SettingsSectionChoices></SettingsSectionChoices>);
    const element = screen.getByText("Your Account");
    expect(element).toBeInTheDocument();
  });
});
