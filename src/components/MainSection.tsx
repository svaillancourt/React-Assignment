import * as React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import SpecialButton from "./SpecialButton";
import SpecialInputSection from "./SpecialInputSection";

export interface IMainSectionProps {
  isButtonPressed: boolean;
  callbackMethod: () => void;
  callbackMethodToGoBack: () => void;
  userName: string;
  onClickUserNameSetButton: (username: string) => void;
}

export default class MainSection extends React.Component<IMainSectionProps> {
  public render() {
    const {
      isButtonPressed,
      callbackMethod,
      callbackMethodToGoBack,
      userName,
      onClickUserNameSetButton,
    } = this.props;

    let buttonPressHeader: JSX.Element;

    if (isButtonPressed) {
      buttonPressHeader = (
        <h1>Please read the information below about the class!</h1>
      );
    } else {
      buttonPressHeader = <h1>Learn more about our class!</h1>;
    }

    return (
      <Grid>
        <Grid.Row centered>{buttonPressHeader}</Grid.Row>
        <Grid.Row centered>
          {isButtonPressed ? ( // ? is asking you if its true or false
            <ProfileCard userName={userName} />
          ) : (
            <h1>
              Classmate Profile Cards will appear here when the button is
              pressed.
            </h1>
          )}
        </Grid.Row>
        <Grid.Row centered>
          <SpecialButton
            callbackMethod={callbackMethod}
            isButtonPressed={isButtonPressed}
            callbackMethodToGoBack={callbackMethodToGoBack}
          />
        </Grid.Row>
        <Grid.Row centered>
          <SpecialInputSection
            onClickUserNameSetButton={onClickUserNameSetButton}
          />
        </Grid.Row>
        <GridColumn>column 1</GridColumn>
        <GridColumn>column 2</GridColumn>
      </Grid>
    );
  }
}
