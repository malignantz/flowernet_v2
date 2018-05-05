import React, { Component } from "react";
import { Grid, Cell } from "react-md";

// import { NavigationDrawer, Button, SVGIcon, FontIcon } from "react-md";

class FAQComponent extends Component {
  //  {JSON.stringify(this.props.match.params)} => { question: 1}

  render() {
    return (
      <div>
        <Grid>
          <Cell size={12}>
            <h2 className="md-cell md-cell--12">
              Frequently Anticipated Questions
            </h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default FAQComponent;
