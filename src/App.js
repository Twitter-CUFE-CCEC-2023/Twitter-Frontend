import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login/Login";
import SignInPage from "./Components/SignInPage/SignInPage";

function App() {
  // const loginCtx = useContext(LoginContext);
  // console.log(loginCtx.isLoggedIn);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/SignIn" component={SignInPage} />
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
