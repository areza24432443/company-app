
import Image from "next/image";
import Link from "next/link";

import {
  CheckCircle2,
  Award,
  Users,
  HeartPulse,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/about-banner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/about-image.jpg"
            alt="Dental Clinic"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white space-y-8">

          <div>
            <p className="text-red-400 font-semibold uppercase tracking-[4px] mb-4">
              About Our Clinic
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Modern Dental Care For
              Your Healthy Smile
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            We provide professional dental treatments using modern technology
            and experienced specialists. Our clinic focuses on patient comfort,
            hygiene, and advanced dental solutions for all ages.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-red-400" size={28} />

                <h3 className="font-bold text-xl">
                  Certified Doctors
                </h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Experienced dentists with modern treatment methods.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <HeartPulse className="text-red-400" size={28} />

                <h3 className="font-bold text-xl">
                  Advanced Care
                </h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Safe and comfortable treatment for every patient.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-red-400" size={28} />

                <h3 className="font-bold text-xl">
                  Why Choose Us?
                </h3>
              </div>

              <ul className="space-y-3 text-gray-200">

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-400" size={20} />
                  Modern dental equipment
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-400" size={20} />
                  Friendly and professional staff
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-400" size={20} />
                  Emergency dental support
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-400" size={20} />
                  Affordable and high-quality service
                </li>
              </ul>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            href="/reserve"
            className="inline-flex bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

