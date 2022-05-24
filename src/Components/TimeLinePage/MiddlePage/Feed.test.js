import { cleanup, render, screen, within, waitFor } from "@testing-library/react";
import Feed from "./Feed";
import { BrowserRouter as Router } from 'react-router-dom';
import mockAxios from "axios";
import {setupServer} from "msw/node";


let tweets = [
    {
        id: "626690e1c28380b5a04a474c",
        content: "Hello",
        user: {
            id: "624a4a94c66738f13854b474",
            name: "Amr Zaki",
            username: "amrzaki",
            email: "amrzaki2000.az@gmail.com",
            profile_image_url: "https://pbs.twimg.com/profile_images/1492532221110104067/_3ozwoyh_400x400.jpg",
            cover_image_url: "",
            bio: "",
            website: "",
            location: "",
            birth_date: "2000-10-17T00:00:00.000Z",
            created_at: "2022-04-24T00:29:24.967Z",
            followers_count: 1,
            following_count: 4,
            tweets_count: 38,
            likes_count: 4,
            isBanned: false,
            isVerified: true
        },
        likes_count: 0,
        retweets_count: 0,
        replies_count: 0,
        quotes_count: 0,
        is_liked: false,
        is_retweeted: false,
        is_quoted: false,
        is_reply: false,
        quote_comment: null,
        mentions: [],
        media: [],
        created_at: "2022-04-25T12:15:29.306Z"
    },
  ]
const server = new setupServer();

beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

afterEach(cleanup);

test ("the API works correctly", async() => {
    mockAxios.get.mockResolvedValueOnce({
        data: {
            tweets: tweets
        }
    });

    const url = "/home/1/1";
    const {getByTestId} = render(<Router><Feed testUrl = {url}/></Router>);
    
    const resolvedTweet = await waitFor(() => getByTestId('tweet-0'));
    expect(resolvedTweet).toHaveTextContent(tweets[0].content);
    expect(resolvedTweet).toHaveTextContent(tweets[0].user.name);
    expect(resolvedTweet).toHaveTextContent(tweets[0].user.username);
    });