"use client";

import FadeIn from "./FadeIn";
import ReviewCard from "./ReviewCardtemp";
import { reviews } from "./reviews";

import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { useCallback } from "react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <p className="text-emerald-600 font-semibold uppercase tracking-[4px] text-center">
            PATIENT REVIEWS
          </p>

          <h2 className="text-5xl font-bold text-slate-900 text-center mt-4">
            Trusted by Our Patients
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Genuine experiences from patients who trusted
            <span className="font-semibold text-slate-900">
              {" "}Move With Physio
            </span>
            {" "}for their recovery journey.
          </p>

          {/* Rating Card */}

{/* Rating Card */}
<div className="mt-12 flex justify-center">
  <div className="bg-white rounded-3xl border border-slate-200 shadow-xl px-8 py-6 w-full max-w-sm hover:shadow-2xl transition-all duration-300">

    <div className="flex items-center justify-center gap-5">

      {/* Google Logo */}
      <div className="flex-shrink-0 -mt-5">
        <img
          src="/googlelogo.jpg"
          alt="Google"
          className="w-16 h-16"
        />
      </div>

      {/* Rating Content */}
      <div className="text-center">

        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-[#FBBC05] text-[#FBBC05]"
            />
          ))}
        </div>

        <h3 className="text-5xl font-bold text-slate-900 leading-none">
          5.0
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          Based on{" "}
          <span className="font-semibold text-slate-700">
            6 Google Reviews
          </span>
        </p>

      </div>

    </div>

  </div>
</div>
          {/* Carousel */}

{/* Carousel */}
<div className="relative mt-16">

  <div className="overflow-hidden" ref={emblaRef}>
    <div className="flex">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] px-4"
        >
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  </div>

  {/* Left Button */}
  <button
    onClick={scrollPrev}
    className="absolute hidden lg:flex -left-14 top-1/2 -translate-y-1/2 z-20
  w-12 h-12 rounded-full bg-emerald-600 text-white
  shadow-xl hover:bg-emerald-700 hover:scale-110
  transition-all items-center justify-center"
  >
    <ChevronLeft size={28} />
  </button>

  {/* Right Button */}
  <button
    onClick={scrollNext}
    className="absolute hidden lg:flex -right-14 top-1/2 -translate-y-1/2 z-20
    w-12 h-12 rounded-full bg-emerald-600 text-white
    shadow-xl hover:bg-emerald-700 hover:scale-110
    transition-all items-center justify-center"
  >
    <ChevronRight size={28} />
  </button>

</div>


        {/* Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">

        <a
          href="https://www.google.com/maps/place/Move+With+Physio/@28.5400192,77.3709887,17z/data=!4m8!3m7!1s0x390ce7e7392a56e7:0x65512826bec56d67!8m2!3d28.5400192!4d77.3709887!9m1!1b1!16s%2Fg%2F11x5l9g1m6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
        >
          View reviews on Google
        </a>

        <a
          href="https://g.page/r/CWdtxb4mKFFlEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
        >
          Leave a Google Review
        </a>

        </div>

      </div>
    </FadeIn>
  </section>
);
}