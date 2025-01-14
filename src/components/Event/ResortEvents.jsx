import im1 from "../../assets/photo/hut/luxury.jpg";
import im2 from "../../assets/photo/hut/luxury2.jpg";
import im3 from "../../assets/photo/hut/luxury3.jpg";
import im4 from "../../assets/photo/hut/luxury4.jpg";

const events = [
  {
    image: im1,
    title: "Marriage Rooms",
    price: "$500/Day",
    description: "Luxury wedding rooms | Private garden | Free Wi-Fi",
    alt: "Spacious and luxurious wedding rooms for a grand celebration",
  },
  {
    image: im2,
    title: "Camel Ride",
    price: "$200/Day",
    description: "Guided camel ride | Traditional Marwadi experience",
    alt: "Enjoy a traditional camel ride through the beautiful desert",
  },
  {
    image: im3,
    title: "Royal Rajasthani Food",
    price: "$150/Day",
    description: "Learn to cook authentic Rajasthani dishes | Experienced chefs",
    alt: "Experience the art of cooking royal Rajasthani cuisine",
  },
  {
    image: im4,
    title: "Candle light Dinner",
    price: "$250/Day",
    description: "Private dinner under the stars | Exquisite Rajasthani dishes",
    alt: "Enjoy a romantic candlelight dinner in a private setting",
  },
];

const EventCard = ({ image, title, price, description, alt }) => (
  <div className="rounded-lg overflow-hidden group relative shadow-lg">
    {/* Image with overlay */}
    <div className="relative">
      <img
        src={image}
        alt={alt}
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-black px-4 py-2 text-sm sm:text-base font-semibold rounded shadow hover:bg-gray-200">
          View Details
        </button>
      </div>
    </div>
    {/* Content */}
    <div className="p-8 sm:p-10 md:p-12 lg:p-14 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal mb-2">
        {title}
      </h2>
      <p className="text-gray-500 flex w-full justify-center gap-4 sm:gap-6 items-center mb-4">
        From{" "}
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] text-gold-500">
          {price}
        </span>
      </p>
      <p className="text-gray-500 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

const ResortEvents = () => {
  return (
    <div>

    <div className="relative w-full h-[40em] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center" 
        style={{ backgroundImage: `url(${im1})` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl">EVENTS</h1>
      </div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-sm sm:text-base text-gray-500 tracking-widest mb-4 sm:mb-6">
          EVENTS
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[60px] lg:px-20 font-medium">
          Experience Unmatched Luxury with Our Exclusive Events
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            price={event.price}
            description={event.description}
            alt={event.alt}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ResortEvents;
