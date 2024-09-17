import React from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "/images/pic1.jpeg",
    text: "Absolutely thrilled with my trip! The booking process was seamless, and every detail was taken care of. Highly recommend for stress-free travel planning!",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    image: "/images/pic4.jpeg",
    text: "Amazing experience from start to finish! The tours were well-organized, and the customer testimonial was top-notch. Can't wait to book my next adventure!",
    location: "London, UK",
  },
  {
    name: "Xander Johnson",
    image: "/images/pic2.jpeg",
    text: "This site made my vacation planning a breeze. Great options, easy booking, and everything went off without a hitch. I'll definitely be using this testimonial again!",
    location: "Sydney, Australia",
  },
];

export default function Clients() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center items-center cursor-pointer max-w-[400px] mx-auto transform transition duration-300 hover:scale-110"
            >
              <img
                src={testimonial.image}
                alt=""
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.location}</p>
              <p className="text-gray-600 text-sm italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
