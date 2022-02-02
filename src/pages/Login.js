import React from "react";
import classes from "../styles/App.module.css";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  function toMail() {
    navigate("/mail");
  }

  return (
    <div className={classes.App}>
      <div className={classes.left}>
        <img src="/assets/Social Distancing.svg" alt="login image" />
      </div>

      <div className={classes.right}>
        <div className={classes.text}>
          <div className={classes.heading}>hi, 👋</div>
          <div className={classes.subHeading}>cc-fi welcomes you</div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.btnGoogle}>
            <div className={classes.googleIcon}>
              <img src="/assets/google.svg" alt="google image" />
            </div>
            <div className={classes.googleText}>continue with google</div>
          </div>
          <div className={classes.linePartition}>
            <div className={classes.line}></div>
            <div className={classes.lineText}>or</div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.btnMail} onClick={toMail}>
            <div className={classes.mailIcon}>
              <img src="/assets/mail.svg" alt="mail image" />
            </div>
            <div className={classes.mailText}>continue with mail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
