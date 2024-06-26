// import Modal from "react-bootsrap/odal";
// import React, { useState } from "react";

// function Card(positionData, randomPositionIndex) {
//   return (
//     <Modal>
// <h1>
//   {positionData[randomPositionIndex].Name}:{" "}
//   {positionData[randomPositionIndex].year} season
// </h1>
// <p>AVG: {positionData[randomPositionIndex].BA}</p>
// <p>HR: {positionData[randomPositionIndex].HR}</p>
// <p>RBI: {positionData[randomPositionIndex].RBI}</p>
// <p>OBP: {positionData[randomPositionIndex].OBP}</p>
// <p>SLG: {positionData[randomPositionIndex].SLG}</p>
// <p>OPS: {positionData[randomPositionIndex].OPS}</p>
// <p>SB: {positionData[randomPositionIndex].SB}</p>
//     </Modal>
//   );
// }

// export default Card;

import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Card.css";

function Card({ positionData, randomPositionIndex, position, positionNames }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let player = this.props.positionData[this.props.randomPositionIndex];
  let player = positionData[randomPositionIndex];

  function showHidden(e) {
    e.target.style.backgroundColor = "white";
  }
  function givePlayerName() {
    window.alert("player is:" + player.Name);
  }

  return (
    <>
      <button className="clicker" onClick={handleShow}>
        {position}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{position}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h1>
            {" "}
            {/* {player.Name}:*/} {player.year} season
          </h1>
          <p>AVG: {player.BA}</p>
          <p>HR: {player.HR}</p>
          <p>RBI: {player.RBI}</p>
          <p>OBP: {player.OBP}</p>
          <p>SLG: {player.SLG}</p>
          <p>OPS: {player.OPS}</p>
          <p>SB: {player.SB}</p>
          <p style={{ color: "black" }}>
            League:{" "}
            <div
              className="League"
              style={{ backgroundColor: "black" }}
              onClick={showHidden}
            >
              {player.League}
            </div>
          </p>
          <p style={{ color: "black" }}>
            Division:{" "}
            <div
              className="Division"
              style={{ backgroundColor: "black" }}
              onClick={showHidden}
            >
              {player.Division}
            </div>
          </p>

          <p style={{ color: "black" }}>
            Team:{" "}
            <div
              className="Team"
              style={{ backgroundColor: "black" }}
              onClick={showHidden}
            >
              {player.Tm}
            </div>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={givePlayerName}>
            Give Up
          </Button>
          {SearchBar(positionData, positionNames, player)}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function SearchBar(positionData, positionNames, player) {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    //api to fetch search result
    console.log("search", searchTerm);
    checkPlayer(searchTerm);
  };
  function checkPlayer(val) {
    if (val.toLowerCase() == player.Name.toLowerCase()) {
      console.log("Correct Guess");
      window.alert("CORRECT");
    } else {
      console.log("Wrong");
      window.alert("INCORRECT");
    }
  }

  return (
    <div className="searchBar">
      <div className="app">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}>Submit</button>
      </div>
      <div className="dropDown">
        {positionNames &&
          positionNames
            .filter((item) => {
              const term = value.toLowerCase();
              const fullName = (item || "").toLowerCase();

              return term && fullName && fullName.startsWith(term);
            })
            .map((item) => (
              <div onClick={() => onSearch(item)} className="dropdown-row">
                {" "}
                {item}
              </div>
            ))}
      </div>
    </div>
  );
}

export default Card;
