import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenceListFilters from "./ExpenseListFilters";

const ExpenseDashboard = () => (
  <div>
    <ExpenceListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
