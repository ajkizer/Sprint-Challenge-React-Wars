import React from "react";
import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

import Character from "./Character";

function CharacterCard() {
  const [person, setPerson] = useState([]);
  const [gender, setGender] = useState([]);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        setPerson(res.data.results);
        setGender(res.data.results);
        setStats(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="card-container">
      {person.map((person, i) => {
        console.log(person);
        return <Character person={person} key={i} />;
      })}
    </div>
  );
}
export default CharacterCard;
