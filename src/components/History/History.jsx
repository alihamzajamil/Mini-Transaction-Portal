// import React, { useState } from "react";

// import { useAccountContext } from "../../context/accountContext";


// const History = () => {
//   const AccountData = useAccountContext();
//   // console.log(AccountData);
//   const {account, history, delTransaction} = AccountData;
//   const handleDelete = (id, amount) => {
//     delTransaction(id, amount);
//   };


//   return (
//     <>
//       <h3>History</h3>
//       {history.map((transaction) => {
//         return(
//           <ul id="list" className="list" key={transaction.id}>
//           </ul>
//         )
//       })}
//     </>
//   );
// };

// export default History;

import React, { useState } from "react";

import { useAccountContext } from "../../context/accountContext";


const History = () => {
  const AccountData = useAccountContext();
  // console.log(AccountData);
  const {account, history, delTransaction} = AccountData;
  const handleDelete = (id, amount) => {
    delTransaction(id, amount);
  };


  return (
    <>
      <h3>History</h3>
      {history.map((transaction) => {
        return(
          <ul id="list" className="list" key={transaction.id}>
          <li className="minus" key={transaction.id}>
            {transaction.transaction_title} <span>${transaction.transaction_amount}</span>
            <button className="delete-btn" onClick={() => handleDelete(transaction.id,transaction.transaction_amount)}>x</button>
          </li>
          </ul>
        )
      })}
    </>
  );
};

export default History;