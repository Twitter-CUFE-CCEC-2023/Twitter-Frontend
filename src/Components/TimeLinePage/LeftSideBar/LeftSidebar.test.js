import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import LeftSideBar from "./LeftSideBar";

test("the component renders successfully", () => {

    const {getByTestId} = render(<Router><LeftSideBar></LeftSideBar></Router>);
    expect(getByTestId("homeButton")).toHaveTextContent("Home");
    expect(getByTestId("exploreButton")).toHaveTextContent("Explore");
    expect(getByTestId("notificationsButton")).toHaveTextContent("Notifications");
    expect(getByTestId("messagesButton")).toHaveTextContent("Messages");
    expect(getByTestId("bookmarksButton")).toHaveTextContent("Bookmarks");
    expect(getByTestId("listsButton")).toHaveTextContent("Lists");
    expect(getByTestId("profileButton")).toHaveTextContent("Profile");
    //expect(getByTestId("moreButton")).toHaveTextContent("More");
  });