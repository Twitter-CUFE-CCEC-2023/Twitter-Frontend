import { render, screen } from "@testing-library/react";
import SettingsSection from "./SettingsSection";
describe("testing SettingsSection component", () => {
  test("the component renders successfully", () => {
    render(<SettingsSection></SettingsSection>);
    const element = screen.getByText(/settings/i);
    expect(element).toBeInTheDocument();
  });
});
