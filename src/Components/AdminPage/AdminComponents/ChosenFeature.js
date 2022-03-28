import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Filters from "../Filters/Filters";
import UsersList from "../Features/UsersList";
import Likes from "../Features/Likes";
import Tweets from "../Features/Tweets";
import Retweets from "../Features/Retweets";

const ChosenFeautre = (props) => {
  const history = useHistory();

  useEffect(() => {
    // console.log(history.location.pathname);

    if (history.location.pathname === "/admin") {
      if (props.filter) {
        history.push(`/admin/filter`);
      } else if (props.usersList) {
        history.push(`/admin/feature-userslist`);
      } else if (props.likes) {
        history.push(`/admin/feature-likes`);
      } else if (props.tweets) {
        history.push(`/admin/feature-tweets`);
      } else if (props.retweets) {
        history.push(`/admin/feature-retweets`);
      }
    } else {
      if (props.filter) {
        history.replace(`/admin/filter`);
      } else if (props.usersList) {
        history.replace(`/admin/feature-userslist`);
      } else if (props.likes) {
        history.replace(`/admin/feature-likes`);
      } else if (props.tweets) {
        history.replace(`/admin/feature-tweets`);
      } else if (props.retweets) {
        history.replace(`/admin/feature-retweets`);
      }
    }
  }, [
    props.filter,
    props.usersList,
    props.likes,
    props.tweets,
    props.retweets,
  ]);

  return (
    <div>
      <div>
        {props.filter && <Filters />}
        {props.usersList && <UsersList />}
        {props.likes && <Likes />}
        {props.tweets && <Tweets />}
        {props.retweets && <Retweets />}
      </div>
    </div>
  );
};

export default ChosenFeautre;
