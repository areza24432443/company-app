import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="hero"
      className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">

          <p className="text-red-500 font-semibold uppercase tracking-wider">
            Welcome To Dentelo
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            We Are Best Dental Service
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Donec vitae libero non enim placerat eleifend aliquam erat volutpat.
            Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique,
            commodo gravida lectus non.
          </p>

          {/* FORM */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl">

            <input
              type="email"
              name="email_address"
              placeholder="Your Email Address..."
              required
              aria-label="email"
              className="flex-1 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white px-6 py-4 rounded-xl font-semibold shadow-md"
            >
              Get Call Back
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative w-full min-h-[500px]">

          <Image
            src="/hero-banner.png"
            alt="Dental Hero Banner"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}