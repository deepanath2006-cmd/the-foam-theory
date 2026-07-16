"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SERVICES, VEHICLE_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormState = {
  fullName: string;
  mobile: string;
  vehicleType: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  serviceRequired: string;
  specialInstructions: string;
};

const initialForm: FormState = {
  fullName: "",
  mobile: "",
  vehicleType: "",
  address: "",
  preferredDate: "",
  preferredTime: "",
  serviceRequired: "",
  specialInstructions: "",
};

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setForm(initialForm);
    }
  }, [open]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const bookingData = {
    fullName: form.fullName,
    phone: form.mobile,
    vehicleType: form.vehicleType,
    address: form.address,
    date: form.preferredDate,
    time: form.preferredTime,
    service: form.serviceRequired,
    instructions: form.specialInstructions,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzrVj8hzX7is7aLllD1dEm_CzcOPpyyf0QCXyaFCS6cXDceapgNvL5WLOgj8-W0wVzX9Q/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(bookingData),
      }
    );

    alert("✅ Booking Submitted Successfully!");

    setSubmitted(true);
    setForm(initialForm);

  } catch (error) {
    console.error(error);
    alert("❌ Failed to submit booking.");
  }
};

  const handleClose = () => onOpenChange(false);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close booking form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <h2 id="booking-title" className="text-xl font-bold text-slate-900">
                Book Your Wash
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={handleClose}
                className="inline-flex size-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <svg
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold leading-relaxed text-slate-900">
                    Thank you! Our team will contact you shortly.
                  </p>
                  <Button
                    onClick={handleClose}
                    className="mt-8 h-11 rounded-full bg-brand-primary px-8 text-white hover:bg-brand-primary/90"
                  >
                    Close
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      required
                      type="text"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className={inputClass}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      required
                      type="tel"
                      value={form.mobile}
                      onChange={(e) => updateField("mobile", e.target.value)}
                      className={inputClass}
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleType" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Vehicle Type
                    </label>
                    <select
                      id="vehicleType"
                      required
                      value={form.vehicleType}
                      onChange={(e) => updateField("vehicleType", e.target.value)}
                      className={cn(inputClass, "appearance-none")}
                    >
                      <option value="">Select vehicle type</option>
                      {VEHICLE_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Address
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={2}
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      className={cn(inputClass, "resize-none")}
                      placeholder="Your home or office address"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Preferred Date
                      </label>
                      <input
                        id="preferredDate"
                        required
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => updateField("preferredDate", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Preferred Time
                      </label>
                      <input
                        id="preferredTime"
                        required
                        type="time"
                        value={form.preferredTime}
                        onChange={(e) => updateField("preferredTime", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceRequired" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Service Required
                    </label>
                    <select
                      id="serviceRequired"
                      required
                      value={form.serviceRequired}
                      onChange={(e) => updateField("serviceRequired", e.target.value)}
                      className={cn(inputClass, "appearance-none")}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specialInstructions" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Special Instructions <span className="text-slate-400">(Optional)</span>
                    </label>
                    <textarea
                      id="specialInstructions"
                      rows={2}
                      value={form.specialInstructions}
                      onChange={(e) => updateField("specialInstructions", e.target.value)}
                      className={cn(inputClass, "resize-none")}
                      placeholder="Any specific requests or notes"
                    />
                  </div>

                  <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleClose}
                      className="h-11 flex-1 rounded-full border-slate-200"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="h-11 flex-1 rounded-full bg-brand-primary text-white shadow-md shadow-brand-primary/25 hover:bg-brand-primary/90"
                    >
                      Book Now
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
