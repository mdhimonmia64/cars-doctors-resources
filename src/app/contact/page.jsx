"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      return toast.error("All fields are required!");
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully 🚀");
      form.reset();
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl md:text-5xl font-bold hover:text-blue-600">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed hover:text-black">
            Have any questions about our car services? Feel free to contact us.
            Our team is always ready to help you with repair, maintenance, and
            diagnostics support.
          </p>

          <div className="mt-6 space-y-2 text-gray-600 hover:text-black">
            <p>📍 Mymensingh, Bangladesh</p>
            <p>📞 +880 1319959656</p>
            <p>📧 mdhimonmia64@gmail.com</p>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full mt-1"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

