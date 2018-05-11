import React, { Component } from "react";
import "./FAQComponent.css";
import questions from "./../lib/data.js";
import Fuse from "fuse.js";
import ReactMarkdown from "react-markdown";

import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Cell";
import TabsContainer from "react-md/lib/Tabs/TabsContainer";
import Tabs from "react-md/lib/Tabs/Tabs";
import Tab from "react-md/lib/Tabs/Tab";
import Autocomplete from "react-md/lib/Autocompletes/Autocomplete";
import ExpansionList from "react-md/lib/ExpansionPanels/ExpansionList";
import ExpansionPanel from "react-md/lib/ExpansionPanels/ExpansionPanel";
import FontIcon from "react-md/lib/FontIcons/FontIcon";
import Card from "react-md/lib/Cards/Card";
import TextField from "react-md/lib/TextFields/TextField";
import Divider from "react-md/lib/Dividers/Divider";

class FAQComponent extends Component {
  //  {JSON.stringify(this.props.match.params)} => { question: 1}
  constructor() {
    super();
    this.data = questions;
    this.indexer = new Fuse(this.data, {
      keys: [
        { name: "question", weight: 0.5 },
        { name: "answer", weight: 0.5 }
      ],
      threshold: 0.6,
      includeScore: true,
      distance: 200,
      tokenize: true
    });
    console.log(this.data);
    this.state = {
      query: ""
    };

    // console.log(this.indexer);
  }

  filterWithFuseJS(data, filterText, dataLabel) {
    // console.log(data, filterText, dataLabel);
    // eslint-disable-line no-unused-vars, arrow-body-style
    //console.log(this.indexer.search(filterText));
    return this.indexer
      .search(filterText)
      .slice(0)
      .filter(this.filterByScore.bind(this, filterText))
      .map(item => item.item)
      .slice(0, 6);
  }

  filterByScore(filterText, queryReturn, i, a) {
    // { item: {}, score: {}}

    //if (filterText === "trash") {
    console.log("Search: ", filterText);
    console.log("Score: ", queryReturn.score);
    console.log(JSON.stringify(queryReturn.item));
    //    }
    let firstScore = a[0].score;
    let currScore = queryReturn.score;
    return true;
    if ((currScore - firstScore) / firstScore * 100 < 4) {
      return true;
    }

    return !(i > 0 && queryReturn.score > 0.2);
  }

  render() {
    //console.log(this.state.data, this.filterWithFuseJS);

    return (
      <div>
        <h3>Fervently Anticipated Queries</h3>
        <TextField
          id="floating-center-title"
          label="Search"
          lineDirection="center"
          placeholder="Is there a fitness center?"
          className="md-cell md-cell--bottom"
          onChange={query => this.setState({ query })}
        />
        <ExpansionList className="md-cell md-cell--12">
          {(this.state.query
            ? this.filterWithFuseJS(this.data, this.state.query, "label")
            : this.data
          ).map(qa => (
            <ExpansionPanel
              label={qa.question}
              footer={null}
              key={qa.question}
              className="answer_section"
            >
              <Divider style={{ marginBottom: "10px" }} />

              <ReactMarkdown className="boldandbig" source={qa.answer} />
            </ExpansionPanel>
          ))}
        </ExpansionList>
      </div>
    );
  }
}

export default FAQComponent;
