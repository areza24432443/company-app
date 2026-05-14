import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Root Canal",
    description:
      "Professional root canal treatment with modern equipment and painless procedures.",
    icon: "/service-icon-1.png",
  },
  {
    id: 2,
    title: "Alignment Teeth",
    description:
      "Advanced orthodontic solutions for straight and healthy teeth.",
    icon: "/service-icon-2.png",
  },
  {
    id: 3,
    title: "Cosmetic Teeth",
    description:
      "Enhance your smile with whitening and cosmetic dental treatments.",
    icon: "/service-icon-3.png",
  },
  {
    id: 4,
    title: "Oral Hygiene",
    description:
      "Complete oral care and hygiene services for healthy gums and teeth.",
    icon: "/service-icon-4.png",
  },
  {
    id: 5,
    title: "Live Advisory",
    description:
      "Professional dental consultation and personalized treatment planning.",
    icon: "/service-icon-5.png",
  },
  {
    id: 6,
    title: "Cavity Inspection",
    description:
      "Early cavity detection and preventive dental examination services.",
    icon: "/service-icon-6.png",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="service"
      aria-label="service"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-red-500 font-semibold uppercase tracking-[4px] mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            What We Provide
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* LEFT SERVICES */}
          <div className="space-y-8">

            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group bg-slate-50 hover:bg-red-500 transition-all duration-300 rounded-3xl p-6 shadow-sm hover:shadow-2xl"
              >
                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div className="relative w-20 h-20 shrink-0">

                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-white transition">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="relative w-full min-h-[600px] hidden lg:block">

            <Image
              src="/service-banner.png"
              alt="Dental Services"
              fill
              className="object-contain"
            />
          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-8">

            {services.slice(3, 6).map((service) => (
              <div
                key={service.id}
                className="group bg-slate-50 hover:bg-red-500 transition-all duration-300 rounded-3xl p-6 shadow-sm hover:shadow-2xl"
              >
                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div className="relative w-20 h-20 shrink-0">

                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-white transition">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}