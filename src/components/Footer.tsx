import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface FooterProps {
  onOpenAudit?: () => void;
}

export default function Footer({ onOpenAudit }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setShowBottomBar(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919999999999?text=Hi%20Sociokraft,%20I'm%20a%20doctor%20interested%20in%20growing%20my%20digital%20presence.", "_blank");
  };

  return (
    <>
      <footer className="relative bg-navy pt-16 pb-20 md:pb-0 text-cream">
        {/* Top Wave Divider */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="absolute -top-9 left-0 block h-10 w-full text-navy"
          aria-hidden="true"
        >
          <path
            d="M0 30 Q 120 0 240 30 T 480 30 T 720 30 T 960 30 T 1200 30 T 1440 30 V60 H0Z"
            fill="currentColor"
          />
        </svg>

        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:px-[108px] md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand info */}
          <div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2 text-2xl font-extrabold text-cream"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral border-2 border-navy text-navy rotate-[-8deg] font-black">
                S
              </span>
              Sociokraft
            </a>
            <p className="mt-4 max-w-xs text-sm text-cream/75 leading-relaxed">
              A digital growth studio for doctors — personal branding, content
              creation, social media management and professional websites.
            </p>
            {/* Spinning Star */}
            <svg
              viewBox="0 0 24 24"
              className="mt-6 h-10 w-10 text-sunny animate-spin-slow"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z"
              />
            </svg>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-3 font-bold text-sunny">Quick Links</p>
            <ul className="space-y-2 text-sm text-cream/75 [&_a:hover]:text-sunny [&_a]:transition">
              <li>
                <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo("#top"); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#team" onClick={(e) => { e.preventDefault(); scrollTo("#team"); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("#work"); }}>
                  Our Work
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo("#pricing"); }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("#process"); }}>
                  Process
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo("#faq"); }}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-3 font-bold text-turq">Services</p>
            <ul className="space-y-2 text-sm text-cream/75 [&_a:hover]:text-sunny [&_a]:transition">
              <li>
                <a href="#svc-content" onClick={(e) => { e.preventDefault(); scrollTo("#svc-content"); }}>
                  Doctor Personal Branding
                </a>
              </li>
              <li>
                <a href="#svc-social" onClick={(e) => { e.preventDefault(); scrollTo("#svc-social"); }}>
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#svc-content" onClick={(e) => { e.preventDefault(); scrollTo("#svc-content"); }}>
                  Reels & Video Production
                </a>
              </li>
              <li>
                <a href="#svc-content" onClick={(e) => { e.preventDefault(); scrollTo("#svc-content"); }}>
                  Medical Content Creation
                </a>
              </li>
              <li>
                <a href="#svc-web" onClick={(e) => { e.preventDefault(); scrollTo("#svc-web"); }}>
                  Doctor Portfolio Websites
                </a>
              </li>
              <li>
                <a href="#growth" onClick={(e) => { e.preventDefault(); scrollTo("#growth"); }}>
                  Digital Presence Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="mb-3 font-bold text-pink">Resources</p>
            <ul className="space-y-2 text-sm text-cream/75 [&_a:hover]:text-sunny [&_a]:transition">
              <li>
                <span className="opacity-60">Blog (coming soon)</span>
              </li>
              <li>
                <span className="opacity-60">Medical Content Insights (soon)</span>
              </li>
              <li>
                <span className="opacity-60">Branding Tips (soon)</span>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo("#faq"); }}>
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 font-bold text-sky">Contact</p>
            <ul className="space-y-2 text-sm text-cream/75 [&_a:hover]:text-sunny [&_a]:transition">
              <li>
                <span className="opacity-80">hello@sociokraft.com</span>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="underline hover:text-sunny transition"
                >
                  WhatsApp: +91 99999 99999
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAudit && onOpenAudit()}
                  className="underline hover:text-sunny transition font-semibold"
                >
                  Send an inquiry →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Giant Outline Text */}
        <div className="mt-14 overflow-hidden border-t border-cream/10">
          <p className="whitespace-nowrap py-6 text-center text-[12vw] font-black leading-none text-outline opacity-30 select-none">
            Sociokraft
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-4 sm:px-6 lg:px-[108px] pb-24 text-xs text-cream/60 md:flex-row md:pb-8">
          <p>© 2026 Sociokraft. Great doctors deserve to be seen.</p>
          <div className="flex gap-4">
            <a href="#top" className="hover:text-sunny transition">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-sunny transition">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={handleWhatsApp}
        aria-label="Contact on WhatsApp"
        className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 place-items-center rounded-full border-2 border-navy bg-emerald text-cream hard-shadow-sm transition-transform hover:scale-110 active:scale-95 md:grid"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border-2 border-navy bg-card text-navy transition-all duration-300 hover:-translate-y-1 ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Mobile Bottom Fixed Bar (Appears after scrolling past hero) */}
      <div
        className={`fixed inset-x-3 bottom-3 z-40 flex gap-2 transition-all duration-300 md:hidden ${
          showBottomBar
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <button
          onClick={() => onOpenAudit && onOpenAudit()}
          className="flex-1 rounded-full border-2 border-navy bg-coral py-3 font-bold hard-shadow-sm text-navy text-sm"
        >
          Free Digital Audit
        </button>
        <button
          onClick={handleWhatsApp}
          aria-label="WhatsApp"
          className="grid w-14 place-items-center rounded-full border-2 border-navy bg-emerald text-cream hard-shadow-sm"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}