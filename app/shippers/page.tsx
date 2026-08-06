"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Figma MCP assets ──────────────────────────────────────────────────
const imgFTL        = "/images/Full Truckload truck.png";
const imgTempCtrl1  = "/images/Temperature controlled freight.png";
const imgTempCtrl2  = "/images/Temperature controlled freight.png";
const imgLTL        = "/images/Less than Truckload freight.png";
const imgFlatbed    = "/images/Flat Bed & Specialized freight.png";
const imgExpedite   = "/images/Expedited freight delivery.png";
const imgDrayage    = "/images/Drayage Services.png";
const imgIntermodal = "/images/Intermodal Transport.png";
const imgValueAdded = "/images/Value-added Services.png";

// ── Animation variants ─────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Photo frame component ──────────────────────────────────────────────
function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-[610px] h-[350px] sm:h-[480px] rounded-[20px] p-3 bg-white/20 backdrop-blur-[46px] shadow-[0px_0px_53.2px_0px_rgba(0,0,0,0.2)]">
      <div className="rounded-[12px] overflow-hidden w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function DualPhotoFrame({
  src1,
  src2,
  alt1,
  alt2,
}: {
  src1: string;
  src2: string;
  alt1: string;
  alt2: string;
}) {
  return (
    <div className="flex-shrink-0 w-[610px] rounded-[20px] p-3 bg-white/20 backdrop-blur-[46px] shadow-[0px_0px_53.2px_0px_rgba(0,0,0,0.2)] flex flex-col gap-3">
      <div className="rounded-[12px] overflow-hidden h-[228px]">
        <img src={src1} alt={alt1} className="w-full h-full object-cover" />
      </div>
      <div className="rounded-[12px] overflow-hidden h-[228px]">
        <img src={src2} alt={alt2} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

// ── Quote CTA button ──────────────────────────────────────────────────
function QuoteBtn() {
  return (
    <Link
      href="/request-quote"
      className="mt-2 w-full md:w-auto flex md:inline-flex items-center justify-center gap-2.5 border border-[#949494] rounded-lg px-3.5 py-3 text-sm font-medium text-[#444] hover:border-[#ED7426] transition-colors"
    >
      <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#ED7426] flex-shrink-0" />
      GET A FREIGHT QUOTE
    </Link>
  );
}

// ── Service section ────────────────────────────────────────────────────
interface ServiceProps {
  imageLeft?: boolean;
  imageFirstOnMobile?: boolean;
  photo: React.ReactNode;
  heading: string;
  subtitle: string;
  body: React.ReactNode;
}

function ServiceSection({
  imageLeft = false,
  imageFirstOnMobile = false,
  photo,
  heading,
  subtitle,
  body,
}: ServiceProps) {
  return (
    <motion.div
      className="max-w-[1280px] mx-auto px-5 py-8 sm:py-16 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 items-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {imageLeft && (
        <motion.div variants={fadeUp} className="flex-shrink-0">
          {photo}
        </motion.div>
      )}

      <motion.div className={`flex flex-col gap-3 sm:gap-5 flex-1 min-w-0 ${imageFirstOnMobile ? 'order-last md:order-none' : ''}`} variants={stagger}>
        <motion.h2
          className="text-[28px] md:text-[44px] font-semibold text-[#03395B] leading-tight text-center md:text-left"
          variants={fadeUp}
        >
          {heading}
        </motion.h2>
        <motion.p
          className="text-[24px] md:text-2xl font-semibold text-[#ED7426] leading-snug text-center md:text-left"
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="text-[16px] md:text-2xl text-[#444] leading-relaxed text-center md:text-left"
          variants={fadeUp}
        >
          {body}
        </motion.div>
        <motion.div variants={fadeUp}>
          <QuoteBtn />
        </motion.div>
      </motion.div>

      {!imageLeft && (
        <motion.div variants={fadeUp} className={`flex-shrink-0 ${imageFirstOnMobile ? 'order-first md:order-none' : ''}`}>
          {photo}
        </motion.div>
      )}
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────
export default function ShippersPage() {

  return (
    <>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="bg-[#ED7426] py-12 sm:py-20 md:py-[120px]">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col items-center gap-4 sm:gap-6 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-[32px] sm:text-4xl md:text-[64px] font-semibold text-white max-w-[860px] leading-[44px] md:leading-[65px]"
            variants={fadeUp}
          >
            Linking Every Load, Every Road, Reliable Carriers
          </motion.h1>
          <motion.p
            className="text-[20px] md:text-[28px] font-semibold text-[#FFCCAD] leading-snug"
            variants={fadeUp}
          >
            We connect clients who have shipping needs with vetted carriers to transport any freight safely, transparently, and efficiently from origin to destination.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ INTRO ═════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 py-12 sm:py-20 flex flex-col items-center gap-6 sm:gap-8 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[28px] md:text-[48px] font-semibold text-[#03395B] leading-[34px] md:leading-[58px] max-w-[900px]"
            variants={fadeUp}
          >
            Streamlined Freight Solutions Using Advanced Technology for Maximum Efficiency and Cost Savings
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-[#444] leading-[1.75] max-w-[1100px]"
            variants={fadeUp}
          >
            At POINT FREIGHT, we&apos;re always striving to deliver more — with your
            satisfaction as our top priority. We provide a full range of
            flexible, on-demand transportation services so you have exactly what
            you need, precisely when you need it. We provide innovative
            technology solutions that foster collaboration and deliver tangible
            value in carrier-shipper relationships. Unlock real-time shipment
            visibility to handle the things that go wrong before they cause
            disruption and finally automate the processes from across your
            management systems with intuitive and easy-to-use dashboards.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ DIVIDER ═══════════════════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="w-full h-px bg-[#D9D9D9]" />
      </div>

      {/* ══ SERVICE SECTIONS ══════════════════════════════════════════ */}
      <main className="bg-white">

        {/* 1. Full Truckload (FTL) — text left, image right */}
        <div id="ftl">
          <ServiceSection
            imageFirstOnMobile
            photo={<PhotoFrame src={imgFTL} alt="Full Truckload truck" />}
            heading="Full Truckload (FTL)"
            subtitle="Full Trailers are our specialty."
            body="Not all dry van options are created equal – we provide the truckload capacity and dedication that fits your needs, with contract rates for reliability or spot rates for adaptability."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 2. Temperature Controlled — image left, text right */}
        <div id="temp-controlled">
          <ServiceSection
            imageLeft
            photo={<PhotoFrame src={imgTempCtrl1} alt="Temperature controlled freight" />}
            heading="Temperature Controlled"
            subtitle="Whether Fresh or Frozen, we will keep your freight where it needs to be."
            body="Our temperature-controlled freight solutions ensure that your products arrive in perfect condition, whether fresh or frozen."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 3. LTL — text left, image right */}
        <div id="ltl">
          <ServiceSection
            imageFirstOnMobile
            photo={<PhotoFrame src={imgLTL} alt="Less than Truckload freight" />}
            heading="Less than Truckload (LTL)"
            subtitle="Outgrown parcel shipping but don't need a full truck? LTL is your answer."
            body="We offer the experience and equipment to meet your unique needs in a cost-efficient and expedited manner, any size to any place."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 4. Flat Bed & Specialized — image left, text right */}
        <div id="flatbed">
          <ServiceSection
            imageLeft
            photo={<PhotoFrame src={imgFlatbed} alt="Flatbed and specialized freight" />}
            heading="Flat Bed & Specialized"
            subtitle="If it's big, bulky, or awkward, we can haul it."
            body="Specialized services handle shipments of all shapes and sizes. Experts in 'ugly' freight: safely moving what doesn't fit the mold, flexible to your cargo needs."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 5. Expedite — text left, image right */}
        <div id="expedite">
          <ServiceSection
            imageFirstOnMobile
            photo={<PhotoFrame src={imgExpedite} alt="Expedited freight delivery" />}
            heading="Expedite"
            subtitle="Last-minute and fast delivery."
            body="From hot shot and flatbed to sprinter services, we handle all expedited shipments with reliable, on-time, and secure delivery."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 6. Drayage — image left, text right */}
        <div id="drayage">
          <ServiceSection
            imageLeft
            photo={<PhotoFrame src={imgDrayage} alt="Drayage services" />}
            heading="Drayage"
            subtitle="Drayage: Bridging the Gap Between Ship, Rail, and Truck"
            body="We offer specialized drayage services to handle overweight or hazardous materials efficiently."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 7. Intermodal — text left, image right */}
        <div id="intermodal">
          <ServiceSection
            imageFirstOnMobile
            photo={<PhotoFrame src={imgIntermodal} alt="Intermodal transport" />}
            heading="Intermodal"
            subtitle="Smooth transfers, secure shipments, simple solutions."
            body="Intermodal transport is a comprehensive strategy that drives efficiency, sustainability and competitiveness in the chain network."
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* 8. Value-added Services — image left, text right */}
        <div id="value-added">
          <ServiceSection
            imageLeft
            photo={<PhotoFrame src={imgValueAdded} alt="Value-added logistics services" />}
            heading="Value-added Services"
            subtitle="Built around you: the ultimate in tailored shipping"
            body={
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Beyond the basics, we deliver</p>
                <ul className="list-disc list-inside space-y-1 font-normal">
                  <li>Liftgate</li>
                  <li>Inside delivery</li>
                  <li>Residential delivery</li>
                  <li>After-hours pickup or delivery</li>
                  <li>Weekend pickup or delivery</li>
                  <li>
                    And more… reach out to one of our Point Freight
                    customer-service specialists.
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </main>

      <Footer />

    </>
  );
}
