import { render, screen, within } from "@testing-library/react";
import FeedTweet from "./FeedTweet";
import defaultMaleProfile from "../../../Assets/defaultMaleProfile.jpg";
import { BrowserRouter as Router } from 'react-router-dom';


const tweet = {
    profilePic: defaultMaleProfile,
    name: "Andrew",
    userName: "andrew9991",
    text: "Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler ",
    replies: 121,
    retweets: 13,
    likes: 2345,
    date: new Date("April 4, 2022 13:23:00"),
  };

test ("the component renders successfully", () => {
    const {getByTestId} = render(<Router><FeedTweet {...tweet} showAction={true}/></Router>);
    expect(getByTestId("name")).toHaveTextContent(tweet.name);
    expect(getByTestId("userName")).toHaveTextContent(tweet.userName);
    expect(getByTestId("text")).toHaveTextContent(tweet.text);
    
  });