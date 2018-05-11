import React, { Component } from "react";

import Cell from "react-md/lib/Grids/Cell";
import Grid from "react-md/lib/Grids/Grid";
import Paper from "react-md/lib/Papers/Paper";
import Divider from "react-md/lib/Dividers/Divider";
import Button from "react-md/lib/Buttons/Button";
import FontIcon from "react-md/lib/FontIcons/FontIcon";
import SVGIcon from "react-md/lib/SVGIcons/SVGIcon";
import arrow_forward from "./../baseline-arrow_forward-24px.svg";

import "./HomeComponent.css";

class HomeComponent extends Component {
  /*
  constructor() {
    super();
    this.state = {
      text0: "",
      text1: "placehoplder",
      text2: "placeholder"
    };
    this.timeouts = [];
    this.typingEffect.bind(this);
  }

  componentWillMount() {
    let routes = ["agreement", "Resident_Resources", "photos", "FAQ"];
    let query = this.props.location.search;
    let route = query.replace("?", "");
    let history = this.props.history;
    if (query.includes("?") && routes.some(item => query.includes(item))) {
      history.push(`/${route}`);
    }
  }

  componentDidMount() {
    //    this.typingEffect("Organized, clean, crashpads.");
    this.writeStuff();
  }

  typingEffect(str, line) {
    // let len = this.state.texts.length;
    return new Promise((res, rej) => {
      let time = 0;
      let offset = 150;

      let typeNext = (char, line) => {
        //let val = time === 0 ? char : this.state.texts[len - 1] + char;
        //console.log(this.state);
        let newState = {};
        newState["text" + line] = this.state["text" + line] + char;
        console.log("text" + line, newState, str);
        this.setState(...newState, () => {
          if (this.state["text" + line].length === str) {
            res("done!");
          }
        });
      };
      this.timeouts = [];

      for (let char of str) {
        this.timeouts.push(setTimeout(typeNext.bind(this, char, line), time));
        time += offset;
      }
    });
  }
  async writeStuff() {
    await this.typingEffect("Professional.exe", 0);
    //await this.typingEffect("Weekly Cleaning.bat");
  }
  */
  render() {
    return (
      <div>
        <Grid>
          <Cell size={12}>
            <Paper zDepth={3} className="bg_holder">
              <div className="paper_content">
                <div className="left_title">Flowernet CrashPads</div>
                <div className="right_title">coldbedSFO.com</div>
                <hr />
                <div className="overlay_text alignLeft">
                  <div className="white_box">
                    <FontIcon className="spl_icon">face</FontIcon> Cleaning
                    Service
                  </div>
                </div>
                <div className="alignRight overlay_text">
                  <span className="white_box" zIndex="-1">
                    <FontIcon class="spl_icon">fitness_center</FontIcon> Fitness
                    center
                  </span>
                </div>
                <div className="alignLeft overlay_text">
                  <span className="white_box" zIndex="-1">
                    <FontIcon className="spl_icon">airport_shuttle</FontIcon>{" "}
                    SFO shuttles
                  </span>
                </div>
                <div className="overlay_text alignRight">
                  <span className="white_box" zIndex="-1">
                    <FontIcon className="spl_icon">flight_takeoff</FontIcon> 8 m
                    to airport
                  </span>
                </div>
                <div className="overlay_text alignLeft">
                  <span className="white_box" zIndex="-1">
                    <FontIcon className="spl_icon">tv</FontIcon> 55" 4K Smart TV
                  </span>
                </div>
                <div className="overlay_text alignRight">
                  <span className="white_box" zIndex="-1">
                    <FontIcon className="spl_icon">local_pizza</FontIcon> Nearby
                    Restaurants
                  </span>
                </div>
                <div className="overlay_text alignLeft">
                  <span className="white_box" zIndex="-1">
                    <FontIcon className="spl_icon">pool</FontIcon> Pools / Hot
                    Tub
                  </span>
                </div>
                <div className="overlay_text alignRight">
                  <Button iconClassName="arrow_forward" raised primary>
                    Learn More ->
                  </Button>
                </div>
                <div className="padder" />
              </div>
            </Paper>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomeComponent;
