import React from "react";
import { List } from "semantic-ui-react";

const ListExampleDivided = () => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header
          as="a"
          href="https://github.com/svaillancourt/React-Assignment"
        >
          svaillancourt/React-Assignment
        </List.Header>
        <List.Description as="a">Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="facebook" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header
          as="a"
          href="https://github.com/svaillancourt/React-Assignment"
        >
          svaillancourt/React-Assignment
        </List.Header>
        <List.Description as="a">Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="twitter" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as="a">Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleDivided;
