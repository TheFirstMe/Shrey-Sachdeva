import React, { Component, Fragment } from "react"
import { InView } from "react-intersection-observer"
import Image from "../components/Image"

const Gallery = () => (
  <div>
    {/* <Image /> */}
    {/* <div style={{ marginTop: "800px" }}> */}
    <Image alt="image_1" filename="image_2.jpg" />
    <Image alt="image_1" filename="image_1.jpg" />
    <Image alt="image_1" filename="image_3.jpg" />
    <Image alt="image_1" filename="image_4.jpg" />
  </div>
)

export default Gallery