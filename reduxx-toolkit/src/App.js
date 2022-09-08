import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { up } from './counterSlice';
import store from './store';

function Counter() {
  const count = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(up(2))}>+</button>
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
