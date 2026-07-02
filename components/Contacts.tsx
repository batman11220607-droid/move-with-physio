import FadeIn from "./FadeIn";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <section id="contact" className="bg-white py-24">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-emerald-600 uppercase tracking-[4px] font-semibold text-center">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 text-slate-900">
          Visit Our Clinic
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="space-y-8">

            <div className="flex gap-5">
              <Phone className="text-emerald-600" />
              <div>
                <h3 className="font-bold text-black">Phone</h3>
                <p className="text-gray-600">9899361297</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-emerald-600" />
              <div>
                <h3 className="font-bold text-black">E-mail</h3>
                <p className="text-gray-600">movewithphysioofficial@gmail.com   
                </p>
                
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="text-emerald-600" />
              <div>
                <h3 className="font-bold text-black">Address</h3>
                <p className="text-gray-600">Flat-502, Bharat Apartments-2,<br />
                  Sector-104, Hazipur,<br />
                  Noida, UP - 201301</p>
                  
                
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="text-emerald-600" />
              <div>
                <h3 className="font-bold text-black">Opening Hours</h3>
                <p className="text-gray-600">11:00 AM – 6:00 PM  
                </p>
                
              </div>
            </div>

          </div>

          <iframe
            src="https://www.google.com/maps?q=Flat-502+Bharat+Apartments+2+Sector+104+Noida&output=embed"
            className="w-full h-[450px] rounded-3xl shadow-lg"
            loading="lazy"
          />

        </div>

      </div>
      </FadeIn>
    </section>
  );
}