import React from "react";

const StatisticsItem = ({ statItem }) => {
  const { label, percentage } = statItem;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default StatisticsItem;
