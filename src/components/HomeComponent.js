import React, { Component } from "react";
import { Grid, Cell } from "react-md";

// import { NavigationDrawer, Button, SVGIcon, FontIcon } from "react-md";

class HomeComponent extends Component {
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
