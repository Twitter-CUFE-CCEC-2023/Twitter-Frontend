import { render, screen } from "@testing-library/react";
import AdminHeader from "./AdminHeader";

describe("Admin Page", () => {
  test("Admin Header Component", () => {
    render(<AdminHeader />);

    const welcomeMessage = screen.getByText("Welcome", { exact: false });
    expect(welcomeMessage).toBeInTheDocument();
  });
});
