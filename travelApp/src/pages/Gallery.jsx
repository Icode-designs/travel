import React from "react";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
];

export default function Gallery() {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/home1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center backdrop-blur-sm">
          <h4 className="text-4xl md:text-6xl font-bold text-white ">
            Gallery
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div key={image} className="rounded-lg overflow-hidden shadow-md">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
