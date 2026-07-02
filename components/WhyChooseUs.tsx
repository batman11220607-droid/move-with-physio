import FadeIn from "./FadeIn";
import {
  ShieldCheck,
  Stethoscope,
  Dumbbell,
  Smile,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
        <FadeIn>

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-emerald-800 text-center">
          Why Choose Move With Physio?
        </h2>

        <p className="text-center text-gray-600 mt-5 mb-16">
          Personalized care backed by advanced physiotherapy techniques.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <ShieldCheck className="text-emerald-600 mb-5" size={45} />
            <h3 className="font-bold text-black">Evidence Based Treatment</h3>
            
            <p className="text-gray-600">
              Modern physiotherapy techniques for faster recovery.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Stethoscope className="text-emerald-600 mb-5" size={45} />
            <h3 className="font-bold text-black">Expert Consultation</h3>
            <p className="text-gray-600">
              Comprehensive assessment and customized treatment plans.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Dumbbell className="text-emerald-600 mb-5" size={45} />
            <h3 className="font-bold text-black">Sports Rehabilitation</h3>
            <p className="text-gray-600">
              Specialized recovery programs for athletes and active individuals.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Smile className="text-emerald-600 mb-5" size={45} />
            <h3 className="font-bold text-black">Patient-Centered Care</h3>
            <p className="text-gray-600">
              Every patient receives personalized attention and guidance.
            </p>
          </div>

        </div>

      </div>
        </FadeIn>
    </section>
  );
}