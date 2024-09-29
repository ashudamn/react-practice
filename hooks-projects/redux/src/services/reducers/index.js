import { combineReducers } from "redux";

import cardItemsReducer from "./reducer";

export default combineReducers({cardItems:cardItemsReducer,});