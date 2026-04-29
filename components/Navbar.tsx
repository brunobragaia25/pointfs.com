"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const imgLogo    = "/images/logotipo-pointfs.png";
const imgSocial2 = "/images/🦆 icon _linkedin in_.svg";

const shippersServices = [
  { label: "Full Truckload", sublabel: "(FTL)", icon: "solar:delivery-bold", desc: "Dedicated full-load capacity for any origin to destination.", href: "/shippers#ftl" },
  { label: "Temperature Controlled", sublabel: "", icon: "solar:snowflake-bold", desc: "Cold-chain solutions keeping cargo at precise temps.", href: "/shippers#temp-controlled" },
  { label: "Less Than Truckload", sublabel: "(LTL)", icon: "solar:box-minimalistic-bold", desc: "Cost-efficient shipping for smaller, consolidated loads.", href: "/shippers#ltl" },
  { label: "Flat Bed & Specialized", sublabel: "", icon: "solar:layers-minimalistic-bold", desc: "Oversize, heavy, or oddly-shaped freight handled with care.", href: "/shippers#flatbed" },
  { label: "Expedite", sublabel: "", icon: "solar:lightning-bold", desc: "Time-critical shipments moved with zero margin for delay.", href: "/shippers#expedite" },
  { label: "Drayage", sublabel: "", icon: "solar:routing-bold", desc: "Port-to-warehouse and short-haul container moves.", href: "/shippers#drayage" },
  { label: "Intermodal", sublabel: "", icon: "solar:transfer-horizontal-bold", desc: "Rail + truck combinations that maximize efficiency.", href: "/shippers#intermodal" },
  { label: "Value-Added Services", sublabel: "", icon: "solar:star-bold", desc: "Warehousing, cross-docking, customs, and more.", href: "/shippers#value-added" },
];

const techPlatforms = [
  { label: "Shippers Platform", icon: "solar:layers-minimalistic-bold", desc: "Quote, book and track your freight 24/7 with full visibility and control.", href: "/technology/shippers" },
  { label: "Carriers Platform", icon: "solar:delivery-bold", desc: "Find loads, book instantly and manage every mile from one connected app.", href: "/technology" },
];

const contactLinks = [
  { label: "Work With Us", icon: "solar:users-group-rounded-bold", desc: "Join the Point Freight team and build a career in logistics.", href: "/work-with-us" },
  { label: "Request a Quote", icon: "solar:document-bold", desc: "Get a fast, accurate freight quote tailored to your shipment.", href: "/request-quote" },
  { label: "Contact Us", icon: "solar:letter-bold", desc: "Reach our team directly by phone, email or our contact form.", href: "/contact" },
  { label: "Be a Partner", icon: "solar:hand-shake-bold", desc: "Partner with us as a carrier and keep your trucks moving.", href: "/carriers/partner" },
];

export default function Navbar() {
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [shippersOpen, setShippersOpen] = useState(false);
  const [techOpen,    setTechOpen]    = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close all menus on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setShippersOpen(false);
        setTechOpen(false);
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function closeAll() {
    setShippersOpen(false);
    setTechOpen(false);
    setContactOpen(false);
    setMobileOpen(false);
  }

  return (
    <header ref={headerRef} className="w-full z-50">

      {/* ── Orange top bar ── */}
      <div className="!w-screen bg-[#ED7426] h-10 flex items-center justify-between px-5">
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
      </div>

      {/* ── White main nav ── */}
      <nav className="bg-white w-full h-[87px] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-between h-full">

          <Link href="/" onClick={closeAll} className="flex-shrink-0 h-[76px] w-[173px] relative">
            <img src={imgLogo} alt="Point Freight Systems" className="h-full w-full object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            <Link href="/about" onClick={closeAll} className="text-sm font-medium text-black hover:text-[#ED7426] transition-colors whitespace-nowrap">
              ABOUT US
            </Link>

            {/* SHIPPERS trigger */}
            <button
              onClick={() => { setShippersOpen((v) => !v); setTechOpen(false); setContactOpen(false); }}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${shippersOpen ? "text-[#ED7426]" : "text-black hover:text-[#ED7426]"}`}
            >
              SHIPPERS
              <motion.span animate={{ rotate: shippersOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex items-center">
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <Link href="/carriers" onClick={closeAll} className="text-sm font-medium text-black hover:text-[#ED7426] transition-colors whitespace-nowrap">
              CARRIERS
            </Link>

            {/* TECHNOLOGY trigger */}
            <button
              onClick={() => { setTechOpen((v) => !v); setShippersOpen(false); setContactOpen(false); }}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${techOpen ? "text-[#ED7426]" : "text-black hover:text-[#ED7426]"}`}
            >
              TECHNOLOGY
              <motion.span animate={{ rotate: techOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex items-center">
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            {/* CONTACT trigger */}
            <button
              onClick={() => { setContactOpen((v) => !v); setShippersOpen(false); setTechOpen(false); }}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${contactOpen ? "text-[#ED7426]" : "text-black hover:text-[#ED7426]"}`}
            >
              CONTACT
              <motion.span animate={{ rotate: contactOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex items-center">
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://app.turvo.com/" target="_blank" rel="noopener noreferrer" className="bg-[#ED7426] flex items-center gap-2.5 pl-5 pr-7 py-3 rounded-lg hover:bg-[#ED7426]/90 transition-colors">
              <Icon icon="solar:users-group-rounded-bold" className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium whitespace-nowrap">LOGIN</span>
            </a>
            <Link href="/request-quote" onClick={closeAll} className="border border-[#949494] flex items-center gap-2.5 px-3.5 py-3 rounded-lg hover:border-[#ED7426] transition-colors">
              <Icon icon="solar:hamburger-menu-bold" className="w-6 h-6 text-[#ED7426] flex-shrink-0" />
              <span className="text-[#444] text-sm font-medium whitespace-nowrap">GET A FREIGHT QUOTE</span>
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className="block w-6 h-0.5 bg-[#03395B] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[#03395B] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[#03395B]" />
          </button>
        </div>
      </nav>

      {/* ══ SHIPPERS MEGA MENU ══════════════════════════════════════════ */}
      <AnimatePresence>
        {shippersOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block fixed inset-x-0 top-[127px] z-40 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
          >
            <div className="max-w-[1280px] mx-auto px-5 py-10 flex gap-8">
              {/* Left navy panel */}
              <div className="w-[260px] flex-shrink-0 bg-[#03395B] rounded-2xl p-8 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <span className="text-[#ED7426] text-[10px] font-bold tracking-[0.2em] uppercase">Shipping Solutions</span>
                  <h2 className="text-white text-2xl font-bold leading-snug">The right service for every mile.</h2>
                  <p className="text-white/55 text-sm leading-relaxed">From single loads to complex multi-modal supply chains — we match your freight to the perfect solution.</p>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  <Link href="/request-quote" onClick={closeAll} className="flex items-center justify-between bg-[#ED7426] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#ED7426]/90 transition-colors">
                    Get a Freight Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/about" onClick={closeAll} className="flex items-center justify-between border border-white/20 text-white/70 text-sm font-medium px-5 py-3 rounded-xl hover:border-white/50 hover:text-white transition-colors">
                    Learn About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: 4-col grid */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase">Our Services</p>
                  <button onClick={() => setShippersOpen(false)} className="text-[#999] hover:text-[#ED7426] transition-colors" aria-label="Close">
                    <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {shippersServices.map((svc, i) => (
                    <motion.div key={svc.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: i * 0.04 }}>
                      <Link href={svc.href} onClick={closeAll} className="group flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-[#F0E8E0] hover:bg-[#FDFAF7] transition-all">
                        <div className="relative w-11 h-11 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#FFCCAD]" />
                          <div className="absolute rounded-full bg-gradient-to-b from-[#FD9C63] to-[#FFF0E6]" style={{ top: "4px", left: "4px", right: "4px", bottom: "4px" }} />
                          <Icon icon={svc.icon} className="absolute inset-0 m-auto w-5 h-5 text-[#03395B] group-hover:text-[#ED7426] transition-colors duration-200" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[#1a1a1a] text-[13px] font-semibold leading-tight group-hover:text-[#ED7426] transition-colors">
                            {svc.label}{svc.sublabel && <span className="text-[#999] font-normal ml-1">{svc.sublabel}</span>}
                          </p>
                          <p className="text-[#888] text-[11px] leading-relaxed">{svc.desc}</p>
                        </div>
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

      {/* ══ TECHNOLOGY MEGA MENU ════════════════════════════════════════ */}
      <AnimatePresence>
        {techOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block fixed inset-x-0 top-[127px] z-40 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
          >
            <div className="max-w-[1280px] mx-auto px-5 py-10 flex gap-8">
              {/* Left navy panel */}
              <div className="w-[260px] flex-shrink-0 bg-[#03395B] rounded-2xl p-8 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <span className="text-[#ED7426] text-[10px] font-bold tracking-[0.2em] uppercase">Technology</span>
                  <h2 className="text-white text-2xl font-bold leading-snug">Smart tools for every move.</h2>
                  <p className="text-white/55 text-sm leading-relaxed">Our platforms give shippers and carriers real-time visibility, instant booking and powerful analytics — all in one place.</p>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  <Link href="/technology/shippers" onClick={closeAll} className="flex items-center justify-between bg-[#ED7426] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#ED7426]/90 transition-colors">
                    Shippers Platform <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/technology" onClick={closeAll} className="flex items-center justify-between border border-white/20 text-white/70 text-sm font-medium px-5 py-3 rounded-xl hover:border-white/50 hover:text-white transition-colors">
                    Carriers Platform <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: 2 large cards */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase">Our Platforms</p>
                  <button onClick={() => setTechOpen(false)} className="text-[#999] hover:text-[#ED7426] transition-colors" aria-label="Close">
                    <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {techPlatforms.map((item, i) => (
                    <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: i * 0.06 }}>
                      <Link href={item.href} onClick={closeAll} className="group flex flex-col gap-5 p-6 rounded-xl border border-transparent hover:border-[#F0E8E0] hover:bg-[#FDFAF7] transition-all h-full">
                        <div className="relative w-14 h-14 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#FFCCAD]" />
                          <div className="absolute rounded-full bg-gradient-to-b from-[#FD9C63] to-[#FFF0E6]" style={{ top: "5px", left: "5px", right: "5px", bottom: "5px" }} />
                          <Icon icon={item.icon} className="absolute inset-0 m-auto w-6 h-6 text-[#03395B] group-hover:text-[#ED7426] transition-colors duration-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-[#1a1a1a] text-base font-semibold group-hover:text-[#ED7426] transition-colors">{item.label}</p>
                          <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="flex items-center gap-1 text-[#ED7426] opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                          <span className="text-[12px] font-semibold">Learn more</span>
                          <ArrowRight className="w-3.5 h-3.5" />
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

      {/* ══ CONTACT MEGA MENU ══════════════════════════════════════════ */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block fixed inset-x-0 top-[127px] z-40 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
          >
            <div className="max-w-[1280px] mx-auto px-5 py-10 flex gap-8">
              {/* Left navy panel */}
              <div className="w-[260px] flex-shrink-0 bg-[#03395B] rounded-2xl p-8 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <span className="text-[#ED7426] text-[10px] font-bold tracking-[0.2em] uppercase">Get in Touch</span>
                  <h2 className="text-white text-2xl font-bold leading-snug">We&apos;re here whenever you need us.</h2>
                  <p className="text-white/55 text-sm leading-relaxed">Whether you need a quote, want to join our team, or just have a question — our team is ready to help.</p>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  <a href="tel:8442047016" className="flex items-center gap-3 bg-[#ED7426] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#ED7426]/90 transition-colors">
                    <Icon icon="solar:phone-bold" className="w-4 h-4 flex-shrink-0" />
                    844-204-7016
                  </a>
                  <a href="mailto:info@pointfs.com" className="flex items-center gap-3 border border-white/20 text-white/70 text-sm font-medium px-5 py-3 rounded-xl hover:border-white/50 hover:text-white transition-colors">
                    <Icon icon="solar:letter-bold" className="w-4 h-4 flex-shrink-0" />
                    info@pointfs.com
                  </a>
                </div>
              </div>

              {/* Right: 2×2 grid */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase">How Can We Help?</p>
                  <button onClick={() => setContactOpen(false)} className="text-[#999] hover:text-[#ED7426] transition-colors" aria-label="Close">
                    <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {contactLinks.map((item, i) => (
                    <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: i * 0.06 }}>
                      <Link href={item.href} onClick={closeAll} className="group flex flex-col gap-4 p-5 rounded-xl border border-transparent hover:border-[#F0E8E0] hover:bg-[#FDFAF7] transition-all h-full">
                        <div className="relative w-11 h-11 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-[#FFCCAD]" />
                          <div className="absolute rounded-full bg-gradient-to-b from-[#FD9C63] to-[#FFF0E6]" style={{ top: "4px", left: "4px", right: "4px", bottom: "4px" }} />
                          <Icon icon={item.icon} className="absolute inset-0 m-auto w-5 h-5 text-[#03395B] group-hover:text-[#ED7426] transition-colors duration-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-[#1a1a1a] text-sm font-semibold group-hover:text-[#ED7426] transition-colors">{item.label}</p>
                          <p className="text-[#888] text-[12px] leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="flex items-center gap-1 text-[#ED7426] opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
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

      {/* ══ Mobile menu ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4 shadow-md"
          >
            <Link href="/about" className="text-sm font-medium text-black" onClick={closeAll}>ABOUT US</Link>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-black">SHIPPERS</p>
              <div className="pl-3 flex flex-col gap-2">
                {shippersServices.map((svc) => (
                  <Link key={svc.label} href={svc.href} onClick={closeAll} className="flex items-center gap-2 text-xs font-medium text-[#555] hover:text-[#ED7426] transition-colors">
                    <Icon icon={svc.icon} className="w-4 h-4 text-[#ED7426]" />
                    {svc.label} {svc.sublabel}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/carriers" className="text-sm font-medium text-black" onClick={closeAll}>CARRIERS</Link>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-black">TECHNOLOGY</p>
              <div className="pl-3 flex flex-col gap-2">
                {techPlatforms.map((item) => (
                  <Link key={item.label} href={item.href} onClick={closeAll} className="flex items-center gap-2 text-xs font-medium text-[#555] hover:text-[#ED7426] transition-colors">
                    <Icon icon={item.icon} className="w-4 h-4 text-[#ED7426]" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-black">CONTACT</p>
              <div className="pl-3 flex flex-col gap-2">
                {contactLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={closeAll} className="flex items-center gap-2 text-xs font-medium text-[#555] hover:text-[#ED7426] transition-colors">
                    <Icon icon={item.icon} className="w-4 h-4 text-[#ED7426]" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a href="https://app.turvo.com/" target="_blank" rel="noopener noreferrer" className="bg-[#ED7426] text-white text-sm font-medium px-4 py-3 rounded-lg text-center">LOGIN</a>
              <Link href="/request-quote" onClick={closeAll} className="border border-[#949494] text-[#444] text-sm font-medium px-4 py-3 rounded-lg text-center">GET A FREIGHT QUOTE</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
