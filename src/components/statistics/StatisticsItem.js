import React from "react";
import styles from "./Statistics.module.css";

const StatisticsItem = ({ ...item }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
