import { combineReducers } from "redux"

const hello = (state = null) => state
const cars = (state = []) => state
const user = (state = null) => state

export default combineReducers({hello, cars, user})