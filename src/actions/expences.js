import { v4 as uuidv4 } from "uuid";

//add expense
export const addExpence = ({
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

export const removeExpence = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
