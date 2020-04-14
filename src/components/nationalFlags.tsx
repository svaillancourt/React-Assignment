import React from "react";
import { Flag, Segment, Grid } from "semantic-ui-react";

const FlagExampleFlag = () => (
  <Segment>
    <Grid.Column width={4}>
      <Flag name="us" />
      <Flag name="france" />
      <Flag name="ca" />
    </Grid.Column>
  </Segment>
);

export default FlagExampleFlag;
