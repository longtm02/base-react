import {combineReducers} from 'redux';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  dataReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
