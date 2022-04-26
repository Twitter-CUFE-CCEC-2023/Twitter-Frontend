import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignInPage from "./SignInPage";

describe("Sign in Page", () => {
  test("Sign In static components testing", async () => {
    render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    );

    const welcomeMessage = await screen.findByText("Sign in to Twitter");
    expect(welcomeMessage).toBeInTheDocument();
    const googleSignIn = await screen.findByText("Sign in with Google");
    expect(googleSignIn).toBeInTheDocument();
    const appleSignIn = await screen.findByText("Sign in with Apple");
    expect(appleSignIn).toBeInTheDocument();
    const nextButton = await screen.findByText("Next");
    expect(nextButton).toBeInTheDocument();
    const forgotPassword = await screen.findByText("Forgot Password?");
    expect(forgotPassword).toBeInTheDocument();
  });
});

// describe("Sign In Page", () => {
//   const userObject = {
//     id: 1,
//     name: "Millania Sameh",
//     username: "@millania_sameh",
//     email: "millaniasameh@gmail.com",
//     phone: "01122233344",
//     password: "12345678",
//   };

//   const signInResponse = rest.post("/auth/login", (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         {
//           access_token: "AAAA%2FAAA%3DAAAAAAAAxxxxxx",
//           user: "Millania Sameh",
//           token_expiration_date: "2020-01-01T00:00:00.000Z",
//           message: "User logged in successfully",
//         },
//       ])
//     );
//   });

//   const notFoundResponse = rest.post("/auth/login", (req, res, ctx) => {
//     return res(ctx.status(401));
//   });

//   //   const notFoundResponse2 = rest.post("/auth/login", (req, res, ctx) => {
//   //     sessionStorage.setItem("username", req.body.user.name);
//   //     return res(ctx.json({ [user.name]: "" }));
//   //   });

//   const handlers = [signInResponse];
//   const server = setupServer(...handlers);
//   beforeAll(() => server.listen());
//   afterEach(() => server.resetHandlers());
//   afterAll(() => server.close());

//   // -------------------------------- Test 2 --------------------------------
//   test("Sign In Page: account found", async () => {
//     render(
//       <BrowserRouter>
//         <SignInPage />
//       </BrowserRouter>
//     );
//     const accountNotFound = await screen.getByText("Millania Sameh");
//     expect(accountNotFound).toBeInTheDocument();
//   });

//   // -------------------------------- Test 3 --------------------------------
//   //   test("Sign In Page: account not found", async () => {
//   //     server.use(notFoundResponse);
//   //     render(
//   //       <BrowserRouter>
//   //         <SignInPage />
//   //       </BrowserRouter>
//   //     );
//   //     const accountNotFound = await screen.getByText(
//   //       "Sorry, we could not find your account."
//   //     );
//   //     expect(accountNotFound).toBeInTheDocument();
//   //   });

//   // -------------------------------- Test 4 --------------------------------
//   //   test("Sign In Page: wrong password", async () => {
//   //     server.use(notFoundResponse);
//   //     render(
//   //       <BrowserRouter>
//   //         <SignInPage />
//   //       </BrowserRouter>
//   //     );
//   //     const wrongPassword = await screen.getByText("Wrong password!");
//   //     expect(wrongPassword).toBeInTheDocument();
//   //   });
// });
