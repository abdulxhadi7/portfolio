"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("site_loaded");

    if (!hasLoaded) {
      setShow(true);
      sessionStorage.setItem("site_loaded", "true");

      const timer = setTimeout(() => {
        setShow(false);
      }, 4600);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{show && <Preloader />}</AnimatePresence>
      {children}
    </>
  );
}
