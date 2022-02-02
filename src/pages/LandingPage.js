import React from "react";
import classes from "../styles/LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function toLandingPage() {
    navigate("/landingPage");
  }

  return (
    <div className={classes.App}>
      <div className={classes.nav}></div>
      <div className={classes.heroSection}>
        <div className={classes.left}>
          <div className={classes.heading}>
            Learn something new and win exiciting prizes
          </div>
          <div className={classes.heading2}>Everyday</div>
          <div className={classes.subHeading}>
            Stay updated with all the upcoming events at MITS. Also checkout our
            previous events for some amazing content!
          </div>
          <div className={classes.exploreBtn}>Explore</div>
        </div>
        <div className={classes.right}>
          <div className={classes.heroImage}>
            <img src="/assets/Video Call.svg" alt="Video Call" />
          </div>
        </div>
      </div>

      <div className={classes.eventSection}>
        <div className={classes.heading}>Our Events</div>
        <div className={classes.eventImage}>
          <img src="" alt="" />
        </div>
        <div className={classes.evenntCard}>
          <div className={classes.registerBtn}>Register</div>
          <div className={classes.eventCards}>
            <div className={classes.eventHeading}>Heading</div>
            <div className={classes.eventDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              accumsan nulla quam aliquam blandit in sed aliquam eget.
            </div>
            <div className={classes.time}>10 September 2021 | 7:00 PM</div>
          </div>
        </div>
      </div>

      <section className={classes.footer}>
        <div className={classes.content}>
          <div className={classes.query}>
            <div className={classes.heading}>Still have a Query?</div>
            <div className={classes.queryContent}>We have got your back.</div>
            <div className={classes.queryContent2}>
              Write your query to us, we would be more than happy to reply.
            </div>
          </div>
          <div className={classes.queryBox}>
            <div className={classes.form}>
              <input
                type="text"
                id="email"
                placeholder=" "
                autocomplete="off"
                className={classes.formInput}
              ></input>
              <label for="email" className={classes.formLabel}>
                {" "}
                Write your query here!
              </label>
            </div>
            <div className={classes.queryBtn}>send to us</div>
          </div>

          <div className={classes.queryImage}>
            <img src="/assets/mailbox.svg" alt="Mail box Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
