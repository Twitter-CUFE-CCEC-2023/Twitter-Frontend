import { render, screen } from "@testing-library/react";
import MentionNotifications from "./MentionNotifications";

describe("testing notifications", () => {
  test("the mention notifications render successfully", () => {
    render(<MentionNotifications />);
    const element = screen.getByText(/Nothing to see here yet/i);
    expect(element).toBeInTheDocument();
  });
});
