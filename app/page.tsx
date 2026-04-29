"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgHeroFrame1   = "/images/image-hero.png";
const imgShippers     = "/images/shippers.png";
const imgCarriers     = "/images/foto-carriers.png";
const imgTruck1       = "/images/foto-truck.png";
const imgCircleDeco   = "/images/circles-hero.png";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const blurInTop: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.15 } },
};

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#03395B] overflow-hidden">
        {/* Decorative concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img src={imgCircleDeco} alt="" className="absolute w-[2144px] h-[2144px] object-contain top-[40px]" />
        </div>

        {/* Text block */}
        <div className="relative max-w-[1280px] mx-auto px-5 pt-16 md:pt-24">
          <motion.div
            className="flex flex-col items-center gap-7 text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col items-center gap-4" variants={fadeUp}>
              <motion.h1
                className="text-[#F3F3F3] text-[44px] sm:text-4xl lg:text-[80px] font-extrabold leading-snug sm:leading-tight text-center max-w-none"
                style={{ lineHeight: "1.2" }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                Where every LOAD hits<br />
                the POINT.
              </motion.h1>
              <p className="text-white text-[24px] sm:text-xl lg:text-2xl font-semibold leading-none">
                Your Freight. Our Focus. Always on POINT.
              </p>
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto sm:justify-center" variants={fadeUp}>
              <Link href="/shippers" className="bg-white text-black text-sm font-medium px-7 py-3 rounded-lg h-[50px] flex items-center justify-center w-full sm:w-[140px] hover:bg-transparent hover:border hover:border-white hover:text-white transition-colors">
                SHIPPERS
              </Link>
              <Link href="/carriers" className="bg-[#ED7426] text-white text-sm font-medium px-7 py-3 rounded-lg h-[50px] flex items-center justify-center w-full sm:w-[140px] hover:bg-transparent hover:border hover:border-[#ED7426] hover:text-white transition-colors">
                CARRIERS
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Photo + orange frame composite */}
        <div className="relative w-full mt-12 md:mt-[72px] flex justify-center items-end">
          {/* Orange rectangle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] md:w-[1240px] h-[200px] sm:h-[300px] md:h-[440px] bg-white rounded-t-[20px] pt-3 px-3">
            <div className="w-full h-full bg-[#ED7426] rounded-t-[12px]" />
          </div>

          {/* Photo */}
          <motion.div
            className="relative z-10 w-full max-w-[1062px] mx-2 sm:mx-5"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="backdrop-blur-[46px] bg-white/20 rounded-t-[20px] pt-2 sm:pt-3 px-2 sm:px-3 shadow-[0px_0px_53px_0px_rgba(0,0,0,0.08)]">
              <div className="relative rounded-t-[12px] overflow-hidden w-full h-[180px] sm:h-[340px] md:h-[498px]">
                <img src={imgHeroFrame1} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ WHAT WE DO ════════════════════════════════════════════════ */}
      <section id="shippers" className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-8 items-center">
          <motion.div
            className="flex flex-col items-center gap-3 text-center w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p className="text-[#ED7426] text-sm sm:text-lg lg:text-xl font-semibold leading-normal" variants={fadeUp}>WHAT WE DO</motion.p>
            <motion.h2 className="text-[#03395B] text-[32px] sm:text-3xl md:text-[48px] font-semibold text-center" style={{ lineHeight: "32px" }} variants={fadeUp}>
              Over The Road Transportation Solutions
            </motion.h2>
          </motion.div>
          <motion.p
            className="text-[#ED7426] text-base md:text-[18px] font-normal leading-[1.75] text-center max-w-[630px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We create transportation solutions by providing end-to-end communication and analytics solutions for shippers and carriers.
          </motion.p>

          {/* Cards */}
          <motion.div
            className="flex flex-col md:flex-row gap-16 md:gap-5 w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Shippers */}
            <motion.div className="flex flex-col gap-5 flex-1" variants={fadeUp}>
              <div className="rounded-[20px] overflow-hidden h-[220px] sm:h-[340px] md:h-[410px]">
                <div className="w-full h-full relative">
                  <img src={imgShippers} alt="Shippers" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left">
                <p className="text-[#03395B] text-[32px] sm:text-3xl md:text-[40px] font-semibold leading-normal">Shippers</p>
                <Link
                  href="/shippers"
                  className="border border-[#444] text-[#444] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#03395B] hover:text-white hover:border-[#03395B] transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </motion.div>

            {/* Carriers */}
            <motion.div className="flex flex-col gap-5 flex-1" variants={fadeUp}>
              <div className="rounded-[20px] overflow-hidden h-[220px] sm:h-[340px] md:h-[410px]">
                <div className="w-full h-full relative">
                  <img src={imgCarriers} alt="Carriers" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left">
                <p className="text-[#03395B] text-[32px] sm:text-3xl md:text-[40px] font-semibold leading-normal">Carriers</p>
                <Link
                  href="/carriers"
                  className="border border-[#444] text-[#444] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#03395B] hover:text-white hover:border-[#03395B] transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT US ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#ED7426] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 py-16 md:py-24 flex flex-col md:grid md:grid-cols-2 gap-0 items-center justify-center">
          {/* Text column */}
          <motion.div
            className="flex flex-col gap-10 justify-center items-center text-center md:items-start md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col gap-3">
              <p className="text-white text-xl font-semibold leading-normal">ABOUT US</p>
              <h2 className="text-[#FFCCAD] text-3xl sm:text-4xl md:text-[48px] font-semibold leading-none">
                Logistics Beyond Expectations
              </h2>
            </div>
            <div className="flex flex-col gap-7 text-white text-base font-normal leading-[1.75]">
              <p>
                POINT FREIGHT SYSTEMS delivers a comprehensive portfolio of highly specialized ground transportation solutions. Our in-house experts and trusted partners ensure a superior logistics experience, combining technical mastery with service that truly keeps your business moving.
              </p>
              <p>
                In an industry where project and program objectives are critical yet often missed, we stand apart by offering a level of performance and consistency that redefines expectations. We focus on delivering agile, reliable, and customized solutions shaped around each client's reality.
              </p>
              <p>
                We think and operate differently. We provide what other transportation companies do not, cannot, or simply choose not to offer—turning complexity into clarity and challenges into progress.
              </p>
            </div>
            <Link
              href="/about"
              className="w-full sm:w-auto bg-[#03395B] text-white text-sm font-medium px-7 py-3 rounded-lg h-[50px] flex items-center justify-center hover:bg-transparent hover:border hover:border-[#03395B] hover:text-white transition-colors"
            >
              KNOW MORE ABOUT US
            </Link>
          </motion.div>
        </div>

        {/* Truck — hidden on mobile, absolute on desktop */}
        <motion.div
          className="hidden md:block absolute right-0 top-0 w-[848px] h-full pointer-events-none"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={imgTruck1} alt="Point Freight truck" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>

        {/* Truck — visible on mobile, stacked below text */}
        <div className="md:hidden w-full h-[400px] relative">
          <img src={imgTruck1} alt="Point Freight truck" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* ══ TALK WITH US ══════════════════════════════════════════════ */}
      <section id="contact" className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-10">
          {/* Header row */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center md:items-end md:justify-between w-full gap-6 text-center md:text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 items-center md:items-start">
              <p className="text-[#ED7426] text-xl font-semibold leading-normal">TALK WITH US</p>
              <h2 className="text-[#03395B] text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight max-w-[500px]">
                Transportation Beyond Expectations
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 flex-shrink-0 w-full sm:w-auto justify-center">
              <button
                onClick={() => setQuoteOpen(true)}
                className="w-full sm:w-auto border border-[#949494] flex items-center justify-center gap-2.5 px-3.5 py-3 rounded-lg hover:border-[#ED7426] transition-colors"
              >
                <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#ED7426] flex-shrink-0" />
                <span className="text-[#444] text-sm font-medium">GET A FREIGHT QUOTE</span>
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#03395B] text-white text-sm font-medium px-7 py-3 h-[50px] rounded-lg border border-[#03395B] hover:bg-transparent hover:text-gray-500 transition-colors flex items-center justify-center"
              >
                SEND A DIRECT MESSAGE
              </Link>
              <Link
                href="/work-with-us"
                className="w-full sm:w-auto bg-[#ED7426] text-white text-sm font-medium px-7 py-3 h-[50px] rounded-lg border border-[#ED7426] hover:bg-transparent hover:text-gray-500 transition-colors flex items-center justify-center"
              >
                WORK WITH US
              </Link>
            </div>
          </motion.div>

          {/* Divider */}
          <hr className="border-[#949494]" />

          {/* 3 contact cards */}
          <motion.div
            className="flex flex-col md:flex-row w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
                <a href="https://www.google.com/maps/place/1+Chisholm+Trail+Road+Bldg+1+Suite+424,+Round+Rock,+Texas+78681" target="_blank" rel="noopener noreferrer" className="hover:text-[#03395B] transition-colors">
                  <p>Round Rock</p>
                  <p>1 Chisholm Trail Road, Bldg 1 Suite 424,</p>
                  <p>Round Rock, Texas, 78681</p>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
