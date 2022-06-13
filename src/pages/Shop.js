import React from "react";
import Page from "../components/Page";
import "../styles.css";
import ContactInfo from "../components/ContactInfo";

const Shop = (props) => (
  <Page {...props}>
    <div>
      <h1>Shop</h1>
      <p>
        These works are available as original paintings and also as art prints
        or canvas-wrap prints in multiple sizes. Prints start at $30 and
        originals start at $250.
      </p>

      <h2>Original Works</h2>
      <p>
        Gestures of Love is a series of paintings I began on a road trip down
        the Pacific Coast in the summer of 2021. These paintings are all done in
        a style I call <i>family-friendly cubist psychedelia</i> and are framed
        in a unique way that extends the image around the frame.
      </p>
      <div className="prices">
        <div>Watching You, Watching Us</div>
        <div>8x12</div>
        <div>$250</div>
        <div>Pollinators</div>
        <div>8x12</div>
        <div>$250</div>
        <div>Climbing a Tree</div>
        <div>8x12</div>
        <div>$250</div>
        <div>I Sent You a Postcard</div>
        <div>12x8</div>
        <div>$250</div>
        <div>Sand Dollar</div>
        <div>12x8</div>
        <div>$250</div>
        <div>Big Swell</div>
        <div>12x8</div>
        <div>$250</div>
        <div>Beachball</div>
        <div>12x8</div>
        <div>$250</div>
        <div>4:30 am on Mt. Shasta</div>
        <div>12x12</div>
        <div>$300</div>
        <div>Fly My Kite</div>
        <div>12x12</div>
        <div>$300</div>
        <div>Slow Down, Sunset</div>
        <div>12x12</div>
        <div>$300</div>
        <div>Four Very Tall Trees</div>
        <div>18x24</div>
        <div>$600</div>
        <div>A Seagull's Topography</div>
        <div>18x24</div>
        <div>$600</div>
        <div>Serenade</div>
        <div>18x24</div>
        <div>$600</div>
        <div>Cliffside Self Portrait</div>
        <div>24x18</div>
        <div>$600</div>
        <div>Foraging for Dinner</div>
        <div>24x18</div>
        <div>$600</div>
        <div>Cliff Divers</div>
        <div>24x18</div>
        <div>$600</div>
        <div>Still Life in the Sand</div>
        <div>24x18</div>
        <div>$600</div>
        <div>We'll Be Waiting by the Lighthouse</div>
        <div>24x18</div>
        <div>$600</div>
        <div>Learning to Surf</div>
        <div>36x24</div>
        <div>$900</div>
        <div>The Beach People</div>
        <div>36x24</div>
        <div>$900</div>
        <div>Hustle and Bustle</div>
        <div>36x24</div>
        <div>$1000</div>
      </div>
      <h2>Art Prints</h2>
      <p>
        All prints are archival quality printed on thick 300gsm cardstock.
        Prints are available for each painting in small and large sizes.
      </p>
      <div className="prices">
        <div>Small Rectangular Prints</div>
        <div>8x12, 12x8</div>
        <div>$25</div>
        <div>Small Square Prints</div>
        <div>12x12</div>
        <div>$30</div>
        <div>Large Square Prints</div>
        <div>18x18</div>
        <div>$50</div>
        <div>Large Rectangular Prints</div>
        <div>18x24, 24x18</div>
        <div>$75</div>
      </div>
      <h2>Canvas-Wrap Prints</h2>
      <p>
        All works in this series are also available as canvas-wrap prints
        produced to replicate the unique frame style of the originals. Any
        painting may produced at whatever size you wish. Contact me for a quote.
      </p>
      <h2>Purchasing</h2>
      <p>
        If you are interested in purchasing my work, please reach out and we'll
        work out the details of payment and delivery. My contact information is
        below.
      </p>
      <ContactInfo />
    </div>
  </Page>
);

export default Shop;
