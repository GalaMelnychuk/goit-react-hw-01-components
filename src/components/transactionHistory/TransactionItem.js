import React from "react";

const TransactionItem = ({transaction}) => {
    const {type, amount, currency} = transaction;
  return (
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
  );
};

export default TransactionItem;