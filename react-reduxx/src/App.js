import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>Root: {number}</h1>
      <div id="grid">
        <Left1 number={number} />
        <Right1 number={number} />
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1: {props.number}</h1>
      <Left2 number={props.number} />
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2: {props.number}</h1>
      <Left3 number={props.number} />
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h1>Left3: {props.number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1: {props.number}</h1>
      <Right2 number={props.number} />
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right1: {props.number}</h1>
      <Right3 number={props.number} />
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h1>Right3: {props.number}</h1>
      <input type="button" value="+"></input>
    </div>
  );
}
export default App;
