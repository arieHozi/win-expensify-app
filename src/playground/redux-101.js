import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

//add expense
const addExpence = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expences: {
    id: uuidv4(),
    description,
    note,
    amount,
    createAt,
  },
});

//expences Rreducer
const expensesReducerDefauktState = [];

const expenceReducer = (state = expensesReducerDefauktState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expences];
    case "REMOVE_EXPENSE":
      return state.filter((exp) => {
        return exp.id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map((exp) => {
        if (exp.id === action.id) {
          return {
            ...exp,
            ...action.updates,
          };
        } else {
          console.log(action.updates);
        }
      });
    default:
      return state;
  }
};

//filter reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

const removeExpence = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

const setStartDate = (startDate = "") => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate = "") => ({
  type: "SET_END_DATE",
  endDate,
});
// Reducers
// 1. Reducers are pure functions
// 2. Never change state or actiton

//timestemps (miliseconds)
//janunary 1 1970 (unix epoch)

//get visible expences
const getVisibileExpenses = (
  expences,
  { text, sortBy, startDate, endDate }
) => {
  return expences
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
const store = createStore(
  combineReducers({
    expences: expenceReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpences = getVisibileExpenses(state.expences, state.filters);
  console.log(visibleExpences);
});

const expence1 = store.dispatch(
  addExpence({
    description: "hello world",
    note: "best of all",
    amount: 12,
    createAt: 300,
  })
);
const expence2 = store.dispatch(
  addExpence({
    description: "goodbay world",
    note: "heat corona",
    amount: 23,
    createAt: 400,
  })
);

const expence3 = store.dispatch(
  addExpence({
    description: "world",
    note: "hate pay",
    amount: 70,
    createAt: 100,
  })
);

// store.dispatch(removeExpence({ id: expence1.expences.id }));

// store.dispatch(editExpense(expence2.expences.id, { amount: 500 }));

//store.dispatch(setTextFilter("hello world"));

store.dispatch(sortByAmount());

//store.dispatch(sortByDate());

store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());

// const demoState = {
//   expences: [
//     {
//       id: "stamid",
//       description: "this was the final payment",
//       note: "january rent",
//       amount: 343243,
//       createAt: 0,
//     },
//   ],
//   filters: [
//     {
//       text: "rent",
//       sortBy: "amount",
//       startDate: undefined,
//       endDate: undefined,
//     },
//   ],
// };

// const user = {
//   name: "arie",
//   age: 45,
// };

// console.log({
//   ...user,
//   type: "maile",
//   age: 78,
// });
