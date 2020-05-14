import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

const now = moment();

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: "",
    };
  }

  onDescrptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };

  onAmontChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount,
      }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };

  onDateChange = (createAt) => {
    if (createAt) {
      this.setState(() => ({ createAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Description and amount fields are mendatory!!",
      }));
    } else {
      this.setState(() => ({ error: "" }));

      this.props.actionOnSubmit({
        //here we dispatch the action (edit or add)
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescrptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmontChange}
          />
          <SingleDatePicker
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            date={this.state.createAt}
            focused={this.state.calenderFocused}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense"
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
