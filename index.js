import Redux from './node_modules/@reduxjs';

const reducer = (state, action) => {
  if (state === undefined) return { color: yellow };
};
const store = Redux.legacy_createStore(reducer);
console.log(store.getState());
console.log(1);
