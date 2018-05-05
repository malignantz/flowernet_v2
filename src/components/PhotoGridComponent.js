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
    console.log(imgs);
    return (
      <section>
        {imgs.map((photo, i) => (
          <div
            key={"" + i + photo.height}
            className="imageHolder"
            style={{
              width: `${photo.width * 200 / photo.height}px`,
              flexGrow: `${photo.width * 200 / photo.height}`
            }}
          >
            <i
              style={{
                paddingBottom: `${photo.height / photo.width * 100}%`
              }}
            />
            <img src={photo.url} alt="crashpad" />
          </div>
        ))}
      </section>
    );
  }
}

export default PhotoGridComponent;
