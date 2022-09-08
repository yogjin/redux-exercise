import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // slice 이름
  initialState: { number: 0 }, // state 초기화
  reducers: {
    // 리듀서
    up: (state, action) => {
      state.number = state.number + action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function Counter() {
  const count = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(counterSlice.actions.up(2))}>+</button>
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
