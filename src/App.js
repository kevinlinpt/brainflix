import "./App.scss";
import "./styles/partials/global.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage"
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <Router>
      <Navbar/>
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
      </Switch>
    </Router>
  );
}
export default App;
