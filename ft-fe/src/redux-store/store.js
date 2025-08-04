import { configureStore } from "@reduxjs/toolkit";// this 
import transactionReducer from "../features/transactions/transactionSlice.js";

export default configureStore({
  reducer: {
    transactionStore: transactionReducer,
  },
});
