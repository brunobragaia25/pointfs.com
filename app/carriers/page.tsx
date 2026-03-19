"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  message: "",
};

export default function CarriersPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

      <main className="bg-white min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-semibold text-navy leading-tight max-w-xs">
            Be a Carrier Partner with Us
          </h1>

          {/* Form card */}
          <div className="border border-gray-300 rounded-2xl p-8 lg:p-16 flex flex-col gap-10">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-6 py-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-navy text-2xl font-semibold">
                  Message Sent!
                </h2>
                <p className="text-gray-500 max-w-md">
                  Thanks for reaching out. Our team will contact you within 24
                  hours to discuss your carrier partnership.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-orange text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-orange/90 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Row 1: First + Last name */}
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

                {/* Row 2: Email + Phone + Organization */}
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

                {/* Textarea */}
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-semibold text-orange">
                    Let us know how we can help
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Send your message"
                    rows={6}
                    className="bg-[#e6e6e6] rounded-lg px-3 py-3.5 text-sm text-gray-700 placeholder:text-[#939393] focus:outline-none focus:ring-2 focus:ring-orange/30 focus:bg-white transition-colors resize-none w-full"
                  />
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-500 text-sm -mt-6">
                    Something went wrong. Please try again or call us at
                    844-204-7016.
                  </p>
                )}

                {/* Submit */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-orange text-white text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-orange/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-36"
                  >
                    {status === "loading" ? "Sending..." : "Let's Connect"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      <label className="text-sm font-semibold text-orange">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="bg-[#e6e6e6] rounded-lg px-3 py-3.5 h-[53px] text-sm text-gray-700 placeholder:text-[#939393] focus:outline-none focus:ring-2 focus:ring-orange/30 focus:bg-white transition-colors w-full"
      />
    </div>
  );
}
