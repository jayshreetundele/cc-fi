import React from 'react';
import classes from "../styles/EventsPage.module.css";
import { useNavigate } from "react-router-dom";


const EventsPage = () => {

    const navigate = useNavigate();
    function toLandingPage() {
        navigate("/landingPage");
    }


  return <div className={classes.App}>
      <div className={classes.nav}>MITS, Gwalior Events Portal</div>
      <div className={classes.headingnback}>
          <div className={classes.heading}>
              All MITS Events
          </div>
          <div className={classes.back} onClick={toLandingPage}>
                go back
          </div>
      </div>
     
      <div className={classes.clubsName}>
          <div className={classes.clubAsimov}>All</div>

         <div className={classes.clubAsimov}>ASIMOV Club</div>
          <div className={classes.clubAsimov}>ASIMOV Club</div>

          <div className={classes.clubAsimov}>ASIMOV Club</div>

          <div className={classes.clubAsimov}>ASIMOV Club</div>

          <div className={classes.clubAsimov}>ASIMOV Club</div>

          <div className={classes.clubAsimov}>ASIMOV Club</div>

      </div>





  </div>;
};

export default EventsPage;
