import  { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bg from "../../assets/photo/hut/luxury.jpg"
import bg2 from "../../assets/photo/hut/luxury2.jpg"
import bg3 from "../../assets/photo/hut/luxury3.jpg"
const images = [
    `${bg}`,
    `${bg2}`,
    `${bg3}`,

    
];
const Hcomp4 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(prevIndex);
    };

    const handleNextClick = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-full p-4">
            <div className="lg:w-1/2 p-8 order-2 text-center lg:text-left">
                
                <h1 className="text-2xl lg:text-4xl text-clay-red font-bold mb-4">ITC HOTELS</h1>
                <p className="text-sm lg:text-lg text-clay-red font-semibold mb-4">RESPONSIBLE LUXURY</p>
                <p className="text-clay-red mb-4">
                    With ‘Namaste’ as the enduring symbol of its brand experience and ‘Responsible Luxury’ as the
                    guiding premise, ITC Hotels are an archetype of the culture and ethos of each destination
                    offering authentic, indigenous luxury experiences which are in harmony with the environment
                    and society.
                </p>
                <p className="text-clay-red mb-8">
                    With a platinum grade commitment to our guests and the planet, 23 ITC Hotel properties are
                    certified with a LEED (Leadership in Energy and Environmental Design) Platinum rating for
                    globally recognised planet positive endeavours.
                </p>
                <button className="px-6 py-2 border border-clay-red rounded-full text-clay-red hover:bg-clay-red hover:text-white transition duration-300">
                    KNOW MORE
                </button>
            </div>

            <div id="controls-carousel" className="lg:w-1/2 relative w-full" data-carousel="static">
                {/* Carousel Wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute block w-full transition-opacity duration-700 ease-in-out top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <button
                    onClick={handlePrevClick}
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4">
                        <FaChevronLeft className="text-black" />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    onClick={handleNextClick}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4">
                        <FaChevronRight className="text-black" />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hcomp4;
