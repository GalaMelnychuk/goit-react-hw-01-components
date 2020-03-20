import React from "react";
import styles from "./Statistics.module.css";

const StatisticsItem = ({ statItem }) => {
  const { label, percentage } = statItem;
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
