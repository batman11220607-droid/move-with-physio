"use client";
import { useState } from "react";
import {
  Activity,
  Dumbbell,
  Hand,
  HeartPulse,
  ShieldPlus,
  Zap,
  Bone,
  StretchHorizontal,
  PersonStanding,
} from "lucide-react";

const featuredtreatments = [
  {
    icon: Activity,
    title: "Sports Injury Rehabilitation",
    description:
      "Personalized rehabilitation programs to recover from sports injuries and improve performance.",
  },
  {
    icon: Zap,
    title: "Dry Needling",
    description:
      "Advanced technique for muscle pain, trigger points, and faster recovery.",
  },
  {
    icon: HeartPulse,
    title: "Cupping Therapy",
    description:
      "Improves blood circulation, reduces muscle tightness, and relieves pain.",
  },
  {
    icon: Hand,
    title: "Manual Therapy",
    description:
      "Hands-on treatment to improve joint mobility and reduce pain.",
  },
  {
    icon: Dumbbell,
    title: "IASTM",
    description:
      "Instrument Assisted Soft Tissue Mobilization for faster healing and mobility.",
  },
  {
    icon: ShieldPlus,
    title: "Kinesiology Taping",
    description:
      "Supports muscles and joints while allowing natural movement during recovery.",
  },
]
  const moreTreatments = [
    {
    icon: Bone,
    title: "Muscle Energy Technique (MET)",
    description: "Restores joint mobility using gentle muscle contractions.",
    },
    {
    icon: StretchHorizontal,
    title: "High Velocity Thrust (HVT)",
    description: "Manual therapy technique to improve joint movement.",
    },
    {
    icon: PersonStanding,
    title: "Sports Physiotherapy",
    description: "Specialized rehabilitation for athletes and active individuals.",
    },
    
];

export default function Treatments() {
    const [showMore, setShowMore] = useState(false);
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          Treatments We Offer
        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto">
          We provide advanced physiotherapy techniques designed to relieve pain,
          restore movement, and help you return to your daily activities safely.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {featuredtreatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-600 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Icon className="text-emerald-600" size={34} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>
        {showMore && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            {moreTreatments.map((item, index) => {
            const Icon = item.icon;

            return (
                <div
                key={index}
                className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-600 transition-all duration-300"
                >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                    <Icon className="text-emerald-600" size={34} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                    {item.description}
                </p>

                </div>
            );
            })}

        </div>
        )}
        <div className="flex justify-center mt-14">
<button
  onClick={() => setShowMore(!showMore)}
  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
>
  {showMore ? "Show Less ↑" : "View All Treatments →"}
</button>
        </div>
      </div>
    </section>
  );
}