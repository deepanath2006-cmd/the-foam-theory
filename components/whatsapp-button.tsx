"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/50 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-7" />
    </motion.a>
  );
}
