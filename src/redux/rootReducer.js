import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cakeReducer,
  iceCreamReducer,
});

export default rootReducer;
