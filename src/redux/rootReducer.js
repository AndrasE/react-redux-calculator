import { combineReducers } from "redux";
import addReducer from "./add/addReducer"
import divReducer from "./div/divReducer";

const rootReducer = combineReducers({
    add: addReducer,
    div: divReducer
})

export default rootReducer