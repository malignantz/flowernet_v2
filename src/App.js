import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationDrawer, Button, SVGIcon, FontIcon } from "react-md";

import HomeComponent from "./components/HomeComponent";
import NavDrawerComponent from "./components/NavDrawerComponent";
import PhotosComponent from "./components/PhotosComponent";
import AgreementComponent from "./components/AgreementComponent";
import FAQComponent from "./components/FAQComponent";
import ResidentResourcesComponent from "./components/ResidentResourcesComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <NavDrawerComponent>
              <Switch key={location.key}>
                <Route
                  exact
                  path="/"
                  location={location}
                  component={HomeComponent}
                />
                <Route
                  path="/FAQ/:question?"
                  location={location}
                  component={FAQComponent}
                />
                <Route
                  path="/photos/:crashpad?"
                  location={location}
                  component={PhotosComponent}
                />
                <Route
                  path="/Resident_Resources"
                  location={location}
                  component={ResidentResourcesComponent}
                />
                <Route
                  path="/Agreement"
                  location={location}
                  component={AgreementComponent}
                />
              </Switch>
            </NavDrawerComponent>
          )}
        />
      </div>
    );
  }
}

export default App;
