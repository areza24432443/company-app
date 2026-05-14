import {
  
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  
    Mail,
} from "lucide-react";

export default function NotificationBar() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* CONTACT */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">

          <a
            href="mailto:info@example.com"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <Mail size={18} />
            info@example.com
          </a>

          <a
            href="tel:+917052101786"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <FaPhone size={18} />
            +91-7052-101-786
          </a>
        </div>

        {/* SOCIAL */}
        <div className="flex items-center gap-4">

          <a href="#" className="hover:text-red-400 transition">
            <FaFacebook size={20} />
          </a>

          <a href="#" className="hover:text-red-400 transition">
            <FaInstagram size={20} />
          </a>

          <a href="#" className="hover:text-red-400 transition">
            <FaTwitter size={20} />
          </a>

          <a href="#" className="hover:text-red-400 transition">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}