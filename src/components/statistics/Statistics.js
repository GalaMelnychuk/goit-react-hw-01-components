import React from "react";
import StatisticsItem from "./StatisticsItem";
// import PropTypes from "prop-types";
// import styles from "../profile/Profile.css";

const Statistics = ({title, stats }) => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map(item => (
            <StatisticsItem statItem={item} key={item.id}/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
