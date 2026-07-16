 "use client";

import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { useBooking } from "@/components/booking-provider";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Background Image */}
      <Image
        src="/hero-car.png"
        alt="Premium Foam Car Wash"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-center lg:text-left"
          >
            {/* Heading */}
            <h1 className="font-black italic leading-none">

              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="text-blue-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  CLEANER
                </span>

                <span className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  CAR
                </span>
              </div>

              <div className="mt-2 flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="text-blue-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  BETTER
                </span>

                <span className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  FEEL
                </span>
              </div>

            </h1>

            {/* Description */}
            <p className="mt-8 text-lg sm:text-xl lg:text-2xl font-medium text-black leading-relaxed">
              Premium doorstep car wash
              <br />
              and detailing services.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

              <Button
                onClick={openBooking}
                className="h-12 rounded-full bg-blue-700 px-8 text-white hover:bg-blue-800 w-full sm:w-auto"
              >
                Book Your Wash
              </Button>

              <Button
                nativeButton={false}
                render={
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="h-12 rounded-full bg-green-500 px-8 text-white hover:bg-green-600 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>

              <button
                onClick={() =>
                  (window.location.href = "tel:+919876543210")
                }
                className="flex h-12 w-full items-center justify-center rounded-full bg-black px-8 text-white hover:bg-gray-800 sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}