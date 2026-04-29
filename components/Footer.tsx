import Link from "next/link";
import { Icon } from "@iconify/react";

const imgLogo    = "/images/logo-footer.png";
const imgSocial2 = "/images/🦆 icon _linkedin in_orange.svg";

export default function Footer() {
  return (
    <footer className="bg-[#03395B] w-full">
      <div className="max-w-[1280px] mx-auto px-5 py-16 md:py-[100px] flex flex-col md:flex-row md:justify-between md:items-stretch gap-10 md:gap-8">

        {/* ── Column 1: Logo + tagline + offices ── */}
        <div className="w-full md:w-[341px] flex flex-col justify-between gap-10 ">
          <div className="flex flex-col gap-7">
            <img src={imgLogo} alt="Point Freight Systems" className="w-[144px] h-[53px] object-contain" />
            <div className="flex flex-col gap-8">
              <p className="text-[#ED7426] text-[32px] md:text-[40px] font-bold leading-none">
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
        <div className="flex flex-col justify-between gap-10 w-fit md:h-[524px]">
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Discover the Point</p>
            <div className="flex flex-col gap-10 text-white text-base font-normal leading-none">
              <Link href="/about" className="hover:text-gray-400 transition-colors">About Us</Link>
              <Link href="/work-with-us" className="hover:text-gray-400 transition-colors">Work with us</Link>
              <Link href="/request-quote" className="hover:text-gray-400 transition-colors">Request a Quote</Link>
              <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
              <a href="https://app.turvo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Login</a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Contact Us</p>
            <div className="flex flex-col gap-10">
              <a href="mailto:info@pointfs.com" className="flex items-center gap-3 text-white text-base font-normal leading-none hover:text-gray-400 transition-colors">
                <Icon icon="solar:letter-bold" className="w-5 h-5 flex-shrink-0" />
                info@pointfs.com
              </a>
              <a href="tel:8442047016" className="flex items-center gap-3 text-white text-base font-normal leading-none hover:text-gray-400 transition-colors">
                <Icon icon="solar:phone-bold" className="w-4 h-4 flex-shrink-0" />
                844-204-7016
              </a>
            </div>
          </div>
        </div>

        {/* ── Column 3: Shippers ── */}
        <div className="flex flex-col gap-8 w-fit">
          <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Shippers</p>
          <div className="flex flex-col gap-10 text-white text-base font-normal leading-normal">
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Full Truckload (FTL)</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Temperature Controlled</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Less than Truckload (LTL)</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Flat Bed &amp; Specialized</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Expedite</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Drayage</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Intermodal</Link>
            <Link href="/shippers" className="hover:text-gray-400 transition-colors">Value-added Services</Link>
          </div>
        </div>

        {/* ── Column 4: Carriers + Platform + Follow us + Legal ── */}
        <div className="flex flex-col gap-8 w-fit md:h-[524px] md:justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Carriers</p>
            <Link href="/carriers" className="text-white text-base font-normal leading-none hover:text-gray-400 transition-colors">Overview</Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Platform</p>
            <div className="flex flex-col gap-6 text-white text-base font-normal leading-none">
              <Link href="/technology/shippers" className="hover:text-gray-400 transition-colors">Shippers Platform</Link>
              <Link href="/technology" className="hover:text-gray-400 transition-colors">Carriers Platform</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Follow us</p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/point-freight-systems/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src={imgSocial2} alt="" className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#ED7426] text-xl font-bold leading-none whitespace-nowrap">Legal</p>
            <div className="flex flex-col gap-6 text-white text-base font-normal leading-none">
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom black bar */}
      <div className="bg-black h-[62px] flex items-center">
        <div className="max-w-[1280px] mx-auto px-5 w-full flex items-center justify-between">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Point Freight Systems. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hidden md:inline text-white/40 text-xs hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hidden md:inline text-white/40 text-xs hover:text-white/70 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
