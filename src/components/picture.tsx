import React from "react";
import { Image, Grid } from "semantic-ui-react";
import "../styles/picture.css";

// import image1 from "../img/step.jpg"; // picture

const photo = require("../img/planets.jpg");

const ImageExampleLink = () => (
  <Grid.Column width={4} className="bg1">
    <Image
      alt="Stephane"
      style={{ width: 1000 }}
      src={String(photo)}
      as="a"
      size="large"
      href="http://nasa.gov"
      target="_blank"
    />
  </Grid.Column>
);

export default ImageExampleLink;
