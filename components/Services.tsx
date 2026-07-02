import FadeIn from "./FadeIn";
import {
  Activity,
  Bone,
  Dumbbell,
  Hand,
  Zap,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Back & Neck Pain",
    description:
      "Personalized treatment for chronic and acute spinal pain.",
  },
  {
    icon: Activity,
    title: "Sports Injury",
    description:
      "Complete rehabilitation to help you return to peak performance.",
  },
  {
    icon: Hand,
    title: "Manual Therapy",
    description:
      "Hands-on treatment to restore mobility and reduce pain.",
  },
  {
    icon: Zap,
    title: "Dry Needling",
    description:
      "Advanced trigger point therapy for faster pain relief.",
  },
  {
    icon: Dumbbell,
    title: "Posture Correction",
    description:
      "Improve posture and prevent future musculoskeletal problems.",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitation",
    description:
      "Post-surgery and injury rehabilitation programs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
        <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-emerald-600 font-semibold uppercase tracking-[4px] text-center">
          OUR SERVICES
        </p>

        <h2 className="text-5xl font-bold text-slate-900 text-center mt-4">
          Comprehensive Physiotherapy Care
        </h2>

        <p className="text-gray-600 text-center mt-5 max-w-3xl mx-auto">
          We provide evidence-based physiotherapy treatments designed to
          reduce pain, restore movement, and improve your quality of life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <service.icon
                className="text-emerald-600 mb-6"
                size={48}
              />

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
          </FadeIn>
    </section>
  );
}