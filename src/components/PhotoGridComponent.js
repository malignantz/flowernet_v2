import React, { Component } from "react";
import "./PhotoGridComponent.css";
//import LazyLoad from "react-lazy-load";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import photos from "./../lib/photoList";

class PhotoGridComponent extends Component {
  constructor(props) {
    super(props);

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

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log(this.props);
    let nameToUrl = (pad, name) => `assets/${pad}/web_${pad}_${name}_.jpg`;
    //console.log(props);
    this.photos = photos.photosList;

    let cpPhotos;
    let cpCode;
    if (this.props.pad === "Sunny Tulip") {
      cpPhotos = this.photos.ST;
      cpCode = "ST";
    } else if (this.props.pad === "Zen Orchid") {
      cpPhotos = this.photos.ZO;
      cpCode = "ZO";
    } else if (this.props.pad === "Dancing Sunflower") {
      cpPhotos = this.photos.DSF;
      cpCode = "DSF";
    } else if (this.props.pad === "Peace Lilly") {
      cpPhotos = this.photos.PL;
      cpCode = "PL";
    } else if (this.props.pad === "Wild Flower") {
      cpPhotos = this.photos.WF;
      cpCode = "WF";
    }

    this.imgs = cpPhotos
      .map(nameToUrl.bind(null, cpCode))
      .concat(this.photos.ALL.map(nameToUrl.bind(null, "ALL")))
      .map(img => Object.assign({ src: img, width: 3, height: 4 }));
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
