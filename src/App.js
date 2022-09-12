import "./App.scss";
import "./styles/partials/global.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage"
import UploadPage from "./pages/UploadPage";
import FourOhFourPage from "./pages/FourOhFourPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/videos/:videoId">
          <HomePage />
        </Route>
        <Route path="/upload">
          <UploadPage />
        </Route>
        <Route path="/404">
          <FourOhFourPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
export default App;
