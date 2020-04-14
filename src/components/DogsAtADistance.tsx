import React from "react";
import { Item, Icon } from "semantic-ui-react";

const dog1 = require("../img/dogs/dog1.jpg");
const dog2 = require("../img/dogs/dog2.jpg");
const dog3 = require("../img/dogs/dog3.jpg");

const description = [
  "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their",
  "tiny stature, and even others for their massive size.",
].join(" ");

const DogsToAdopt = () => (
  <Item.Group>
    <Item>
      <Item.Image size="small" src={dog1} />
      <Item.Content>
        <Item.Header as="a">Cute Dog</Item.Header>
        <Item.Description>
          <p>{description}</p>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </Item.Description>
        <Item.Extra>
          <Icon color="purple" name="plus" /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="small" src={dog2} />

      <Item.Content>
        <Item.Header as="a">Pandemic Dog</Item.Header>
        <Item.Description content={description} />
        <Item.Extra>
          <Icon color="green" name="check" /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="small" src={String(dog3)} />
      <Item.Content>
        <Item.Header as="a">Shy Dog</Item.Header>
        <Item.Description content={description} />
        <Item.Extra>
          <Icon color="orange" name="minus" /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default DogsToAdopt;
