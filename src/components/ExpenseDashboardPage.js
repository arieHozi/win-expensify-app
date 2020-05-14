import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenceListFilters from "./ExpenseListFilters";
import ExpensesSummery from './ExpensesSummery'

const ExpenseDashboard = () => (
  <div>
    <ExpensesSummery />
    <ExpenceListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
