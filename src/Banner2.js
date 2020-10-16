import React from "react";
import "./Banner2.css";
import images from "./images";

const randomArtWorkBanner = images[Math.floor(Math.random() * images.length)];

function Banner2() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "${randomArtWorkBanner?.src}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__container">
        <div className="banner__contents">
          <p className="banner__title">{randomArtWorkBanner?.title}</p>
          <p className="banner__artist">{randomArtWorkBanner?.artist}</p>
          <p className="banner__museum">{randomArtWorkBanner?.museum}</p>
        </div>
      </div>
    </header>
  );
}

export default Banner2;
