import React from "react";
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaConciergeBell,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description:
      "Ready to take off? Book your next adventure with us—fast, easy, and secure. Your journey starts here!",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Booking",
    description:
      "Discover your perfect stay—book your hotel with us today for unbeatable comfort and convenience. Your next getaway awaits!",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
    title: "Beach Tours",
    description:
      "Escape to paradise! Book your beach tour now and soak in the sun, surf, and serene vibes. Your coastal adventure starts here!",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    description:
      "Experience personalized care with our concierge services—whether it's dining reservations, special requests, or local recommendations, we're here to make your stay exceptional.",
  },
];

export default function Services() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer max-w-[400px] mx-auto transform transition duration-300 hover:scale-110"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
