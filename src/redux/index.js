import { combineReducers, createStore } from "redux";
import notes from "./notes";

const rootReducer = combineReducers({
    note:notes

});

export const store = createStore(rootReducer);
