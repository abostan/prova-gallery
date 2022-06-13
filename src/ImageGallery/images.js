/**
 * A list of images for the lightbox and image mosaic
 *
 * react-spring-lightbox only requires the @src and @alt properties,
 * the rest are used by the mosaic gallery for demonstration purposes
 */
export const mosaicImages = [
  {
    src: require("../images/Reflection.jpg"),
    alt: "Watching You, Watching Us",
    caption: "Watching You, Watching Us",
    width: 1000,
    height: 1600
  },
  {
    src: require("../images/Bees.jpg"),
    alt: "Pollinators",
    caption: "Pollinators",
    width: 1000,
    height: 1600
  },
  {
    src: require("../images/TreeClimbing.jpg"),
    alt: "Climbing a Tree",
    caption: "Climbing a Tree",
    width: 1000,
    height: 1600
  },
  {
    src: require("../images/SandDollar.jpg"),
    alt: "I Sent You a Postcard",
    caption: "I Sent You a Postcard",
    width: 1600,
    height: 1000
  },
  {
    src: require("../images/Surfer.jpg"),
    alt: "Big Swell",
    caption: "Big Swell",
    width: 1600,
    height: 1000
  },
  {
    src: require("../images/Beachball.jpg"),
    alt: "Beachball",
    caption: "Beachball",
    width: 1600,
    height: 1000
  },
  {
    src: require("../images/Tent.jpg"),
    alt: "4:30 am on Mt. Shasta",
    caption: "4:30 am on Mt. Shasta",
    width: 1600,
    height: 1600
  },
  {
    src: require("../images/Kite.jpg"),
    alt: "Fly My Kite",
    caption: "Fly My Kite",
    width: 1600,
    height: 1600
  },
  {
    src: require("../images/Sunset.jpg"),
    alt: "Slow Down, Sunset",
    caption: "Slow Down, Sunset",
    width: 1600,
    height: 1600
  },
  {
    src: require("../images/Trees.jpg"),
    alt: "Four Very Tall Trees",
    caption: "Four Very Tall Trees",
    width: 1800,
    height: 2400
  },
  {
    src: require("../images/Seagulls.jpg"),
    alt: "A Seagull's Topography",
    caption: "A Seagull's Topography",
    width: 1800,
    height: 2400
  },
  {
    src: require("../images/Serenade.jpg"),
    alt: "Serenade",
    caption: "Serenade",
    width: 1800,
    height: 2400
  },
  {
    src: require("../images/Painter.jpg"),
    alt: "Cliffside Self Portrait",
    caption: "Cliffside Self Portrait",
    width: 2400,
    height: 1800
  },
  {
    src: require("../images/Berries.jpg"),
    alt: "Foraging for Dinner",
    caption: "Foraging for Dinner",
    width: 2400,
    height: 1800
  },
  {
    src: require("../images/CanyonLake.jpg"),
    alt: "Cliff Divers",
    caption: "Cliff Divers",
    width: 2400,
    height: 1800
  },
  {
    src: require("../images/Seashells.jpg"),
    alt: "Still Life in the Sand",
    caption: "Still Life in the Sand",
    width: 2400,
    height: 1800
  },
  {
    src: require("../images/Sailing.jpg"),
    alt: "We'll Be Waiting by the Lighthouse",
    caption: "We'll Be Waiting by the Lighthouse",
    width: 2400,
    height: 1800
  },
  {
    src: require("../images/Band.jpg"),
    alt: "The Beach People",
    caption: "The Beach People",
    width: 1600,
    height: 2400
  },
  {
    src: require("../images/Boardwalk.jpg"),
    alt: "Hustle and Bustle",
    caption: "Hustle and Bustle",
    width: 2400,
    height: 1600
  },
  {
    src: require("../images/Beach.jpg"),
    alt: "Learning to Surf",
    caption: "Learning to Surf",
    width: 2400,
    height: 1600
  }
];

export const lightboxImages = mosaicImages.map(({ src, alt, caption }) => ({
  src,
  alt,
  caption
}));
