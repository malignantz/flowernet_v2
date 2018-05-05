import React, { Component } from "react";
import { Media, MediaOverlay, CardTitle, DialogContainer } from "react-md";

import PhotoGridComponent from "./PhotoGridComponent";
import TabsControlComponent from "./TabsControlComponent";
import "./PhotosComponent.css";

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
        <PhotoGridComponent
          images={["assets/dsf/pool400.jpg", "assets/dsf/clubhouse400.jpg"]}
          handleImageSelect={img => this.handleImageSelect(img)}
        />
        <DialogContainer
          id="simple-list-dialog"
          visible={!!this.state.image.url}
          onHide={this.hide.bind(this)}
          initialFocus="full_img"
          aria-label="full resolution"
          autopadContent={false}
        >
          <div className="imageHolder">
            <img
              src={this.state.image.url}
              alt="full screen view"
              id="full_img"
            />
          </div>
        </DialogContainer>
      </div>
    );
  }
}

export default PhotosComponent;
