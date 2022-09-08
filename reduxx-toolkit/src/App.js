import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(state, action) {
  if (action.type === 'up') {
    return { ...state, number: state.number + action.step };
  }
  const newState = { ...state };
  return newState;
}
const initialState = { number: 0 };
const store = createStore(reducer, initialState);

function Counter() {
  const count = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'up', step: 2 })}>+</button>
    </>
  );
}
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
