import { render, screen } from "@testing-library/react";
import AllNotifications from "./AllNotifications";

describe("testing notifications", () => {
  test("the all notifications render successfully", () => {
    render(<AllNotifications />);
    const like = screen.getByText(/liked your tweet/i);
    expect(like).toBeInTheDocument();

    const retweet = screen.getByText(/retweeted your tweet/i);
    expect(retweet).toBeInTheDocument();

    const follow = screen.getByText(/followed you/i);
    expect(follow).toBeInTheDocument();
  });
});
