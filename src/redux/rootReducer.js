import { combineReducers } from "redux";
import addReducer from "./add/addReducer"

const rootReducer = combineReducers({
    addNum: addReducer
})

export default rootReducer