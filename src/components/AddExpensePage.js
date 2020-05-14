import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpence } from "../actions/expences";

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      actionOnSubmit={(expense) => {
        props.dispatch(addExpence(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
