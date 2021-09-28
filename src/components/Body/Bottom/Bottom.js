import React from "react";

import classes from "./Bottom.module.css";

const Bottom = () => {
  return (
    <React.Fragment>
      <div className={`${classes.bottomDiv}`}>
        <div className={`${classes.bottomInnerDiv}`}>
          <p className={`${classes.heading}`}>Why Lets Gtok?</p>
          <p className={`${classes.description}`}>
            Lets Gtok aims to provide a safe space online for people to share
            and connect with genuine feelings. Users can share their feelings or
            acticities even without sharing their identities.{" "}
          </p>
          <button className={`${classes.button} btn btn-large btn-center`}>Learn More</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bottom;
