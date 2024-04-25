import { combineReducers, createStore } from "redux";
import notes from "./notes";
import check from "./check";

const rootReducer = combineReducers({
    note:notes,
    listCheck:check
});

export const store = createStore(rootReducer);
