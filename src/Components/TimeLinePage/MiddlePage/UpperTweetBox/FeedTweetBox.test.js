import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import FeedTweetBox from "./FeedTweetBox";

test("the component renders successfully", () => {
    render(<Router><FeedTweetBox></FeedTweetBox></Router>);
    const element = screen.getByPlaceholderText(/What's happening?/i);
    expect(element).toBeInTheDocument();

});