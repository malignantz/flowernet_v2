import React, { Component } from "react";
import { List, ListItem, FontIcon, Grid, Cell, Subheader } from "react-md";

class ResidentResourcesComponent extends Component {
  render() {
    let cellSize = 3;
    return (
      <div>
        <span>Resident Resources</span>
        <List>
          <Grid>
            <Cell size={cellSize}>
              <ListItem
                primaryText="PACKAGES"
                secondaryText="Official Form"
                style={{ border: "1px solid black" }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfUdtlt74S8F9XE4jlCWzy3aeLIt0h1-0yWbgBYfInW_pYiSQ/viewform?usp=sf_link"
                  )
                }
              />
            </Cell>
            <Cell size={cellSize}>
              <ListItem
                primaryText="TRANSPORT"
                secondaryText="SFO Shuttles"
                style={{ border: "1px solid black" }}
                disabled
              />
            </Cell>
            <Cell size={cellSize}>
              <ListItem
                primaryText="TECHNOLOGY"
                secondaryText="TV, Internet, etc."
                style={{ border: "1px solid black" }}
                disabled
              />
            </Cell>
            <Cell size={cellSize}>
              <ListItem
                primaryText="MORE COMING SOON"
                secondaryText="We <3 suggestions!"
                style={{ border: "1px solid black" }}
                disabled
              />
            </Cell>
          </Grid>
        </List>
      </div>
    );
  }
}

export default ResidentResourcesComponent;
