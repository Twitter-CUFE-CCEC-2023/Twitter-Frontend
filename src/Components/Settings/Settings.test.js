import { render, screen } from "@testing-library/react";
import Settings from "./Settings";

test("the component renders successfully", () => {
  render(<Router> <Settings /> </Router>);
  const element = screen.findByText("");
  expect(element).not.toBeNull();
});

// describe("testing Settings component", () => {
//   test("the component renders successfully", () => {
//     // render(<Settings></Settings>);
//     // const element = screen.findByText("");
//     // expect(element).not.toBeNull();
//   });
// });
