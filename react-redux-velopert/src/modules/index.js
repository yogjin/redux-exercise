import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

/**
 * 루트 리듀서 만들기
 * 여러개의 리듀서를 합쳐서 사용할 수 있다.
 */
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
