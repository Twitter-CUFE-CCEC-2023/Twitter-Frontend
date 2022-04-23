import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import WhoToFollow from "./WhoToFollow";

test("the component renders successfully", () => {
    render(<Router><WhoToFollow></WhoToFollow></Router>);
    const element = screen.getByText(/Who to follow/i);
    expect(element).toBeInTheDocument();
});