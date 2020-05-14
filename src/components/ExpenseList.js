import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import expencesSelector from "../selectors/expencesSelector";

const ExpensList = (props) => (
  <div className="container">
    <h1>Expense List</h1>
    {props.expences.map((expense) => {
      return <ExpenseListItem {...expense} key={expense.id} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expences: expencesSelector(state.expences, state.filters),
  };
};
export default connect(mapStateToProps)(ExpensList);
