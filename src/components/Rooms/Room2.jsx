import im1 from "../../assets/photo/hut/luxury.jpg";
import im2 from "../../assets/photo/hut/luxury2.jpg";

const rooms = [
  {
    image: im1,
    title: "Corporate Center",
    price: "$320/Day",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Corporate center with spacious seating and modern design",
  },
  {
    image: im2,
    title: "Party Center",
    price: "$450/Day",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Party center with elegant lighting and comfortable seating",
  },
];

const RoomCard = ({ image, title, price, description, alt }) => (
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

const Room2 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-sm sm:text-base text-gray-500 tracking-widest mb-4 sm:mb-6">
          EVENTS SPACE
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[60px] lg:px-20 font-medium">
          Event Accommodation: Elevate Your Experience with Us
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            price={room.price}
            description={room.description}
            alt={room.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Room2;
