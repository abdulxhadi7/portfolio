"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // ✅ Import Link

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    services: [] as string[],
    message: "",
  });

  const [toast, setToast] = useState("");

  const services = [
    "Thumbnail",
    "Logo",
    "Banner & Poster",
    "Shorts Editing",
    "Video Editing",
    "Others",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const handleWhatsApp = () => {
    const { name, contact, email, services, message } = formData;
    const text = `Hello, I'm ${name}.\n\n📞 Contact: ${contact}\n✉️ Email: ${email}\n🛠️ Services Needed: ${services.join(
      ", "
    )}\n\n💬 Message:\n${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917389110335?text=${encodedText}`, "_blank");
    showToast("✅ WhatsApp message ready to send!");
  };

  const handleEmail = () => {
    const { name, contact, email, services, message } = formData;
    const subject = encodeURIComponent(`Service Request: ${services.join(", ")}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nServices: ${services.join(
        ", "
      )}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:abdulxhadi7@gmail.com?subject=${subject}&body=${body}`;
    showToast("📧 Email draft opened!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-tl from-black via-green-900 to-black flex flex-col items-center justify-center px-6 py-12 text-white">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        Let’s <span className="text-green-400">Connect</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 mb-10 text-center max-w-xl"
      >
        Fill out the form below and reach out via WhatsApp or Email — I’ll get
        back to you as soon as possible.
      </motion.p>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 md:p-10 w-full max-w-2xl shadow-lg flex flex-col"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-black/30 border border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact (Phone or WhatsApp)"
            value={formData.contact}
            onChange={handleChange}
            className="bg-black/30 border border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/30 border border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 md:col-span-2"
          />
        </div>

        {/* Service Buttons */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-green-300">
            Select Services
          </h3>
          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleService(service)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  formData.services.includes(service)
                    ? "bg-green-500 text-black border-green-400 shadow-lg"
                    : "bg-black/40 border-white/20 text-white hover:bg-green-500/30"
                }`}
              >
                {service}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          className="mt-6 bg-black/30 border border-white/20 rounded-xl px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
        />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleEmail}
            className="px-8 py-3 bg-green-500 text-black font-medium rounded-full hover:bg-green-400 transition"
          >
            Send via Email
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleWhatsApp}
            className="px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-500 transition"
          >
            Send via WhatsApp
          </motion.button>
        </div>

        {/* ✅ Go Back Button (center bottom of form) */}
        <div className="flex justify-center mt-8">
          <Link href="/" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-black/40 border border-white/20 text-white font-medium rounded-full hover:bg-green-500/30 transition"
            >
              ⬅ Go Back Home
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-10 bg-green-500 text-black font-medium px-6 py-3 rounded-full shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
