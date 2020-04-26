import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/default.css";
import UpperNoticeBar from "./components/UpperNoticeBar/UpperNoticeBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/footer/footer";
import Home from "./pages/HomePage/home";
import Society from "./pages/Society/Society";


class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <UpperNoticeBar />
        <NavigationBar />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/society" component={Society} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
