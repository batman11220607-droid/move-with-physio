"use client";

import FadeIn from "./FadeIn";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-50 py-24">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-emerald-600 font-semibold uppercase tracking-[4px] text-center">
            PATIENT REVIEWS
          </p>

          <h2 className="text-5xl font-bold text-slate-900 text-center mt-4">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 text-center mt-4 mb-12 max-w-2xl mx-auto">
            Trusted by our patients. Read genuine Google reviews and see why
            Move With Physio is a preferred choice for physiotherapy care.
          </p>

          {/* Elfsight Script */}
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
          />

          {/* Elfsight Widget */}
          <div
            className="elfsight-app-1eaba67f-917c-416b-b096-d5a380296c3f"
            data-elfsight-app-lazy
          ></div>

          {/* Google Review Button */}
          <div className="text-center mt-12">
            <a
              href="https://g.page/r/CWdtxb4mKFFlEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              ⭐ Leave a Google Review
            </a>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}