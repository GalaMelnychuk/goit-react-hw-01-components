import React from "react";
// import PropTypes from "prop-types";
// import styles from "../profile/Profile.css";

const FriendListItem = ({ friend}) => {
  const { isOnline, avatar, name} = friend;
  return (
    <>
      <li className="item">
        <span className={isOnline}></span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
};

export default FriendListItem;
