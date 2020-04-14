import * as React from "react";
import { IUserProfile } from "../models/userProfile";
// import { Fragment } from 'react';
import MiniProfile from "./MiniProfile";
import { Grid } from "semantic-ui-react";

export interface ISectionWithLoopRenderingProps {}

interface ISectionWithLoopRenderingState {
  userProfiles: IUserProfile[];
}

export default class SectionWithLoopRendering extends React.Component<
  ISectionWithLoopRenderingProps,
  ISectionWithLoopRenderingState
> {
  constructor(props: ISectionWithLoopRenderingProps) {
    super(props);
    this.state = {
      userProfiles: [
        {
          id: 1,
          name: "Stephane",
          nickname: "1st of the University of Alberta group",
          education: "Nait - Telecommunications Engineering Technology Diploma",
          sport: "Basketball",
          bloodtype: "O+",
          email: "vallanco@ualberta.ca",
          mobile: 7805553332,
        },
        {
          id: 2,
          name: "Stephanie",
          nickname: "Waiting to hear back from her application",
          education: "N/A",
          sport: "Badminton",
          bloodtype: "A-",
          email: "butterfliesAreCool@hotmail.ca",
          mobile: 5871113355,
        },
        {
          id: 3,
          name: "Stefawn",
          nickname: "2nd of the SAIT group",
          education: "Bachelor of science",
          sport: "Curling",
          bloodtype: "B+",
          email: "ScienceIsAwesome@msn.com",
          mobile: 7809522555,
        },
      ],
    };
  }

  public render() {
    const { userProfiles } = this.state;
    return (
      <Grid>
        {userProfiles.map((individualProfile) => (
          <Grid.Row centered>
            <MiniProfile user={individualProfile} />
          </Grid.Row>
        ))}
        ;
      </Grid>
    );
  }
}
