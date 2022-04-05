import { render, screen } from "@testing-library/react";
import ProfileSection from "./ProfileSection";
describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<ProfileSection></ProfileSection>);
    const element = screen.getByText(/see information about your account/i);
    expect(element).toBeInTheDocument();
  });
});
