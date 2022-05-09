import { fireEvent, render, screen } from "@testing-library/react";
import NextButton from "./NextButton";

describe("Sign in Page", () => {
  test("Next Button Rendered testing", async () => {
    render(<NextButton />);

    const nextButton = await screen.findByText("Next");
    expect(nextButton).toBeInTheDocument();
  });

  test("Login Button Click testing", async () => {
    const handleClick = jest.fn();
    render(<NextButton handleButtonClick={handleClick} />);

    const nextButton = await screen.findByText("Next");
    fireEvent.click(nextButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
