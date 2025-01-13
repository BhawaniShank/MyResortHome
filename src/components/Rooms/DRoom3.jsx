import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBed, FaLock, FaDesktop, FaWind, FaWineBottle, FaCoffee, FaTv, FaWifi, FaBath, FaUtensils, FaConciergeBell } from "react-icons/fa";
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

const DRoom3 = () => {
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef) {
        sliderRef.slickNext(); // Automatically slide to the next image
      }
    }, 10000); // Slide every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [sliderRef]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="max-w-[120em] flex flex-col justify-center items-center gap-y-10 xl:flex-row md:px-20 mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="min-w-[50%] flex xl:px-20 flex-col w-full h-full justify-center">
        <h2 className="text-2xl font-bold mb-4">About Accommodation</h2>
        <p className="text-gray-700 text-justify mb-6">
          Relax in our cozy, compact room featuring a 140cm bed, satellite TV, coffee and tea set, minibar, desk, air conditioning, and complimentary Wi-Fi. Unwind in the bathroom with a shower, and find bathrobe and slippers for added comfort. Our non-smoking rooms also include SeaPearl's inclusive service, ensuring a delightful stay. Your accommodation price covers breakfast and unrestricted entry to our thermal pools and Wellness & Spa.
        </p>
        <h3 className="text-xl font-bold mb-4">Facilities</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center"><FaBed className="mr-2" /> King size bed</div>
          <div className="flex items-center"><FaLock className="mr-2" /> Personal Locker</div>
          <div className="flex items-center"><FaDesktop className="mr-2" /> Desk</div>
          <div className="flex items-center"><FaWind className="mr-2" /> Air Condition</div>
          <div className="flex items-center"><FaWineBottle className="mr-2" /> Minibar</div>
          <div className="flex items-center"><FaCoffee className="mr-2" /> Coffee and tea</div>
          <div className="flex items-center"><FaTv className="mr-2" /> Television</div>
          <div className="flex items-center"><FaWifi className="mr-2" /> Wi-Fi</div>
          <div className="flex items-center"><FaBath className="mr-2" /> Bathtub</div>
          <div className="flex items-center"><FaUtensils className="mr-2" /> Breakfast</div>
          <div className="flex items-center"><FaConciergeBell className="mr-2" /> 24/7 Room service</div>
        </div>
      </div>
      <div className="w-full  xl:w-[40em] relative overflow-visible">
        <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
          {images.map((image) => (
            <div key={image.id} className="px-2">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          ))}
        </Slider>
        <button
          type="submit"
          className="hover:bg-burnt-orange mx-auto w-[96%] ml-[2%] bg-clay-red text-white font-bold py-4 px-4 mt-7 lg:mt-0 rounded-lg text-xl transition-all duration-300"
        >
          Book Room Now
        </button>
      </div>
    </div>
  );
};

export default DRoom3;
