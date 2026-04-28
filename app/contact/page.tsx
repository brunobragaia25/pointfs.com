"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgTruckPhoto = "/images/Freight truck on the road.png";

// ── Countries list ────────────────────────────────────────────────────
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hong Kong", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

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

function SelectField({
  label,
  name,
  placeholder,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      <label className="text-sm font-semibold text-[#ED7426]">{label}</label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="bg-[#E6E6E6] h-[53px] rounded-[8px] px-3 w-full text-sm text-[#444] appearance-none focus:outline-none focus:ring-2 focus:ring-[#03395B]/20 focus:bg-white transition-colors"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#939393] pointer-events-none" />
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────
const initialForm = {
  fullName: "",
  companyName: "",
  jobRole: "",
  email: "",
  phone: "",
  country: "",
  reason: "",
  origin: "",
  destination: "",
  gdpr: false,
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
      const res = await fetch("/api/contact", {
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

      {/* ══ HERO HEADLINE ════════════════════════════════════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 pt-24 pb-12 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[48px] font-semibold text-[#03395B] leading-tight max-w-[860px] mx-auto"
            variants={fadeUp}
          >
            Reach out to us through our form or directly by phone. We&apos;re
            happy to assist!
          </motion.h1>
        </motion.div>
      </section>

      {/* ══ SPLIT — photo left / form right ══════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-5 mb-16">
        <section className="flex flex-col md:flex-row rounded-[20px] overflow-hidden">
          {/* Left: truck photo */}
          <div className="w-full h-[260px] md:w-[40%] md:h-auto flex-shrink-0 relative bg-[#D9D9D9]">
            <img
              src={imgTruckPhoto}
              alt="Freight truck on the road"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: form */}
          <div className="flex-1 bg-[#F5F5F5] px-5 py-8 md:px-16 md:py-12">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-20">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-[#03395B] text-2xl font-semibold">Message Sent!</h2>
              <p className="text-[#444] max-w-sm">
                Thanks for reaching out. Our team will contact you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-[#ED7426] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#ED7426]/90 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <Field
                label="Full Name*"
                name="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                required
              />

              {/* Company Name + Job Role */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Field
                  label="Company Name*"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={form.companyName}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Job Role*"
                  name="jobRole"
                  placeholder="Enter your job role"
                  value={form.jobRole}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email + Phone */}
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
              </div>

              {/* Country + Reason */}
              <div className="flex flex-col sm:flex-row gap-5">
                <SelectField
                  label="Company Country*"
                  name="country"
                  placeholder="Select country"
                  options={countries}
                  value={form.country}
                  onChange={handleChange}
                  required
                />
                <SelectField
                  label="Reason for Contact*"
                  name="reason"
                  placeholder="Select reason"
                  options={["Freight Quote", "Partnership", "Support", "Other"]}
                  value={form.reason}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Origin + Destination */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Field
                  label="Quote from Origin*"
                  name="origin"
                  placeholder="Enter origin city or region"
                  value={form.origin}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Quote to Destination*"
                  name="destination"
                  placeholder="Enter destination city or region"
                  value={form.destination}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* GDPR consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="gdpr"
                  checked={form.gdpr}
                  onChange={handleChange}
                  required
                  className="w-3 h-3 mt-0.5 flex-shrink-0 accent-[#03395B]"
                />
                <span className="text-[10px] font-light text-black leading-[1.2]">
                  By completing and submitting this form, you confirm that you agree to the processing of your personal data by Point as described in the Privacy Notice. We encourage you to review it so POINT is entitled to process your data for the news distribution. *
                </span>
              </label>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again or call us at 844-204-7016.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#03395B] text-white text-base font-semibold h-[53px] rounded-[8px] w-full hover:bg-[#03395B]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Let's Connect"}
              </button>
            </form>
          )}
          </div>
        </section>
      </div>

      {/* ══ CONTACT INFO CARDS ═══════════════════════════════════════ */}
      <section className="bg-white py-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col gap-0"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col sm:flex-row gap-0"
            variants={stagger}
          >
            {/* Call Us */}
            <motion.div className="bg-[#ED7426] flex-1 p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:h-[413px]" variants={fadeUp}>
              <div className="flex flex-col gap-5">
                <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:phone-bold" className="w-6 h-6 text-[#ED7426]" />
                </div>
                <p className="text-white text-2xl font-semibold leading-normal">Call Us</p>
              </div>
              <a href="tel:8442047016" className="text-white text-xl md:text-2xl font-normal leading-normal hover:opacity-80 mt-6 md:mt-0">
                844-204-7016
              </a>
            </motion.div>

            {/* Email Us */}
            <motion.div className="bg-[#03395B] flex-1 p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:h-[413px]" variants={fadeUp}>
              <div className="flex flex-col gap-5">
                <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:letter-bold" className="w-6 h-6 text-[#03395B]" />
                </div>
                <p className="text-white text-2xl font-semibold leading-normal">Email Us</p>
              </div>
              <a href="mailto:info@pointfs.com" className="text-white text-xl md:text-2xl font-normal leading-normal hover:opacity-80 mt-6 md:mt-0">
                info@pointfs.com
              </a>
            </motion.div>

            {/* Locations */}
            <motion.div className="bg-[#F5F5F5] flex-1 p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:h-[413px]" variants={fadeUp}>
              <div className="flex flex-col gap-5">
                <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:map-point-bold" className="w-6 h-6 text-[#888]" />
                </div>
                <p className="text-[#444] text-2xl font-semibold leading-normal">Locations</p>
              </div>
              <div className="flex flex-col gap-8 text-[#666] text-base font-normal leading-normal mt-6 md:mt-0">
                <a href="https://www.google.com/maps/place/650+N+Sam+Houston+Pkwy+E+Suite+550,+Houston,+TX+77060" target="_blank" rel="noopener noreferrer" className="hover:text-[#03395B] transition-colors">
                  <p>Houston (HQ)</p>
                  <p>650 N Sam Houston Pkwy, E Suite 550</p>
                  <p>Houston TX, 77060</p>
                </a>
                <a href="https://www.google.com/maps/place/1+Chisholm+Trail+Road,+Bldg+1+Suite+424,+Round+Rock,+Texas,+78681" target="_blank" rel="noopener noreferrer" className="hover:text-[#03395B] transition-colors">
                  <p>Round Rock</p>
                  <p>1 Chisholm Trail Road, Bldg 1 Suite 424,</p>
                  <p>Round Rock, Texas, 78681</p>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
