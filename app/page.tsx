"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgHeroFrame1   = "https://www.figma.com/api/mcp/asset/49778fd7-2ba2-4a61-ba24-c429f7b402ea";
const imgHeroFrame2   = "https://www.figma.com/api/mcp/asset/17966790-a151-49bd-b54a-800a5c71161c";
const imgShippers     = "https://www.figma.com/api/mcp/asset/869f8622-4f43-4550-a7de-3802781cf26a";
const imgCarriers     = "https://www.figma.com/api/mcp/asset/192ee905-cf54-48b8-a0eb-8a1ee3252586";
const imgTruck1       = "https://www.figma.com/api/mcp/asset/dc8d907e-882c-4253-afe3-891113b2b3f4";
const imgTruck2       = "https://www.figma.com/api/mcp/asset/d0882578-bb45-44d3-952d-ef5cc8158d2a";
const imgCircleDeco   = "https://www.figma.com/api/mcp/asset/0abd6043-cc43-4779-864e-6f0c2d8f0c75";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — dark navy bg, centered text + aerial image
      ══════════════════════════════════════════ */}
      <section className="relative bg-[#03395B] overflow-hidden">
        {/* Decorative concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img src={imgCircleDeco} alt="" className="absolute w-[2144px] h-[2144px] object-contain opacity-100 left-[-112px] top-0" />
        </div>

        {/* Text block — constrained */}
        <div className="relative max-w-[1280px] mx-auto px-5 pt-24">
          <motion.div
            className="flex flex-col items-center gap-7 text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col items-center gap-4" variants={fadeUp}>
              <h1 className="text-[#F3F3F3] text-[80px] font-extrabold leading-none w-[904px] text-center">
                Where every LOAD hits the POINT.
              </h1>
              <p className="text-white text-2xl font-semibold leading-none">
                Your Freight. Our Focus. Always on POINT.
              </p>
            </motion.div>
            <motion.div className="flex items-center gap-5" variants={fadeUp}>
              <Link href="/carriers" className="bg-[#ED7426] text-white text-sm font-medium px-7 py-3 rounded-lg h-12 flex items-center justify-center w-[140px]">
                CARRIERS
              </Link>
              <Link href="#shippers" className="bg-white text-black text-sm font-medium px-7 py-3 rounded-lg h-12 flex items-center justify-center w-[140px]">
                SHIPPERS
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Photo + orange frame composite */}
        <div className="relative w-full mt-[72px] flex justify-center items-end">

          {/* Orange rectangle — behind photo, wider, aligned to bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1240px] h-[440px] bg-white rounded-t-[20px] pt-3 px-3">
            <div className="w-full h-full bg-[#ED7426] rounded-t-[12px]" />
          </div>

          {/* Photo — on top */}
          <motion.div
            className="relative z-10 w-full max-w-[1062px] mx-5"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="backdrop-blur-[46px] bg-white/20 rounded-t-[20px] pt-3 px-3 shadow-[0px_0px_53px_0px_rgba(0,0,0,0.08)]">
              <div className="relative rounded-t-[12px] overflow-hidden w-full h-[498px]">
                <img src={imgHeroFrame1} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <img src={imgHeroFrame2} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE DO
      ══════════════════════════════════════════ */}
      <section id="shippers" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-8 items-center">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center gap-3 text-center w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p className="text-[#ED7426] text-xl font-semibold leading-normal" variants={fadeUp}>WHAT WE DO</motion.p>
            <motion.h2 className="text-[#03395B] text-[48px] font-semibold leading-none text-center" variants={fadeUp}>
              Over The Road Transportation Solutions
            </motion.h2>
          </motion.div>
          <motion.p
            className="text-[#444] text-base font-normal leading-[1.75] text-center w-[630px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We create transportation solutions by providing end-to-end communication and analytics solutions for shippers and carriers.
          </motion.p>

          {/* Cards */}
          <motion.div
            className="flex gap-5 w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Shippers */}
            <motion.div className="flex flex-col gap-5 flex-1" variants={fadeUp}>
              <div className="backdrop-blur-[46px] bg-white/20 rounded-[20px] p-3 shadow-[0px_0px_53px_0px_rgba(0,0,0,0.20)] h-[410px]">
                <div className="rounded-[12px] overflow-hidden w-full h-full relative">
                  <img src={imgShippers} alt="Shippers" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#03395B] text-[40px] font-semibold leading-normal">Shippers</p>
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="self-start border border-[#444] text-[#444] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#03395B] hover:text-white hover:border-[#03395B] transition-colors"
                >
                  READ MORE
                </button>
              </div>
            </motion.div>

            {/* Carriers */}
            <motion.div className="flex flex-col gap-5 flex-1" variants={fadeUp}>
              <div className="backdrop-blur-[46px] bg-white/20 rounded-[20px] p-3 shadow-[0px_0px_53px_0px_rgba(0,0,0,0.20)] h-[410px]">
                <div className="rounded-[12px] overflow-hidden w-full h-full relative">
                  <img src={imgCarriers} alt="Carriers" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#03395B] text-[40px] font-semibold leading-normal">Carriers</p>
                <Link
                  href="/carriers"
                  className="self-start border border-[#444] text-[#444] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#03395B] hover:text-white hover:border-[#03395B] transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT US — orange bg, text left + truck right
      ══════════════════════════════════════════ */}
      <section className="relative bg-[#ED7426] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 py-24 grid grid-cols-2 gap-0">
          {/* Text column */}
          <motion.div
            className="flex flex-col gap-10 justify-center w-[630px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col gap-3">
              <p className="text-white text-xl font-semibold leading-normal">ABOUT US</p>
              <h2 className="text-[#FFCCAD] text-[48px] font-semibold leading-none">
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
              className="self-start bg-[#03395B] text-white text-sm font-medium px-7 py-3 rounded-lg h-12 flex items-center hover:bg-[#03395B]/90 transition-colors"
            >
              KNOW MORE ABOUT US
            </Link>
          </motion.div>
        </div>

        {/* Truck images — right side, absolute positioned */}
        <motion.div
          className="absolute right-0 top-0 w-[848px] h-full pointer-events-none"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={imgTruck1} alt="Point Freight truck" className="absolute inset-0 w-full h-full object-cover" />
          <img src={imgTruck2} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TALK WITH US
      ══════════════════════════════════════════ */}
      <section id="contact" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col gap-10">
          {/* Header row */}
          <motion.div
            className="flex items-end justify-between w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 w-[542px]">
              <p className="text-[#ED7426] text-xl font-semibold leading-normal">TALK WITH US</p>
              <h2 className="text-[#03395B] text-[48px] font-semibold leading-none w-[520px]">
                Transportation Beyond Expectations
              </h2>
            </div>
            <div className="flex items-center gap-5 flex-shrink-0">
              <button
                onClick={() => setQuoteOpen(true)}
                className="border border-[#949494] flex items-center gap-2.5 px-3.5 py-3 rounded-lg hover:border-[#ED7426] transition-colors"
              >
                <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#444] flex-shrink-0" />
                <span className="text-[#444] text-sm font-medium whitespace-nowrap">GET A FREIGHT QUOTE</span>
              </button>
              <button
                onClick={() => setQuoteOpen(true)}
                className="bg-[#03395B] text-white text-sm font-medium px-7 py-3 h-12 rounded-lg hover:bg-[#03395B]/90 transition-colors whitespace-nowrap"
              >
                SEND A DIRECT MESSAGE
              </button>
              <Link
                href="/carriers"
                className="bg-[#ED7426] text-white text-sm font-medium px-7 py-3 h-12 rounded-lg hover:bg-[#ED7426]/90 transition-colors whitespace-nowrap flex items-center"
              >
                WORK WITH US
              </Link>
            </div>
          </motion.div>

          {/* Divider */}
          <hr className="border-[#949494]" />

          {/* 3 contact cards */}
          <motion.div
            className="flex w-full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Call Us — orange */}
            <motion.div className="bg-[#ED7426] flex-1 p-10 flex flex-col justify-between h-[413px]" variants={fadeUp}>
              <div className="flex flex-col gap-5">
                <Icon icon="solar:phone-bold" className="w-[54px] h-[54px] text-white" />
                <p className="text-white text-2xl font-semibold leading-normal">Call Us</p>
              </div>
              <a href="tel:8442047016" className="text-white text-2xl font-normal leading-normal w-[240px] hover:opacity-80">
                844-204-7016
              </a>
            </motion.div>

            {/* Email Us — navy */}
            <motion.div className="bg-[#03395B] flex-1 p-10 flex flex-col justify-between h-[413px]" variants={fadeUp}>
              <div className="flex flex-col gap-5">
                <Icon icon="solar:letter-bold" className="w-[54px] h-[54px] text-white" />
                <p className="text-white text-2xl font-semibold leading-normal">Email Us</p>
              </div>
              <a href="mailto:info@pointfs.com" className="text-white text-2xl font-normal leading-normal w-[240px] hover:opacity-80">
                info@pointfs.com
              </a>
            </motion.div>

            {/* Locations — black */}
            <motion.div className="bg-black flex-1 p-10 flex flex-col justify-between h-[413px]" variants={fadeUp}>
              <div className="flex flex-col gap-5">
                <Icon icon="solar:map-point-bold" className="w-[54px] h-[54px] text-white" />
                <p className="text-white text-2xl font-semibold leading-normal">Locations</p>
              </div>
              <div className="flex flex-col gap-8 text-white text-base font-normal leading-normal">
                <div>
                  <p>Houston (HQ)</p>
                  <p>650 N Sam Houston Pkwy, E Suite 550</p>
                  <p>Houston TX, 77060</p>
                </div>
                <div>
                  <p>Round Rock</p>
                  <p>1 Chisholm Trail Road, Bldg 1 Suite 424,</p>
                  <p>Round Rock, Texas, 78681</p>
                </div>
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
