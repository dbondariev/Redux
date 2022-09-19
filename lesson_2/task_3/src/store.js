import { createStore } from "redux";
import { usersReducer } from "./users.reducer";

const store = createStore(usersReducer);

export default store;
