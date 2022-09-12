import { useState } from 'react';
import { legacy_createStore } from 'redux';
import './App.css';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(state, action) {
  if (state === undefined) {
    return { number: 1 };
  }
  if (action.type === 'INCREASE') {
    return { ...state, number: state.number + 1 };
  }
  const newState = { ...state };
  return newState;
}
const store = legacy_createStore(reducer);

function App() {
  return (
    <div className="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1:</h1>
      <Left2 />
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2:</h1>
      <Left3 />
    </div>
  );
}
function Left3(props) {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3:{number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => dispatch({ type: 'INCREASE' })}
      ></input>
    </div>
  );
}
export default App;
