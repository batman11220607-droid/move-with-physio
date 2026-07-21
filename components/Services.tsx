import FadeIn from "./FadeIn";
import Image from "next/image";

import {
  Activity,
  Bone,
  Dumbbell,
  Hand,
  Zap,
  HeartPulse,
  Home,
  ArrowRight,
  Phone,
  ShieldCheck,
  Brain,
  UserRound,
  CalendarDays,
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
{/* ================= HOME VISIT ================= */}

<div className="relative mt-24 overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">

  {/* Background Glow */}

  <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[140px]" />

  <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
  {/* Background Pattern */}

<div className="absolute inset-0 opacity-[0.04]">
  <div
    className="h-full w-full"
    style={{
      backgroundImage:
        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "28px 28px",
    }}
  />
</div>

<div className="relative z-10 grid gap-20 px-8 py-14 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16 items-center">

  {/* LEFT */}

  <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">

<Home size={18} />

<span>Home Visit Physiotherapy</span>

</div><h3 className="mt-8 max-w-lg text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-2px] text-white">

Trusted Home Visit


<br />

Physiotherapy

</h3>

<div className="mt-6 h-1 w-20 rounded-full bg-emerald-300"></div>
<p className="mt-7 max-w-xl text-lg leading-8 text-emerald-50">

Receive expert physiotherapy services in the comfort of your home.

Whether you're recovering from surgery, managing chronic pain,

or caring for elderly family members, our experienced

physiotherapists bring professional treatment directly to you.

</p>
{/* Features */}

<div className="mt-10 flex flex-wrap gap-4">

  {[
    {
      icon: UserRound,
      title: "Elderly Care",
    },
    {
      icon: ShieldCheck,
      title: "Post Surgery",
    },
    {
      icon: Brain,
      title: "Stroke Rehab",
    },
    {
      icon: HeartPulse,
      title: "Pain Relief",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="
      flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-white/10
      px-4
      py-3
      backdrop-blur-md
      transition
      hover:bg-white/15
      "
    >
      <item.icon size={18} className="text-emerald-200" />

      <span className="text-sm font-medium text-white">
        {item.title}
      </span>
    </div>
  ))}

</div>
<div className="mt-10 flex flex-wrap items-center gap-8 text-emerald-100">

  <div className="flex items-center gap-2">

    <ShieldCheck size={18} />

    <span className="text-sm">
      Trusted Home Visits
    </span>

  </div>

  <div className="h-5 w-px bg-white/20" />

  <div className="text-sm">
    Available Across Noida
  </div>

</div>
</div>
{/* RIGHT */}

<div className="relative flex items-center justify-center mt-12 lg:mt-0">
  {/* Glow */}

  <div className="absolute h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px]" />

  <div className="relative z-10 flex flex-col items-center">

    {/* Illustration */}

    <Image
      src="/images/home-physio.png"
      alt="Home Physiotherapy"
     width={460}
height={460}
className="
drop-shadow-[0_35px_80px_rgba(0,0,0,.35)]
transition-transform
duration-500
hover:scale-105
"
    />

    {/* CTA */}
    <div className="my-6 h-px w-full max-w-sm bg-white/10" />
    <div className="mt-8 w-full max-w-sm space-y-4">

      {/* Book Visit */}

      <a
        href="https://wa.me/919899361297?text=Hi%20Dr.%20Devika,%0A%0AI%20would%20like%20to%20book%20a%20Home%20Visit%20Physiotherapy%20session.%20Could%20you%20please%20share%20the%20available%20time%20slots?%20Thank%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        bg-white
        px-7
        py-6
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
        "
      >

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">

            <CalendarDays
              className="text-emerald-700"
              size={22}
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Schedule
            </p>

            <h4 className="font-semibold text-emerald-700">
              Book Home Visit
            </h4>

          </div>

        </div>

        <ArrowRight className="text-emerald-700 transition group-hover:translate-x-1" />

      </a>

      {/* Call */}

      <a
        href="tel:+919899361297"
        className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/20
        bg-white/10
        backdrop-blur-md
        px-7
        py-6
        text-white
        transition-all
        duration-300
        hover:bg-white/15
        hover:border-white/40
        "
      >

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">

            <Phone size={22} />

          </div>

          <div>

            <p className="text-xs uppercase tracking-wider text-emerald-200">
              Need Help?
            </p>

            <h4 className="font-semibold">
              Call Now
            </h4>

          </div>

        </div>

        <ArrowRight className="transition group-hover:translate-x-1" />

      </a>

    </div>

  </div>

</div>
    </div>
</div>
      </div>
          </FadeIn>
    </section>
  );
}