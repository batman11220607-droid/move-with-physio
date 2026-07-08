import FadeIn from "./FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    review:
      "Excellent treatment! Dr. Devika explained every step and my back pain improved significantly.",
  },
  {
    name: "Rahul Verma",
    review:
      "Very professional clinic with modern equipment. Highly recommended for sports injuries.",
  },
  {
    name: "Anjali Gupta",
    review:
      "Friendly staff and excellent care. The exercises really helped my neck pain.",
  },
];

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

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7 italic">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-slate-900">
                {review.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://g.page/r/CWdtxb4mKFFlEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            ⭐ Leave a Google Review
          </a>

        </div>

      </div>
      </FadeIn>
    </section>
  );
}