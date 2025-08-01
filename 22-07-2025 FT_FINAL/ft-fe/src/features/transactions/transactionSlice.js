// create slice is function from Redux Toolkit that lets to write the Redux logic in a cleaner and an easier way.
import { createSlice } from "@reduxjs/toolkit";
// This sets the initial state of your Redux slice, and starting with an empty array of transactions, because the app has not attached any transactions yet, and the data will be added to the array.
//simply starting with an empty list and filling it as the app runs.
const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction", //name of the slice
  initialState, //starting state of the slice
  reducers: { //defining the functions that tell Redux how to update the state.,r
    setTransactions: (state, actions) => {
      state.transactions = actions.payload; //holds the data that we are setting, here the array of transactions
    },

    addTransaction: (state, actions) => {
      state.transactions.push(actions.payload);
    },
  },
});
const { reducer, actions } = transactionSlice;
export const { setTransactions, addTransaction } = actions;
export default reducer;
