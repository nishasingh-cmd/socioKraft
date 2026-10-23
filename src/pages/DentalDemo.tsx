import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Activity,
  User,
  ChevronDown,
  ExternalLink,
  ChevronRight,
  Check,
  Stethoscope,
  Smile,
  Zap,
} from "lucide-react";

export default function DentalDemo() {
  const [activeTab, setActiveTab] = useState<"implants" | "fullmouth" | "aligners" | "smile">("implants");
  const [selectedService, setSelectedService] = useState("Single Dental Implant");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;
    setBookingSuccess(true);
  };

  const treatments = [
    {
      id: "implants",
      name: "Single Tooth Implant",
      tag: "Permanent Solution",
      desc: "Precision titanium or zirconia root replacement that integrates seamlessly with your jawbone, topped with a custom shade-matched zirconia crown.",
      benefits: ["Prevents bone loss", "No damage to adjacent teeth", "Looks & chews 100% natural", "Lifetime structural warranty"],
      time: "45-60 mins procedure",
      recovery: "Return to work next day",
    },
    {
      id: "fullmouth",
      name: "All-on-4 / All-on-6 Full Arch",
      tag: "Immediate Teeth in 24 Hrs",
      desc: "Replace an entire arch of missing or failing teeth with 4 to 6 strategically angled computer-guided implants and fixed non-removable teeth.",
      benefits: ["Fixed teeth, never slip or click", "Eat crunchy foods with full bite force", "Restores youthful facial structure", "No extensive bone grafting required"],
      time: "Same-day provisional teeth",
      recovery: "Mild soreness for 48 hrs",
    },
    {
      id: "aligners",
      name: "Invisalign & Clear Aligners",
      tag: "Zero Wires",
      desc: "Custom digitally designed clear aligners that gently guide your teeth into optimal alignment without metal brackets or food restrictions.",
      benefits: ["Virtually invisible", "Removable for meals & brushing", "Digital 3D smile prediction", "Fewer clinic visits needed"],
      time: "6 to 14 months typical",
      recovery: "Zero downtime",
    },
    {
      id: "smile",
      name: "Digital Smile Makeover",
      tag: "Celebrity Aesthetics",
      desc: "Handcrafted ultra-thin porcelain veneers and digital gum recontouring designed using AI facial mapping to deliver your ideal radiant smile.",
      benefits: ["Permanent stain resistance", "Closes gaps & straightens edges", "Designed to match your facial symmetry", "Natural light translucency"],
      time: "2 sessions across 5 days",
      recovery: "Instant results",
    },
  ];

  const faqs = [
    {
      q: "Is getting a dental implant painful?",
      a: "No. With advanced computer-guided keyhole surgery and gentle local anesthesia, the placement procedure is virtually painless. Most patients describe feeling only slight pressure and report that getting an implant is easier than a routine tooth extraction.",
    },
    {
      q: "How long do modern dental implants last?",
      a: "When placed with 3D CBCT digital precision and maintained with routine brushing and dental check-ups, dental implants are engineered to last a lifetime. We back our titanium fixtures with an official written lifetime warranty.",
    },
    {
      q: "Can I get my replacement teeth on the same day?",
      a: "Yes! Using our 'Immediate Loading' protocol and in-house digital CAD/CAM milling, suitable candidates can receive a customized fixed provisional tooth on the very same day the implant is placed, so you never have to leave with a gap.",
    },
    {
      q: "What is the cost of dental implants in Mumbai?",
      a: "Our pricing is fully transparent with zero hidden charges. Single dental implants with German-engineered fixtures and zirconia crowns start from ₹28,000 to ₹45,000 depending on the clinical requirement. We also offer 0% interest monthly EMI options.",
    },
    {
      q: "How does 3D computer-guided implant surgery work?",
      a: "We take an ultra-low radiation 3D CBCT scan of your jaw and digitally simulate the ideal implant position on software down to the sub-millimeter. A custom 3D printed surgical guide is then used during the procedure for pin-point accuracy without cutting large flaps in your gum.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#0EA5E9]/20 selection:text-[#0369A1]">
      {/* ========================================================= */}
      {/* SOCIOKRAFT DEMO HEADER BAR */}
      {/* ========================================================= */}
      <aside aria-label="Demo notice" className="sticky top-0 z-50 border-b border-[#0F172A]/10 bg-[#0F172A] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-semibold text-[#38BDF8]">SocioKraft Concept Demo:</span>
            <span className="hidden sm:inline text-slate-300">
              High-converting website hero & landing page crafted for dental implant specialists.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1 font-bold text-slate-200 hover:text-white transition-colors underline underline-offset-2"
            >
              ← Back to Portfolio
            </Link>
            <Link
              to="/contact"
              className="hidden sm:inline-flex rounded-full bg-[#F59E0B] px-3 py-1 text-[11px] font-bold text-[#0F172A] hover:bg-[#D97706] transition"
            >
              Get This For Your Practice
            </Link>
          </div>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* CLINIC TOP ANNOUNCEMENT BAR */}
      {/* ========================================================= */}
      <div className="border-b border-slate-200 bg-white px-4 py-2 text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919820045112"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-[#0284C7] transition"
            >
              <Phone className="h-3.5 w-3.5 text-[#0284C7]" />
              <span>+91 98200 45112</span>
            </a>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <div className="hidden items-center gap-1.5 text-slate-600 sm:inline-flex">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>Mon - Sat: 9:00 AM – 8:30 PM</span>
            </div>
            <span className="hidden text-slate-300 md:inline">|</span>
            <div className="hidden items-center gap-1.5 text-slate-600 md:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-[#EF4444]" />
              <span>Linking Road, Bandra West, Mumbai</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-700 font-bold border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              Accepting New Patients This Week
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN CLINIC NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-[37px] z-40 border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white shadow-md shadow-sky-500/20">
              {/* Dental Tooth Logo Icon */}
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.2 6 7.5C6 9.8 7 11.8 7.8 14.5C8.6 17.2 9.2 21 10.5 21C11.5 21 11.8 18.5 12 17C12.2 18.5 12.5 21 13.5 21C14.8 21 15.4 17.2 16.2 14.5C17 11.8 18 9.8 18 7.5C18 4.2 15.5 2 12 2Z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-[#0F172A] sm:text-xl font-heading">
                  Apex Dental & Implant Centre
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">
                Centre for Advanced 3D Guided Implantology · Mumbai
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#treatments" className="transition hover:text-[#0284C7]">
              Dental Implants
            </a>
            <a href="#treatments" className="transition hover:text-[#0284C7]">
              Full Mouth Rehab
            </a>
            <a href="#treatments" className="transition hover:text-[#0284C7]">
              Smile Makeover
            </a>
            <a href="#doctor" className="transition hover:text-[#0284C7]">
              About Dr. Sharma
            </a>
            <a href="#reviews" className="transition hover:text-[#0284C7]">
              Patient Stories
            </a>
            <a href="#faqs" className="transition hover:text-[#0284C7]">
              FAQs
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-600/20 transition hover:from-[#B45309] hover:to-[#92400E] active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F5F9] via-white to-white py-12 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold text-[#0369A1] mb-5">
                <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>#1 Rated Dental Implant Clinic in Mumbai · 1,200+ Reviews</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl sm:leading-[1.12] font-heading">
                Best Dental Implant Specialist in Mumbai
              </h1>

              {/* Doctor Byline & Subhead */}
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
                Led by <strong className="text-[#0F172A] font-bold">Dr. Ananya Sharma (MDS Implantology)</strong>. Experience painless 3D computer-guided dental implants & digital smile design with a written lifetime warranty.
              </p>

              {/* Feature Points */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0" />
                  <span>German 3D Guided Keyhole Surgery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0" />
                  <span>Zero Pain & Immediate Teeth Option</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0" />
                  <span>Lifetime Warranty On Implants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0" />
                  <span>0% Interest EMI Available</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition active:scale-95"
                >
                  <Calendar className="h-4 w-4 text-[#F59E0B]" />
                  <span>Book Consultation</span>
                </a>
                <a
                  href="https://wa.me/919820045112?text=Hello%20Dr.%20Sharma,%20I%20would%20like%20to%20inquire%20about%20dental%20implants"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-100 transition active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Doctor</span>
                </a>
                <a
                  href="tel:+919820045112"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>+91 98200 45112</span>
                </a>
              </div>

              {/* Key Numerical Stats Row */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-4">
                <div className="border-l-2 border-[#0284C7] pl-3">
                  <p className="text-2xl font-black text-[#0F172A] font-heading sm:text-3xl">16+</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Years Experience</p>
                </div>
                <div className="border-l-2 border-[#0284C7] pl-3">
                  <p className="text-2xl font-black text-[#0F172A] font-heading sm:text-3xl">8,500+</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Implants Placed</p>
                </div>
                <div className="border-l-2 border-[#0284C7] pl-3">
                  <p className="text-2xl font-black text-[#0F172A] font-heading sm:text-3xl">99.6%</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Success Rate</p>
                </div>
                <div className="border-l-2 border-[#0284C7] pl-3">
                  <p className="text-2xl font-black text-[#0F172A] font-heading sm:text-3xl">German</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">CBCT 3D Guided</p>
                </div>
              </div>
            </div>

            {/* Right Visual & Booking Column */}
            <div className="lg:col-span-5" id="book">
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
                {/* Visual Header Inside Card */}
                <div className="mb-4 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                  <img
                    src="/dental-clinic-site.png"
                    alt="Apex Dental & Implant Centre Demo Hero"
                    className="h-44 w-full object-cover object-top"
                  />
                  <div className="bg-[#0F172A] px-3.5 py-2 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold text-sky-300">Dr. Ananya Sharma, MDS</span>
                    <span className="text-slate-400">Oral Implantologist</span>
                  </div>
                </div>

                {/* Interactive Instant Booking Form */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-black text-[#0F172A]">
                      Schedule a Free 3D Smile Assessment
                    </h3>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                      Zero Waiting
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Includes digital CBCT scan consultation & personalized cost estimate.
                  </p>

                  {bookingSuccess ? (
                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <Check className="h-5 w-5" />
                      </div>
                      <h4 className="mt-2 text-sm font-bold text-emerald-900">
                        Appointment Requested Successfully!
                      </h4>
                      <p className="mt-1 text-xs text-emerald-700">
                        Thank you, {bookingName}. Our clinic coordinator will call or WhatsApp you at {bookingPhone} within 15 minutes to confirm your preferred slot.
                      </p>
                      <button
                        onClick={() => {
                          setBookingSuccess(false);
                          setBookingName("");
                          setBookingPhone("");
                        }}
                        className="mt-3 text-xs font-bold text-emerald-800 underline underline-offset-2"
                      >
                        Book another appointment
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="mt-4 space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Required Treatment
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-[#0284C7] focus:bg-white"
                        >
                          <option>Single Dental Implant</option>
                          <option>Multiple Implants</option>
                          <option>All-on-4 / All-on-6 Full Jaw</option>
                          <option>Digital Smile Makeover / Veneers</option>
                          <option>Invisalign / Clear Aligners</option>
                          <option>General Dental Second Opinion</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Verma"
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none focus:border-[#0284C7] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            WhatsApp / Mobile
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={bookingPhone}
                            onChange={(e) => setBookingPhone(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none focus:border-[#0284C7] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none focus:border-[#0284C7] focus:bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] py-3 text-xs font-bold text-white shadow-md shadow-sky-600/20 hover:from-[#0369A1] hover:to-[#075985] transition"
                      >
                        Confirm Free 3D Consultation →
                      </button>

                      <p className="text-center text-[10px] text-slate-400">
                        🔒 Strict medical privacy. No spam. Instant WhatsApp confirmation.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY CHOOSE APEX / ADVANCED TECHNOLOGY */}
      {/* ========================================================= */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
              Next-Gen Medical Standards
            </span>
            <h2 className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl font-heading">
              Why Patients Choose Our Guided Dental Implant Center
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Replacing teeth shouldn't be an ordeal. We combine Swiss & German precision engineering with painless keyhole surgery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:shadow-lg hover:border-sky-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#0284C7]">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0F172A]">3D CBCT Guided Surgery</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Sub-millimeter computer simulation allows placement without surgical cuts or sutures, ensuring swift recovery.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:shadow-lg hover:border-sky-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0F172A]">Written Lifetime Warranty</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Official certificates for all premium implant fixtures (Straumann, Nobel Biocare & Bredent) for your complete peace of mind.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:shadow-lg hover:border-sky-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0F172A]">Teeth In A Day Protocol</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Walk out with fixed functional teeth in 24 hours with immediate loading CAD/CAM milling technology.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:shadow-lg hover:border-sky-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0F172A]">MDS Implant Specialists</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Every procedure is performed exclusively by board-certified MDS surgeons with 16+ years of international fellowship training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE TREATMENTS TABS */}
      {/* ========================================================= */}
      <section id="treatments" className="border-t border-slate-200 bg-[#F1F5F9] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                Clinical Specializations
              </span>
              <h2 className="mt-1 text-2xl font-black text-[#0F172A] sm:text-3xl font-heading">
                Comprehensive Dental Solutions
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              From single tooth replacement to full mouth reconstruction and cosmetic smile design.
            </p>
          </div>

          {/* Treatment Tabs Navigation */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-300 pb-3">
            {treatments.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  activeTab === t.id
                    ? "bg-[#0F172A] text-white shadow"
                    : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active Treatment Card */}
          {(() => {
            const current = treatments.find((t) => t.id === activeTab) || treatments[0];
            return (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-[#0284C7]">
                      {current.tag}
                    </span>
                    <h3 className="mt-3 text-2xl font-black text-[#0F172A] font-heading">
                      {current.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {current.desc}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Clinical Advantages:
                      </h4>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-xs font-semibold text-slate-700">
                        {current.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5 text-xs text-slate-500">
                      <div>
                        <span className="font-bold text-slate-700">Duration: </span>
                        {current.time}
                      </div>
                      <div>
                        <span className="font-bold text-slate-700">Downtime: </span>
                        {current.recovery}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/30">
                      <Smile className="h-8 w-8" />
                    </div>
                    <h4 className="mt-4 text-base font-bold text-[#0F172A]">
                      Ready to Restore Your Smile?
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      Get a free 3D digital diagnosis & treatment timeline from Dr. Sharma.
                    </p>
                    <a
                      href="#book"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0284C7] py-3 text-xs font-bold text-white shadow hover:bg-[#0369A1] transition"
                    >
                      <span>Inquire About {current.name}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================================= */}
      {/* DOCTOR CREDENTIALS & PROFILE */}
      {/* ========================================================= */}
      <section id="doctor" className="bg-white py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-900">
                <img
                  src="/dental-clinic-site.png"
                  alt="Dr. Ananya Sharma"
                  className="w-full object-cover object-top h-96"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                  <p className="text-xl font-black">Dr. Ananya Sharma</p>
                  <p className="text-xs text-sky-300">MDS (Oral Implantology), Fellow ICOI (USA)</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                Meet Your Specialist
              </span>
              <h2 className="mt-1 text-3xl font-black text-[#0F172A] font-heading">
                Dr. Ananya Sharma
              </h2>
              <p className="text-sm font-semibold text-[#0284C7] mt-0.5">
                Head of Oral Implantology & Aesthetic Rehabilitation
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                With over 16 years of clinical dedication and more than 8,500 successfully integrated implants, Dr. Ananya Sharma is recognized among Mumbai's top oral implantologists. She completed advanced fellowship credentials in guided implantology in Zurich, Switzerland and Bern, Germany.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <p className="font-bold text-[#0F172A]">Fellow, ICOI (USA)</p>
                  <p className="text-slate-500 mt-0.5">International Congress of Oral Implantologists</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <p className="font-bold text-[#0F172A]">Certified Digital Smile Designer</p>
                  <p className="text-slate-500 mt-0.5">DSD Certified Clinic Partner</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <p className="font-bold text-[#0F172A]">8,500+ Implants Placed</p>
                  <p className="text-slate-500 mt-0.5">Zero failure record in guided surgeries</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <p className="font-bold text-[#0F172A]">Swiss & German Systems</p>
                  <p className="text-slate-500 mt-0.5">Straumann, Nobel Biocare, Bredent</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#book"
                  className="rounded-xl bg-[#0F172A] px-5 py-3 text-xs font-bold text-white hover:bg-slate-800 transition"
                >
                  Consult Dr. Sharma Directly
                </a>
                <a
                  href="tel:+919820045112"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#0284C7]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0284C7]" />
                  <span>Call +91 98200 45112</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PATIENT REVIEWS & RATINGS */}
      {/* ========================================================= */}
      <section id="reviews" className="bg-[#F8FAFC] py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>4.9 / 5.0 Star Rating from 1,200+ Verified Patients</span>
            </div>
            <h2 className="mt-3 text-2xl font-black text-[#0F172A] sm:text-3xl font-heading">
              Real Patients. Life-Changing Smiles.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex text-amber-400">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 italic">
                "I was terrified of getting dental implants after a bad extraction years ago. Dr. Ananya Sharma and her team made the whole 3D guided procedure 100% painless. I ate dinner normally that very night!"
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="text-xs font-bold text-[#0F172A]">Sunil K., 54 yrs</p>
                <p className="text-[10px] text-slate-400">Full Upper Arch All-on-4 Patient</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex text-amber-400">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 italic">
                "Lost two front teeth in a cycling accident. Dr. Sharma placed immediate implants and provisional crowns on the exact same morning. My smile looks even better than my original teeth."
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="text-xs font-bold text-[#0F172A]">Meera Sengupta, 31 yrs</p>
                <p className="text-[10px] text-slate-400">Front Tooth Aesthetic Implant</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex text-amber-400">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 italic">
                "Transparent pricing, zero hidden costs, and world-class clinic hygiene. The 3D scan explanation before surgery gave me total confidence. Highly recommend Dr. Ananya!"
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="text-xs font-bold text-[#0F172A]">Rajesh Iyer, 62 yrs</p>
                <p className="text-[10px] text-slate-400">Molar Replacement with Zirconia Crown</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQS SECTION */}
      {/* ========================================================= */}
      <section id="faqs" className="bg-white py-16 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
              Got Questions?
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#0F172A] sm:text-3xl font-heading">
              Frequently Asked Questions About Dental Implants
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-[#0F172A]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180 text-[#0284C7]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER & CLINIC DETAILS */}
      {/* ========================================================= */}
      <footer className="border-t border-slate-200 bg-[#0F172A] py-12 text-slate-400 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0284C7] text-white">
                  ✦
                </span>
                <span>Apex Dental Centre</span>
              </div>
              <p className="mt-3 text-slate-400 text-xs leading-relaxed">
                Premier center for 3D guided dental implantology, restorative dentistry, and smile aesthetics in Mumbai.
              </p>
              <p className="mt-3 text-[11px] text-slate-500">
                ISO 9001:2015 Certified Clean Environment
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Treatments</h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li><a href="#treatments" className="hover:text-white transition">Single Dental Implants</a></li>
                <li><a href="#treatments" className="hover:text-white transition">All-On-4 Full Arch</a></li>
                <li><a href="#treatments" className="hover:text-white transition">Digital Smile Design</a></li>
                <li><a href="#treatments" className="hover:text-white transition">Clear Aligners</a></li>
                <li><a href="#treatments" className="hover:text-white transition">Bone Grafting & Sinus Lift</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Clinic Hours</h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li>Mon - Fri: 9:00 AM – 8:30 PM</li>
                <li>Saturday: 9:00 AM – 7:00 PM</li>
                <li>Sunday: By Prior Appointment</li>
                <li className="pt-2 text-amber-400 font-semibold">24/7 Dental Trauma Helpline</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Clinic Address</h4>
              <p className="mt-3 text-xs leading-relaxed">
                Suite 402, Apex Medical Chambers,<br />
                Near National College, Linking Road,<br />
                Bandra West, Mumbai - 400050.
              </p>
              <p className="mt-2 text-sky-400 font-bold">
                Direct: +91 98200 45112
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 Apex Dental & Implant Centre. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">Crafted by SocioKraft Healthcare Agency</span>
              <Link to="/" className="text-sky-400 hover:underline">
                Back to Agency
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
