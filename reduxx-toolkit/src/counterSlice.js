import { createSlice } from '@reduxjs/toolkit';

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
export default counterSlice;
export const { up } = counterSlice.actions;
