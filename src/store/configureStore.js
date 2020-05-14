import { createStore, combineReducers } from "redux";
import expenceReducer from "../reducers/expenseReducer";
import filterReducer from "../reducers/filterReducer";

export default () => {
  const store = createStore(
    combineReducers({
      expences: expenceReducer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
