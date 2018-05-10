import React, { Component } from "react";

import List from "react-md/lib/Lists/List";
import ListItem from "react-md/lib/Lists/ListItem";
import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Grid";

class ResidentResourcesComponent extends Component {
  render() {
    let cellSize = 3;
    return (
      <div style={{ textAlign: "center" }}>
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
                primaryText="FITNESS CENTER"
                secondaryText="Take the virtual tour"
                onClick={() =>
                  window.open(
                    "https://my.matterport.com/show/?m=B7WGXWjXy5f",
                    "_self"
                  )
                }
                style={{ border: "1px solid black" }}
              />
            </Cell>
            <Cell size={cellSize}>
              <ListItem
                primaryText="POOL AND CLUBHOUSE"
                secondaryText="Take the virtual tour"
                onClick={() =>
                  window.open(
                    "https://my.matterport.com/show/?m=jFD9ZTdkqzQ",
                    "_self"
                  )
                }
                style={{ border: "1px solid black" }}
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
