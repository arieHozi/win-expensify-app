import { removeExpence } from "../expences";

test("should setup remove expense action object", () => {
  const action = removeExpence({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});
