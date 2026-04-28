"use client";

import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const PRINCIPLES = [
  "Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.",
  "We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.",
  "We will only retain personal information as long as necessary for the fulfillment of those purposes.",
  "We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.",
  "Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and current.",
  "We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.",
  "Our policies and practices relating to the management of personal information will be available to customers upon request.",
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#ED7426] py-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col items-center gap-3 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-white/80 text-sm font-semibold uppercase tracking-widest"
            variants={fadeUp}
          >
            Legal
          </motion.p>
          <motion.h1
            className="text-[48px] font-semibold text-white leading-tight"
            variants={fadeUp}
          >
            Privacy Policy
          </motion.h1>
          <motion.p className="text-[#FFCCAD] text-base" variants={fadeUp}>
            Last updated: March 24, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <motion.div
          className="max-w-[860px] mx-auto px-5 flex flex-col gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Intro */}
          <motion.p className="text-base text-[#444] leading-[1.75]" variants={fadeUp}>
            Your privacy is very important to us. Accordingly, we have developed this Policy for
            you to understand how we collect, use, communicate and disclose and make use of
            personal information. The following outlines our privacy policy.
          </motion.p>

          {/* Principles list */}
          <motion.ul className="flex flex-col gap-6" variants={stagger}>
            {PRINCIPLES.map((text, i) => (
              <motion.li
                key={i}
                className="flex gap-5 items-start"
                variants={fadeUp}
              >
                {/* Bullet */}
                <div className="flex-shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-[#ED7426]" />
                <p className="text-base text-[#444] leading-[1.75]">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
