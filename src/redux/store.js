import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import thunk from "redux-thunk";

import {reducer as Appreducer} from "./reducer"

const rootReducer = combineReducers({
  Appreducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
