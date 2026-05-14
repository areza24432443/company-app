import Link from "next/link";

import {
  Clock3,
  Plus,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const links = [
  "Home",
  "About Us",
  "Services",
  "Project",
  "Our Team",
  "Latest Blog",
];

const services = [
  "Root Canal",
  "Alignment Teeth",
  "Cosmetic Teeth",
  "Oral Hygiene",
  "Live Advisory",
  "Cavity Inspection",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* TOP */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-6">

            <Link
              href="/"
              className="text-4xl font-extrabold text-red-500"
            >
              DENTIST CLINIC
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Mauris non nisi semper, lacinia neque in, dapibus leo.
              Curabitur sagittis libero tincidunt tempor finibus.
              Mauris at dignissim ligula.
            </p>

            {/* SCHEDULE */}
            <div className="flex items-start gap-4">

              <div className="bg-red-500 p-3 rounded-xl">
                <Clock3 size={24} />
              </div>

              <div>
                <p className="font-semibold">
                  Monday - Saturday
                </p>

                <p className="text-gray-400">
                  9:00am - 10:00pm
                </p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Other Links
            </h3>

            <ul className="space-y-4">

              {links.map((link) => (
                <li key={link}>

                  <Link
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition"
                  >
                    <Plus size={18} />

                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>

                  <Link
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition"
                  >
                    <Plus size={18} />

                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <MapPin
                  size={22}
                  className="text-red-500 mt-1"
                />

                <p className="text-gray-400 leading-relaxed">
                  TÜRKİYE, KANPUR, UTTAR PRADESH
                  <br />
                  Eseyurt Mah. 34522
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">

                <Phone
                  size={22}
                  className="text-red-500"
                />

                <a
                  href="tel:+917052101786"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  +90-7052-101-786
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">

                <Mail
                  size={22}
                  className="text-red-500"
                />

                <a
                  href="mailto:help@example.com"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  help@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-800 py-6">

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 All Rights Reserved by Dentelo.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}