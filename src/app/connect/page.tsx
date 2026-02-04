"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type FormData = {
  name: string;
  contact: string;
  email: string;
  services: string[];
  message: string;
};

export default function ConnectPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    services: [],
    message: "",
  });

  const [toast, setToast] = useState("");
  const [success, setSuccess] = useState(false);

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
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  // 🤖 Smart Auto Service Suggestions
  const autoSuggestServices = (text: string) => {
    const suggestions: Record<string, string[]> = {
      video: ["Video Editing", "Shorts Editing"],
      youtube: ["Thumbnail", "Video Editing"],
      shorts: ["Shorts Editing"],
      reel: ["Shorts Editing"],
      logo: ["Logo"],
      banner: ["Banner & Poster"],
      poster: ["Banner & Poster"],
    };

    const detected = new Set<string>();

    Object.entries(suggestions).forEach(([keyword, matched]) => {
      if (text.toLowerCase().includes(keyword)) {
        matched.forEach((s) => detected.add(s));
      }
    });

    if (detected.size) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, ...detected])),
      }));
    }
  };

  const triggerSuccess = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const handleWhatsApp = () => {
    const { name, contact, email, services, message } = formData;

    const text = `Hello, I'm ${name}.
📞 Contact: ${contact}
✉️ Email: ${email}
🛠️ Services: ${services.join(", ")}

💬 Message:
${message}`;

    window.open(
      `https://wa.me/917389110335?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    showToast("WhatsApp message ready 🚀");
    triggerSuccess();
  };

  const handleEmail = () => {
    const { name, contact, email, services, message } = formData;

    window.location.href = `mailto:abdulxhadi7@gmail.com?subject=${encodeURIComponent(
      `Service Request: ${services.join(", ")}`
    )}&body=${encodeURIComponent(
      `Name: ${name}
Contact: ${contact}
Email: ${email}
Services: ${services.join(", ")}

Message:
${message}`
    )}`;

    showToast("Email draft opened ✉️");
    triggerSuccess();
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1),transparent_40%)]" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-52 h-52 bg-lime-500/20 blur-3xl rounded-full"
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-center"
        >
          Let’s <span className="text-lime-400">Connect</span>
        </motion.h1>

        <p className="text-white/60 text-center mt-4 mb-10 max-w-xl mx-auto">
          Tell me about your project and I’ll help you turn it into something
          impactful.
        </p>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(34,197,94,0.15)]"
        >
          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-5">
            {(["name", "contact"] as const).map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={
                  field === "name" ? "Your Name" : "Phone / WhatsApp"
                }
                value={formData[field]}
                onChange={handleChange}
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-lime-400 outline-none"
              />
            ))}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 md:col-span-2 focus:ring-2 focus:ring-lime-400 outline-none"
            />
          </div>

          {/* Services */}
          <div className="mt-8">
            <h3 className="text-lime-400 mb-3 font-medium">
              Services Needed
            </h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <motion.button
                  key={service}
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleService(service)}
                  className={`px-5 py-2 rounded-full text-sm border transition ${
                    formData.services.includes(service)
                      ? "bg-lime-400 text-black border-lime-400 shadow"
                      : "bg-black/40 border-white/10 text-white/70 hover:bg-lime-400/20"
                  }`}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell me more about your project..."
            value={formData.message}
            onChange={(e) => {
              handleChange(e);
              autoSuggestServices(e.target.value);
            }}
            className="mt-6 w-full h-32 bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-lime-400 outline-none resize-none"
          />

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleEmail}
              className="px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              Send via Email
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleWhatsApp}
              className="px-8 py-3 rounded-full bg-lime-400 text-black font-medium shadow-[0_0_30px_rgba(34,197,94,0.6)]"
            >
              Send via WhatsApp
            </motion.button>
          </div>

          {/* Back */}
          <div className="flex justify-center mt-8">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-sm text-white/60 hover:text-lime-400 transition"
              >
                ← Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-10 bg-lime-400 text-black px-6 py-3 rounded-full font-medium shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Check Animation */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-lime-400 text-black rounded-full w-24 h-24 flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.7)]">
              <motion.svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <polyline points="20 6 9 17 4 12" />
              </motion.svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
