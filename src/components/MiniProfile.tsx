import * as React from "react";
import { IUserProfile } from "../models/userProfile";
import { Grid } from "semantic-ui-react";
import "../styles/picture.css";

export interface IMiniProfileProps {
  user: IUserProfile;
}

export default class MiniProfile extends React.Component<IMiniProfileProps> {
  public render() {
    const {
      id,
      name,
      nickname,
      education,
      sport,
      bloodtype,
      email,
      mobile,
    } = this.props.user;

    return (
      <Grid>
        <Grid.Column width={15} di className="profile">
          <h1>ID #: {id}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Name: {name}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Nickname: {nickname}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Education: {education}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Favorite Sport: {sport}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Blood type: {bloodtype}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Email: {email}</h1>
        </Grid.Column>
        <Grid.Column width={15} di className="profile">
          <h1>Phone Number: {mobile}</h1>
          <span> </span>
        </Grid.Column>
      </Grid>
    );
  }
}
