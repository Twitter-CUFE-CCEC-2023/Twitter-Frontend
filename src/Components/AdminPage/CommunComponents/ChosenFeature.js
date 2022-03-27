import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { matchPath } from "react-router-dom";

import Filters from "../Filters";
import UsersList from "../Features/UsersList";
import Likes from "../Features/Likes";
import Tweets from "../Features/Tweets";
import Retweets from "../Features/Retweets";

const ChosenFeautre = (props) => {
  const history = useHistory();

  // useEffect(() => {
  //   // history.listen();
  //   if (props.filter) {
  //     history.replace(`/admin/filter`);
  //   } else if (props.usersList) {
  //     history.replace(`/admin/feature-userslist`);
  //   } else if (props.likes) {
  //     history.replace(`/admin/feature-likes`);
  //   } else if (props.tweets) {
  //     history.replace(`/admin/feature-tweets`);
  //   } else if (props.retweets) {
  //     history.replace(`/admin/feature-retweets`);
  //   }
  // }, [
  //   props.filter,
  //   props.usersList,
  //   props.likes,
  //   props.tweets,
  //   props.retweets,
  // ]);

  return (
    <div>
      <div>
        {/* {!props.usersList &&
          !props.likes &&
          !props.tweets &&
          !props.retweets && <h1>Please select something to display</h1>} */}
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
