import React from 'react';
import classes from '../styles/Mail.module.css'; 



const Mail = () => {
  return <div className={classes.App}>
  <div className={classes.left}>
    <img src="/assets/leftmail.svg" alt="Email Image" />
  </div>

  <div className={classes.right}>
    <div className={classes.text}>
      <div className={classes.heading}>login</div>
      <div className={classes.subHeading}>cc-fi welcomes you</div>
    </div>
    <div className={classes.inputFields}>
      <div className={classes.userName}>
        <div className={classes.inputText}>Username</div>
        <div className={classes.Rectangle}></div>
        <input placeholder="Enter you username"></input>
      </div>
    </div>
  </div>

  <div className={classes.loginBtn}>login</div>
  <div className={classes.signupText}>Already a part of fam? Sign up</div>
</div>;
};

export default Mail;
