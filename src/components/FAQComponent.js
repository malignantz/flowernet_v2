import React, { Component } from "react";
import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Cell";

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
