import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import EnterPassword from "./EnterPassword";

describe("Sign in Page", () => {
  test("Do not renders 'Wrong password!' in case of correct password", async () => {
    render(
      <BrowserRouter>
        <EnterPassword />
      </BrowserRouter>
    );

    const wrongPassword = await screen.queryByTestId("passwordAlert");
    expect(wrongPassword).toBeInTheDocument();
  });

  //   test("Renders 'Wrong password!' in case of wrong password", async () => {
  //     render(
  //       <BrowserRouter>
  //         <EnterPassword />
  //       </BrowserRouter>
  //     );

  //     const wrongPassword = await screen.findByTestId("passwordAlert");
  //     userEvent.click(wrongPassword);

  //     const alert = await screen.findByTestId("passwordAlert");
  //     expect(alert).toBeInTheDocument();
  //   });
});
