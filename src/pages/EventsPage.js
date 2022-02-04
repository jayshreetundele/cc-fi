import React from "react";
import classes from "../styles/EventsPage.module.css";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();
  function toLandingPage() {
    navigate("/landingPage");
  }

  return (
    <div className={classes.App}>
      <div className={classes.nav}>
        MITS, Gwalior Events Portal
        <div className={classes.logout}>
          <a href="">
            <div className={classes.logoutText}>logout</div>
          </a>
        </div>
      </div>
      <div className={classes.headingnback}>
        <div className={classes.heading}>All MITS Events</div>
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
      <div className={classes.eventSection}>
        <div className={classes.eventCards}>
          <div className={classes.eventCard}>
            <div className={classes.eventImage}>
              <img src="" alt="" />
            </div>
            <div className={classes.registerBtn}>Register</div>
            <div className={classes.eventHeading}>Heading</div>
            <div className={classes.eventDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              accumsan nulla quam aliquam blandit in sed aliquam eget.
            </div>
            <div className={classes.time}>10 September 2021 | 7:00 PM</div>
          </div>

          <div className={classes.eventCard}>
            <div className={classes.eventImage}>
              <img src="" alt="" />
            </div>
            <div className={classes.registerBtn}>Register</div>
            <div className={classes.eventHeading}>Heading</div>
            <div className={classes.eventDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              accumsan nulla quam aliquam blandit in sed aliquam eget.
            </div>
            <div className={classes.time}>10 September 2021 | 7:00 PM</div>
          </div>

          <div className={classes.eventCard}>
            <div className={classes.eventImage}>
              <img src="" alt="" />
            </div>
            <div className={classes.registerBtn}>Register</div>
            <div className={classes.eventHeading}>Heading</div>
            <div className={classes.eventDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              accumsan nulla quam aliquam blandit in sed aliquam eget.
            </div>
            <div className={classes.time}>10 September 2021 | 7:00 PM</div>
          </div>
        </div>
        <div className={classes.space}></div>
      </div>

      {/* footer starts */}

      <section className={classes.footer}>
        <div className={classes.content}>
          <div className={classes.query}>
            <div className={classes.heading}>Still have a Query?</div>
            <div className={classes.queryContent}>We have got your back.</div>
            <div className={classes.queryContent2}>
              Write your query to us, we would be more
            </div>
            <div className={classes.queryContent3}>than happy to reply.</div>
          </div>
          <div className={classes.queryBox}>
            <div className={classes.form}>
              <input
                type="text"
                id="email"
                placeholder="  Write your query here! "
                autocomplete="off"
                className={classes.formInput}
              ></input>
            </div>
            <div className={classes.queryBtn}>send to us</div>
          </div>

          <div className={classes.queryImage}>
            <img src="/assets/mailbox.svg" alt="Mail box Image" />
          </div>
        </div>
        <div className={classes.owner}>
          <div className={classes.dnd}>Designed and Developed by</div>
          <div className={classes.aditi}>
            <a target="_blank" href=" ">
              Aditi
            </a>
          </div>
          <div className={classes.and}>and</div>
          <div className={classes.jayshree}>
            <a target="_blank" href=" ">
              Jayshree
            </a>
          </div>
        </div>
      </section>
      {/* Footer ends */}
    </div>
  );
};

export default EventsPage;
