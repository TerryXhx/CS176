import React, { Component } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const imgStyle = {
  width: "100%",
  height: "100%",
};

export default function SimpleCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3>
          <img src="/act1.jpeg" alt="1" style={imgStyle} />
        </h3>
      </div>

      <div>
        <h3>
          <img src="/act2.jpeg" alt="2" style={imgStyle} />
        </h3>
      </div>

      <div>
        <h3>
          <img src="/act3.jpeg" alt="3" style={imgStyle} />
        </h3>
      </div>

      <div>
        <h3>
          <img src="/act4.jpeg" alt="4" style={imgStyle} />
        </h3>
      </div>

      <div>
        <h3>
          <img src="/act5.jpeg" alt="5" style={imgStyle} />
        </h3>
      </div>
    </Carousel>
  );
}
