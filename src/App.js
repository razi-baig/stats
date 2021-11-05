import { useState } from "react";
import data from "./data";
import "./app.css";

export default function App(props) {
  const [selected, setselected] = useState("Select Friut");
  const [pic, setPic] = useState();
  console.log(data);

  return (
    <div className="App">
      <button
        onClick={() => {
          setselected(data[0].name);
          setPic(data[0].imgSrc);
        }}
        className="btn"
      >
        Apple
      </button>{" "}
      &nbsp;&nbsp; &nbsp;
      <button
        onClick={() => {
          setselected(data[1].name);
          setPic(data[1].imgSrc);
        }}
        className="btn"
      >
        Banana
      </button>{" "}
      &nbsp;&nbsp; &nbsp;
      <button
        onClick={() => {
          setselected(data[2].name);
          setPic(data[2].imgSrc);
        }}
        className="btn"
      >
        Mango
      </button>
      &nbsp;&nbsp; &nbsp;
      <button
        onClick={() => {
          setselected(data[3].name);
          setPic(data[3].imgSrc);
        }}
        className="btn"
      >
        Carrot
      </button>
      <br /> <br /> <br />
      <div className="text">
        {" "}
        Friut Name &nbsp;g: &nbsp;&nbsp;{selected}
      </div>{" "}
      <br /> <br />
      <div className="img">
        <img src={pic} alt=" " />
      </div>
    </div>
  );
}
