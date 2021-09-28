import React from "react";

import classes from "./Middle.module.css";
import Card from "../../Card/Card";

const Middle = () => {
  return (
    <React.Fragment>
      <div>
        <p className={`${classes.topHeading}`}>
          A community to spread positivity
        </p>
        <div className={`${classes.leftDiv}`}>
          <Card
            status="Current feeling"
            description="So excited to get my hands on my new PS5"
            author="Josh"
            time="a few seconds ago"
          />
          <Card
            status="Current feeling"
            description="So excited to get my hands on my new PS5"
            author="Josh"
            time="a few seconds ago"
          />
          <p className={`${classes.bottomText}`}>
            Share what's on your mind with the community
          </p>
          <button
            className={`${classes.bottomButton} btn btn-large btn-center`}
          >
            Share Feeling
          </button>
        </div>
        <div className={`${classes.rightDiv} col-md-6`}>
          <Card
            status="Watching"
            description="The wolf of wall street. A must watch"
            author="illy"
            time="a few seconds ago"
          />
          <Card
            status="Watching"
            description="The wolf of wall street. A must watch"
            author="illy"
            time="a few seconds ago"
          />
          <p className={`${classes.bottomText}`}>
            Share what you are doing with the community
          </p>
          <button
            className={`${classes.bottomButton} btn btn-large btn-center`}
          >
            Share Activity
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Middle;
