import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  Sparkles,
  Check,
  Heart,
  Camera,
  Globe,
  MessageCircle,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Brain,
  Palette,
  Quote,
  ShieldCheck,
  Award,
  ArrowRight,
  Lightbulb,
  Users,
  CheckCircle2,
  Play,
  Film,
  FileText,
  TrendingUp,
  Target,
  Eye,
} from "lucide-react";

// Image URLs (same as Home page reference)
const doc1Img = "/assets/doc-1-D56fzcjv.jpg";
const doc2Img = "/assets/doc-2-BjDT3-tI.jpg";
const reelImg = "/assets/reel-BeT_mf_x.jpg";
const shootImg = "/assets/shoot-CzRfnzF2.jpg";

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const clientReviews = [
  {
    id: 1,
    name: "Dr. Gaurav Neurospine",
    initials: "DG",
    avatarBg: "bg-emerald",
    category: "Healthcare Digital Growth",
    stars: 5,
    text: "Outstanding digital transformation for our neurospine clinic. SocioKraft built a high-converting patient appointment website and dominated local search SEO, boosting our qualified inquiries by +180%.",
  },
  {
    id: 2,
    name: "Dr. Priya Aesthetic Skin",
    initials: "PS",
    avatarBg: "bg-coral",
    category: "Dermatology & Reels",
    stars: 5,
    text: "The reel scripting and on-site clinic shoots took all the stress off my shoulders. Patients walk into our consultation room having already watched my videos and knowing our treatment philosophy.",
  },
  {
    id: 3,
    name: "Dr. Anand Cardiac Care",
    initials: "AC",
    avatarBg: "bg-ocean",
    category: "Cardiology Patient Education",
    stars: 5,
    text: "Sociokraft understands medical nuance. They never suggest sensationalized clickbait; every script is scientifically accurate and designed to educate real patients with genuine care.",
  },
  {
    id: 4,
    name: "Elite Orthopedics Clinic",
    initials: "EO",
    avatarBg: "bg-grape",
    category: "Specialty Practice Growth",
    stars: 5,
    text: "From our doctor profile makeover to monthly educational carousels, Sociokraft has given our multi-doctor clinic a cohesive, premium identity that patients instantly trust.",
  },
];

export default function About() {
  // Modal states
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Audit form state
  const [auditForm, setAuditForm] = useState({
    name: "",
    specialty: "",
    city: "",
    phone: "",
    websiteOrHandle: "",
  });

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditSubmitted(true);
    setTimeout(() => {
      setAuditModalOpen(false);
      setAuditSubmitted(false);
      setAuditForm({ name: "", specialty: "", city: "", phone: "", websiteOrHandle: "" });
    }, 2500);
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
  };

  // Marquee principles ticker
  const marqueeItems = [
    { name: "Specialty-First Strategy", bg: "bg-coral text-navy" },
    { name: "100% Doctor-Approved Content", bg: "bg-sunny text-navy" },
    { name: "Clinical Accuracy First", bg: "bg-turq text-navy" },
    { name: "Scripting to Post-Production", bg: "bg-pink text-navy" },
    { name: "High-Converting Websites", bg: "bg-emerald text-cream" },
    { name: "Zero Fluff, Real Medical Trust", bg: "bg-lavender text-navy" },
    { name: "Respect For Clinical Time", bg: "bg-lemon text-navy" },
    { name: "Organic Patient Growth", bg: "bg-sky text-navy" },
  ];

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-coral selection:text-white">
      <Header onOpenAudit={() => setAuditModalOpen(true)} />

      <main>
        {/* ============================================================== */}
        {/* SECTION 1: ABOUT HERO (Theme Solid Background) */}
        {/* ============================================================== */}
        <section
          id="top"
          className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] w-full flex items-center justify-center overflow-hidden bg-skylight pt-28 pb-16 sm:pt-32 sm:pb-20 text-navy"
        >
          {/* Subtle dots pattern background */}
          <div className="absolute inset-0 dots pointer-events-none" aria-hidden="true" />

          {/* Ambient soft glow auras */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#fcd4dc]/60 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-sunny/40 blur-3xl"
          />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
            {/* "About Us" in Big Bold Font */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-navy">
              About{" "}
              <span className="relative inline-block rounded-2xl border-2 border-navy bg-coral px-4 sm:px-6 py-0.5 -rotate-1 text-navy hard-shadow">
                Us
              </span>
            </h1>

            {/* Ocean Blue Subheading */}
            <p className="mt-3.5 sm:mt-4 text-lg sm:text-2xl md:text-[26px] font-extrabold text-ocean">
              We build authoritative digital presence for modern healthcare leaders.
            </p>

            {/* Small Description */}
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              We blend medical understanding, high-impact video storytelling, and modern technology
              to turn clinical expertise into patient trust and undisputed digital leadership.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="btn-pill-coral px-6 py-3.5 text-base font-bold"
              >
                Claim Your Free Digital Audit
              </button>
              <a
                href="#story"
                className="btn-pill-card px-6 py-3.5 text-base font-bold"
              >
                Our Story & Philosophy
              </a>
            </div>

            {/* Trust badge indicators */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm font-bold text-navy">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-navy shrink-0" />
                100% Doctor Approved
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-navy shrink-0" />
                Specialty-First Strategy
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-navy shrink-0" />
                Zero Clinical Compromise
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: MARQUEE TICKER */}
        {/* ============================================================== */}
        <section
          className="pause-hover overflow-hidden border-y-2 border-navy bg-lemon py-5"
          aria-label="Our Core Commitments"
        >
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-navy">
            The Sociokraft Standard for Healthcare
          </p>
          <div className="flex w-max animate-marquee gap-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-4">
                <span
                  className={`whitespace-nowrap rounded-full border-2 border-navy px-5 py-2 text-base font-extrabold md:text-xl ${item.bg}`}
                >
                  {item.name}
                </span>
                <span className="text-xl font-black text-coral">✚</span>
              </span>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: THE STORY & OUR ORIGIN */}
        {/* ============================================================== */}
        <section id="story" className="relative bg-peach py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Our Origin Story
              </span>
            </div>

            <div className="mt-5 grid gap-12 lg:grid-cols-12 items-start">
              {/* Left Column Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-4xl font-extrabold leading-[1.04] tracking-tight md:text-6xl text-navy">
                  Why Great Doctors Were{" "}
                  <span className="relative inline-block rounded-2xl border-2 border-navy bg-card px-3 -rotate-1 text-navy">
                    Invisible
                  </span>{" "}
                  in the Digital World.
                </h2>

                <p className="text-lg text-navy/90 leading-relaxed font-medium">
                  Doctors dedicate decades of intense study and clinical practice to curing disease,
                  advancing surgical methods, and saving lives. Yet when patients turn to social
                  media for medical guidance, the platforms are frequently dominated by sensationalist
                  influencers with zero medical degrees.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Real doctors hesitate because of three genuine bottlenecks: lack of time between
                  surgeries and OPDs, anxiety over regulatory/ethical compliance, and the sheer
                  complexity of scripting, filming, and post-producing cinema-grade content.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Sociokraft was founded to eliminate those bottlenecks entirely. We handle every
                  single creative and technological step — from researching and scripting
                  patient-friendly explanations, to directing relaxed on-site clinic shoots, to
                  engineering sleek doctor websites.
                </p>

                {/* Founder Quote Card */}
                <div className="rounded-[2rem] border-2 border-navy bg-card p-6 md:p-8 hard-shadow text-navy relative mt-8">
                  <Quote className="h-10 w-10 text-coral fill-coral/20 mb-3" />
                  <p className="text-base sm:text-lg font-bold italic leading-relaxed text-navy">
                    “Healthcare marketing should never feel like a noisy commercial. It should feel
                    like a compassionate, clear conversation that reassures the patient and commands
                    unquestioned clinical respect.”
                  </p>
                  <div className="mt-4 pt-4 border-t border-navy/20 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border-2 border-navy bg-coral overflow-hidden">
                      <img
                        src="/team/founder.png?v=2"
                        alt="Divya Jain"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/team/divya.png";
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-navy">Divya Jain</p>
                      <p className="text-xs text-muted-foreground">Founder & Creative Head, Sociokraft</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column 3 Key Highlights */}
              <div className="lg:col-span-5 space-y-6">
                {/* Pillar 01 */}
                <div className="rounded-[2rem] border-2 border-navy bg-coral p-6 sm:p-7 hard-shadow text-navy">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-navy px-3 py-1 text-xs font-black text-cream">
                      PILLAR 01
                    </span>
                    <Stethoscope className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy">Clinical Nuance & Ethics</h3>
                  <p className="mt-2 text-sm text-navy/90 leading-relaxed font-medium">
                    We never compromise medical integrity for cheap algorithm spikes. Every claim is
                    backed by medical consensus and approved by the doctor.
                  </p>
                </div>

                {/* Pillar 02 */}
                <div className="rounded-[2rem] border-2 border-navy bg-sunny p-6 sm:p-7 hard-shadow text-navy">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-navy px-3 py-1 text-xs font-black text-cream">
                      PILLAR 02
                    </span>
                    <Film className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy">Full-Service Studio</h3>
                  <p className="mt-2 text-sm text-navy/90 leading-relaxed font-medium">
                    We bring studio cameras, lighting, lapel mics, and teleprompters right to your
                    clinic. Two hours of filming equals a full month of strategic content.
                  </p>
                </div>

                {/* Pillar 03 */}
                <div className="rounded-[2rem] border-2 border-navy bg-turq p-6 sm:p-7 hard-shadow text-navy">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-navy px-3 py-1 text-xs font-black text-cream">
                      PILLAR 03
                    </span>
                    <Globe className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy">Integrated Digital Identity</h3>
                  <p className="mt-2 text-sm text-navy/90 leading-relaxed font-medium">
                    Content, social media, and portfolio websites work seamlessly together, turning
                    views into booked consultations and clinic appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: VISION, MISSION & IMPACT STATS */}
        {/* ============================================================== */}
        <section className="bg-card py-20 md:py-28 relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            {/* 1. Large Statistics Banner Pill */}
            <div className="rounded-full border-2 border-navy bg-sand/60 p-4 sm:p-6 hard-shadow max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
              {/* Stat 1 */}
              <div className="flex-1 text-center">
                <div className="text-4xl sm:text-5xl font-black text-navy font-heading leading-none">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1.5 uppercase tracking-wider">
                  Doctor Brands Elevated
                </div>
              </div>

              {/* Divider 1 */}
              <div className="hidden md:block h-12 w-[2px] bg-navy/20" />

              {/* Stat 2 */}
              <div className="flex-1 text-center">
                <div className="text-4xl sm:text-5xl font-black text-coral font-heading leading-none">
                  10M+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1.5 uppercase tracking-wider">
                  Organic Patient Views
                </div>
              </div>

              {/* Divider 2 */}
              <div className="hidden md:block h-12 w-[2px] bg-navy/20" />

              {/* Stat 3 */}
              <div className="flex-1 text-center">
                <div className="text-4xl sm:text-5xl font-black text-emerald font-heading leading-none">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1.5 uppercase tracking-wider">
                  Doctor-Approved Scripts
                </div>
              </div>

              {/* Divider 3 */}
              <div className="hidden md:block h-12 w-[2px] bg-navy/20" />

              {/* Stat 4 */}
              <div className="flex-1 text-center">
                <div className="text-4xl sm:text-5xl font-black text-ocean font-heading leading-none">
                  12+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1.5 uppercase tracking-wider">
                  Specialties Mastered
                </div>
              </div>
            </div>

            {/* 2. Vision and Mission Grid */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy bg-mint">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Vision & Mission
              </span>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold md:text-5xl text-navy">
                Setting the Benchmark for{" "}
                <span className="relative inline-block rounded-2xl bg-sunny px-3 -rotate-1 border-2 border-navy text-navy">
                  Ethical Healthcare
                </span>{" "}
                Growth.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* Vision Card */}
              <div className="rounded-[2.5rem] border-2 border-navy bg-skylight p-8 sm:p-10 hard-shadow flex flex-col justify-between text-navy">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border-2 border-navy bg-navy px-3.5 py-1 text-xs font-black uppercase tracking-wider text-cream">
                      OUR VISION
                    </span>
                    <Eye className="h-6 w-6 text-ocean" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy leading-tight mb-4">
                    A world where verified medical science leads digital health conversations.
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We envision a future where patients no longer fall prey to unscientific fads or
                    quack remedies. By equipping authentic doctors with viral-level production,
                    compelling storytelling, and modern websites, we ensure credible medical
                    knowledge reaches millions across India and the globe.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t-2 border-dashed border-navy/20 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-ocean">
                    Driven by Patient Impact
                  </span>
                  <span className="h-3 w-3 rounded-full bg-ocean" />
                </div>
              </div>

              {/* Mission Card */}
              <div className="rounded-[2.5rem] border-2 border-navy bg-mint p-8 sm:p-10 hard-shadow flex flex-col justify-between text-navy">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border-2 border-navy bg-emerald px-3.5 py-1 text-xs font-black uppercase tracking-wider text-cream">
                      OUR MISSION
                    </span>
                    <Target className="h-6 w-6 text-emerald" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy leading-tight mb-4">
                    Empowering doctors to build authority without sacrificing clinical hours.
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Our mission is to provide doctors with a friction-free, turnkey growth engine:
                    specialty-deep topic research, doctor-approved scripts, comfortable teleprompter
                    shoots, cinematic editing, algorithm-smart publishing, and high-converting
                    portfolio websites.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t-2 border-dashed border-navy/20 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald">
                    End-to-End Partnership
                  </span>
                  <span className="h-3 w-3 rounded-full bg-emerald" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 5: CORE VALUES / GUIDING PRINCIPLES */}
        {/* ============================================================== */}
        <section className="bg-cream py-20 md:py-28 border-t-2 border-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy bg-lavender">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Our Principles
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-6xl text-navy">
                The Standards We{" "}
                <span className="relative inline-block rounded-2xl bg-pink px-3 -rotate-1 border-2 border-navy text-navy">
                  Never Break.
                </span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Healthcare is different from any other industry. Here is how we safeguard your
                reputation and medical license.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Value 1 */}
              <div className="rounded-[2rem] border-2 border-navy bg-peach p-6 hard-shadow flex flex-col justify-between text-navy transition hover:-translate-y-1">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-navy bg-coral text-navy mb-5 shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy mb-2">Ethics Over Clicks</h3>
                  <p className="text-sm text-navy/85 leading-relaxed">
                    We strictly follow medical advertising guidelines. No sensational fear-mongering,
                    no unrealistic cure guarantees — only verified science communicated with warmth.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-navy/20 text-xs font-bold text-coral uppercase tracking-wider">
                  01 · Integrity First
                </div>
              </div>

              {/* Value 2 */}
              <div className="rounded-[2rem] border-2 border-navy bg-sunny p-6 hard-shadow flex flex-col justify-between text-navy transition hover:-translate-y-1">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-navy bg-card text-navy mb-5 shadow-sm">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy mb-2">Specialty-Deep Focus</h3>
                  <p className="text-sm text-navy/85 leading-relaxed">
                    A neurologist speaks differently from a fertility specialist or cosmetic dentist.
                    We tailor visual systems, tone, and clinical vocabulary specifically to your domain.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-navy/20 text-xs font-bold text-navy uppercase tracking-wider">
                  02 · Niche Precision
                </div>
              </div>

              {/* Value 3 */}
              <div className="rounded-[2rem] border-2 border-navy bg-turq p-6 hard-shadow flex flex-col justify-between text-navy transition hover:-translate-y-1">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-navy bg-ocean text-white mb-5 shadow-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy mb-2">Respect for Clinical Time</h3>
                  <p className="text-sm text-navy/85 leading-relaxed">
                    Your primary duty is your patients. Our seamless recording workflows, teleprompter
                    scripts, and on-site crew ensure maximum output from just 2 hours a month.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-navy/20 text-xs font-bold text-navy uppercase tracking-wider">
                  03 · Maximum Efficiency
                </div>
              </div>

              {/* Value 4 */}
              <div className="rounded-[2rem] border-2 border-navy bg-lavender p-6 hard-shadow flex flex-col justify-between text-navy transition hover:-translate-y-1">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-navy bg-grape text-white mb-5 shadow-sm">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy mb-2">Cinema-Grade Craft</h3>
                  <p className="text-sm text-navy/85 leading-relaxed">
                    From 4K cameras and bespoke typography to custom animations and conversion-led web
                    code, every asset we deliver feels undeniably high-end.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-navy/20 text-xs font-bold text-grape uppercase tracking-wider">
                  04 · Uncompromising Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 6: LEADERSHIP TEAM */}
        {/* ============================================================== */}
        <section id="team" className="relative overflow-hidden bg-lavender py-20 md:py-28 text-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Meet the Leadership
              </span>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                The Creative & Technical Minds Behind{" "}
                <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                  Sociokraft.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Healthcare brand strategists, tech architects, medical scriptwriters, and video
                cinematographers dedicated to your growth.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto">
              {/* Member 1: Divya Jain */}
              <div>
                <div className="group text-center">
                  <div
                    className="mx-auto aspect-square w-full max-w-[210px] overflow-hidden border-2 border-navy transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3 animate-blob bg-coral hard-shadow-sm"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <img
                      src="/team/founder.png?v=2"
                      alt="Divya Jain - Founder & Creative Head"
                      className="h-full w-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "/team/divya.png";
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="inline-block rounded-full border-2 border-navy bg-card px-4 py-1 text-xs font-bold text-navy shadow-sm">
                      Divya Jain
                    </p>
                    <p className="mt-2 font-black text-navy text-base md:text-lg">
                      Founder & Creative Head
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
                      Spearheading brand strategy, storytelling, and doctor-approved content production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Member 2: Prakshal Jain */}
              <div className="md:mt-6">
                <div className="group text-center">
                  <div
                    className="mx-auto aspect-square w-full max-w-[210px] overflow-hidden border-2 border-navy transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3 animate-blob bg-sunny hard-shadow-sm"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <img
                      src="/team/cto.png?v=2"
                      alt="Prakshal Jain - CTO"
                      className="h-full w-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "/team/prakshal.png";
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="inline-block rounded-full border-2 border-navy bg-card px-4 py-1 text-xs font-bold text-navy shadow-sm">
                      Prakshal Jain
                    </p>
                    <p className="mt-2 font-black text-navy text-base md:text-lg">
                      CTO & Co-Founder
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
                      Architecting high-converting doctor web platforms, SEO systems, and patient lead engines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Member 3: Nisha Singh */}
              <div>
                <div className="group text-center">
                  <div
                    className="mx-auto aspect-square w-full max-w-[210px] overflow-hidden border-2 border-navy transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3 animate-blob bg-pink hard-shadow-sm"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <img
                      src="/team/lead-dev.png?v=2"
                      alt="Nisha Singh - Lead Developer"
                      className="h-full w-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "/team/nisha.png";
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="inline-block rounded-full border-2 border-navy bg-card px-4 py-1 text-xs font-bold text-navy shadow-sm">
                      Nisha Singh
                    </p>
                    <p className="mt-2 font-black text-navy text-base md:text-lg">
                      Lead Developer & UI/UX
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
                      Crafting lightning-fast digital experiences, interactive web interfaces, and conversion funnels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-sm font-semibold text-muted-foreground">
              Backed by our dedicated team of medical researchers, video editors, and growth strategists.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 7: GOOGLE VERIFIED CLIENT REVIEWS */}
        {/* ============================================================== */}
        <section id="reviews" className="py-20 md:py-28 bg-card border-y-2 border-navy overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-navy bg-sand text-xs font-bold text-navy mb-3 shadow-xs">
                  <GoogleIcon />
                  <span>4.9 / 5.0 Rating on Google Reviews</span>
                </div>
                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-navy">
                  What Healthcare Leaders Say
                </h2>
                <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xl">
                  Real feedback from specialized surgeons, dermatologists, practice owners, and
                  multispecialty clinic directors.
                </p>
              </div>

              {/* Carousel Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="w-11 h-11 rounded-full border-2 border-navy bg-card hover:bg-sand flex items-center justify-center text-navy shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next review"
                  className="w-11 h-11 rounded-full border-2 border-navy bg-card hover:bg-sand flex items-center justify-center text-navy shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientReviews.map((review, i) => (
                <div
                  key={review.id}
                  className={`rounded-3xl border-2 border-navy p-6 hard-shadow flex flex-col justify-between transition hover:-translate-y-1 ${
                    i === reviewIndex ? "bg-peach" : "bg-card"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-full border-2 border-navy ${review.avatarBg} text-white font-black text-xs flex items-center justify-center`}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-navy leading-snug">
                            {review.name}
                          </h4>
                          <span className="text-[10px] text-muted-foreground block font-bold">
                            {review.category}
                          </span>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>

                    {/* Stars & Verified */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.stars)].map((_, s) => (
                          <Star key={s} size={14} className="fill-sunny text-navy" />
                        ))}
                      </div>
                      <CheckCircle2 size={13} className="text-emerald fill-emerald/20" />
                      <span className="text-[10px] font-bold text-muted-foreground">Verified</span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-[13px] text-navy/85 leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-navy/20 flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase">
                    <span>Google Review</span>
                    <span className="text-emerald font-black">5.0 ★</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 8: HOW WE WORK (COLLABORATION MODEL) */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-mint py-20 md:py-28 text-navy">
          <svg
            viewBox="0 0 24 24"
            className="absolute right-10 top-10 h-16 w-16 text-emerald animate-spin-slow pointer-events-none"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z"
            />
          </svg>

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                The Sociokraft Workflow
              </span>
              <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                How We Collaborate with{" "}
                <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                  Busy Doctors.
                </span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                A streamlined, zero-friction process built to deliver massive digital authority in
                minimal doctor time.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="absolute left-0 right-0 top-10 hidden h-1 border-t-4 border-dashed border-navy/40 lg:block" />

              <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
                {[
                  {
                    num: "01",
                    title: "Specialty Audit",
                    desc: "We analyze your specialty, competitor landscape, target patients, and key procedures to identify high-interest content opportunities.",
                    bg: "bg-coral",
                    offset: "",
                  },
                  {
                    num: "02",
                    title: "Clinical Scripting",
                    desc: "Our medical writing team prepares conversational, accurate scripts and carousels addressing the exact questions patients ask in your clinic.",
                    bg: "bg-sunny",
                    offset: "lg:mt-8",
                  },
                  {
                    num: "03",
                    title: "Clinic Film Session",
                    desc: "We bring 4K cameras, soft lighting, and teleprompters right to your clinic. Just 2 hours of relaxed filming produces an entire month of reels.",
                    bg: "bg-turq",
                    offset: "",
                  },
                  {
                    num: "04",
                    title: "Publishing & SEO",
                    desc: "Post-production with dynamic captions, color grading, sound design, website sync, and comprehensive monthly growth analytics.",
                    bg: "bg-pink",
                    offset: "lg:mt-8",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="w-[75vw] shrink-0 snap-center sm:w-[45vw] lg:w-auto">
                    <div
                      className={`relative grid h-20 w-20 place-items-center rounded-full border-2 border-navy text-2xl font-black hard-shadow-sm text-navy ${step.bg}`}
                    >
                      {step.num}
                    </div>
                    <div
                      className={`mt-5 rounded-3xl border-2 border-navy bg-card p-6 transition hover:-translate-y-1 text-navy ${step.offset}`}
                    >
                      <h3 className="text-xl font-extrabold text-navy">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 9: FINAL CONTACT & CTA BANNER */}
        {/* ============================================================== */}
        <section id="contact" className="relative overflow-hidden bg-sunny py-24 md:py-32 text-navy">
          <div className="absolute inset-0 dots pointer-events-none" aria-hidden="true" />

          {/* Floating doctor preview cards */}
          <img
            src={doc1Img}
            alt=""
            className="absolute -left-10 top-16 hidden w-48 rotate-[-10deg] rounded-3xl border-2 border-navy hard-shadow animate-float lg:block pointer-events-none"
          />
          <img
            src={doc2Img}
            alt=""
            className="absolute -right-6 bottom-16 hidden w-44 rotate-[8deg] rounded-3xl border-2 border-navy hard-shadow animate-float-slow lg:block pointer-events-none"
          />

          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl text-navy">
              Ready to Build Your{" "}
              <span className="relative inline-block rounded-2xl bg-coral px-3 -rotate-1 border-2 border-navy text-navy">
                Digital Presence?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/90 font-medium">
              Join leading doctors and specialists across India who trust Sociokraft to handle their
              personal branding, social growth, and professional practice websites.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="btn-pill-navy px-6 py-3.5 text-base"
              >
                Claim Your Free Digital Audit
              </button>
              <button
                type="button"
                onClick={() =>
                  window.open("https://wa.me/919999999999?text=Hi%20Sociokraft", "_blank")
                }
                className="btn-pill-card px-6 py-3.5 text-base flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Contact Sociokraft on WhatsApp
              </button>
            </div>

            <p className="mt-4 text-sm text-navy/80 font-bold">
              No pressure. No spam. Just a friendly conversation about your practice goals.
            </p>
          </div>
        </section>
      </main>

      <Footer onOpenAudit={() => setAuditModalOpen(true)} />

      {/* ============================================================== */}
      {/* MODAL: FREE DIGITAL AUDIT MODAL */}
      {/* ============================================================== */}
      {auditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border-2 border-navy bg-card p-6 md:p-8 hard-shadow text-navy">
            <button
              onClick={() => setAuditModalOpen(false)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-sand text-navy transition hover:scale-110"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {auditSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald border-2 border-navy text-cream mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-navy">Audit Request Received!</h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  Our healthcare growth strategist will inspect your digital channels and contact
                  you within 24 hours with an actionable summary.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ocean mb-1">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  Free 1-on-1 Consultation
                </div>
                <h3 className="text-2xl font-black text-navy">Claim Your Free Digital Audit</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Get an expert review of your Instagram profile, video opportunities, Google
                  presence, and website potential.
                </p>

                <form onSubmit={handleAuditSubmit} className="mt-6 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Doctor / Clinic Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Priya Sharma"
                      value={auditForm.name}
                      onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                      className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">Specialty</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dermatology"
                        value={auditForm.specialty}
                        onChange={(e) => setAuditForm({ ...auditForm, specialty: e.target.value })}
                        className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">City</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai, Delhi"
                        value={auditForm.city}
                        onChange={(e) => setAuditForm({ ...auditForm, city: e.target.value })}
                        className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                      className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Current Instagram Handle or Website (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="@dr.priya.skin or www.clinic.com"
                      value={auditForm.websiteOrHandle}
                      onChange={(e) =>
                        setAuditForm({ ...auditForm, websiteOrHandle: e.target.value })
                      }
                      className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                    />
                  </div>

                  <button type="submit" className="btn-pill-coral w-full py-3 text-base mt-2">
                    Send Audit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
