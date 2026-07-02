export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-emerald-700 to-emerald-500 text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-[5px] text-emerald-100">
            Healing Through Movement
          </p>

          <h1 className="text-6xl font-extrabold mt-4 leading-tight">
            Move Better.
            <br />
            Recover Faster.
          </h1>

          <p className="mt-8 text-lg text-emerald-50 leading-8">
            Evidence-based physiotherapy for pain relief, sports injuries,
            rehabilitation, posture correction and long-term recovery.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="tel:+919899361297"
              className="bg-white text-emerald-700 px-7 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              📞 Call Reception
            </a>

            <a
              href="https://wa.me/919899361297"
              className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

        <div>

          <img
            src="/images/clinic.jpeg"
            alt="Move With Physio Clinic"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}