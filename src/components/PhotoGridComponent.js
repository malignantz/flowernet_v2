import React, { Component } from "react";
import "./PhotoGridComponent.css";
import { Media } from "react-md";

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
          <Media aspectRatio="1-1" key={"" + i + photo.url}>
            <img
              src={photo.url}
              alt="crashpad"
              className="flex_img"
              onClick={() => {
                this.props.handleImageSelect(photo);
              }}
            />
          </Media>
        ))}
      </div>
    );
  }
}

export default PhotoGridComponent;
