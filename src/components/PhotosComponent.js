import React, { Component } from "react";

import PhotoGridComponent from "./PhotoGridComponent";
import TabsControlComponent from "./TabsControlComponent";

//import "./../img-2.js";

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
      image: { url: "", height: 0, width: 0 }
    };
  }

  handleCrashpadSelect(selected) {
    this.setState({ selected });
  }

  handleImageSelect(image) {
    let addUnderScoreFullToImageURL = URL =>
      URL.split("")
        .reverse()
        .join("")
        .replace(".", ".lluf_")
        .split("")
        .reverse()
        .join("");

    //let fullURL = addUnderScoreFullToImageURL(URL);
    //    console.log(fullURL);
    this.setState(Object.assign({}, { image }));
  }

  hide() {
    this.handleImageSelect({ url: "", height: 0, width: 0 });
  }

  render() {
    return (
      <div>
        <TabsControlComponent
          crashpads={this.state.crashpads}
          selected={this.state.selected}
          selectPad={pad => this.handleCrashpadSelect(pad)}
        />
        <PhotoGridComponent />
      </div>
    );
  }
}

export default PhotosComponent;
