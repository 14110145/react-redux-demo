import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cakeReducer,
  iceCreamReducer,
  userReducer,
});

export default rootReducer;
