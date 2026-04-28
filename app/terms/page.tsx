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
  visible: { transition: { staggerChildren: 0.08 } },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div className="flex flex-col gap-5" variants={fadeUp}>
      <h2 className="text-xl font-bold text-[#03395B] uppercase tracking-wide">{title}</h2>
      <div className="text-base text-[#444] leading-[1.75] flex flex-col gap-4">{children}</div>
    </motion.div>
  );
}

function SubSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-base font-semibold text-[#03395B]">{number} {title}</h3>
      <div className="text-base text-[#444] leading-[1.75]">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#03395B] py-20">
        <motion.div
          className="max-w-[1280px] mx-auto px-5 flex flex-col items-center gap-3 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-[#FFCCAD] text-sm font-semibold uppercase tracking-widest" variants={fadeUp}>
            Legal
          </motion.p>
          <motion.h1 className="text-[48px] font-semibold text-white leading-tight" variants={fadeUp}>
            Terms and Conditions
          </motion.h1>
          <motion.p className="text-white/70 text-base" variants={fadeUp}>
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
          <motion.div className="flex flex-col gap-4 text-base text-[#444] leading-[1.75]" variants={fadeUp}>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern the provision of freight brokerage
              services by Point Freight Systems (&quot;Company,&quot; &quot;Broker,&quot; &quot;we,&quot; or &quot;us&quot;) to customers
              (&quot;Customer,&quot; &quot;Shipper,&quot; or &quot;you&quot;). By tendering freight to Broker or using Broker&apos;s
              services, Customer agrees to be bound by these Terms. No provision shall be amended,
              waived or modified except by an instrument in writing signed by both parties.
            </p>
            <p>
              These Terms as well as the terms and conditions of any Point Freight Systems provided
              rate quote/confirmation and Contract Terms, if any, apply to the provision or
              arrangement, as applicable, of any transportation brokerage services (&quot;Services&quot;)
              herein. These Terms set forth the rights and obligations of Point Freight Systems and
              Customer except as otherwise set forth herein. By utilizing Point Freight Systems for
              Services, Customer expressly accepts these Terms and warrants that acceptance of these
              Terms has been authorized by a representative of Customer as of the date the Services
              were first provided to Customer by Point Freight Systems.
            </p>
          </motion.div>

          {/* 1 */}
          <Section title="1. Company Role and Authority">
            <SubSection number="1.1" title="Brokerage Services Only">
              Point Freight Systems is a licensed freight broker and does not act as a motor
              carrier. Broker arranges transportation of freight by properly licensed and insured
              third-party motor carriers (&quot;Carriers&quot;).
            </SubSection>
            <SubSection number="1.2" title="No Carrier Liability">
              Broker does not take possession, custody, or control of freight and is not
              responsible for loss, damage, or delay caused by Carriers, except as expressly
              required by applicable law.
            </SubSection>
          </Section>

          {/* 2 */}
          <Section title="2. Customer Obligations">
            <SubSection number="2.1" title="Accurate Shipment Information">
              Customer warrants that all shipment details provided to Broker, including weight,
              dimensions, commodity description, classification, hazardous status, and value, are
              accurate and complete.
            </SubSection>
            <SubSection number="2.2" title="Packaging and Labeling">
              Customer is responsible for proper packaging, labeling, and compliance with all
              applicable laws and regulations, including DOT and hazardous materials requirements.
            </SubSection>
            <SubSection number="2.3" title="Loading and Unloading">
              Unless otherwise agreed in writing, Customer is responsible for loading and unloading
              freight in a safe and lawful manner.
            </SubSection>
          </Section>

          {/* 3 */}
          <Section title="3. Carriers">
            <SubSection number="3.1" title="Carrier Selection">
              Broker will exercise reasonable care in selecting Carriers that maintain proper
              authority, insurance, and safety ratings as required by the Federal Motor Carrier
              Safety Administration (FMCSA).
            </SubSection>
            <SubSection number="3.2" title="Independent Contractors">
              All Carriers are independent contractors and are not agents, employees, or partners
              of Broker.
            </SubSection>
          </Section>

          {/* 4 */}
          <Section title="4. Rates and Payment Terms">
            <SubSection number="4.1" title="Rates">
              Rates are quoted based on information provided by Customer and are subject to change
              if shipment details differ from those provided.
            </SubSection>
            <SubSection number="4.2" title="Payment Terms">
              Unless otherwise agreed in writing, payment is due within [Net 30] days from invoice
              date.
            </SubSection>
            <SubSection number="4.3" title="Late Payments">
              Past-due balances may accrue interest at 1.5% per month or the maximum rate allowed
              by law, whichever is less.
            </SubSection>
            <SubSection number="4.4" title="Collection Costs">
              Customer agrees to pay all reasonable costs of collection, including attorney&apos;s fees,
              court costs, and collection agency fees.
            </SubSection>
          </Section>

          {/* 5 */}
          <Section title="5. Claims for Loss, Damage, or Delay">
            <SubSection number="5.1" title="Carrier Responsibility">
              Claims for cargo loss or damage are the responsibility of the Carrier and must be
              filed directly with the Carrier in accordance with applicable law.
            </SubSection>
            <SubSection number="5.2" title="Broker Assistance">
              Broker may assist Customer in submitting claims to Carriers but does not guarantee
              recovery.
            </SubSection>
            <SubSection number="5.3" title="Limitation of Liability">
              To the fullest extent permitted by law, Broker&apos;s liability is limited to the amount
              of brokerage fees paid for the shipment giving rise to the claim.
            </SubSection>
          </Section>

          {/* 6 */}
          <Section title="6. Accessorial Charges">
            <p>
              Customer is responsible for all additional charges including, but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Detention</li>
              <li>Layover</li>
              <li>Lumper fees</li>
              <li>Re-consignment</li>
              <li>Redelivery</li>
              <li>Storage</li>
              <li>Tolls and permits</li>
            </ul>
            <p>Such charges may be billed after delivery.</p>
          </Section>

          {/* 7 */}
          <Section title="7. Force Majeure">
            <p>
              Broker shall not be liable for failure or delay in performance caused by events
              beyond its reasonable control, including but not limited to acts of God, weather,
              labor disputes, governmental actions, equipment failure, or traffic conditions.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Insurance">
            <SubSection number="8.1" title="Carrier Insurance">
              Carriers are required to maintain cargo and liability insurance in accordance with
              FMCSA regulations.
            </SubSection>
            <SubSection number="8.2" title="Additional Insurance">
              Customer is responsible for obtaining any additional insurance coverage beyond
              Carrier-provided limits.
            </SubSection>
          </Section>

          {/* 9 */}
          <Section title="9. Indemnification">
            <p>
              Customer agrees to indemnify, defend, and hold harmless Broker from and against any
              claims, damages, losses, penalties, fines, or expenses (including attorney&apos;s fees)
              arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Inaccurate shipment information</li>
              <li>Improper packaging or labeling</li>
              <li>Violation of laws or regulations</li>
              <li>Customer&apos;s breach of these Terms</li>
            </ul>
          </Section>

          {/* 10 */}
          <Section title="10. Confidentiality">
            <p>
              Both parties agree to maintain the confidentiality of non-public business information
              obtained during the relationship, except as required by law.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Non-Solicitation">
            <p>
              Customer agrees not to directly solicit or contract with any Carrier introduced by
              Broker for a period of 12 months following the last shipment, without Broker&apos;s
              written consent.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. Governing Law and Venue">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Texas, without regard to conflict-of-law principles.
            </p>
            <p>
              Exclusive venue for any legal action shall be state or federal courts located in
              Harris County, Texas.
            </p>
          </Section>

          {/* 13 */}
          <Section title="13. Dispute Resolution">
            <p>
              At Broker&apos;s discretion, disputes may be resolved through binding arbitration in
              Houston, Texas, under the rules of the American Arbitration Association.
            </p>
          </Section>

          {/* 14 */}
          <Section title="14. Severability">
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the
              remaining provisions shall remain in full force and effect.
            </p>
          </Section>

          {/* 15 */}
          <Section title="15. Entire Agreement">
            <p>
              These Terms constitute the entire agreement between the parties regarding brokerage
              services and supersede all prior agreements or understandings, whether written or
              oral.
            </p>
          </Section>

          {/* 16 */}
          <Section title="16. Modifications">
            <p>
              Broker reserves the right to update or modify these Terms at any time without giving
              notice to Customer. The changed Terms are in effect immediately. Continued use of
              services constitutes acceptance of the revised Terms.
            </p>
          </Section>

        </motion.div>
      </section>

      <Footer />
    </>
  );
}
