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

// ── Field component ────────────────────────────────────────────────────
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

// ── Initial state ──────────────────────────────────────────────────────
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  message: "",
  agreed: false,
};

// ── Page ───────────────────────────────────────────────────────────────
export default function CarrierPartnerPage() {
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/carrier", {
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

      <section className="bg-white py-24">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col gap-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Page title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[48px] font-semibold text-[#03395B] leading-tight text-center md:text-left"
            variants={fadeUp}
          >
            Be a Carrier Partner with Us
          </motion.h1>

          {/* Form card */}
          <motion.div
            className="border border-[#949494] rounded-[20px] p-5 sm:p-10 md:p-16 flex flex-col gap-10"
            variants={fadeUp}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center gap-6 py-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-[#03395B] text-2xl font-semibold">Message Sent!</h2>
                <p className="text-[#444] max-w-md">
                  Thanks for reaching out. Our team will contact you within 24 hours to discuss your carrier partnership.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-[#ED7426] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#ED7426]/90 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                {/* Row 1 — First + Last name */}
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

                {/* Row 2 — Email + Phone + Organization */}
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
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <Field
                    label="Organization Name"
                    name="organization"
                    placeholder="Enter your organization name"
                    value={form.organization}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 3 — Message */}
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-semibold text-[#ED7426]">
                    Let us know how we can help
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Send your message"
                    rows={5}
                    className="bg-[#E6E6E6] rounded-[8px] px-3 py-[13px] text-sm text-[#444] placeholder:text-[#939393] focus:outline-none focus:ring-2 focus:ring-[#03395B]/20 focus:bg-white transition-colors resize-none w-full"
                  />
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Agreement */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={form.agreed}
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

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#ED7426] text-white text-sm font-semibold w-full md:w-[140px] h-[53px] rounded-[8px] hover:bg-[#ED7426]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Let's Connect"}
                  </button>
                </div>

              </form>
            )}
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
