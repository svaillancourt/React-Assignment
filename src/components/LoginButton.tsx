import React, { Component } from "react";
import { Button, Grid, Header, Segment, Portal } from "semantic-ui-react";

export default class PortalExampleControlled extends Component {
  state = { open: false };

  handleClose = () => this.setState({ open: false });
  handleOpen = () => this.setState({ open: true });

  handleEmailChange = (e: any) => {
    this.setState({ email: e.target.value });
  };
  
  handlePasswordChange = (e: any) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { open } = this.state;

    return (
      <Grid columns={2}>
        <Grid.Column>
          <form>
            <h3>Email </h3>
            <input type="email" name="" id="" />
            <h3>Password </h3>
            <input type="password" name="" id="" />
          </form>
          <Button
            content="Login"
            disabled={open}
            primary
            onClick={this.handleOpen}
          />

          <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: "40%",
                position: "fixed",
                top: "50%",
                zIndex: 1000,
              }}
            >
              <Header> This isn't setup yet!</Header>
              <p>We're working on finding a solution. Sorry!</p>

              <Button content="Back" secondary onClick={this.handleClose} />
            </Segment>
          </Portal>
        </Grid.Column>
      </Grid>
    );
  }
}
