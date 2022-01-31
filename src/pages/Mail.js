import React from 'react';
import classes from '../styles/Mail.module.css'; 



const Mail = () => {
  let url="";
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
        <div className={classes.form}>
          <input type="text" id="email" placeholder=" " autocomplete="off" className={classes.formInput}></input>
          <label for="email" className={classes.formLabel}>Username</label>
        </div>
      </div>

      <div className={classes.email}>
        <div className={classes.form}>
          <input type="text" id="email" placeholder=" " autocomplete="off" className={classes.formInput}></input>
          <label for="email" className={classes.formLabel}>Email</label>
        </div>
      </div>

      <div className={classes.password}>
        <div className={classes.form}>
          <input type="text" id="email" placeholder=" " autocomplete="off" className={classes.formInput}></input>
          <label for="email" className={classes.formLabel}>Password</label>
        </div>
      </div>
    </div>
  

  <div className={classes.loginBtn}>login</div>
  <div className={classes.lowerText}>
    <div className={classes.signupText}>
    Already a part of fam? 
    </div>
    <div className={classes.signup}>
    <a href={url}> sign up</a>
    </div>
    </div>
</div>
</div>;
};

export default Mail;
