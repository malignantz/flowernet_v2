import React, { Component } from "react";
import "./PhotoGridComponent.css";

class PhotoGridComponent extends Component {
  render() {
    let photos = [
      ["clubhouse400.jpg", 400, 400],
      ["livingroom600.jpg", 600, 332],
      ["pool400.jpg", 400, 400]
    ];

    let imgs = photos.map(img => {
      const [url, width, height] = img;
      return { url: "assets/dsf/" + url, width, height };
    });
    imgs = imgs.concat(imgs.slice(0));
    imgs = imgs.concat(imgs.slice(0));
    //console.log(imgs);
    return (
      <div className="grid_container">
        {imgs.map((photo, i) => (
          <img
            src={photo.url}
            alt="crashpad"
            className="flex_img"
            key={"" + i + photo.url}
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
