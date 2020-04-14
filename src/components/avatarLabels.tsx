import React from "react";
import { Icon, Label } from "semantic-ui-react";

const stephane = require("../img/step.jpg");
const karan = require("../img/karan.jpg");
const marvin = require("../img/Marvin.png");
const josh = require("../img/josh.jpg");
const andrew = require("../img/andrew.png");

const LabelExampleIcon = () => (
  <div>
    <Label image>
      <img alt="Stephane" style={{ width: 300 }} src={String(stephane)}></img>
      Stephane
      <Icon name="delete" />
    </Label>
    <Label image>
      <img alt="karan" style={{ width: 300 }} src={String(karan)}></img>
      Karan
      <Icon name="delete" />
    </Label>
    <Label image>
      <img alt="marvin" style={{ width: 300 }} src={String(marvin)}></img>
      Marvin
      <Icon name="delete" />
    </Label>
    <Label image>
      <img alt="josh" style={{ width: 300 }} src={String(josh)}></img>
      Josh
      <Icon name="delete" />
    </Label>
    <Label image>
      <img alt="andrew" style={{ width: 300 }} src={String(andrew)}></img>
      Andrew
      <Icon name="delete" />
    </Label>
  </div>
);

export default LabelExampleIcon;
