import im1 from "../../assets/photo/hut/luxury.jpg";
import im2 from "../../assets/photo/hut/luxury2.jpg";
import im4 from "../../assets/photo/hut/luxury4.jpg";

const rooms = [
  {
    image: im1,
    title: "Deluxe Room",
    price: "$320/Night",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Deluxe Room with a large bed, bedside tables, and lamps",
  },
  {
    image: im2,
    title: "Standard Room",
    price: "$450/Night",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Standard Room with a large bed and a view of the city",
  },
  {
    image: im4,
    title: "Superior Room",
    price: "$520/Night",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Superior Room with a large bed, bedside tables, and lamps",
  },
  {
    image: im1,
    title: "Deluxe Room",
    price: "$320/Night",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Deluxe Room with a large bed, bedside tables, and lamps",
  },
  {
    image: im2,
    title: "Standard Room",
    price: "$450/Night",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Standard Room with a large bed and a view of the city",
  },
  {
    image: im4,
    title: "Superior Room",
    price: "$520/Night",
    description: "110 Sq | 3-5 Guests | Free Wi-Fi",
    alt: "Superior Room with a large bed, bedside tables, and lamps",
  },
];

const RoomCard = ({ image, title, price, description, alt }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg group relative">
    {/* Image with overlay */}
    <div className="relative">
      <img
        src={image}
        alt={alt}
        className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded shadow hover:bg-gray-200">
          View Details
        </button>
      </div>
    </div>
    {/* Content */}
    <div className="p-6 sm:p-8 md:p-10 lg:p-5 xl:p-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal mb-2">
        {title}
      </h2>
      <p className="text-gray-500 flex gap-4 items-center mb-4">
        From{" "}
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] text-gold-500">
          {price}
        </span>
      </p>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

const Room1 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-sm sm:text-base text-gray-500 tracking-widest mb-4 sm:mb-8">
          ROOMS & SUITES
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium">
          Our Exquisite Rooms & Suites Collection
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

export default Room1;
