"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgTruckDriver = "/images/Truck driver on the road.png";
const imgHandshake   = "/images/Business partnership handshake.png";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Photo frame ────────────────────────────────────────────────────────
function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-[610px] h-[260px] sm:h-[480px] rounded-[20px] p-3 bg-white shadow-[0px_0px_53.2px_0px_rgba(0,0,0,0.15)]">
      <div className="rounded-[12px] overflow-hidden w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default function CarriersPage() {

  return (
    <>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="bg-[#03395B] py-[120px]">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col items-center gap-6 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-[64px] font-semibold text-white leading-tight"
            variants={fadeUp}
          >
            Freight Carriers
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#FFCCAD] leading-snug max-w-[560px]"
            variants={fadeUp}
          >
            More loads, fewer empty miles, faster pay and top-tier support.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ SECTION 1 — image left, text right ════════════════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 py-20 flex flex-col md:flex-row items-center gap-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <PhotoFrame src={imgTruckDriver} alt="Truck driver on the road" />
          </motion.div>

          <motion.div className="flex flex-col gap-6 flex-1 min-w-0" variants={stagger}>
            <motion.h2
              className="text-[48px] font-semibold text-[#03395B] leading-tight"
              variants={fadeUp}
            >
              Drive your Business Forward – FAST.
            </motion.h2>
            <motion.p
              className="text-2xl text-[#444] leading-[1.75]"
              variants={fadeUp}
            >
              Finding quality freight has never been easier. Partnering for
              every mile with POINT FREIGHT you can keep your trucks rolling
              and your business growing. With fresh loads added every day, the
              road ahead is always open.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/carriers/partner"
                className="inline-flex items-center gap-2.5 border border-[#949494] rounded-lg px-3.5 py-3 text-sm font-medium text-[#444] hover:border-[#CCCCCC] transition-colors"
              >
                <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#03395B] flex-shrink-0" />
                BECOME A PARTNER
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5">
        <div className="w-full h-px bg-[#D9D9D9]" />
      </div>

      {/* ══ SECTION 2 — text left, image right ════════════════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 py-20 flex flex-col md:flex-row items-center gap-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="flex flex-col gap-6 flex-1 min-w-0" variants={stagger}>
            <motion.p
              className="text-2xl text-[#444] leading-[1.75]"
              variants={fadeUp}
            >
              Our platform is available online and through our mobile app
              providing carriers the agility to start shipment anytime,
              anywhere. Partnership matters – and working with a reputable
              freight broker adds a new level of reliability, consistence and
              growth to your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/carriers/partner"
                className="inline-flex items-center gap-2.5 border border-[#949494] rounded-lg px-3.5 py-3 text-sm font-medium text-[#444] hover:border-[#CCCCCC] transition-colors"
              >
                <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#03395B] flex-shrink-0" />
                BECOME A PARTNER
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-shrink-0">
            <PhotoFrame src={imgHandshake} alt="Business partnership handshake" />
          </motion.div>
        </motion.div>
      </section>

      <Footer />

    </>
  );
}
