import React from "react";

import classes from "./Footer.module.css";

const Footer= () => {
    return (
        <React.Fragment>
            <div className={`${classes.footer}`}>
                <p className={`${classes.contact}`}>Contact Us</p>
                <form className={`${classes.form}`}>
                    <input className={`form-control ${classes.input}`} type="text" placeholder="Name" />
                    <input className={`form-control ${classes.input}`} type="text" placeholder="Email" />
                    <textarea className={`form-control ${classes.input}`} row="5" col="80" placeholder="Message" />
                    <button className={`btn btn-large btn-center ${classes.formButton}`}>Send message</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Footer;