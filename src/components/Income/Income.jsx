import React, { useState } from "react";
import { useAccountContext } from "../../context/accountContext";

const Income = () => {
  const AccountData = useAccountContext();
 
  const {account} = AccountData;
  return (
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">${account.income}</p>
    </div>
  );
};

export default Income;