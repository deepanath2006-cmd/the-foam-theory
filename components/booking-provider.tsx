"use client";

import { createContext, useContext, useState } from "react";

import { BookingModal } from "@/components/booking-modal";

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ openBooking: () => setOpen(true) }}>
      {children}
      <BookingModal open={open} onOpenChange={setOpen} />
    </BookingContext.Provider>
  );
}
