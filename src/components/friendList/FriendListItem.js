import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <>
      <li className={styles.item}>
      {isOnline ? (
        <span className={[styles.active]}></span>
      ) : (
        <span className={[styles.nonActive]}></span>
      )}

        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
  })
};

export default FriendListItem;
