import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Clinic Info */}
        <div>

          <h2 className="text-3xl font-bold text-emerald-400">
            Move With Physio
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Healing Through Movement.
            We provide evidence-based physiotherapy care with a
            personalized approach to help you recover faster and live pain-free.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li><a href="#about" className="hover:text-emerald-400">About</a></li>

            <li><a href="#services" className="hover:text-emerald-400">Services</a></li>

            <li><a href="#gallery" className="hover:text-emerald-400">Gallery</a></li>

            <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex gap-3">
              <Phone className="text-emerald-400" />
              <span>9899361297</span>
            </div>

            <div className="flex gap-3">
              <Mail className="text-emerald-400" />
              <span>movewithphysioofficial@gmail.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-emerald-400" />
              <span>
                Sector-104, Noida
              </span>
            </div>

            <div className="flex gap-3">
              <Clock className="text-emerald-400" />
              <span>11 AM - 6 PM</span>
            </div>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Follow Us
          </h3>

          <div className="flex gap-5">

            <a
              href="#"
              className="bg-slate-800 p-4 rounded-full hover:bg-emerald-600 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-4 rounded-full hover:bg-emerald-600 transition"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500">

        © 2026 Move With Physio. All Rights Reserved.

      </div>

    </footer>
  );
}