import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Clapperboard,
  Share2,
  MonitorSmartphone,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  onOpenAudit?: () => void;
}

export default function Header({ onOpenAudit }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${href}`);
    }
  };

  const handleAuditClick = () => {
    setMobileMenuOpen(false);
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      const contactSec = document.getElementById("contact");
      if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-20">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 md:px-7 border-2 border-b-4 ${
            scrolled
              ? "border-navy bg-white shadow-none"
              : "border-transparent bg-transparent shadow-none"
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-navy"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border-2 border-navy bg-coral text-base font-black text-navy rotate-[-8deg] shadow-sm">
              S
            </span>
            <span>
              Socio <span className="text-ocean">kraft</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="group relative flex items-center gap-1 py-1 text-sm font-bold text-navy transition hover:text-ocean"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded bg-coral transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              {/* Mega Dropdown Menu */}
              <div
                className={`absolute left-1/2 top-full w-[540px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-3 rounded-3xl border-2 border-navy bg-white p-4 hard-shadow">
                  <a
                    href="#svc-content"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#svc-content");
                    }}
                    className="group/m rounded-2xl bg-peach p-4 transition-all hover:-translate-y-1"
                  >
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-coral border-2 border-navy text-navy transition-transform group-hover/m:rotate-12">
                      <Clapperboard className="h-5 w-5" />
                    </span>
                    <p className="font-bold text-navy">Content Studio</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Reels, scripts, carousels & editing
                    </p>
                  </a>

                  <a
                    href="#svc-social"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#svc-social");
                    }}
                    className="group/m rounded-2xl bg-skylight p-4 transition-all hover:-translate-y-1"
                  >
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-ocean border-2 border-navy text-white transition-transform group-hover/m:rotate-12">
                      <Share2 className="h-5 w-5" />
                    </span>
                    <p className="font-bold text-navy">Social Media Growth</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Profiles, calendars & reporting
                    </p>
                  </a>

                  <a
                    href="#svc-web"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#svc-web");
                    }}
                    className="group/m rounded-2xl bg-mint p-4 transition-all hover:-translate-y-1"
                  >
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-emerald border-2 border-navy text-white transition-transform group-hover/m:rotate-12">
                      <MonitorSmartphone className="h-5 w-5" />
                    </span>
                    <p className="font-bold text-navy">Doctor Websites</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Portfolios, SEO & inquiry forms
                    </p>
                  </a>

                  <a
                    href="#growth"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#growth");
                    }}
                    className="group/m rounded-2xl bg-lavender p-4 transition-all hover:-translate-y-1"
                  >
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-grape border-2 border-navy text-white transition-transform group-hover/m:rotate-12">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <p className="font-bold text-navy">Growth Services</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Brand strategy, GBP, funnels
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Home Link */}
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`group relative py-1 text-sm font-bold transition ${
                location.pathname === "/"
                  ? "text-ocean"
                  : "text-navy hover:text-ocean"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-coral transition-transform duration-300 ${
                  location.pathname === "/"
                    ? "scale-x-100"
                    : "scale-x-0 origin-left group-hover:scale-x-100"
                }`}
              />
            </Link>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#work");
              }}
              className="group relative py-1 text-sm font-bold text-navy hover:text-ocean transition"
            >
              Our Work
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded bg-coral transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <Link
              to="/about"
              className={`group relative py-1 text-sm font-bold transition ${
                location.pathname === "/about"
                  ? "text-ocean"
                  : "text-navy hover:text-ocean"
              }`}
            >
              About
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-coral transition-transform duration-300 ${
                  location.pathname === "/about"
                    ? "scale-x-100"
                    : "scale-x-0 origin-left group-hover:scale-x-100"
                }`}
              />
            </Link>

            <Link
              to="/faq"
              className={`group relative py-1 text-sm font-bold transition ${
                location.pathname === "/faq"
                  ? "text-ocean"
                  : "text-navy hover:text-ocean"
              }`}
            >
              FAQs
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-coral transition-transform duration-300 ${
                  location.pathname === "/faq"
                    ? "scale-x-100"
                    : "scale-x-0 origin-left group-hover:scale-x-100"
                }`}
              />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={handleAuditClick}
              className="btn-pill-coral px-5 py-2.5 text-sm"
            >
              Free Digital Audit
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-sunny text-navy lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-sunny p-6 transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 text-xl font-extrabold text-navy"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-navy bg-coral text-sm font-black text-navy rotate-[-8deg]">
              S
            </span>
            Sociokraft
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-card text-navy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-3">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#services");
            }}
            className="text-3xl font-extrabold text-navy transition hover:translate-x-2"
          >
            Services
          </a>
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`text-3xl font-extrabold transition hover:translate-x-2 ${
              location.pathname === "/" ? "text-ocean" : "text-navy"
            }`}
          >
            Home
          </Link>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#work");
            }}
            className="text-3xl font-extrabold text-navy transition hover:translate-x-2"
          >
            Our Work
          </a>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-3xl font-extrabold transition hover:translate-x-2 ${
              location.pathname === "/about" ? "text-ocean" : "text-navy"
            }`}
          >
            About
          </Link>
          <Link
            to="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-3xl font-extrabold transition hover:translate-x-2 ${
              location.pathname === "/faq" ? "text-ocean" : "text-navy"
            }`}
          >
            FAQs
          </Link>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="text-3xl font-extrabold text-navy transition hover:translate-x-2"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={handleAuditClick}
          className="btn-pill-navy mt-8 w-full py-3.5 text-base"
        >
          Claim Your Free Digital Audit
        </button>
      </div>
    </header>
  );
}
