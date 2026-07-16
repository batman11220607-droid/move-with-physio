"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  initials: string;
  color: string;
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

        <div
          className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center text-lg font-medium select-none`}
        >
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

<img
  src="/googlelogo.jpg"
  alt="Google"
  className="w-6 h-6 object-contain"
/>

          <span className="text-sm font-semibold text-slate-700">
            Google
          </span>

        </div>

      </div>

    </motion.div>
  );
}