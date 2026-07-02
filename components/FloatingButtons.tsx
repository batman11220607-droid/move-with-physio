import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919899361297?text=Hello%20Move%20With%20Physio,%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110 z-50"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call */}
      <a
        href="tel:9899361297"
        className="fixed bottom-24 right-6 bg-emerald-600 hover:bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110 z-50"
      >
        <Phone size={28} />
      </a>
    </>
  );
}