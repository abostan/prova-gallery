import React from "react";

const WallImages = () => {
  const wallImages = [
    {
      src: require("../images/wall1.jpg"),
      alt: "Left edge of frame",
      title: "Image extends around the frame",
      width: 333,
      height: 500
    },
    {
      src: require("../images/wall2.jpg"),
      alt: "Lower left edge of frame",
      title: "Emphasizes the cubist abstraction",
      width: 431,
      height: 500
    },
    {
      src: require("../images/wall3.jpg"),
      alt: "Lower right edge of frame",
      title: "Creates 3D visual interest",
      width: 750,
      height: 500
    }
  ];
  return (
    <div className="wallImages">
      <img
        src={wallImages[0].src}
        alt={wallImages[0].alt}
        title={wallImages[0].title}
      />
      <img
        src={wallImages[1].src}
        alt={wallImages[1].alt}
        title={wallImages[1].title}
      />
      <img
        src={wallImages[2].src}
        alt={wallImages[2].alt}
        title={wallImages[2].title}
      />
    </div>
  );
};

export default WallImages;
