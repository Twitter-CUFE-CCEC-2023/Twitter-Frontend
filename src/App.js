import React from "react";
// import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import MainPage from "./Components/Login/FirstPage/MainPage";
import SignInPage from "./Components/Login/SignInPage/SignInPage";

import Mail from "./Components/Login/SignUp/Mail";
import Phone from "./Components/Login/SignUp/Phone";
import PhoneVerify from "./Components/Login/SignUp/PhoneVerify";
import TrackOption from "./Components/Login/SignUp/TrackOption";
import AddPhone from "./Components/Login/SignUp/AddPhone";

import Home from "./Components/TimeLinePage/Home";
import AllNotificationsPage from "./Components/Notifications/AllNotificationsPage";
import MentionNotificationsPage from "./Components/Notifications/MentionNotificationsPage";
import Settings from "./Components/Settings/Settings";
import UserProfile from "./Components/UserProfilePage/UserProfile";
import ImageCropper from "./Components/UserProfilePage/ProfileActions/ImageCropper";
import UnderConstructionPage from "./Components/ExtraPages/UnderConstructionPage";

import Admin from "./Components/AdminPage/Admin";
import UsersList from "./Components/AdminPage/SideBarTabs/UsersList";
import Likes from "./Components/AdminPage/SideBarTabs/Likes";
import Tweets from "./Components/AdminPage/SideBarTabs/Tweets";
import Retweets from "./Components/AdminPage/SideBarTabs/Retweets";
import Statistics from "./Components/AdminPage/SideBarTabs/Statistics";
import MainTweetPage from "./Components/TimeLinePage/TweetPage/MainTweetPage";

function App() {
  // const loginCtx = useContext(LoginContext);
  // console.log(loginCtx.isLoggedIn);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route path="/SignIn" component={SignInPage} />

          <Route path="/Mail" component={Mail} />
          <Route path="/Phone" component={Phone} />
          <Route path="/phoneVerify" component={PhoneVerify} />
          <Route path="/TrackOption" component={TrackOption} />
          <Route path="/AddPhone" component={AddPhone} />

          <Route path="/home" component={Home} />
          <Route path="/:userId/status/:id" component={MainTweetPage} />
          <Route path="/notifications" component={AllNotificationsPage} />
          <Route
            path="/mentionnotifications"
            component={MentionNotificationsPage}
          />
          <Route path="/settings" component={Settings} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/crop" component={ImageCropper}/>
          <Route path="/explore" component={UnderConstructionPage} />
          <Route path="/messages" component={UnderConstructionPage} />
          <Route path="/i/bookmarks" component={UnderConstructionPage} />
          <Route path="/profileName/lists" component={UnderConstructionPage} />
          

          <Route path="/admin" component={Admin} />
          <Route path="/admin-userslist" component={UsersList} />
          <Route path="/admin-likes" component={Likes} />
          <Route path="/admin-tweets" component={Tweets} />
          <Route path="/admin-retweets" component={Retweets} />
          <Route path="/admin-statistics" component={Statistics} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
  {loginCtx.isLoggedIn && (
    <Route path="/SelectModifications" component={Btn} />
  )}
  {loginCtx.isLoggedIn && <Route path="/Select" component={Select} />}
  {loginCtx.isLoggedIn && <Route path="/AddRow" component={AddRow} />}
  {loginCtx.isLoggedIn && (
    <Route path="/UpdateGenres" component={VodSearch} />
  )}
*/
