import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from "../../assets/photo/food/dining2.jpg";
import im2 from "../../assets/photo/hut/luxury2.jpg";
import im5 from "../../assets/photo/hut/luxury3.jpg";
import im3 from "../../assets/photo/green campus/nature.jpg";
import im4 from "../../assets/photo/green campus/nature2.jpg";

const images = [
  { id: 1, src: im1, bg: im1 },
  { id: 2, src: im2, bg: im2 },
  { id: 3, src: im3, bg: im3 },
  { id: 4, src: im4, bg: im4 },
  { id: 5, src: im5, bg: im5 },
];

export default function ResponsiveSlider() {
  const [bgImage, setBgImage] = useState(images[0].bg);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef) {
        sliderRef.slickNext(); // Automatically slide to the next image
      }
    }, 10000); // Slide every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [sliderRef]);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white z-20"
      onClick={onClick}
    >
      ❮
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white z-20"
      onClick={onClick}
    >
      ❯
    </button>
  );
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: "20px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // centerPadding: "5px",
        },
      },
    ],
    afterChange: (current) => {
      setBgImage(images[current].bg);
    },
  };

  return (
    <div
      className="relative  w-full inset-0  bg-cover bg-fixed bg-center h-[40em] lg:h-[50em] w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-end">
        <div className="text-white items-center flex flex-col lg:flex-row gap-y-8 justify-around w-full mb-20">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Deluxe Rooms
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">$320.0 /Night</p>
          </div>
          <div className="w-60 md:w-[30em] relative overflow-hidden">
  <Slider
    {...settings}
    ref={(slider) => setSliderRef(slider)}
  >
    {images.map((image) => (
      <div key={image.id} className="px-1"> {/* Reduced padding */}
        <img
          src={image.src}
          alt={`Slide ${image.id}`}
          className="w-full h-auto rounded-2xl"
        />
      </div>
    ))}
  </Slider>
</div>

        </div>
      </div>
    </div>
  );
}
