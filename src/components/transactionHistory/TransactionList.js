import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactionList }) => {
  return (
    <tbody>
      {transactionList.map(item => (
        <TransactionItem transaction={item} key ={item.id}/>
      ))}
    </tbody>
  );
};

export default TransactionList;
