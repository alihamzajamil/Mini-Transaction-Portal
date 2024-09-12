import React, { useState } from "react";
import { useAccountContext } from "../../context/accountContext";

const Expense = () => {
  const AccountData = useAccountContext();
  
  const {account} = AccountData;
  return (
    <>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">{account.expense}</p>
      </div>
    </>
  );
};

export default Expense;