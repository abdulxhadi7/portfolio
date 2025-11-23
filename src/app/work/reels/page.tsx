"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShowcasePage() {
  const router = useRouter();

  // Add your UI / Website screenshots here
  const items = [
    {
      id: 1,
      title: "Travel App UI",
      img: "/showcase/travel-ui.jpg",
      link: "/showcase/travel",
    },
    {
      id: 2,
      title: "Real Estate Landing Page",
      img: "/showcase/realestate.jpg",
      link: "/showcase/realestate",
    },
    {
      id: 3,
      title: "Dashboard Web UI",
      img: "/showcase/dashboard.jpg",
      link: "/showcase/dashboard",
    },
    {
      id: 4,
      title: "Agency Website Design",
      img: "/showcase/agency.jpg",
      link: "/showcase/agency",
    },
  ];

  const fadeZoom = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-300 text-transparent bg-clip-text">
          UI & Website Showcase
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          Explore professionally crafted website layouts, app screens, and elegant UI designs.
        </p>
      </motion.div>

      {/* Showcase Grid */}
      <div
        className="grid gap-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="group cursor-pointer"
            onClick={() => router.push(item.link)}
          >
            {/* Card Container — Perfect 9:16 Ratio */}
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Glass Overlay */}
              <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-black/40 backdrop-blur-md">
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed left-1/2 -translate-x-1/2 bottom-6 bg-green-600 hover:bg-green-500 px-8 py-3 rounded-xl shadow-lg"
      >
        Go Back
      </button>
    </section>
  );
}
