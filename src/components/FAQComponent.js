import React, { Component } from "react";
import "./FAQComponent.css";
import questions from "./../lib/faq_data";
import Fuse from "fuse.js";

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

class FAQComponent extends Component {
  //  {JSON.stringify(this.props.match.params)} => { question: 1}
  constructor() {
    super();
    this.data = questions;
    this.indexer = new Fuse(this.data, {
      keys: [
        { name: "question", weight: 1 }
        //{ name: "answer", weight: 0.5 }
      ],
      threshold: 0.4,
      includeScore: true,
      distance: 200,
      tokenize: true
    });
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
      .slice(0, 2);
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
    if ((currScore - firstScore) / firstScore * 100 < 4) {
      return true;
    }

    return !(i > 0 && queryReturn.score > 0.2);
  }

  render() {
    //console.log(this.state.data, this.filterWithFuseJS);
    return (
      <div>
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="simple-tab" mobile={false} className="container">
            <Tab icon={<FontIcon>question_answer</FontIcon>}>
              <ExpansionList className="md-cell md-cell--12">
                {this.data.map(qa => (
                  <ExpansionPanel
                    className="mdexp"
                    label={qa.question}
                    footer={null}
                  >
                    <p>{qa.answer}</p>
                  </ExpansionPanel>
                ))}
              </ExpansionList>
            </Tab>
            <Tab icon={<FontIcon>search</FontIcon>}>
              <h3>Questions or keywords...</h3>
              <Autocomplete
                deleteKeys="score"
                id="FAQ_questions"
                tabIndex={0}
                placeholder="Search"
                data={this.data}
                filter={this.filterWithFuseJS.bind(this)}
                dataLabel="question"
              />
              <div className="ac_padding" style={{ visibility: "hidden" }}>
                stuf
              </div>
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default FAQComponent;
