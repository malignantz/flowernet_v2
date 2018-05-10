import React, { Component } from "react";
import "./PhotoGridComponent.css";
//import LazyLoad from "react-lazy-load";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

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
    let nameToUrl = (pad, name) => `assets/${pad}/web_${pad}_${name}_.jpg`;
    this.imgs = this.photos.ST.map(nameToUrl.bind(null, "ST"))
      .concat(this.photos.ALL.map(nameToUrl.bind(null, "ALL")))
      .map(img => Object.assign({ src: img, width: 1, height: 1 }));
    this.state = { currentImage: 0, lightboxIsOpen: false };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    console.log(this.imgs);
    return (
      <div>
        <Gallery photos={this.imgs} onClick={this.openLightbox} />
        <Lightbox
          images={this.imgs}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default PhotoGridComponent;
