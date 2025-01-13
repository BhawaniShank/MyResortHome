import React from "react";
import { FaUtensils, FaSpa, FaDumbbell, FaBriefcase, FaTshirt, FaConciergeBell } from "react-icons/fa";

const features = [
    {
        icon: FaUtensils,
        title: "Restaurant & Bar",
        description: "Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered."
    },
    {
        icon: FaSpa,
        title: "Spa & Wellness",
        description: "Discover serenity at our spa. Indulge in blissful treatments and unwind in a haven of relaxation. Your path to rejuvenation starts here."
    },
    {
        icon: FaDumbbell,
        title: "Fitness Center",
        description: "Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered."
    },
    {
        icon: FaBriefcase,
        title: "Conference Center",
        description: "Stay productive with our well-equipped business event center, offering essential services for business travelers."
    },
    {
        icon: FaTshirt,
        title: "Laundry Services",
        description: "Delight in the convenience of round-the-clock room service, catering, Laundry everything to your needs at any hour."
    },
    {
        icon: FaConciergeBell,
        title: "24/7 Room Service",
        description: "Delight in the convenience of round-the-clock room service, catering, Laundry everything to your needs at any hour."
    }
];

const DRoom4 = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-20 py-16">
            <div className="text-center mb-12">
                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Why Choose SeaPearl?</h2>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Unveiling Unmatched Coastal Luxury and Hospitality</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="text-center flex flex-col w-full  items-center">
                        <feature.icon className="text-7xl  text-yellow-700 mb-4" />
                        <h2 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h2>
                        <p className="text-gray-600 text-[13px] md:text-base">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DRoom4;
