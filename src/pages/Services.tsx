import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Building2,
  Gamepad2,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  { id: "all", label: "All Services" },
  { id: "web-seo", label: "Web Engineering & SEO" },
  { id: "3d-exhibition", label: "3D Exhibition Stands" },
  { id: "gamification", label: "Booth Gamification" },
  { id: "custom-software", label: "Custom Software & NDA" },
];

const servicesList = [
  {
    id: "web-engineering",
    category: "web-seo",
    icon: Globe,
    title: "Website Engineering & Conversion UX",
    desc: "Custom high-converting web applications, clinic booking engines, and corporate websites built with modern web frameworks, lightning speed, and mobile responsiveness.",
    badge: "High Conversion",
    benefits: [
      "Custom React / Next.js web application architecture",
      "Online appointment booking & instant CRM lead integration",
      "Core Web Vitals optimization for fast loading",
      "Responsive design tailored for patient & client conversion"
    ],
    process: [
      "UX wireframing & conversion strategy",
      "Custom responsive interface design",
      "Full-stack development & testing",
      "Deployment & continuous performance tuning"
    ]
  },
  {
    id: "performance-seo",
    category: "web-seo",
    icon: Search,
    title: "Performance Marketing & Local SEO Dominance",
    desc: "Data-driven organic search optimization and targeted Google & Meta advertising campaigns engineered to drive real qualified leads and local market dominance.",
    badge: "Organic Lead Surge",
    benefits: [
      "Local GMB optimization & Google Maps ranking dominance",
      "Targeted Google Ads & Meta advertising campaigns",
      "Content strategy & medical/enterprise keyword targeting",
      "Conversion tracking & monthly ROI performance analytics"
    ],
    process: [
      "In-depth technical SEO audit & keyword research",
      "On-page & GMB profile optimization",
      "Targeted ad creation & campaign launch",
      "A/B testing & weekly scaling optimization"
    ]
  },
  {
    id: "3d-exhibition-stands",
    category: "3d-exhibition",
    icon: Building2,
    title: "Exhibition Stand 3D Design & Spatial Build",
    desc: "Photorealistic 3D renders, spatial booth planning, structural construction, installation, and venue dismantling across major exhibition centers in India.",
    badge: "15+ Yrs Industry Expertise",
    benefits: [
      "3D photorealistic booth rendering & spatial layout design",
      "Turnkey construction, fabrication & venue installation",
      "On-site venue logistics management across major Indian venues",
      "Complete post-event dismantling & structural storage"
    ],
    process: [
      "Brand requirements & booth space planning",
      "Photorealistic 3D design & client revision review",
      "Structural fabrication & pre-event assembly",
      "Venue installation, live support & post-event teardown"
    ]
  },
  {
    id: "booth-gamification",
    category: "gamification",
    icon: Gamepad2,
    title: "Interactive Booth Gamification & Touchscreen Tech",
    desc: "Custom-branded touchscreen mini-games built for live exhibition booths to pull massive foot traffic, engage visitors, and create an unforgettable brand moment.",
    badge: "Live Exhibition Tech",
    benefits: [
      "Custom interactive touchscreen games & quiz experiences",
      "Branded mini-game UI tailored to your product launch",
      "Instant lead capture & leaderboard integration for booth visitors",
      "Proven crowd-magnet activation for trade shows"
    ],
    process: [
      "Game concept & brand activation design",
      "Interactive mechanics development & branding",
      "Touchscreen hardware setup & testing",
      "Live booth deployment & instant lead analytics"
    ]
  },
  {
    id: "custom-software-nda",
    category: "custom-software",
    icon: LineChart,
    title: "Custom Software & Fintech Platforms (NDA Protected)",
    desc: "Bespoke enterprise software, stock advisory platforms, client management systems, and proprietary algorithms engineered under strict confidentiality.",
    badge: "Confidential (NDA)",
    benefits: [
      "Proprietary stock advisory software & client portals",
      "Secure database architecture & data encryption",
      "Custom dashboard reporting & automated client alerts",
      "Full Non-Disclosure Agreement (NDA) IP protection"
    ],
    process: [
      "Confidential NDA signing & requirement analysis",
      "System architecture & database design",
      "Agile full-stack software development",
      "Security auditing & private client deployment"
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = activeTab === "all"
    ? servicesList
    : servicesList.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-ink font-sans selection:bg-bronze selection:text-white">
      <Header />

      {/* Editorial Services Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#F5F3EF]">
        {/* Existing abstract ivory backdrop */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <img
            src="/image.png"
            alt="Editorial Services Background"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Content Container: Left-aligned, ~12% from left, ~28% from top */}
        <div className="relative z-10 w-full h-full flex flex-col justify-start pl-[6%] sm:pl-[8%] lg:pl-[12%] pt-[20vh] sm:pt-[24vh] lg:pt-[28vh]">
          <div className="max-w-[560px] text-left">
            {/* Eyebrow (Fades in first) */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block text-[14px] uppercase font-mono font-semibold tracking-[0.28em] text-[#8A7B5C] mb-4"
            >
              OUR SERVICES
            </motion.span>

            {/* Headline (Rises 24px with a 0.6s ease-out) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-[42px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[86px] leading-[0.98] sm:leading-[0.95] tracking-tight text-[#1C1B19] mb-6"
            >
              Engineering <br />
              <span className="whitespace-nowrap">Growth & Experiences</span>
            </motion.h1>

            {/* Body (Appears after 120ms) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-[#6B6560] font-normal mb-8"
            >
              We combine digital strategy, custom software engineering, AI automation, immersive exhibition design, and brand growth to build experiences that drive real business impact.
            </motion.p>

            {/* CTA Group (Slides upward with slight fade) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 flex-wrap"
            >
              {/* Primary Button */}
              <a
                href="#services-list"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-[999px] bg-[#1C1B19] text-[#F5F3EF] font-medium text-[15px] hover:bg-[#33302C] transition-colors"
              >
                Explore Services
              </a>

              {/* Secondary Text Link */}
              <Link
                to="/case-studies"
                className="text-[15px] font-semibold text-[#8A7B5C] hover:underline transition-all"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services-list" className="section-padding">
        <div className="container-narrow">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-bronze text-white shadow-xs border border-bronze"
                    : "bg-card text-taupe hover:text-ink hover:bg-stone-50 border border-line"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards List */}
      <section className="section-padding pt-6">
        <div className="container-narrow space-y-12">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 md:p-12 border border-line bg-card shadow-xs relative overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Details & Benefits */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-stone-100 border border-line flex items-center justify-center">
                        <Icon size={26} className="text-bronze" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-stone-100 border border-line text-taupe">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-ink">
                      {service.title}
                    </h2>

                    <p className="text-taupe text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">Key Deliverables & Benefits</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map((b) => (
                          <div key={b} className="flex items-start gap-2.5 text-xs md:text-sm text-taupe">
                            <CheckCircle2 size={16} className="text-bronze mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Process Timeline Card */}
                  <div className="lg:col-span-5">
                    <div className="bg-stone-50 rounded-2xl p-6 border border-line space-y-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold flex items-center gap-2">
                        <Cpu size={14} className="text-bronze" />
                        <span>Execution Roadmap</span>
                      </h4>

                      <div className="space-y-4">
                        {service.process.map((step, i) => (
                          <div key={step} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-stone-200 border border-line flex items-center justify-center shrink-0">
                              <span className="text-xs font-bold font-mono text-ink">{i + 1}</span>
                            </div>
                            <p className="text-xs text-taupe font-medium pt-1">{step}</p>
                          </div>
                        ))}
                      </div>

                      <a
                        href="https://wa.me/919999999999?text=Hi%20Sociokraft,%20I'd%20like%20to%20book%20a%20strategy%20session%20for%20my%20medical%20practice."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-glow bg-bronze hover:bg-bronze/90 text-white text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-xs mt-4"
                      >
                        <span>Book Strategy Session</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
