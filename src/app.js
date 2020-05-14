import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibileExpenses from "./selectors/expencesSelector";
import { addExpence, removeExpense, editExpense } from "./actions/expences";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filters";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
