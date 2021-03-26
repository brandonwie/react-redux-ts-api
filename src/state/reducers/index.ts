import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducers";

// state of redux store is gonna be object has repositories key and it comes from repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;