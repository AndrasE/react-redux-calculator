import { combineReducers } from "redux";
import addReducer from "./add/addReducer"

const rootReducer = combineReducers({
    add: addReducer
})

export default rootReducer