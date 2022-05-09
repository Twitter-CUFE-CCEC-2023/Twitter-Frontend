import { cleanup, render, screen, within, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import TweetAndReplies from "./TweetAndReplies";
import mockAxios from "axios";
import {setupServer} from "msw/node";



let tweetAndReplies = {
    tweet: {
    id: "6265077a87608320b6649e1d",
        content: "this is a test of adding a tweet",
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
            likes_count: 5,
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
        created_at: "2022-04-24T08:16:58.682Z",
        replies: [{
            id: "6265077a87608320b6649e1d",
                content: "this is a test of adding a tweet",
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
                    likes_count: 5,
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
                created_at: "2022-04-24T08:16:58.682Z",
                replies: []
            }]
    },
    "message": "Tweet has been retrieved successfully"
}

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

test ("API Tweet page renders correctly", async() => {
    mockAxios.get.mockResolvedValueOnce({
        data: {
            tweet: tweetAndReplies.tweet
        }
    });
    const url = "/status/tweet/6265077a87608320b6649e1d?include_replies=true";
    const {getByTestId} = render(<Router><TweetAndReplies testUrl = {url}/></Router>);
    
    const resolvedTweet = await waitFor(() => getByTestId('topTweet'));
    expect(resolvedTweet).toHaveTextContent(tweetAndReplies.tweet.content);
    expect(resolvedTweet).toHaveTextContent(tweetAndReplies.tweet.user.name);
    expect(resolvedTweet).toHaveTextContent(tweetAndReplies.tweet.user.username);
});