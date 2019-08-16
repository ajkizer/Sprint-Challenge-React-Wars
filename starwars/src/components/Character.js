import React from "react";
import CharacterCard from "./CharacterCard";
import { Card, Divider } from "semantic-ui-react";

const Character = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.person.name}</Card.Header>
        <Card.Meta>
          <span className="gender">Gender: {props.person.gender}</span>
        </Card.Meta>
        <Card.Description>
          Height: {props.person.height} Mass: {props.person.mass}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Character;
