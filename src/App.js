import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomeComponent2 from "./components/HomeComponent2";
import NavDrawerComponent from "./components/NavDrawerComponent";
import PhotosComponent from "./components/PhotosComponent";
import AgreementComponent from "./components/AgreementComponent";
import FAQComponent from "./components/FAQComponent";
import ResidentResourcesComponent from "./components/ResidentResourcesComponent";
import AmenitiesComponent from "./components/AmenitiesComponent";

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
                  component={HomeComponent2}
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
                <Route
                  path="/Amenities"
                  location={location}
                  component={AmenitiesComponent}
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
