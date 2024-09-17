import React from "react";

const destinations = [
  {
    Image: "/images/img1.jpeg",
    title: "Paris, France",
    description:
      'Paris, often called the "City of Light," is renowned for its rich history, art, and culture. From the iconic Eiffel Tower and the majestic Louvre Museum to charming cafes and picturesque streets, Paris is a city that exudes romance and elegance.',
  },
  {
    Image: "/images/img2.jpeg",
    title: "Bali, Indonesia",
    description:
      "Bali, known as the 'Island of the Gods,' is a tropical paradise in Indonesia celebrated for its stunning beaches, lush landscapes, and vibrant culture. The island offers a unique blend of serene temples, terraced rice fields, and lively arts scenes.",
  },
  {
    Image: "/images/img3.jpeg",
    title: "New York, USA",
    description:
      "New York City, often called 'The Big Apple,' is a bustling metropolis known for its iconic skyline, diverse culture, and endless energy. Home to world-famous landmarks like Times Square, Central Park, and the Statue of Liberty, New York is a city that never sleeps.",
  },
  {
    Image: "/images/img4.jpeg",
    title: "Tokyo, Japan",
    description:
      "Tokyo, Japan's vibrant capital, seamlessly blends the ultramodern with the traditional. Skyscrapers and neon lights characterize its bustling districts like Shibuya and Shinjuku, while serene temples and historic gardens offer a glimpse into its rich heritage.",
  },
];

export default function PopularDestination() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer max-w-[400px] mx-auto"
            >
              <img
                src={city.Image}
                alt={city.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-3">
                <h3 className="text-lg font-bold mb-2">{city.title}</h3>
                <p className="text-gray-600 text-sm">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
