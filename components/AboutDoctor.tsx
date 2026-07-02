import FadeIn from "./FadeIn";
import { Award, GraduationCap, Heart, ShieldCheck } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section id="about" className="bg-white py-24">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Doctor Image */}
          <div>
            <img
              src="/images/doctor.jpeg"
              alt="Dr. Devika Singh"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* Doctor Details */}
          <div>

            <span className="text-emerald-600 font-semibold uppercase tracking-widest">
              Meet Your Physiotherapist
            </span>

            <h2 className="text-5xl font-bold text-slate-900">
              Dr. Devika Singh (PT)
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Dr. Devika Singh is an experienced Physiotherapist dedicated to
              helping patients recover from pain, injuries and movement
              limitations through evidence-based physiotherapy.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex gap-4">
                <GraduationCap className="text-emerald-600" />
                <div>
                  <h3 className="text-emerald-600">Qualification</h3>
                  <p className="text-gray-600">BPT | MPT</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Award className="text-emerald-600" />
                <div>
                  <h3 className="text-emerald-600">Experience</h3>
                  <p className="text-gray-600">4+ Years</p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-emerald-600" />
                <div>
                  <h3 className="text-emerald-600">Registration</h3>
                  <p className="text-gray-600">BPT/4846</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="text-emerald-600" />
                <div>
                  <h3 className="text-emerald-600">Patients</h3>
                  <p className="text-gray-600">1000+ Treated</p>
                </div>
              </div>

            </div>

            <a
              href="tel:+919899361297"
              className="inline-block mt-10 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Book Appointment
            </a>

          </div>

        </div>

      </div>
      </FadeIn>
    </section>
  );
}