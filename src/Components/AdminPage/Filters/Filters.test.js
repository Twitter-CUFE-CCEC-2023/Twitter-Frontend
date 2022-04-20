import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "./Filters";

describe("Admin Page", () => {
  test("testing the filters", () => {
    render(<Filters />);
    const msg = screen.getByText("Please select the filters you want to apply");
    expect(msg).toBeInTheDocument();
  });

  test('renders "Submit" if the button was NOT clicked', () => {
    render(<Filters />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  test('renders "Submited" if the button was clicked', () => {
    render(<Filters />);
    const buttonElement = screen.getByTestId("submitButton");
    userEvent.click(buttonElement);
    const outputElement = screen.getByTestId("submitButton");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "Submit" if the button was clicked', () => {
    render(<Filters />);
    const buttonElement = screen.getByText("Submit");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("Submit");
    expect(outputElement).toBeNull();
  });
});
