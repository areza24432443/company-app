"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // اینجا بعداً API وصل می‌کنی
      console.log("Booking Data:", form);

      alert("Appointment booked successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Book Dental Appointment
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow-lg p-6 rounded-2xl"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* Time */}
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* Service */}
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select Service</option>
          <option value="root-canal">Root Canal</option>
          <option value="teeth-cleaning">Teeth Cleaning</option>
          <option value="cosmetic">Cosmetic Dentistry</option>
          <option value="orthodontics">Orthodontics</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows={4}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-white p-3 rounded font-semibold hover:bg-red-600 transition"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </section>
  );
}