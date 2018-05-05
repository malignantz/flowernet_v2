import React, { Component } from "react";
import {
  Media,
  MediaOverlay,
  CardTitle,
  Dialog,
  Toolbar,
  Button
} from "react-md";

import PhotoGridComponent from "./PhotoGridComponent";
import TabsControlComponent from "./TabsControlComponent";

//import "./../img-2.js";

// import { NavigationDrawer, Button, SVGIcon, FontIcon } from "react-md";

class PhotosComponent extends Component {
  //  {JSON.stringify(this.props.match.params)} => { question: 1}  .

  constructor(props) {
    super(props);
    this.state = {
      selected: "Sunny Tulip",
      crashpads: [
        "Sunny Tulip",
        "Dancing Sunflower",
        "Wild Flower",
        "Peace Lilly"
      ],
      imgURL: ""
    };
  }

  handleCrashpadSelect(selected) {
    this.setState({ selected });
  }

  handleImageSelect(URL) {
    let fullURL = URL.split("")
      .reverse()
      .join("")
      .replace(".", ".lluf_")
      .split("")
      .reverse()
      .join("");
    console.log(fullURL);
    this.setState({
      imgURL: fullURL
    });
  }

  hide() {
    this.handleImageSelect("");
  }

  render() {
    return (
      <div>
        <TabsControlComponent
          crashpads={this.state.crashpads}
          selected={this.state.selected}
          selectPad={pad => this.handleCrashpadSelect(pad)}
        />
        <PhotoGridComponent
          images={["assets/dsf/pool400.jpg", "assets/dsf/clubhouse400.jpg"]}
          handleImageSelect={url => this.handleImageSelect(url)}
        />
      </div>
    );
  }
}

export default PhotosComponent;
