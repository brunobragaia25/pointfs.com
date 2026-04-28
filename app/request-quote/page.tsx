"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Reusable field components ──────────────────────────────────────────
function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      <label className="text-sm font-semibold text-[#ED7426]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-[#E6E6E6] h-[53px] rounded-[8px] px-3 py-[13px] text-sm text-[#444] placeholder:text-[#939393] focus:outline-none focus:ring-2 focus:ring-[#03395B]/20 focus:bg-white transition-colors w-full"
      />
    </div>
  );
}

// ── Shipment types ─────────────────────────────────────────────────────
const SHIPMENT_TYPES = [
  "Full Truckload (FTL)",
  "Less Truckload (LTL)",
  "Expedited",
  "Drayage",
  "Heavy Haul",
];

// ── Initial form state ─────────────────────────────────────────────────
const initialForm = {
  origin: "",
  destination: "",
  cargoDetails: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  shipmentType: "",
  terms: false,
};

// ── Page ───────────────────────────────────────────────────────────────
export default function RequestQuotePage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleShipmentType(type: string) {
    setForm((prev) => ({ ...prev, shipmentType: type }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />

      {/* ══ PAGE TITLE ═══════════════════════════════════════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 pt-16 md:pt-24 pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[48px] font-semibold text-[#03395B] leading-tight"
            variants={fadeUp}
          >
            Request a Freight Quote
          </motion.h1>
          <motion.div className="flex items-end gap-2 pb-2" variants={fadeUp}>
            <span className="text-2xl font-bold text-[#444] text-right">
              Be PFS partner carrier
            </span>
            <Link
              href="/carriers/partner"
              className="text-2xl font-medium text-[#ED7426] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Click here
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ MAIN FORM CARD ═══════════════════════════════════════════ */}
      <section className="bg-white pb-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {status === "success" ? (
            <div className="border border-[#949494] rounded-[20px] p-5 sm:p-10 md:p-16 flex flex-col items-center gap-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-[#03395B] text-2xl font-semibold">Quote Request Sent!</h2>
              <p className="text-[#444] max-w-md">
                Thank you! Our team will review your request and reach out within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-[#ED7426] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#ED7426]/90 transition-colors"
              >
                Request another quote
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-[#949494] rounded-[20px] p-5 sm:p-10 md:p-16 flex flex-col gap-10"
            >
              {/* Row 1 — Origin + Destination */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Field
                  label="Origin (City/Zip Code)*"
                  name="origin"
                  placeholder="Enter origin zip code"
                  value={form.origin}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Destination (City/Zip Code)*"
                  name="destination"
                  placeholder="Enter destination zip code"
                  value={form.destination}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 2 — Cargo Details */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-semibold text-[#ED7426]">
                  Shipment / Cargo Details*
                </label>
                <textarea
                  name="cargoDetails"
                  value={form.cargoDetails}
                  onChange={handleChange}
                  required
                  placeholder="Enter your details"
                  rows={5}
                  className="bg-[#E6E6E6] rounded-[8px] px-3 py-[13px] text-sm text-[#444] placeholder:text-[#939393] focus:outline-none focus:ring-2 focus:ring-[#03395B]/20 focus:bg-white transition-colors resize-none w-full"
                />
              </div>

              {/* Row 3 — First + Last name */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Field
                  label="First Name*"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Last Name*"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 4 — Email + Phone + Organization */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Field
                  label="E-mail*"
                  name="email"
                  type="email"
                  placeholder="Enter your e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Phone Number*"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Organization Name"
                  name="organization"
                  placeholder="Enter your organization name"
                  value={form.organization}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5 — Shipment Type */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-semibold text-[#ED7426]">
                  Shipment Type*
                </label>
                <div className="border border-[#949494] rounded-[8px] p-10 flex items-center justify-between flex-wrap">
                  {SHIPMENT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleShipmentType(type)}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          form.shipmentType === type
                            ? "border-[#ED7426] bg-[#ED7426]"
                            : "border-[#D9D9D9] bg-[#D9D9D9] group-hover:border-[#ED7426]"
                        }`}
                      >
                        {form.shipmentType === type && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-[#444]">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6 — Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  required
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 accent-[#03395B]"
                />
                <span className="text-sm font-semibold text-[#444]">
                  I agree to{" "}
                  <Link href="/terms" className="text-[#ED7426] underline hover:opacity-80">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#ED7426] underline hover:opacity-80">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-500 text-sm -mt-5">
                  Something went wrong. Please try again or call us at 844-204-7016.
                </p>
              )}

              {/* Row 7 — Submit */}
              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#ED7426] text-white text-sm font-semibold w-[140px] h-[53px] rounded-[8px] hover:bg-[#ED7426]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Get Quote"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
