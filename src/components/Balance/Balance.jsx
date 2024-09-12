import React from "react";
import { useAccountContext } from "../../context/accountContext";

const Balance = () => {
  const AccountData = useAccountContext();
 
  const {account} = AccountData;

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${account.balance}</h1>
    </>
  );
};

export default Balance;