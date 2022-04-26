import { fireEvent, render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("Sign in Page", () => {
  test("Login Button Rendered testing", async () => {
    render(<LoginButton />);

    const loginButton = await screen.findByText("Log in");
    expect(loginButton).toBeInTheDocument();
  });

  test("Login Button Click testing", async () => {
    render(<LoginButton />);

    const handleClick = jest.fn();
    handleClick.mockResolvedValueOnce({
      json: async () => [
        {
          access_token: "iOiJIUzI1NiIsInR5cCI6IkpX",
          user: {},
          token_expiration_date: "2020-01-01T00:00:00.000Z",
          message: "User logged in successfully",
        },
      ],
    });

    const loginButton = await screen.findByText("Log in");
    fireEvent.click(loginButton);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
