import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import {
  Catcher,
  FirstBase,
  SecondBase,
  ThirdBase,
  ShortStop,
  LeftField,
  CenterField,
  RightField,
} from "./App";
import catcherData from "./data/positions/catcher.json";
import firstbaseData from "./data/positions/first_base.json";
import secondbaseData from "./data/positions/second_base.json";
import thirdbaseData from "./data/positions/third_base.json";
import shortstopData from "./data/positions/shortstop.json";
import leftfieldData from "./data/positions/left_field.json";
import centerfieldData from "./data/positions/center_field.json";
import rightfieldData from "./data/positions/right_field.json";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Catcher catcherData={catcherData} />
      <FirstBase firstbaseData={firstbaseData} />
      <SecondBase secondbaseData={secondbaseData} />
      <ThirdBase thirdbaseData={thirdbaseData} />
      <ShortStop shortstopData={shortstopData} />
      <LeftField leftfieldData={leftfieldData} />
      <CenterField centerfieldData={centerfieldData} />
      <RightField rightfieldData={rightfieldData} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
