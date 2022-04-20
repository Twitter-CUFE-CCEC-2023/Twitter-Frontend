import { render, screen } from "@testing-library/react";
import NotificationsNavBar from "./NotificationsNavBar";

describe("testing notifications", () => {
  test("the notifications navbar renders successfully", () => {
    render(<NotificationsNavBar />);
    const element = screen.getByText(/Notifications/i);
    expect(element).toBeInTheDocument();
  });
});
