import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import RightSideBar from "./RightSideBar";

test("the component renders successfully", () => {
    render(<Router><RightSideBar></RightSideBar></Router>);
    const element = screen.getByText(/What's Happening/i);
    expect(element).not.toBeNull();
    expect(screen.getByText(/Who To Follow/i)).not.toBeNull();

});