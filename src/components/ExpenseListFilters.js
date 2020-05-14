import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenceListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChanges = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    console.log("arei", this.props);
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                value={this.props.filters.text}
                onChange={(e) => {
                  this.props.dispatch(setTextFilter(e.target.value));
                }}
              />

              <label>Filter by</label>
            </div>
            <select
              value={this.props.filters.sortBy}
              onChange={(e) => {
                const value = e.target.value;
                value === "amount"
                  ? this.props.dispatch(sortByAmount())
                  : this.props.dispatch(sortByDate());
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>

            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="start_date_input"
              endDate={this.props.filters.endDate}
              endDateId="end_date_input"
              onDatesChange={this.onDatesChanges}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenceListFilters);
