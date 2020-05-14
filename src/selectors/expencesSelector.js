import moment from "moment";

export default (expencesState, filterState) => {
  return expencesState
    .filter((exp) => {
      const createAtMoment = moment(exp.createAt);

      const startDateMatch = filterState.startDate
        ? filterState.startDate.isSameOrBefore(createAtMoment, "day")
        : true;
      const endDateMatch = filterState.endDate
        ? filterState.endDate.isSameOrAfter(createAtMoment, "day")
        : true;
      // typeof endDate !== "number" || expense.createAt <= endDate;
      const textMatch = exp.description
        .toLowerCase()
        .includes(filterState.text.toLowerCase());
      console.log("moment", startDateMatch, endDateMatch, textMatch);
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (filterState.sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1;
      }
      if (filterState.sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
