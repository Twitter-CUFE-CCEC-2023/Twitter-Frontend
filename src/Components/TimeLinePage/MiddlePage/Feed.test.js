import { render, screen, within } from "@testing-library/react";
import Feed from "./Feed";
import { BrowserRouter as Router } from 'react-router-dom';

test("the component renders successfully", () => {
    render(<Router><Feed></Feed></Router>);
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument();
    });