import FadeIn from "./FadeIn";
import { Users, Award, HeartHandshake, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      title: "Happy Patients",
  
    },
    {
      icon: Award,
      number: "15+",
      title: "Certifications",
    },
    {
      icon: HeartHandshake,
      number: "4+",
      title: "Years Experience",
    },
    {
      icon: Clock,
      number: "6 Days",
      title: "Open Every Week",
    },
  ];

  return (
    <section className="bg-white py-20">
        <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center"
            >
              <item.icon
                size={45}
                className="mx-auto text-emerald-600 mb-5"
              />

             <h2 className="text-4xl font-bold text-slate-800">
                {item.number}
                </h2>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
      </FadeIn>
    </section>
  );
}   