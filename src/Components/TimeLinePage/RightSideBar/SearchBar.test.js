import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from "./SearchBar";

test("the component renders successfully", () => {
    render(<Router><SearchBar></SearchBar></Router>);
    const element = screen.getByPlaceholderText(/Search Twitter/i);
    expect(element).toBeInTheDocument();
});