import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactionList = [] }) => {
  return (
    <tbody>
      {transactionList.map(item => (
        <TransactionItem transaction={item} key={item.id} />
      ))}
    </tbody>
  );
};

TransactionList.propTypes = {
  transactionList: PropTypes.arrayOf(PropTypes.object)
};

export default TransactionList;
