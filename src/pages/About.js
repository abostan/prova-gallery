import React from "react";
import { Link } from "@reach/router";
import Page from "../components/Page";
import "../styles.css";

const About = (props) => (
  <Page {...props}>
    <div>
      <h1>About</h1>
      <p>
        <Link to="/">
          <span className="gestures">Gestures of Love</span>
        </Link>{" "}
        is a series of 20 paintings that depict people and the environment
        interacting in caring ways. I painted most of them while living
        nomadically on the coasts of Oregon and California during the summer of
        2021. I was inspired by the beauty of the Pacific Coast and the rare
        chance to spend an extended chunk of time reflecting.
      </p>
      <p>
        My hope with this series is to remind people to be grateful for all the
        love that's there for us to experience every day if we just take the
        time to look for it. Another thing I'm grateful for is the thriving art
        community in and around Denver. I'm thrilled to be debuting this series
        at the <Link to="/events">First Friday Artwalk</Link> in Littleton on
        April 1<sup>st</sup>. And if you're part of the Denver art/music scene
        or otherwise interested in my work,{" "}
        <Link to="/contact">hit me up.</Link>
      </p>
      <p>
        In my free time aside from art, I’m incredibly involved in music as a
        performer, producer and engineer. Playing music has inspired me to focus
        primarily on shape, color and movement in my art because these concepts
        are so frequently discussed amongst musicians. I’ve also found that lots
        of my favorite visual artists are very active in music such as{" "}
        <a href="https://www.instagram.com/lukepelletier/" alt="">
          Luke Pelletier
        </a>{" "}
        and{" "}
        <a href="https://www.rumtumcreations.com/" alt="">
          Rumtum.
        </a>
      </p>
    </div>
  </Page>
);

export default About;
