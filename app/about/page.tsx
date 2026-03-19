"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgTruckLeft    = "https://www.figma.com/api/mcp/asset/5f43c92a-7361-4d2c-936f-30194e8d3a33";
const imgPersonRight1 = "https://www.figma.com/api/mcp/asset/d49c05db-8b12-41b2-8c16-5d8fef638b58";
const imgPersonRight2 = "https://www.figma.com/api/mcp/asset/40ac3c04-32df-48c4-b392-1f1fc356c0da";
const imgDivider      = "https://www.figma.com/api/mcp/asset/bae325eb-4184-4c8b-8048-efae9ffc04ff";

const features = [
  {
    title: "Fast Response",
    body: (
      <>
        <p className="mb-0">Always on when you need us — real people, real support, 24/7.</p>
        <p>Rapid communication from U.S-based specialists ensures your freight keeps moving without delays.</p>
      </>
    ),
  },
  {
    title: "Professional Drivers",
    body: (
      <>
        <p className="mb-0">Only top-tier operators behind the wheel.</p>
        <p>Every driver is fully certified, rigorously vetted, and trained to deliver safety and performance on every mile.</p>
      </>
    ),
  },
  {
    title: "Right Equipment for Every Job",
    body: (
      <>
        <p className="mb-0">The right assets, ready when your shipment is.</p>
        <p>From standard loads to specialized moves, we match the proper equipment to guarantee precision and reliability.</p>
      </>
    ),
  },
  {
    title: "Security First",
    body: (
      <>
        <p className="mb-0">Your freight is protected at every step.</p>
        <p>TSA and TWIC compliance plus optional enhanced insurance coverage safeguard even the most sensitive shipments.</p>
      </>
    ),
  },
  {
    title: "Ongoing Oversight",
    body: (
      <>
        <p className="mb-0">Visibility that never takes a break.</p>
        <p>Dedicated account managers and continuous GPS tracking keep you informed from pickup to delivery.</p>
      </>
    ),
  },
  {
    title: "Complete Documentation",
    body: (
      <>
        <p className="mb-0">Proof in hand, instantly.</p>
        <p>Immediate digital delivery confirmations and photos give you full transparency the moment your shipment arrives.</p>
      </>
    ),
  },
];

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="bg-[#03395B] w-full">
        <div className="max-w-[1280px] mx-auto px-5 py-24 flex flex-col items-center">
          <motion.div
            className="flex flex-col items-center gap-3 text-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#ED7426] text-xl font-semibold leading-normal">ABOUT US</p>
            <h1 className="text-white text-[48px] font-semibold leading-none text-center w-[972px]">
              From Quote to Delivery – POINT FREIGHT got your Shipping Needs covered.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BY PARTNERING — 6 feature cards
      ══════════════════════════════════════════ */}
      <section className="bg-white py-24 pb-12">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-10">
          <motion.h2
            className="text-[#ED7426] text-[36px] font-semibold leading-normal w-[522px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            By partnering with Point Freight, you can count on
          </motion.h2>

          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <motion.div
              className="flex gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.slice(0, 3).map((f) => (
                <motion.div key={f.title} variants={fadeUp} className="flex-1">
                  <FeatureCard title={f.title} body={f.body} />
                </motion.div>
              ))}
            </motion.div>
            {/* Row 2 */}
            <motion.div
              className="flex gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.slice(3).map((f) => (
                <motion.div key={f.title} variants={fadeUp} className="flex-1">
                  <FeatureCard title={f.title} body={f.body} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DELIVERING CONFIDENCE
      ══════════════════════════════════════════ */}
      <section className="bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-10">
          {/* Section heading */}
          <motion.div
            className="text-[#ED7426] text-[36px] font-semibold leading-[1.4]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-0">Delivering Confidence, Coast to Coast, Point to Point.</p>
            <p>Your Freight. Our Commitment. Partnering for Every Mile.</p>
          </motion.div>

          {/* Divider */}
          <div className="relative h-px w-full">
            <img src={imgDivider} alt="" className="w-full h-px object-fill" />
          </div>

          {/* Row 1: truck left + text right */}
          <div className="flex gap-16 items-center">
            <motion.div
              className="w-[588px] h-[640px] rounded-[16px] overflow-hidden flex-shrink-0 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={imgTruckLeft} alt="Point Freight truck" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col gap-10 text-[#444] text-xl font-normal leading-[1.75]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                At POINT FREIGHT SYSTEMS, we specialize in delivering sophisticated ground-transportation solutions tailored to meet the varied demands of modern businesses. Whether you require full truckload (FTL), less-than-truckload (LTL), expedited shipping, or cargo with special handling needs, we design and execute logistics strategies with precision, reliability, and care.
              </p>
              <p>
                Our team of seasoned logistics professionals — together with a carefully vetted network of carriers — ensures that every shipment is handled with the highest standards of safety, compliance, and efficiency. From origin to destination, we monitor and manage each step with rigorous attention to detail, giving you confidence that cargo arrives on time, intact, and under full traceability.
              </p>
            </motion.div>
          </div>

          {/* Row 2: text left + image right */}
          <div className="flex gap-16 items-center">
            <motion.div
              className="flex-1 flex flex-col gap-7 text-[#444] text-xl font-normal leading-[1.75]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                In today's fast-paced, unpredictable environment, we know that timing and flexibility are everything. That's why we build robust processes designed for agility: rapid response to changing schedules, transparent real-time tracking, proactive communication, and the capacity to adapt on short notice — all while keeping costs competitive and service levels high.
              </p>
              <p>
                We view every shipment as a partnership. It's about creating value, building trust, and supporting the long-term success of our clients. We go beyond expectations to deliver not just transport, but peace of mind.
              </p>
              <p>
                Choose POINT FREIGHT SYSTEMS, and partner with a team committed to excellence, integrity, and results. Let us transform your transportation challenges into streamlined, reliable solutions.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 h-[640px] rounded-[16px] overflow-hidden flex-shrink-0 relative bg-[#D9D9D9]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={imgPersonRight1} alt="Logistics professional" className="absolute inset-0 w-full h-full object-cover" />
              <img src={imgPersonRight2} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — frosted glass with orange gradient inner
      ══════════════════════════════════════════ */}
      <section className="bg-white pb-24 pt-12">
        <div className="max-w-[1280px] mx-auto px-5">
          <motion.div
            className="backdrop-blur-[46px] bg-white/20 border border-white rounded-[20px] p-3 shadow-[0px_0px_53px_0px_rgba(0,0,0,0.08)] h-[480px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="w-full h-full rounded-[12px] flex flex-col items-center justify-center gap-7 px-[60px] py-[110px]"
              style={{ background: "linear-gradient(252deg, #ED7326 7.92%, #FFA368 106.6%)" }}
            >
              <h2 className="text-white text-[54px] font-bold leading-[1.2] text-center">
                Looking for a Reliable Shipping &amp; Transportation Partner?
              </h2>
              <button
                onClick={() => setQuoteOpen(true)}
                className="border border-white flex items-center gap-2.5 px-3.5 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white text-sm font-medium whitespace-nowrap">GET A FREIGHT QUOTE</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}

// ── Feature Card ──────────────────────────────────────────────────────
function FeatureCard({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="border border-[#D9D9D9] rounded-[16px] p-12 h-full flex flex-col justify-between gap-10 overflow-hidden">
      <div className="flex flex-col gap-5">
        {/* Gradient icon circle */}
        <div className="relative w-16 h-16 flex-shrink-0">
          {/* Outer gradient circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#FFCCAD]" />
          {/* Inner gradient circle */}
          <div
            className="absolute rounded-full bg-gradient-to-b from-[#FD9C63] to-[#FFF0E6]"
            style={{ top: "6.72px", left: "7.11px", width: "49.78px", height: "50.96px" }}
          />
          {/* Icon */}
          <Share2 className="absolute w-6 h-6 text-[#03395B]" style={{ top: "20px", left: "20px" }} />
        </div>

        <h3 className="text-[#03395B] text-[28px] font-semibold leading-[1.4]">{title}</h3>
      </div>
      <div className="text-[#444] text-xl font-medium leading-[1.4]">{body}</div>
    </div>
  );
}
