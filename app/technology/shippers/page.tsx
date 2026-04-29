"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgHeroBg1      = "/images/shippers-hero.png";
const imgHeroBg2      = "";
const imgPlatform1    = "/images/Plataform dashboard screenshot.png";
const imgClientReport = "/images/Client report view.png";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Page ───────────────────────────────────────────────────────────────
export default function ShippersTechnologyPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* ══ HERO — layered background images ══════════════════════════ */}
      <section className="relative h-[480px] overflow-hidden bg-[#dbdbdb]">
        <img
          src={imgHeroBg1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ══ INTRO — "Collaborative Logistics for Shippers" ════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 py-20 flex flex-col items-center gap-5 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[48px] font-semibold text-[#ED7426] leading-tight max-w-[952px]"
            variants={fadeUp}
          >
            Collaborative Logistics for Shippers
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#444] leading-snug"
            variants={fadeUp}
          >
            Excellence Delivered No matter the Distance
          </motion.p>
        </motion.div>
      </section>

      {/* ══ BODY — End-to-End Transportation Management ═══════════════ */}
      <section className="bg-white pb-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col items-center gap-8 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[28px] md:text-[48px] font-semibold text-[#03395B] leading-tight max-w-[952px]"
            variants={fadeUp}
          >
            End-to-End Transportation Management That Maximizes Value-Add for
            Your Supply Chain
          </motion.h2>
          <motion.div
            className="flex flex-col gap-6 text-[16px] md:text-2xl text-[#444] leading-[1.75] max-w-[1100px]"
            variants={fadeUp}
          >
            <p>
              In a world where labor disruptions, geopolitical tensions, and
              market volatility can halt supply chains overnight, businesses need
              partners built for uncertainty. POINT FREIGHT SYSTEMS delivers
              stability in the face of disruption — with scalable capacity for
              peak seasons, advanced technology that drives smarter decisions,
              and a rigorously vetted network of carriers proven for capability
              and experience.
            </p>
            <p>
              Our digital onboarding carrier process utilizes advanced risk
              assessment tools, making it simple, fast and scalable. We execute
              real-time compliance monitoring to ensure carriers continuously
              meet your business standards.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ ALL-IN-ONE HEADING ════════════════════════════════════════ */}
      <section className="bg-white pt-12 pb-5">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col items-center gap-4 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[28px] md:text-[44px] font-semibold text-[#ED7426]"
            style={{ lineHeight: "38px" }}
            variants={fadeUp}
          >
            All-in-One freight Management: Quote, Book, Track 24/7/365 -
            Stress-free
          </motion.h2>
          <motion.p
            className="text-[16px] md:text-2xl text-[#444] leading-[1.75]"
            variants={fadeUp}
          >
            Check the status and location of your loads anytime, anywhere right
            from the platform.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ PLATFORM SCREENSHOT CARD 1 ═══════════════════════════════ */}
      <section className="bg-white pt-5 pb-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-[20px] bg-white/20 backdrop-blur-[46px] shadow-[0px_0px_53.2px_0px_rgba(0,0,0,0.08)] p-3">
            <div className="rounded-[12px] overflow-hidden bg-[#dbdbdb] h-auto">
              <img
                src={imgPlatform1}
                alt="Platform dashboard screenshot"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ COMPREHENSIVE ANALYTICS HEADING ══════════════════════════ */}
      <section className="bg-white pt-12 pb-5">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[28px] md:text-[44px] font-semibold text-[#ED7426] leading-[1.4] text-center md:text-left"
            variants={fadeUp}
          >
            Comprehensive analytics and performance reports
          </motion.h2>
          <motion.p
            className="text-[16px] md:text-2xl text-[#444] leading-[1.75] text-center md:text-left"
            variants={fadeUp}
          >
            We deliver the difference…. Technology and transparency are tailored
            to suit your business, optimize costs, efficiency, and services
            quality.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ CLIENT REPORT SCREENSHOT CARD 2 (orange gradient bg) ════ */}
      <section className="bg-white pt-5 pb-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-[20px] bg-white/20 backdrop-blur-[46px] shadow-[0px_0px_53.2px_0px_rgba(0,0,0,0.08)] p-3">
            <div
              className="rounded-[12px] overflow-hidden relative flex items-end justify-end h-auto"
              style={{
                background:
                  "linear-gradient(253.2deg, #ED7326 7.92%, #FFA368 106.6%)",
              }}
            >
              <img
                src={imgClientReport}
                alt="Client report view"
                className="object-contain"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ CTA CARD — blue gradient ══════════════════════════════════ */}
      <section className="bg-white py-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-[20px] bg-white/20 backdrop-blur-[46px] border border-white shadow-[0px_0px_53.2px_0px_rgba(0,0,0,0.08)] p-3">
            <div
              className="rounded-[12px] px-[60px] py-[110px] flex flex-col items-center gap-7"
              style={{
                background:
                  "linear-gradient(251.46399979787628deg, #03395B 5.2597%, #0679C1 105.26%)",
              }}
            >
              <h2
                className="text-[32px] sm:text-4xl md:text-[54px] font-bold text-white text-center max-w-[1096px] leading-[40px] md:leading-[65px]"
              >
                Looking for a Reliable Shipping &amp; Transportation Partner?
              </h2>
              <button
                onClick={() => setQuoteOpen(true)}
                className="inline-flex items-center gap-2 border border-white rounded-lg px-4 py-3 text-sm font-medium text-white hover:border-white/50 transition-colors"
              >
                <Icon
                  icon="solar:hamburger-menu-bold"
                  className="w-6 h-6 flex-shrink-0 text-[#ED7426]"
                />
                GET A FREIGHT QUOTE
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
