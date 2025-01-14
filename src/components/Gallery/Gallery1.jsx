import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from "../../assets/photo/hut/luxury.jpg";
import im2 from "../../assets/photo/hut/luxury2.jpg";
import im4 from "../../assets/photo/hut/luxury4.jpg";


const rooms = [
  { image: im1 },
  { image: im2 },
  { image: im4 },
  { image: im1 },
  { image: im2 },
  { image: im4 },
  { image: im2 },
];

const RoomCard = ({ image, index, onButtonClick }) => (
  <div
    className={`border rounded-lg overflow-hidden shadow-lg group relative ${
      index === 0 ? "md:col-span-2" : "col-span-1"
    } ${index === 1 ? "row-span-1 sm:row-span-2 lg:row-span-1 " : ""} 
       ${index === 2 ? "row-span-2 col-span-2 md:col-span-1" : ""} 
       ${index === 4 ? "row-span-2 col-span-2" : ""} 
       ${index === 3 ? "row-span-2 col-span-2" : ""}`}
  >
    <div className="relative h-full">
      <img
        src={image}
        alt={`Room ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white text-black px-6 py-2 text-sm font-semibold rounded shadow hover:bg-gray-200"
          onClick={() => onButtonClick(index)}
        >
          Beach View
        </button>
      </div>
    </div>
  </div>
);

const CustomArrow = ({ className, style, onClick, direction }) => (
  <button
    className={`${className} bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full`}
    style={{
      ...style,
      display: "block",
      zIndex: 1000,
      width: "80px",
      height: "80px",
    }}
    onClick={onClick}
    aria-label={direction}
  >
    {direction === "next" ? "›" : "‹"}
  </button>
);

const Gallery1 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    afterChange: (index) => setCurrentIndex(index),
    nextArrow: (
      <CustomArrow direction="next" />
    ),
    prevArrow: (
      <CustomArrow direction="prev" />
    ),
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-sm sm:text-base text-gray-500 tracking-widest mb-4 sm:mb-8">
          PHOTO GALLERY
        </h2>
        <h1 className="text-2xl sm:text-4xl max-w-4xl mx-auto md:text-5xl lg:text-[60px] font-medium">
          Capturing Memories: Explore the Campus Gallery
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 min-h-[500px]">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            index={index}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
           <button
  className="absolute md:top-4 right-[2px] top-[2px] md:right-4 text-white bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full px-3 py-1 z-50"
  onClick={closePopup}
>
  ✕
</button>

            <Slider {...settings}>
              {rooms.map((room, index) => (
                <div key={index}>
                  <img
                    src={room.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery1;
