import React from "react";
import TransactionList from "./TransactionList";

const TransactionHistory = ({transactions}) => {
  return (
    <>
      <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
        <TransactionList transactionList = {transactions}/>
      </table>
    </>
  );
};

export default TransactionHistory;
