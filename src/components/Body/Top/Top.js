import React from "react";

import classes from "./Top.module.css";

const Top = () => {
    return (
        <React.Fragment>
            <div className={`${classes.topDiv}`}>
                <div className={`${classes.topCenterDiv}`}>
                    <div className={`${classes.insideDiv}`}>
                        <p className={`${classes.divText}`}><span style={{color: "purple"}}>Share feelings</span> without being judged</p>
                    </div>
                    <button className={`${classes.divButton} btn btn-center btn-primary btn-large`}>Share Feelings</button>
                </div>
                <p className={`${classes.bottomText}`}>Join.Share.Feel Relief</p>
            </div>
        </React.Fragment>
    )
}

export default Top;