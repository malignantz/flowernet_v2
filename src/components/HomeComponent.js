import React, { Component } from "react";
import { Grid, Cell } from "react-md";

// import { NavigationDrawer, Button, SVGIcon, FontIcon } from "react-md";

class HomeComponent extends Component {
  componentWillMount() {
    let routes = ["agreement", "Resident_Resources", "photos", "FAQ"];
    let query = this.props.location.search;
    let route = query.replace("?", "");
    let history = this.props.history;
    if (query.includes("?") && routes.some(item => query.includes(item))) {
      history.push(`/${route}`);
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell size={12}>
            <h2 className="md-cell md-cell--12">Crashpads....Done right.</h2>
            <section className="md-text-container md-cell md-cell--12">
              <p>This is paragraph.</p>
              <p>This is another p</p>
            </section>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomeComponent;
