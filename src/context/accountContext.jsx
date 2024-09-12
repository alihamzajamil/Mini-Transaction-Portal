import { createContext, useContext, useReducer } from "react";

import accountReducer from "./accountReducer";


const initialAccountState = {
  account: {
    id: Date.now(),
    balance: 0.0,
    income: 0.0,
    expense: 0.0,
  },
  
  history: [
    {
      id: Date.now(),
      transaction_title: 0,
      transaction_amount: 0,
    }
  ]
};

//Create Account context
const AccountContext = createContext(initialAccountState);

//Use the Context
export const useAccountContext = () => useContext(AccountContext);

// Create a Provider for the Account Context
export const AccountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialAccountState);

  // Actions for Account

  // Delete Existing Transaction
  function delTransaction(id, amount) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: {id,amount}
    });
  }

  // Add New Transaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

  }

  return (
    <AccountContext.Provider
      value={{
        account: state.account,
        history: state.history,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
