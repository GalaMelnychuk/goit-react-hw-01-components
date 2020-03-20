import React from "react";
import TransactionList from "./TransactionList";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.transactionHead}>
            <th className={styles.transactionHeadItem}>Type</th>
            <th className={styles.transactionHeadItem}>Amount</th>
            <th className={styles.transactionHeadItem}>Currency</th>
          </tr>
        </thead>
        <TransactionList transactionList={transactions} />
      </table>
    </>
  );
};

export default TransactionHistory;
