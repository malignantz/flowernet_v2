import React, { Component } from "react";
import { Grid, Cell, Media } from "react-md";
import Slider from "react-slick";
import "./PhotoSliderComponent.css";
import { Carousel } from "react-responsive-carousel";

//import "./../img-2.js";

// import { NavigationDrawer, Button, SVGIcon, FontIcon } from "react-md";

class photoSliderComponent extends Component {
  //  {JSON.stringify(this.props.match.params)} => { question: 1}  .
  //
  render() {
    const { images } = this.props;

    return (
      <div>
        <Grid>
          <Cell size={12}>
            <Carousel
              showArrows={true}
              infiniteLoop
              //onChange={onChange}
              //onClickItem={onClickItem}
              //onClickThumb={onClickThumb}
            >
              {images.map(imgURL => (
                <div key={imgURL}>
                  <img src={imgURL} />
                </div>
              ))}
            </Carousel>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default photoSliderComponent;
