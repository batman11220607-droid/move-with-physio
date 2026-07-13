"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  initials: string;
  date: string;
  rating: number;
  review: string;
}

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  const [expanded, setExpanded] = useState(false);
  const showReadMore = review.review.length > 120;
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 h-full flex flex-col"
    >
      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
          {review.initials}
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <h3 className="font-bold text-slate-900">
              {review.name}
            </h3>

            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
              Google
            </span>

          </div>

          <p className="text-sm text-slate-500">
            {review.date}
          </p>

        </div>

      </div>

      {/* Stars */}

      <div className="flex gap-1 mt-5">
        {[...Array(review.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}


<p
  className={`text-slate-600 leading-8 mt-5 ${
    expanded ? "" : "line-clamp-3"
  }`}
>
  "{review.review}"
</p>
      {showReadMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 mb-auto text-emerald-600 font-semibold hover:text-emerald-700 transition"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
      {/* Footer */}

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          Verified Patient
        </span>

        <div className="flex items-center gap-2">

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-5 h-5"
>
  <path
    fill="#EA4335"
    d="M24 9.5c3.1 0 5.9 1.1 8.1 3.1l6-6C34.3 2.9 29.5 1 24 1 14.6 1 6.5 6.4 2.6 14.3l7 5.4C11.4 13.4 17.2 9.5 24 9.5z"
  />
  <path
    fill="#4285F4"
    d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v8.2h12.4c-.5 2.7-2 5-4.3 6.6l6.6 5.1C43.4 36.1 46.1 30.9 46.1 24.5z"
  />
  <path
    fill="#FBBC05"
    d="M9.6 28.3c-.5-1.4-.8-2.8-.8-4.3s.3-3 .8-4.3l-7-5.4C1 17.4 0 20.6 0 24s1 6.6 2.6 9.7l7-5.4z"
  />
  <path
    fill="#34A853"
    d="M24 47c6.5 0 11.9-2.1 15.8-5.8l-6.6-5.1c-2 1.4-4.6 2.2-9.2 2.2-6.8 0-12.6-4-14.6-9.7l-7 5.4C6.5 41.6 14.6 47 24 47z"
  />
</svg>

          <span className="text-sm font-semibold text-slate-700">
            Google
          </span>

        </div>

      </div>

    </motion.div>
  );
}