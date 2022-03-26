import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import MainPage from "./Components/Login/FirstPage/MainPage";
import SignInPage from "./Components/Login/SignInPage/SignInPage";
import Home from "./Components/TimeLinePage/Home";
import AllNotificationsPage from "./Components/Notifications/AllNotificationsPage";
import MentionNotificationsPage from "./Components/Notifications/MentionNotificationsPage";
import Settings from "./Components/Settings/Settings";
import UserProfile from "./Components/UserProfilePage/UserProfile";

function App() {
  // const loginCtx = useContext(LoginContext);
  // console.log(loginCtx.isLoggedIn);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route path="/SignIn" component={SignInPage} />
          <Route path="/home" component={Home} />
          <Route path="/notifications" component={AllNotificationsPage} />
          <Route
            path="/mentionnotifications"
            component={MentionNotificationsPage}
          />
          <Route path="/settings" component={Settings} />
          <Route path="/userprofile" component={UserProfile} />
          {/*  
          <Route path="/Select" component={Login} />
          <Route path="/AddRow" component={Login} />
          <Route path="/UpdateGenres" component={Login} /> */}

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
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
}
