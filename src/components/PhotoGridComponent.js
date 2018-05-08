import React, { Component } from "react";
import "./PhotoGridComponent.css";

class PhotoGridComponent extends Component {
  constructor(props) {
    super(props);
    this.photos = {
      ALL: [
        "gym1",
        "gym2",
        "gym3",
        "underbedbin",
        "kitchen1",
        "kitchen2",
        "oats",
        "rice",
        "ricemaker",
        "steamer"
      ],
      ST: [
        "livingroom1",
        // "livingroom2", its a fucking png
        "livingroom3",
        "kitchen1",
        "diningnook1",
        "diningnook2",
        "dishwasher",
        "entry",
        "coffee1",
        "coffee2",
        // "foodbins1", its a fucking png
        "bathroom1"
      ],
      DSF: [],
      WF: [],
      PL: []
    };
    this.state = {
      doneLoading: false
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.loadedImages = [];
  }

  handleImageLoaded(e) {
    this.loadedImages.push(e);
    console.log(this.loadedImages.length);
    const TOTAL_IMGS = Object.keys(this.photos).reduce(
      (total, cat) => total + this.photos[cat].length,
      0
    );
    console.log(`${this.loadedImages.length}/${TOTAL_IMGS}`);
    if (TOTAL_IMGS === this.loadedImages.length) {
      this.setState({ doneLoading: true });
    }
  }

  render() {
    let nameToUrl = (pad, name) => `assets/${pad}/${pad}_${name}.jpg`;

    let imgs = this.photos.ST.map(nameToUrl.bind(null, "ST")).concat(
      this.photos.ALL.map(nameToUrl.bind(null, "ALL"))
    );

    //imgs = imgs.concat(imgs.slice(0));
    //imgs = imgs.concat(imgs.slice(0));
    //console.log(imgs);

    return (
      <div
        className={`grid_container ${
          this.state.doneLoading ? "grid_container" : "grid_container invisible"
        }`}
      >
        {imgs.map((photo, i) => (
          <img
            src={photo}
            alt="crashpad"
            className="flex_img"
            onLoad={this.handleImageLoaded}
            key={"" + i + photo}
            onClick={() => {
              this.props.handleImageSelect(photo);
            }}
          />
        ))}
      </div>
    );
  }
}

export default PhotoGridComponent;
