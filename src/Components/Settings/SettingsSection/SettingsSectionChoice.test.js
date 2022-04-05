import { render, screen } from "@testing-library/react";
import SettingsSectionChoice from "./SettingsSectionChoice";
describe("testing SettingsSectionChoice component", () => {
  test("the component renders successfully", () => {
    render(<SettingsSectionChoice name="Twitter Blue"></SettingsSectionChoice>);
    const element = screen.getByText("Twitter Blue");
    expect(element).toBeInTheDocument();
  });
});
