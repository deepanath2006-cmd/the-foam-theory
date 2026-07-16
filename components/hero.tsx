"use client";

import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { useBooking } from "@/components/booking-provider";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE, SITE, WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  const { openBooking } = useBooking();

  return (
     <section
  id="home"
  className="relative h-screen w-full overflow-hidden bg-white"
>
        <Image
  src="/hero-car.png"
  alt="Premium Foam Car Wash"
  fill
  priority
  quality={100}
  className="object-cover object-[center_5%]"
/>

       <div className="relative flex min-h-[85vh] items-center px-6 pt-[5.5rem] pb-20 sm:px-10 sm:pt-28 lg:px-16 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left"
        >

 <h1 className="text-6xl lg:text-7xl font-extrabold italic leading-none">
  <div className="flex items-end gap-4">
    <span className="text-[60px] md:text-[76px] font-black italic text-[#0A2C8F]">
      CLEANER
    </span>

    <span className="text-[60px] md:text-[76px] font-black italic text-black">
        CAR
    </span>
  </div>

  <div className="mt-1 flex items-end gap-4">
    <span className="text-[60px] md:text-[76px] font-black italic text-[#0A2C8F]">
      BETTER
    </span>

    <span className="text-[60px] md:text-[76px] font-black italic text-black">
        FEEL
    </span>
  </div>

</h1>

 <p className="mt-10 max-w-lg text-[22px] leading-9 font-semibold text-darkgray-700">
  Premium doorstep car wash
  <br />
  and detailing services.
</p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              onClick={openBooking}
              className="h-12 w-full rounded-full bg-brand-primary px-8 text-base font-semibold text-white shadow-lg shadow-brand-primary/30 hover:bg-brand-primary/90 sm:w-auto"
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
              className="h-12 w-full rounded-full bg-[#25D366] px-8 text-base font-semibold text-white hover:bg-[#20bd5a] sm:w-auto"
            >
              <MessageCircle className="size-4" data-icon="inline-start" />
              WhatsApp
            </Button>
             <button
  onClick={() => window.location.href = "tel:+919876543210"}
    className="inline-flex h-12 min-w-[100px] items-center justify-center rounded-full bg-black px-8 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-800"
>
  <Phone className="mr-2 h-5 w-5" />
  Call Now
</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
