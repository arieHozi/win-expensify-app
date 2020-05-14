import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
var numeral = require("numeral");

numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ",",
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t",
  },
  ordinal: function (number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "₪",
  },
});

// switch between locales
numeral.locale("fr");

const ExpenseListItem = (expense) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">
        <Link to={`/edit/${expense.id}`}>
          <h3>{expense.description}</h3>
        </Link>
        <p>Amount - {numeral(expense.amount / 100).format("$0,0.00")}</p>
        <p>Date created : {moment(expense.createAt).format("MM Do, cYYYY")}</p>
      </span>
    </div>
  </div>
);

export default ExpenseListItem;
