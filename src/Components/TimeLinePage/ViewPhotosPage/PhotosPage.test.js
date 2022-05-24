import { cleanup, render, screen, within, waitFor } from "@testing-library/react";
import PhotosPage from "./PhotosPage";
import { BrowserRouter as Router } from 'react-router-dom';
import mockAxios from "axios";
import {setupServer} from "msw/node";

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

let tweet =
{
        id: "628b38735e2c18b57a5b6d04",
        content: "media sidebar",
        user: {
        id: "624a52d75ff69df002d25035",
        name: "مختار",
        username: "YoussMokh",
        email: "mekha2000@gmail.com",
        profile_image_url: "https://backlb.twittercloneteamone.tk/media/media-1653051551187.jpeg",
        cover_image_url: "https://backlb.twittercloneteamone.tk/media/media-1653051556230.jpeg",
        bio: "me5aaaa",
        website: "www.google.com",
        location: "Sheikh Zayed City",
        birth_date: "2000-05-09T00:00:00.000Z",
        created_at: "2022-04-24T00:29:24.967Z",
        followers_count: 4,
        following_count: 4,
        tweets_count: 50,
        likes_count: 19,
        isBanned: false,
        isVerified: true,
        craeted_at: "2022-04-24T00:29:24.967Z",
        is_followed: false
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
        media: [
        "https://backlb.twittercloneteamone.tk/media/media-1653291122767.jpg"
    ],
    gif: "",
    created_at: "2022-05-23T07:32:03.852Z"
};

test ("the API works correctly", async() => {
    mockAxios.get.mockResolvedValueOnce({
        data: {
            tweet: tweet
        }
    });
    const url = "/status/tweet/628b38735e2c18b57a5b6d04";
    const {getByTestId} = render(<Router><PhotosPage testUrl = {url}/></Router>);
    
    const photos = await waitFor(() => getByTestId("next-photo"));
    expect(photos).toHaveTextContent(tweet.media[0]);
    });