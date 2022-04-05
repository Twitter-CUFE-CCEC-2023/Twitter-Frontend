import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

describe("Admin Page", () => {
  test("Admin Side Bar Tabs", () => {
    render(
      <BrowserRouter>
        <AdminSideBar />
      </BrowserRouter>
    );

    const filterTab = screen.getByText("Filters");
    expect(filterTab).toBeInTheDocument();

    const usersListTab = screen.getByText("Users List");
    expect(usersListTab).toBeInTheDocument();

    const likesTab = screen.getByText("Likes");
    expect(likesTab).toBeInTheDocument();

    const tweetsTab = screen.getByText("Tweets");
    expect(tweetsTab).toBeInTheDocument();

    const retweetTab = screen.getByText("Retweets");
    expect(retweetTab).toBeInTheDocument();
  });

  //   test("Admin Side Bar: Checking 'Likes' rounting path", () => {
  //     render(
  //       <BrowserRouter>
  //         <AdminSideBar />
  //       </BrowserRouter>
  //     );

  //     nav = wrapper.find()

  //     const filterTab = screen.getByText("Filters");
  //     expect(filterTab).toBeInTheDocument();
  //   });
});
