import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import WhatsHappening from "./WhatsHappening";

test("the component renders successfully", () => {
    render(<Router><WhatsHappening></WhatsHappening></Router>);
    const element = screen.getByText(/What's happening/i);
    expect(element).toBeInTheDocument();
    });