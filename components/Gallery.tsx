"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/Gallery/gallery1.jpeg",
  "/images/Gallery/gallery2.jpeg",
  "/images/Gallery/gallery3.jpeg",
  "/images/Gallery/gallery4.jpeg",
  "/images/Gallery/gallery5.jpeg",
  "/images/Gallery/gallery6.jpeg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-slate-900">
            Our Clinic Gallery
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            Take a look inside Move With Physio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="cursor-pointer overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={image}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </FadeIn>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((image) => ({ src: image }))}
      />
    </section>
  );
}