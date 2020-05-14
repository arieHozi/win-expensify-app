import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";

import { editExpense, removeExpence } from "../actions/expences";

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        actionOnSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpence(props.expense.id)),
            props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expences.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};
export default connect(mapStateToProps)(EditExpensePage);
