"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const imgLogo    = "https://www.figma.com/api/mcp/asset/7028f727-7303-4411-8870-8b701917d77e";
const imgSocial1 = "https://www.figma.com/api/mcp/asset/506b04f7-ca48-468a-a1a3-c96ea3a7fee9";
const imgSocial2 = "https://www.figma.com/api/mcp/asset/2bea531a-5330-4ab9-a960-cf327c247154";
const imgSocial3 = "https://www.figma.com/api/mcp/asset/5d6a0166-d8be-4601-acfc-6e2c115a9976";

const shippersServices = [
  {
    label: "Full Truckload",
    sublabel: "(FTL)",
    icon: "solar:truck-bold",
    desc: "Dedicated full-load capacity for any origin to destination.",
    href: "#ftl",
  },
  {
    label: "Temperature Controlled",
    sublabel: "",
    icon: "solar:snowflake-bold",
    desc: "Cold-chain solutions keeping cargo at precise temps.",
    href: "#temp",
  },
  {
    label: "Less Than Truckload",
    sublabel: "(LTL)",
    icon: "solar:box-minimalistic-bold",
    desc: "Cost-efficient shipping for smaller, consolidated loads.",
    href: "#ltl",
  },
  {
    label: "Flat Bed & Specialized",
    sublabel: "",
    icon: "solar:layers-minimalistic-bold",
    desc: "Oversize, heavy, or oddly-shaped freight handled with care.",
    href: "#flatbed",
  },
  {
    label: "Expedite",
    sublabel: "",
    icon: "solar:lightning-bold",
    desc: "Time-critical shipments moved with zero margin for delay.",
    href: "#expedite",
  },
  {
    label: "Drayage",
    sublabel: "",
    icon: "solar:routing-bold",
    desc: "Port-to-warehouse and short-haul container moves.",
    href: "#drayage",
  },
  {
    label: "Intermodal",
    sublabel: "",
    icon: "solar:transfer-horizontal-bold",
    desc: "Rail + truck combinations that maximize efficiency.",
    href: "#intermodal",
  },
  {
    label: "Value-Added Services",
    sublabel: "",
    icon: "solar:star-bold",
    desc: "Warehousing, cross-docking, customs, and more.",
    href: "#value",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [shippersOpen, setShippersOpen] = useState(false);
  const shippersRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (shippersRef.current && !shippersRef.current.contains(e.target as Node)) {
        setShippersOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="w-full z-50">
      {/* ── Orange top bar ── */}
      <div className="bg-[#ED7426] h-10 w-full">
        <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-between h-full">
          <div className="flex items-center gap-5">
            <a href="mailto:info@pointfs.com" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <Icon icon="solar:letter-bold" className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-white text-xs font-medium leading-none">info@pointfs.com</span>
            </a>
            <div className="self-stretch w-px bg-white/40" />
            <a href="tel:8442047016" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <Icon icon="solar:phone-bold" className="w-4 h-4 text-white flex-shrink-0" />
              <span className="text-white text-xs font-medium leading-none">844-204-7016</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-xs font-medium">Follow us</span>
            <div className="flex items-center gap-1.5">
              <a href="#" aria-label="Instagram"><img src={imgSocial1} alt="" className="w-7 h-7" /></a>
              <a href="#" aria-label="LinkedIn"><img src={imgSocial2} alt="" className="w-7 h-7" /></a>
              <a href="#" aria-label="Facebook"><img src={imgSocial3} alt="" className="w-7 h-7" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── White main nav ── */}
      <nav className="bg-white w-full h-[87px] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-between h-full">
          <Link href="/" className="flex-shrink-0 h-[76px] w-[173px] relative">
            <img src={imgLogo} alt="Point Freight Systems" className="h-full w-full object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            <Link href="/about" className="text-sm font-medium text-black hover:text-[#ED7426] transition-colors whitespace-nowrap">
              ABOUT US
            </Link>

            {/* SHIPPERS trigger */}
            <div ref={shippersRef}>
              <button
                onClick={() => setShippersOpen((v) => !v)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                  shippersOpen ? "text-[#ED7426]" : "text-black hover:text-[#ED7426]"
                }`}
              >
                SHIPPERS
                <motion.span
                  animate={{ rotate: shippersOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
              </button>
            </div>

            <Link href="/carriers" className="text-sm font-medium text-black hover:text-[#ED7426] transition-colors whitespace-nowrap">
              CARRIERS
            </Link>
            <Link href="#technology" className="text-sm font-medium text-black hover:text-[#ED7426] transition-colors whitespace-nowrap">
              TECHNOLOGY
            </Link>
            <div className="flex items-center gap-1.5">
              <Link href="#contact" className="text-sm font-medium text-black hover:text-[#ED7426] transition-colors whitespace-nowrap">
                CONTACT
              </Link>
              <ChevronDown className="w-3.5 h-3.5 text-black" />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-[#ED7426] flex items-center gap-2.5 pl-5 pr-7 py-3 rounded-lg hover:bg-[#ED7426]/90 transition-colors">
              <Icon icon="solar:users-group-rounded-bold" className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium whitespace-nowrap">LOGIN</span>
            </button>
            <button className="border border-[#949494] flex items-center gap-2.5 px-3.5 py-3 rounded-lg hover:border-[#ED7426] transition-colors">
              <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#444] flex-shrink-0" />
              <span className="text-[#444] text-sm font-medium whitespace-nowrap">GET A FREIGHT QUOTE</span>
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-[#03395B] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[#03395B] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[#03395B]" />
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════
          SHIPPERS MEGA MENU — full width
      ══════════════════════════════════ */}
      <AnimatePresence>
        {shippersOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block w-full bg-white border-t border-gray-100 shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
          >
            <div className="max-w-[1280px] mx-auto px-5 py-10 flex gap-8">

              {/* ── Left: navy hero panel ── */}
              <div className="w-[260px] flex-shrink-0 bg-[#03395B] rounded-2xl p-8 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <span className="text-[#ED7426] text-[10px] font-bold tracking-[0.2em] uppercase">
                    Shipping Solutions
                  </span>
                  <h2 className="text-white text-2xl font-bold leading-snug">
                    The right service for every mile.
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed">
                    From single loads to complex multi-modal supply chains — we match your freight to the perfect solution.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  <Link
                    href="#shippers"
                    onClick={() => setShippersOpen(false)}
                    className="flex items-center justify-between bg-[#ED7426] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#ED7426]/90 transition-colors"
                  >
                    Get a Freight Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setShippersOpen(false)}
                    className="flex items-center justify-between border border-white/20 text-white/70 text-sm font-medium px-5 py-3 rounded-xl hover:border-white/50 hover:text-white transition-colors"
                  >
                    Learn About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* ── Right: 4-col service grid ── */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Top label */}
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase">Our Services</p>
                  <button
                    onClick={() => setShippersOpen(false)}
                    className="text-[#999] hover:text-[#ED7426] transition-colors"
                    aria-label="Close menu"
                  >
                    <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                  </button>
                </div>

                {/* 4-column grid */}
                <div className="grid grid-cols-4 gap-2">
                  {shippersServices.map((svc, i) => (
                    <motion.div
                      key={svc.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.04 }}
                    >
                      <Link
                        href={svc.href}
                        onClick={() => setShippersOpen(false)}
                        className="group flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-[#F0E8E0] hover:bg-[#FDFAF7] transition-all"
                      >
                        {/* Icon */}
                        <div className="relative w-11 h-11 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#FFCCAD]" />
                          <div
                            className="absolute rounded-full bg-gradient-to-b from-[#FD9C63] to-[#FFF0E6]"
                            style={{ top: "4px", left: "4px", right: "4px", bottom: "4px" }}
                          />
                          <Icon
                            icon={svc.icon}
                            className="absolute inset-0 m-auto w-5 h-5 text-[#03395B] group-hover:text-[#ED7426] transition-colors duration-200"
                          />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[#1a1a1a] text-[13px] font-semibold leading-tight group-hover:text-[#ED7426] transition-colors">
                            {svc.label}
                            {svc.sublabel && (
                              <span className="text-[#999] font-normal ml-1">{svc.sublabel}</span>
                            )}
                          </p>
                          <p className="text-[#888] text-[11px] font-normal leading-relaxed">
                            {svc.desc}
                          </p>
                        </div>

                        {/* Arrow hint */}
                        <div className="flex items-center gap-1 text-[#ED7426] opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[11px] font-semibold">Learn more</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4 shadow-md"
          >
            <Link href="/about" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>ABOUT US</Link>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-black">SHIPPERS</p>
              <div className="pl-3 flex flex-col gap-2">
                {shippersServices.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 text-xs font-medium text-[#555] hover:text-[#ED7426] transition-colors"
                  >
                    <Icon icon={svc.icon} className="w-4 h-4 text-[#ED7426]" />
                    {svc.label} {svc.sublabel}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/carriers" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>CARRIERS</Link>
            <Link href="#technology" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>TECHNOLOGY</Link>
            <Link href="#contact" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>CONTACT</Link>
            <div className="flex flex-col gap-2 pt-2">
              <button className="bg-[#ED7426] text-white text-sm font-medium px-4 py-3 rounded-lg text-center">LOGIN</button>
              <button className="border border-[#949494] text-[#444] text-sm font-medium px-4 py-3 rounded-lg text-center">GET A FREIGHT QUOTE</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
