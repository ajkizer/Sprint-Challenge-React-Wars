import React from "react";
import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Card } from "semantic-ui-react";

function CharacterCard() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const [birth, setBirth] = useState("");

  axios.get("https://swapi.co/api/people/1/").then(response => {
    const info = response.data;
    setName(info.name);
    setGender(info.gender);
    setHeight(info.height);
    setMass(info.mass);
    setBirth(info["birth_year"]);
  });

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Gender: {gender}</span>
        </Card.Meta>
        <Card.Description className="explanation">
          Mass: {mass}
        </Card.Description>
        <Card.Description>Height: {height}</Card.Description>
        <Card.Description>Birth Year: {birth}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
