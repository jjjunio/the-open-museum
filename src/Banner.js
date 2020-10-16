import React from "react";
import "./Banner.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import images from "./images";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__image">
          <Carousel interval="10000" navButtonsAlwaysInvisible="true">
            {images.map((image, i) => (
              <Image key={i} image={image} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function Image({ image }) {
  return (
    <Paper>
      <img
        src={image.src}
        description={image.description}
        alt="{image.artist_title}{image.description}"
      />
    </Paper>
  );
}

export default Banner;
