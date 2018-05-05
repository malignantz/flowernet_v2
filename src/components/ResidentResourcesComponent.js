import React, { Component } from "react";
import { List, ListItem, FontIcon, Grid, Cell, Subheader } from "react-md";

class ResidentResourcesComponent extends Component {
  render() {
    return (
      <div>
        <span>Resident Resources</span>
        <List>
          <Grid>
            <Cell size={4}>
              <ListItem
                primaryText="PACKAGES"
                secondaryText="Official Form"
                style={{ border: "1px solid black" }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdmL1taoWmodmaEas5dzSH2tPi9hyQxdon5Js_ol_b9W8YV5A/viewform?usp=sf_link"
                  )
                }
              />
            </Cell>
            <Cell size={4}>
              <ListItem
                primaryText="TRANSPORT"
                secondaryText="SFO Shuttles"
                style={{ border: "1px solid black" }}
              />
            </Cell>
            <Cell size={4}>
              <ListItem
                primaryText="TECHNOLOGY"
                secondaryText="TV, Internet, etc."
                style={{ border: "1px solid black" }}
              />
            </Cell>
          </Grid>
        </List>
      </div>
    );
  }
}

export default ResidentResourcesComponent;
