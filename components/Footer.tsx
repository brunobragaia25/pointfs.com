import Link from "next/link";
import { Icon } from "@iconify/react";

const imgLogo    = "https://www.figma.com/api/mcp/asset/c9842f7a-a5c8-41ca-9725-0af28c7ffe54";
const imgSocial1 = "https://www.figma.com/api/mcp/asset/ffba9cca-4295-41c6-81e8-dabf5681c141";
const imgSocial2 = "https://www.figma.com/api/mcp/asset/45669ac6-b619-458c-856f-c216a3d6a24e";
const imgSocial3 = "https://www.figma.com/api/mcp/asset/d31a6a8c-cef6-48db-b3dc-1e1bd7ab4e27";

export default function Footer() {
  return (
    <footer className="bg-[#03395B] w-full">
      <div className="max-w-[1280px] mx-auto px-5 py-[100px] flex items-start justify-between gap-8 flex-wrap">

        {/* ── Column 1: Logo + tagline + offices ── */}
        <div className="flex flex-col justify-between self-stretch w-[341px] gap-10">
          <div className="flex flex-col gap-7">
            <img src={imgLogo} alt="Point Freight Systems" className="w-[144px] h-[53px] object-contain" />
            <div className="flex flex-col gap-4">
              <p className="text-[#ED7426] text-[40px] font-bold leading-none">
                Where every LOAD hits the POINT.
              </p>
              <p className="text-white text-base font-medium leading-[1.4]">
                Your Freight. Our Focus. Always on POINT.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none">Offices</p>
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
          </div>
        </div>

        {/* ── Column 2: Discover the Point + Contact Us ── */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Discover the Point</p>
            <div className="flex flex-col gap-10 text-white text-base font-normal leading-none">
              <Link href="/about" className="hover:text-[#ED7426] transition-colors">About Us</Link>
              <Link href="#careers" className="hover:text-[#ED7426] transition-colors">Work with us</Link>
              <Link href="#quote" className="hover:text-[#ED7426] transition-colors">Request a Quote</Link>
              <Link href="#contact" className="hover:text-[#ED7426] transition-colors">Contact</Link>
              <Link href="#login" className="hover:text-[#ED7426] transition-colors">Login</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Contact Us</p>
            <div className="flex flex-col gap-10">
              <a href="mailto:info@pointfs.com" className="flex items-center gap-3 text-white text-base font-normal leading-none hover:text-[#ED7426] transition-colors">
                <Icon icon="solar:letter-bold" className="w-5 h-5 flex-shrink-0" />
                info@pointfs.com
              </a>
              <a href="tel:8442047016" className="flex items-center gap-3 text-white text-base font-normal leading-none hover:text-[#ED7426] transition-colors">
                <Icon icon="solar:phone-bold" className="w-4 h-4 flex-shrink-0" />
                844-204-7016
              </a>
            </div>
          </div>
        </div>

        {/* ── Column 3: Shippers ── */}
        <div className="flex flex-col gap-8 self-stretch">
          <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Shippers</p>
          <div className="flex flex-col gap-10 text-white text-base font-normal leading-normal">
            <Link href="#ftl" className="hover:text-[#ED7426] transition-colors">Full Truckload (FTL)</Link>
            <Link href="#temp" className="hover:text-[#ED7426] transition-colors">Temperature Controlled</Link>
            <Link href="#ltl" className="hover:text-[#ED7426] transition-colors">Less than Truckload (LTL)</Link>
            <Link href="#flatbed" className="hover:text-[#ED7426] transition-colors">Flat Bed &amp; Specialized</Link>
            <Link href="#expedite" className="hover:text-[#ED7426] transition-colors">Expedite</Link>
            <Link href="#drayage" className="hover:text-[#ED7426] transition-colors">Drayage</Link>
            <Link href="#intermodal" className="hover:text-[#ED7426] transition-colors">Intermodal</Link>
            <Link href="#value" className="hover:text-[#ED7426] transition-colors">Value-added Services</Link>
          </div>
        </div>

        {/* ── Column 4: Carriers + Technology + Follow us ── */}
        <div className="flex flex-col justify-between self-stretch gap-8">
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Carriers</p>
            <Link href="/carriers" className="text-white text-base font-normal leading-none hover:text-[#ED7426] transition-colors">Overview</Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Technology</p>
            <div className="flex flex-col gap-10 text-white text-base font-normal leading-none">
              <Link href="#shippers-platform" className="hover:text-[#ED7426] transition-colors">Shippers Platform</Link>
              <Link href="#carriers-platform" className="hover:text-[#ED7426] transition-colors">Carriers Platform</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Follow us</p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram"><img src={imgSocial1} alt="" className="w-7 h-7" /></a>
              <a href="#" aria-label="LinkedIn"><img src={imgSocial2} alt="" className="w-7 h-7" /></a>
              <a href="#" aria-label="Facebook"><img src={imgSocial3} alt="" className="w-7 h-7" /></a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom black bar */}
      <div className="bg-black h-[62px]" />
    </footer>
  );
}
