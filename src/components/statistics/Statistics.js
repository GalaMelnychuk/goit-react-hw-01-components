import React from "react";
import StatisticsItem from "./StatisticsItem";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title = '', stats }) => {
  return (
    <>
      <section className={styles.statistics}>
        {(title && <h2 className={styles.title}>{title}</h2>)}
        <ul className={styles.statList}>
          {stats.map(item => (
            <StatisticsItem {...item} key = {item.id}/>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  ).isRequired
};


export default Statistics;
