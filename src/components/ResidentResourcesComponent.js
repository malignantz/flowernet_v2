import React, { Component } from "react";

import List from "react-md/lib/Lists/List";
import ListItem from "react-md/lib/Lists/ListItem";
import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Grid";

class ResidentResourcesComponent extends Component {
  cellMaker(primaryText, secondaryText, link, disabled = false) {
    return { primaryText, secondaryText, link };
  }

  render() {
    let cellSize = 3;

    let resources = [
      [
        "PACKAGES",
        "Official Form",
        "https://docs.google.com/forms/d/e/1FAIpQLSfUdtlt74S8F9XE4jlCWzy3aeLIt0h1-0yWbgBYfInW_pYiSQ/viewform?usp=sf_link"
      ],
      [
        "MAINTENANCE REQUEST",
        "Report broken, missing things!",
        "https://docs.google.com/forms/d/e/1FAIpQLSdAO2Ltoon8OwjUCe2JLIfSwBCWtA8cN6j_FR9Pph1VDQQwTQ/viewform?usp=sf_link"
      ],

      [
        "POOL",
        "Take the virtual tour",
        "https://my.matterport.com/show/?m=jFD9ZTdkqzQ"
      ],
      [
        "UA Holiday Pay",
        "Calculate bonus for trip",
        "http://crashpad.co/UnitedHolidayPay/?coldbedsfo"
      ]
    ];

    return (
      <div style={{ textAlign: "center" }}>
        <span>Resident Resources</span>
        <List>
          <Grid>
            {resources.map(info => {
              let [primaryText, secondaryText, link] = info;
              return (
                <Cell size={{ cellSize }}>
                  <ListItem
                    primaryText={primaryText}
                    secondaryText={secondaryText}
                    style={{ border: "1px solid black" }}
                    onClick={() => window.open(link)}
                    key={primaryText}
                  />
                </Cell>
              );
            })}

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
