import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import catcherData from "./data/positions/catcher.json";
import firstbaseData from "./data/positions/first_base.json";
import secondbaseData from "./data/positions/second_base.json";
import thirdbaseData from "./data/positions/third_base.json";
import shortstopData from "./data/positions/shortstop.json";
import leftfieldData from "./data/positions/left_field.json";
import centerfieldData from "./data/positions/center_field.json";
import rightfieldData from "./data/positions/right_field.json";

import catcherNames from "./data/positions/names/catcher_names.json";
import firstbaseNames from "./data/positions/names/first_base_names.json";
import secondbaseNames from "./data/positions/names/second_base_names.json";
import thirdbaseNames from "./data/positions/names/third_base_names.json";
import shortstopNames from "./data/positions/names/shortstop_names.json";
import leftfieldNames from "./data/positions/names/left_field_names.json";
import centerfieldNames from "./data/positions/names/center_field_names.json";
import rightfieldNames from "./data/positions/names/right_field_names.json";

import Modal from "react-modal";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./Components/Card.js";

// setInterval(newPlayers, 1000 * 60 * 60 * 24);

let randomCatcherIndex = randomNumber(catcherData);
let randomFirstBaseIndex = randomNumber(firstbaseData);
let randomSecondBaseIndex = randomNumber(secondbaseData);
let randomThirdBaseIndex = randomNumber(thirdbaseData);
let randomShortStopIndex = randomNumber(shortstopData);
let randomLeftFieldIndex = randomNumber(leftfieldData);
let randomCenterFieldIndex = randomNumber(centerfieldData);
let randomRightLeftIndex = randomNumber(rightfieldData);

function Catcher({ catcherData }) {
  return (
    <div className="App">
      <Card
        position="Catcher"
        positionData={catcherData}
        randomPositionIndex={randomCatcherIndex}
        positionNames={catcherNames}
      />
    </div>
  );
}

function FirstBase({ firstbaseData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="First Base"
        positionData={firstbaseData}
        randomPositionIndex={randomFirstBaseIndex}
        positionNames={firstbaseNames}
      />
    </div>
  );
}
function SecondBase({ secondbaseData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="Second Base"
        positionData={secondbaseData}
        randomPositionIndex={randomSecondBaseIndex}
        positionNames={secondbaseNames}
      />
    </div>
  );
}

function ThirdBase({ thirdbaseData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="Third Base"
        positionData={thirdbaseData}
        randomPositionIndex={randomThirdBaseIndex}
        positionNames={thirdbaseNames}
      />
    </div>
  );
}

function ShortStop({ shortstopData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="Shortstop"
        positionData={shortstopData}
        randomPositionIndex={randomShortStopIndex}
        positionNames={shortstopNames}
      />
    </div>
  );
}

function LeftField({ leftfieldData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="Left Field"
        positionData={leftfieldData}
        randomPositionIndex={randomLeftFieldIndex}
        positionNames={leftfieldNames}
      />
    </div>
  );
}

function CenterField({ centerfieldData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="Center Field"
        positionData={centerfieldData}
        randomPositionIndex={randomCenterFieldIndex}
        positionNames={centerfieldNames}
      />
    </div>
  );
}

function RightField({ rightfieldData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Card
        position="Right Field"
        positionData={rightfieldData}
        randomPositionIndex={randomRightLeftIndex}
        positionNames={rightfieldNames}
      />
    </div>
  );
}

function randomNumber(positionData) {
  return Math.floor(Math.random() * positionData.length);
}
export {
  Catcher,
  FirstBase,
  SecondBase,
  ThirdBase,
  ShortStop,
  LeftField,
  CenterField,
  RightField,
};

/*
At 12:00 A.M. EST, come up with 8 new random players, 1 per position

Catcher: random number between 0 and length(catcher.json)
First base: random number between 0 and length(first_base.json)

etc...


Have each position be clickable and a player card comes up

shows:

Team,
Year,
Position,
Handedness,
AVG,
HR,
RBI,
OBP,
SLG,
OPS,
SB


Search bar comes up and user looks up player as guess.
If they are right, 

*/
