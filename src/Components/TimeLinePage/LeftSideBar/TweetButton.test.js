import { render, screen, within } from "@testing-library/react";
import TweetButton from "./TweetButton";

test("the component renders successfully", () => {
    render(<TweetButton></TweetButton>);
    const element = screen.getByText(/Tweet/i);
    expect(element).toBeInTheDocument();
    });