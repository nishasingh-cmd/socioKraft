import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Gamepad2,
  Building2,
  Stethoscope,
  LineChart,
  MessageSquare,
  Image as ImageIcon
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Healthcare" | "Exhibition" | "Interactive" | "Software";
  categoryLabel: string;
  icon: typeof Stethoscope;
  description: string;
  problem?: string;
  solution?: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  image: string;
  imageAlt: string;
  placeholderName: string;
  visitUrl?: string;
  visitText?: string;
  isConfidential?: boolean;
  confidentialNotice?: string;
}

const projects: Project[] = [
  {
    id: "dr-gaurav",
    title: "Dr Gaurav Neurospine",
    subtitle: "Healthcare Digital Transformation & Patient Acquisition",
    category: "Healthcare",
    categoryLabel: "Healthcare Digital Marketing",
    icon: Stethoscope,
    description:
      "Complete online presence overhaul for a leading neurospine clinic. Built a professional, high-converting patient website with integrated booking and launched local SEO strategies to dominate search rankings.",
    problem: "Minimal online visibility and no structured digital presence for patient inquiries.",
    solution: "Custom medical practice website, Google My Business local SEO, and multi-channel patient acquisition campaigns.",
    highlights: [
      "Custom medical website with online appointment booking",
      "Local SEO & Google My Business optimization",
      "Google Ads lead generation campaigns"
    ],
    stats: [
      { value: "+180%", label: "Patient Inquiries" },
      { value: "Top 3", label: "Google Ranking" },
      { value: "4.8★", label: "Patient Reviews" },
      { value: "3x", label: "Website Traffic" }
    ],
    image: "/dr-gaurav-site.png",
    imageAlt: "Dr Gaurav Neurospine Website Preview",
    placeholderName: "public/dr-gaurav-site.png",
    visitUrl: "https://drgauravneurospine.com/",
    visitText: "Visit Website"
  },
  {
    id: "elite-eventures",
    title: "Elite Eventures",
    subtitle: "Exhibition Stand Design & Spatial Branding",
    category: "Exhibition",
    categoryLabel: "Exhibition Stand Design",
    icon: Building2,
    description:
      "Elite Eventure is a top-notch exhibition stand design company in India with over 15+ years of industry expertise. We oversee end-to-end concept development, 3D design, construction, installation, and dismantling across major exhibition venues nationwide.",
    problem: "Needed an online platform that matches their 15+ years of architectural excellence and showcases large-scale exhibition booth builds.",
    solution: "High-impact portfolio showcase reflecting 3D design capabilities, venue coverage, and end-to-end trade show execution.",
    highlights: [
      "Concept development & photorealistic 3D stand renders",
      "Full construction, installation & post-event dismantling",
      "Projects in major exhibition venues across India"
    ],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "3D", label: "Spatial Renders" },
      { value: "Pan-India", label: "Venues Covered" },
      { value: "End-to-End", label: "Booth Execution" }
    ],
    image: "/elite-eventures.png",
    imageAlt: "Elite Eventures Website & Stand Portfolio Preview",
    placeholderName: "public/elite-eventures.png",
    visitUrl: "https://www.eliteeventure.com/",
    visitText: "Visit Website"
  },
  {
    id: "dr-rashel-game",
    title: "DR-RASHEL Hydration Game",
    subtitle: "Interactive Brand Activation & Live Booth Gamification",
    category: "Interactive",
    categoryLabel: "Interactive Brand Activation",
    icon: Gamepad2,
    description:
      "A custom-branded, interactive mini-game built for a live exhibition booth. Specially designed to pull massive foot traffic and deliver a memorable brand moment — proving we build far beyond static websites when a brand needs to stand out.",
    problem: "Standing out in a crowded exhibition hall and keeping booth visitors engaged.",
    solution: "Interactive hydration-themed mini-game with custom game mechanics, leaderboard, and instant brand engagement.",
    highlights: [
      "Custom web-based mini-game (zero app download required)",
      "Designed for high foot-traffic live exhibition booths",
      "Memorable brand story & product highlighting"
    ],
    stats: [
      { value: "High", label: "Booth Traffic Magnet" },
      { value: "Live", label: "Exhibition Activation" },
      { value: "100%", label: "Custom Gamification" },
      { value: "Web", label: "Zero Download Tech" }
    ],
    image: "/dr-rashel-game.png",
    imageAlt: "DR-RASHEL Hydration Game Interactive Preview",
    placeholderName: "public/dr-rashel-game.png",
    visitUrl: "http://dr-rashel-game.vercel.app",
    visitText: "Play Live Game Demo"
  },
  {
    id: "wealthmine",
    title: "Wealthmine Advisory Firm",
    subtitle: "NSE & BSE Corporate Action Automation Platform",
    category: "Software",
    categoryLabel: "Custom Fintech Software",
    icon: LineChart,
    description:
      "An automated intelligence platform engineered for Wealthmine Advisory Firm. The platform automatically fetches real-time corporate announcements directly from NSE (National Stock Exchange) and BSE (Bombay Stock Exchange), classifies them using keyword filtering and AI into distinct corporate action categories, extracts all key financial and event details from filings, and automatically populates structured Excel files — eliminating tedious manual research and exponentially boosting operational efficiency.",
    highlights: [
      "Automated real-time feed fetching directly from NSE & BSE stock exchanges",
      "Keyword filtering & AI classification into structured Corporate Action categories",
      "Automated key detail extraction & instant Excel data model filling",
      "Eliminates manual research data entry and drastically increases firm efficiency"
    ],
    stats: [
      { value: "NSE & BSE", label: "Live Exchange Feeds" },
      { value: "AI + Filter", label: "Corporate Action Classifier" },
      { value: "Auto-Excel", label: "Automated Data Filling" },
      { value: "10x Speed", label: "Research Efficiency Boost" }
    ],
    image: "/wealthmine-advisory.png",
    imageAlt: "Wealthmine Advisory Platform Preview",
    placeholderName: "public/wealthmine-advisory.png",
    visitUrl: "https://wa.me/919999999999?text=Hi%20Sociokraft,%20I'm%20inquiring%20about%20advisory%20systems.",
    visitText: "Inquire About Advisory Systems",
    isConfidential: true,
    confidentialNotice: "Proprietary software architecture for stock research automation and live exchange feeds."
  }
];

const categories = ["All", "Healthcare", "Exhibition", "Interactive", "Software"];

const ProjectImage = ({ src, alt, placeholderName }: { src: string; alt: string; placeholderName: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full py-16 px-4 bg-stone-100 rounded-2xl flex flex-col items-center justify-center text-center border border-line">
        <ImageIcon size={32} className="text-bronze mb-3" />
        <p className="text-xs font-mono text-taupe">Please add preview photo as:</p>
        <code className="text-xs font-mono font-bold text-bronze mt-1 bg-white px-3 py-1 rounded border border-line">
          {placeholderName}
        </code>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xs border border-line bg-stone-100 min-h-[220px] flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-ink font-sans selection:bg-bronze selection:text-white">
      <Header />
      {/* Editorial Case Studies Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#F5F3EF]">
        {/* Existing abstract ivory backdrop */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <img
            src="/image.png"
            alt="Editorial Case Studies Background"
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
              CASE STUDIES
            </motion.span>

            {/* Headline (Rises 24px with a 0.6s ease-out) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-[42px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[86px] leading-[0.98] sm:leading-[0.95] tracking-tight text-[#1C1B19] mb-6"
            >
              Real Work. <br />
              <span className="whitespace-nowrap">Measurable Impact.</span>
            </motion.h1>

            {/* Body (Fades in after 120ms) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-[#6B6560] font-normal mb-8"
            >
              Explore how Sociokraft helps ambitious brands through digital platforms, immersive exhibition experiences, AI-powered automation, and strategic brand engineering—transforming ideas into measurable business growth.
            </motion.p>

            {/* CTA Group (Slides upward with gentle fade) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 flex-wrap"
            >
              {/* Primary Button */}
              <a
                href="#projects-grid"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-[999px] bg-[#1C1B19] text-[#F5F3EF] font-medium text-[15px] hover:bg-[#33302C] transition-colors"
              >
                View Our Work
              </a>

              {/* Secondary Link */}
              <a
                href="#projects-grid"
                className="text-[15px] font-semibold text-[#8A7B5C] hover:underline transition-all"
              >
                See All Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects-grid" className="py-16 md:py-20">
        <div className="container-narrow">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-bronze text-white shadow-xs border border-bronze"
                    : "bg-card text-taupe hover:text-ink hover:bg-stone-50 border border-line"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="container-narrow space-y-16">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card glass-card-hover rounded-3xl border border-line overflow-hidden shadow-xs bg-card"
                  >
                    {/* Card Header */}
                    <div className="bg-stone-50 p-7 md:p-9 border-b border-line flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-bronze text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                          <Icon size={16} />
                          <span>{project.categoryLabel}</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl text-ink font-bold font-heading">
                          {project.title}
                        </h2>
                        <p className="text-taupe text-sm md:text-base mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      {project.isConfidential && (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-stone-200/60 text-taupe border border-line">
                          <Lock size={13} className="text-bronze" />
                          Confidential (NDA Protected)
                        </span>
                      )}
                    </div>

                    {/* Body Content */}
                    <div className="p-8 md:p-12 space-y-10">

                      {/* Overview & Image Grid */}
                      <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                          <div>
                            <h3 className="text-xl font-bold mb-3 text-ink font-heading">Project Overview</h3>
                            <p className="text-taupe leading-relaxed text-sm md:text-base">
                              {project.description}
                            </p>
                          </div>

                          {project.isConfidential && project.confidentialNotice && (
                            <div className="bg-stone-100 border border-line rounded-2xl p-5 text-taupe text-xs md:text-sm leading-relaxed flex gap-3">
                              <Lock size={20} className="text-bronze shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-semibold block mb-1 text-ink">Confidential Enterprise Project</strong>
                                {project.confidentialNotice}
                              </div>
                            </div>
                          )}

                          {/* Highlights */}
                          <div>
                            <h4 className="font-mono text-xs uppercase text-taupe tracking-wider mb-3 font-semibold">
                              Key Deliverables & Highlights
                            </h4>
                            <ul className="space-y-2.5">
                              {project.highlights.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-taupe">
                                  <CheckCircle2 size={16} className="text-bronze shrink-0 mt-0.5" />
                                  <span className="font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Image Preview with Browser Header Frame */}
                        <div className="lg:col-span-5">
                          <div className="bg-stone-50 p-3 rounded-3xl border border-line shadow-xs">
                            <div className="h-6 bg-stone-100 rounded-t-xl flex items-center justify-between px-3 mb-2 border-b border-line">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                              </div>
                              <span className="text-[10px] font-mono text-taupe">{project.id}</span>
                            </div>
                            <ProjectImage
                              src={project.image}
                              alt={project.imageAlt}
                              placeholderName={project.placeholderName}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div>
                        <h4 className="font-mono text-xs uppercase text-taupe tracking-wider mb-4 font-semibold">
                          Impact & Performance Metrics
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {project.stats.map((stat) => (
                            <div key={stat.label} className="bg-stone-50 p-5 text-center rounded-2xl border border-line">
                              <div className="text-2xl md:text-3xl text-bronze font-bold font-heading">{stat.value}</div>
                              <div className="text-xs text-taupe mt-1 font-semibold">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                        {project.isConfidential ? (
                          <div className="flex flex-wrap items-center gap-4 w-full justify-between">
                            <p className="text-xs text-taupe font-mono">
                              Interested in custom confidential software engineering for your firm?
                            </p>
                            <a
                              href="https://wa.me/919999999999?text=Hi%20Sociokraft,%20I'd%20like%20to%20schedule%20a%20private%20discussion%20regarding%20software%20engineering."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-glow bg-bronze hover:bg-bronze/90 text-white text-xs md:text-sm py-3 px-6 rounded-xl flex items-center gap-2 font-semibold shadow-xs"
                            >
                              <MessageSquare size={14} />
                              <span>Schedule Private Discussion</span>
                            </a>
                          </div>
                        ) : (
                          project.visitUrl && (
                            <a
                              href={project.visitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-glow bg-bronze hover:bg-bronze/90 text-white text-xs md:text-sm py-3 px-6 rounded-xl flex items-center gap-2 font-semibold shadow-xs"
                            >
                              <span>{project.visitText || "Visit Website"}</span>
                              <ExternalLink size={14} />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;