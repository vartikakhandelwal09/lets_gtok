import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes.cardDiv}`}>
        <div className={`${classes.statusDiv}`}>
          <p className={`${classes.statusPara}`}>{props.status}</p>
        </div>
        <p className={`${classes.description}`}>{props.description}</p>
        <p className={`${classes.author}`}>@{props.author}</p>
        <p className={`${classes.time}`}>{props.time}</p>
      </div>
    </React.Fragment>
  );
};

export default Card;
