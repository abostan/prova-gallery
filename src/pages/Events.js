import React from "react";
import { Link } from "@reach/router";
import Page from "../components/Page";
import "../styles.css";

const flyer = require("../images/West+Main.jpg");

const Events = (props) => (
  <Page {...props}>
    <div>
      <h1>Events</h1>
      <div className="event">
        <img src={flyer} alt="" />
        <div>
          <p>
            <Link to="/">
              <span className="gestures">Gestures of Love</span>
            </Link>{" "}
            is <Link to="/about">very personal to me</Link> and I'm absolutely
            thrilled that the complete series will be showing in Littleton,
            Colorado for the entire month of April. Thanks to{" "}
            <a
              href="https://www.westandmainhomes.com/agent/joymcentaffer/"
              alt=""
            >
              Joy McEntaffer
            </a>{" "}
            and all the great folks at{" "}
            <a href="https://www.westandmainhomes.com/littleton.php">
              West&nbsp;+&nbsp;Main
            </a>{" "}
            for featuring my work.
          </p>
          <p>
            The opening will coincide with the{" "}
            <a href="https://www.westandmain.co/blog/featured-at-west-main-littleton-kevin-cincotta">
              First Friday Artwalk on April 1st from 6-9 pm.
            </a>
            I'll be there with{" "}
            <Link to="/shop">
              originals and signed prints in multiple sizes
            </Link>{" "}
            for every piece in this series.
          </p>
          <p>
            The address is:{" "}
            <a href="https://www.google.com/maps/place/West+%2B+Main+Homes/@39.6135252,-105.0204676,17z/data=!3m1!4b1!4m5!3m4!1s0x876c81e7a89e2c75:0x8fb0d1f9e9a74438!8m2!3d39.6135252!4d-105.0182789">
              2590&nbsp;Main&nbsp;St,&nbsp;Littleton,&nbsp;CO&nbsp;80120
            </a>
          </p>
          <a
            className="rsvp"
            href="https://www.facebook.com/events/218053670520617/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A486990346301273%7D%7D%5D%22%7D"
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
  </Page>
);

export default Events;
