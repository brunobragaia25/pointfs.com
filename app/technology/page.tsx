"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgHeroBg1    = "/images/carriers-hero.png";
const imgHeroBg2    = "https://www.figma.com/api/mcp/asset/dbd28390-f43e-4931-b90e-90b55a3192a8";
const imgHeroBg3    = "https://www.figma.com/api/mcp/asset/ae24d532-1806-4eb7-acf6-e291911b3932";
const imgMobility    = "/images/mobile app screen 1.png";
const imgMobilityTwo = "/images/mobile app screen 2.png";
const imgSimplicity  = "/images/mobile app screen 3.png";
const imgPerf        = "/images/Perfomance-dashboard.png";
const imgMobilityDesktop = "/images/iphones-laranja-desktop.png";
const imgSimplicityDesktop = "/images/iphone-azul-desktop.png";
const imgPerfDesktop = "/images/tela-laranja-desktop.png";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Feature Card ───────────────────────────────────────────────────────
function FeatureCard({ title, body, icon }: { title: string; body: string; icon: string }) {
  return (
    <motion.div
      className="border border-[#D9D9D9] rounded-[16px] p-12 flex flex-col gap-10 flex-1"
      variants={fadeUp}
    >
      {/* Gradient icon circle */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#FFCCAD]" />
        <div
          className="absolute rounded-full bg-gradient-to-b from-[#FD9C63] to-[#FFF0E6]"
          style={{ top: "6.72px", left: "7.11px", width: "49.78px", height: "50.96px" }}
        />
        <Icon icon={icon} className="absolute w-6 h-6 text-[#03395B]" style={{ top: "20px", left: "20px" }} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[20px] font-semibold text-[#03395B] leading-[1.4]">{title}</h3>
        <p className="text-[16px] font-medium text-[#444] leading-[1.4]">{body}</p>
      </div>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────
export default function TechnologyPage() {

  return (
    <>
      <Navbar />

      {/* ══ HERO — layered background images ══════════════════════════ */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src={imgHeroBg1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={imgHeroBg2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={imgHeroBg3}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ══ INTRO ═════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 py-20 flex flex-col items-center text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[28px] md:text-[48px] font-semibold text-[#03395B] max-w-[1148px] leading-[38px] md:leading-[58px]"
            variants={fadeUp}
          >
            Boost productivity and keep your freight moving seamlessly with
            smart logistics tools.
          </motion.h2>
        </motion.div>
      </section>

      {/* ══ FEATURE CARDS ═════════════════════════════════════════════ */}
      <section className="bg-white pb-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col md:flex-row gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureCard
            title="Find Loads"
            icon="solar:magnifer-bold"
            body="Instantly access a wide network of verified loads, book seamlessly, and enjoy dedicated support with flexible options designed for professional haulers."
          />
          <FeatureCard
            title="Book Instantly"
            icon="solar:calendar-add-bold"
            body="Easily start loads and upload documents anytime, anywhere — all from one connected platform."
          />
          <FeatureCard
            title="Detailed Control Panel"
            icon="solar:chart-2-bold"
            body="Gain full visibility and control over every load, mile, and cost with advanced transparency tools that simplify management."
          />
        </motion.div>
      </section>

      {/* ══ MOBILITY ══════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-10">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center gap-8 md:gap-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Text */}
          <motion.div className="flex flex-col gap-5 flex-1 min-w-0 text-center md:text-left" variants={stagger}>
            <motion.p
              className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#03395B] tracking-[0.4em] uppercase"
              variants={fadeUp}
            >
              MOBILITY
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-[44px] font-semibold text-[#ED7426] leading-[1.4]"
              variants={fadeUp}
            >
              Ship Smarter. Ship Faster
            </motion.h2>
            <motion.p
              className="text-[16px] md:text-2xl text-[#444] leading-[1.75]"
              variants={fadeUp}
            >
              Receive your load by SMS link or identify the load and swipe to
              start the shipment. Mobile App is the simple way to move forward.
            </motion.p>
          </motion.div>

          {/* Image - All versions */}
          <motion.div
            className="flex-1 flex-shrink-0"
            variants={fadeUp}
          >
            <img src={imgMobilityDesktop} alt="Mobile app screens" className="w-full h-auto object-contain" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ SIMPLICITY ════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-10 mb-12 md:mb-0">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-16 md:flex-row-reverse md:gap-16 md:items-center md:justify-center">
          {/* Text Section */}
          <motion.div className="flex flex-col gap-5 flex-1 min-w-0 text-center md:text-left" variants={stagger}>
            <motion.p
              className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#03395B] tracking-[0.4em] uppercase"
              variants={fadeUp}
            >
              SIMPLICITY
            </motion.p>
            <motion.p
              className="text-[16px] md:text-2xl text-[#444] leading-[1.75]"
              variants={fadeUp}
            >
              One place to receive cargo and appointment details, view stop
              locations and routes, report exceptions, upload documents and
              pictures, exchange messages with translator assistance anytime.
            </motion.p>
          </motion.div>

          {/* Image - All versions */}
          <motion.div
            className="flex-1 flex-shrink-0"
            variants={fadeUp}
          >
            <img src={imgSimplicityDesktop} alt="App screenshot" className="w-full h-auto object-contain" />
          </motion.div>
        </div>
      </section>

      {/* ══ PERFORMANCE ═══════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-10 mt-12 md:mt-10 mb-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col gap-10 md:gap-10 overflow-visible"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Text */}
          <motion.div className="flex flex-col gap-5 w-full text-center" variants={stagger}>
            <motion.p
              className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#03395B] tracking-[0.4em] uppercase"
              variants={fadeUp}
            >
              PERFORMANCE
            </motion.p>
            <motion.p
              className="text-[16px] md:text-2xl text-[#444] leading-[1.75]"
              variants={fadeUp}
            >
              Operation dashboard displaying in real time what matters — route,
              load specifics, miles and costs. Relevant statistics and
              information to carriers for business management efficiency.
            </motion.p>
          </motion.div>

          {/* Dashboard screenshot - All versions */}
          <motion.div className="relative w-full flex justify-center" variants={fadeUp}>
            <div className="w-full max-w-[1152px]">
              <img src={imgPerfDesktop} alt="Performance dashboard" className="w-full h-auto object-contain" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />

    </>
  );
}
