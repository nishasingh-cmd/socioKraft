import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  Globe,
  Video,
  Sparkles,
  Search,
  ArrowRight,
  ExternalLink,
  Check,
  X,
  Building2,
  Gamepad2,
  TrendingUp,
  MessageCircle,
  Eye,
  Star,
  Users,
  ShieldCheck,
  Award,
  Calendar,
  Layers,
  CheckCircle2,
  Share2,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  client: string;
  specialty: string;
  category: "all" | "websites" | "video" | "branding" | "interactive";
  categoryLabel: string;
  categoryColor: string;
  image: string;
  imageAlt: string;
  description: string;
  problem: string;
  solution: string;
  deliverables: string[];
  stats: { value: string; label: string }[];
  tags: string[];
  visitUrl?: string;
  visitText?: string;
  isConfidential?: boolean;
}

const WORK_CATEGORIES = [
  { id: "all", label: "All Work", icon: Layers, color: "bg-coral text-navy" },
  { id: "websites", label: "Doctor Websites", icon: Globe, color: "bg-turq text-navy" },
  { id: "video", label: "Social & Reels", icon: Video, color: "bg-peach text-navy" },
  { id: "branding", label: "Clinic Branding", icon: Sparkles, color: "bg-sunny text-navy" },
  { id: "interactive", label: "Spatial & 3D", icon: Building2, color: "bg-mint text-navy" },
] as const;

const PROJECTS: Project[] = [
  {
    id: "dr-gaurav-neurospine",
    title: "Dr. Gaurav Sandeep Gupta",
    client: "Dr. Gaurav Neurospine Clinic",
    specialty: "Brain & Spine Surgery",
    category: "websites",
    categoryLabel: "Doctor Websites",
    categoryColor: "bg-turq text-navy",
    image: "/dr-gaurav-site.png",
    imageAlt: "Dr Gaurav Neurospine Custom Practice Website Preview",
    description:
      "A complete digital authority architecture for a senior neurospine surgeon in Mumbai. Developed a fast, mobile-optimized patient booking portal with local SEO dominance.",
    problem:
      "Minimal online presence and zero structured digital appointment pathways, resulting in missed inquiries from prospective spine surgery patients.",
    solution:
      "Engineered an elegant, dark-mode medical portfolio site with medical treatment pages, instant WhatsApp consult routing, and local Google Business Profile ranking.",
    deliverables: [
      "Custom responsive web application with sub-1.4s load speed",
      "Specialty surgical condition library (Scoliosis, Disc Herniation, Minimally Invasive)",
      "Direct 1-tap WhatsApp and online appointment booking integration",
      "Comprehensive Local SEO and Google Maps ranking strategy",
    ],
    stats: [
      { value: "+180%", label: "Patient Inquiries" },
      { value: "Top 3", label: "Google Local Rank" },
      { value: "3.4x", label: "Organic Web Traffic" },
      { value: "4.9★", label: "Verified Reviews" },
    ],
    tags: ["Neurospine", "Doctor Websites", "SEO", "Appointment Booking", "Mumbai"],
    visitUrl: "https://drgauravneurospine.com/",
    visitText: "Visit Live Website",
  },
  {
    id: "aesthetic-dental-studio",
    title: "Aesthetic Dental Studio",
    client: "Dr. Priya & Associates",
    specialty: "Cosmetic & Implant Dentistry",
    category: "websites",
    categoryLabel: "Doctor Websites",
    categoryColor: "bg-turq text-navy",
    image: "/dental-clinic-site.png",
    imageAlt: "Aesthetic Dental Studio Website Preview",
    description:
      "A luxury clinical website showcasing smile transformations, dental implants, and invisible aligners with an interactive before-and-after smile simulation gallery.",
    problem:
      "Existing website looked outdated and failed to communicate the premium nature of their cosmetic smile makeover and implant procedures.",
    solution:
      "Designed a clean, warm aesthetic website with transparent treatment pricing guides, interactive smile visualizer, and instant consultation scheduling.",
    deliverables: [
      "High-conversion aesthetic dental portfolio website",
      "Interactive Before-and-After procedure comparison sliders",
      "Doctor credentials, clinical philosophy, and digital tour",
      "Mobile-friendly consultation request engine",
    ],
    stats: [
      { value: "+240%", label: "Smile Consults" },
      { value: "1.2s", label: "Page Load Time" },
      { value: "+65%", label: "Direct Inquiries" },
      { value: "99%", label: "Positive Patient Feedback" },
    ],
    tags: ["Cosmetic Dentistry", "Doctor Websites", "Smile Makeover", "Dental Implants"],
  },
  {
    id: "preventive-cardiology-reels",
    title: "Heart Health Education Series",
    client: "Senior Interventional Cardiologist",
    specialty: "Cardiology",
    category: "video",
    categoryLabel: "Social & Reels",
    categoryColor: "bg-peach text-navy",
    image: "/heart-health-carousel.png",
    imageAlt: "Heart Health Instagram Reels & Educational Carousel Campaign",
    description:
      "A high-impact educational content series on early heart attack warning signs, ECG myths, and preventive cholesterol diets that generated over 1.2M organic views.",
    problem:
      "The doctor wanted to educate patients and dispel common cardiac myths without appearing sensational or violating clinical dignity.",
    solution:
      "Researched, scripted, and edited 16 concise, high-retention Reels paired with animated motion graphics and clear, reassuring explanations.",
    deliverables: [
      "16 High-retention Instagram Reels with animated infographics",
      "Educational multi-slide carousel guides for patient saves",
      "Teleprompter scripting tailored to the doctor's authentic tone",
      "Full community comment moderation and inquiry triage",
    ],
    stats: [
      { value: "1.2M+", label: "Organic Reel Views" },
      { value: "48K+", label: "Saves & Shares" },
      { value: "+320", label: "Direct Consult Inquiries" },
      { value: "88%", label: "Average Retention Rate" },
    ],
    tags: ["Cardiology", "Reels", "Video Production", "Patient Education", "Viral Reach"],
  },
  {
    id: "dr-rashel-gamification",
    title: "DR-RASHEL Hydration Rush",
    client: "DR-RASHEL Skincare",
    specialty: "Interactive Brand Activation",
    category: "interactive",
    categoryLabel: "Spatial & 3D",
    categoryColor: "bg-mint text-navy",
    image: "/dr-rashel-game.png",
    imageAlt: "DR-RASHEL Interactive Booth Gamification Preview",
    description:
      "An interactive touchscreen arcade game engineered for a major beauty & cosmetics trade show, driving unprecedented booth dwell time and social shares.",
    problem:
      "Traditional static exhibition booths failed to engage busy convention attendees and capture verified customer leads.",
    solution:
      "Built a custom interactive touch-screen game where players collect skincare ingredients against the clock, unlocking discount vouchers and product samples.",
    deliverables: [
      "Custom touchscreen gamification software running on 65-inch kiosk displays",
      "Instant leaderboard and digital coupon dispensing mechanism",
      "Real-time customer registration and CRM lead integration",
      "On-site booth technical deployment and live event support",
    ],
    stats: [
      { value: "4,200+", label: "Active Players at Expo" },
      { value: "3.8x", label: "Higher Booth Footfall" },
      { value: "98%", label: "Player Engagement Score" },
      { value: "2,900+", label: "Verified Leads Captured" },
    ],
    tags: ["Gamification", "Exhibition", "Interactive Software", "Trade Show"],
  },
  {
    id: "orthopedic-rehab-faqs",
    title: "Joint Replacement Recovery FAQs",
    client: "Advanced Orthopedic & Knee Center",
    specialty: "Orthopedic Surgery",
    category: "video",
    categoryLabel: "Social & Reels",
    categoryColor: "bg-peach text-navy",
    image: "/knee-pain-faqs.png",
    imageAlt: "Knee Pain & Joint Replacement FAQ Video Series Preview",
    description:
      "An authoritative video FAQ campaign addressing patient fears about knee replacement, post-operative walking, and joint preservation exercises.",
    problem:
      "Prospective surgical patients were delaying needed knee procedures due to fear of prolonged pain, bed rest, and misinformation online.",
    solution:
      "Filmed structured 60-second video answers right in the clinic's physical therapy suite, highlighting real walking milestones and rapid recovery protocols.",
    deliverables: [
      "12 Video FAQs covering anesthesia, walking timelines, and recovery",
      "Clear motion graphics illustrating robotic joint alignment",
      "Patient-friendly downloadable PDF rehabilitation checklists",
      "YouTube Shorts & Instagram Reels multi-format distribution",
    ],
    stats: [
      { value: "450K+", label: "Video Views" },
      { value: "84%", label: "Video Completion Rate" },
      { value: "+140%", label: "Second-Opinion Requests" },
      { value: "4.9★", label: "Patient Comfort Rating" },
    ],
    tags: ["Orthopedics", "Video FAQs", "Knee Replacement", "Rehabilitation"],
  },
  {
    id: "apex-clinic-branding",
    title: "Apex Multi-Specialty Identity",
    client: "Apex Health & Diagnostic Center",
    specialty: "Clinical Branding & Spatial Identity",
    category: "branding",
    categoryLabel: "Clinic Branding",
    categoryColor: "bg-sunny text-navy",
    image: "/clinic-brand-identity.png",
    imageAlt: "Apex Clinic Brand Identity & Interior Environmental Graphics",
    description:
      "Complete visual identity redesign for a 40-bed multi-specialty center, encompassing hospital logo architecture, environmental wayfinding signage, and patient collaterals.",
    problem:
      "Inconsistent visual presentation across 4 clinic branches, outdated signage, and cluttered paperwork causing patient confusion and poor brand recall.",
    solution:
      "Created a modern, reassuring visual identity system with clinical typography, warm color palettes, intuitive floor-by-floor wayfinding, and digital brand guidelines.",
    deliverables: [
      "Comprehensive brand identity handbook & color typography standards",
      "Interior clinic wayfinding, consultation room plaques & reception graphics",
      "Custom patient discharge folders, prescription pads & appointment cards",
      "Social media announcement kit and local launch PR collateral",
    ],
    stats: [
      { value: "4", label: "Clinic Branches Rebranded" },
      { value: "100%", label: "Visual Consistency" },
      { value: "14", label: "Wayfinding Systems Built" },
      { value: "+40%", label: "Brand Recall Lift" },
    ],
    tags: ["Clinic Branding", "Brand Identity", "Wayfinding", "Print & Signage"],
  },
  {
    id: "elite-eventures-stands",
    title: "Elite Eventures Spatial Architecture",
    client: "Elite Eventures",
    specialty: "3D Exhibition Architecture",
    category: "interactive",
    categoryLabel: "Spatial & 3D",
    categoryColor: "bg-mint text-navy",
    image: "/elite-eventures.png",
    imageAlt: "Elite Eventures 3D Stand Design and Spatial Branding Portfolio",
    description:
      "A high-impact digital portfolio for India's premier exhibition stand design agency, showcasing photorealistic 3D booth architectural renders and nationwide builds.",
    problem:
      "Elite Eventures has 15+ years of trade show leadership but lacked a modern digital portfolio that effectively conveyed their scale and bespoke craftsmanship.",
    solution:
      "Built a gallery-first digital experience highlighting 3D spatial renders, venue footprints across Pragati Maidan and BIEC, and end-to-end turnkey construction.",
    deliverables: [
      "Full responsive portfolio website with categorized 3D booth exhibits",
      "Interactive 3D project walkthroughs and client quote request portal",
      "Venue-specific exhibition portfolio filtering across major Indian cities",
      "Fast image optimization ensuring instant gallery page loads",
    ],
    stats: [
      { value: "15+", label: "Years Industry Leadership" },
      { value: "3D", label: "Photorealistic Renders" },
      { value: "Pan-India", label: "Exhibition Coverage" },
      { value: "100%", label: "Turnkey Execution" },
    ],
    tags: ["Exhibition Stand", "3D Architecture", "Spatial Design", "Trade Shows"],
    visitUrl: "https://www.eliteeventure.com/",
    visitText: "Visit Live Website",
  },
  {
    id: "orthodontic-mythbusters",
    title: "Orthodontic Mythbusters Campaign",
    client: "SmileCraft Orthodontics",
    specialty: "Orthodontics & Clear Aligners",
    category: "video",
    categoryLabel: "Social & Reels",
    categoryColor: "bg-peach text-navy",
    image: "/myth-vs-fact-braces.png",
    imageAlt: "Orthodontic Myth vs Fact Social Media Reels Campaign Preview",
    description:
      "A playful, educational social campaign busting misconceptions around clear aligners vs metal braces, dietary restrictions, and treatment duration.",
    problem:
      "Patients had incorrect assumptions that aligners are only for mild cases, leading to low conversion rates during initial smile consultations.",
    solution:
      "Produced bite-sized side-by-side comparison Reels using macro dental photography, clear voiceovers, and humorous relatable patient scenarios.",
    deliverables: [
      "10 High-impact 'Myth vs Fact' Instagram Reels",
      "Engaging before-and-after aligner progress carousels",
      "Custom branded treatment explanation graphics for chairside use",
      "Targeted local patient outreach campaign on Instagram",
    ],
    stats: [
      { value: "680K+", label: "Campaign Impressions" },
      { value: "+190%", label: "Teen & Adult Inquiries" },
      { value: "52K+", label: "Video Engagements" },
      { value: "3.2x", label: "Consultation Bookings" },
    ],
    tags: ["Orthodontics", "Clear Aligners", "Mythbusters", "Reels", "Social Media"],
  },
  {
    id: "wealthmine-software",
    title: "Wealthmine Advisory Systems",
    client: "Wealthmine Advisory",
    specialty: "Financial Tech & Live Automation",
    category: "branding",
    categoryLabel: "Clinic Branding",
    categoryColor: "bg-sunny text-navy",
    image: "/wealthmine-advisory.png",
    imageAlt: "Wealthmine Advisory Platform Preview",
    description:
      "Proprietary software architecture for stock research automation, live exchange data feeds, and institutional investor portfolio intelligence.",
    problem:
      "Legacy software systems were sluggish and lacked real-time websocket integration with NSE/BSE stock market feeds.",
    solution:
      "Engineered a ultra-low-latency web dashboard with real-time analytics, automated research reporting, and encrypted client communication.",
    deliverables: [
      "Custom React & WebSockets real-time portfolio dashboard",
      "Automated stock market research report generator",
      "Institutional-grade security with mutual NDA execution",
      "Modern brand positioning and private client investor deck",
    ],
    stats: [
      { value: "<100ms", label: "Live Feed Latency" },
      { value: "100%", label: "Uptime Reliability" },
      { value: "NDA", label: "Confidential Architecture" },
      { value: "Automated", label: "Daily Research Feeds" },
    ],
    tags: ["Software Engineering", "Automation", "FinTech", "Confidential NDA"],
    isConfidential: true,
  },
];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Audit modal state
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
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

  // Search and category filtering
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((item) => {
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const words = q.split(/\s+/).filter(Boolean);
      const searchableText = [
        item.title,
        item.client,
        item.specialty,
        item.categoryLabel,
        item.description,
        ...(item.tags || []),
        ...(item.deliverables || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchableText.includes(q) ||
        words.every((word) => searchableText.includes(word));

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Dynamic categories with >0 items
  const visibleCategories = useMemo(() => {
    return WORK_CATEGORIES.filter((cat) => {
      if (cat.id === "all") return true;
      const count = PROJECTS.filter((p) => p.category === cat.id).length;
      return count > 0;
    });
  }, []);

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-coral selection:text-white">
      {/* Header */}
      <Header onOpenAudit={() => setAuditModalOpen(true)} />

      <main>
        {/* ============================================================== */}
        {/* SECTION 1: HERO (Matching About & FAQ Size & Responsive Framing) */}
        {/* ============================================================== */}
        <section
          id="work-hero"
          className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] w-full flex items-center justify-center overflow-hidden bg-skylight pt-28 pb-16 sm:pt-32 sm:pb-20 text-navy"
        >
          {/* Subtle dots pattern */}
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

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-navy leading-[1.12]">
              Real Results{" "}
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="relative z-10 rounded-2xl bg-coral px-3 sm:px-4 py-0.5 border-2 border-navy inline-block -rotate-1 hard-shadow-sm text-navy">
                  Built For
                </span>
              </span>{" "}
              Doctors & Brands.
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Explore how Sociokraft transforms clinical expertise into undisputed digital leadership
              through high-converting websites, viral medical reels, and spatial brand engineering.
            </p>

            {/* Key Metric Highlights */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-bold text-navy">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-coral shrink-0" />
                120+ Doctors Scaled
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sunny shrink-0" />
                4.8M+ Patient Views
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald shrink-0" />
                +180% Avg Inquiry Lift
              </span>
            </div>

            {/* Search Filter Bar */}
            <div className="mt-8 mx-auto max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-navy/50 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by specialty (e.g. 'Neurospine', 'Dental', 'Reels', 'SEO')..."
                  className="w-full rounded-2xl border-2 border-navy bg-white py-3.5 pl-12 pr-12 text-sm sm:text-base font-semibold text-navy placeholder:text-navy/40 shadow-sm outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/15"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 grid h-7 w-7 place-items-center rounded-full bg-sand text-navy transition hover:bg-coral hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: CATEGORY FILTER TABS & WORK SHOWCASE GRID */}
        {/* ============================================================== */}
        <section id="work-grid" className="py-16 md:py-24 bg-cream">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
              {visibleCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 rounded-full border-2 border-navy px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? `${cat.color} hard-shadow-sm -translate-y-0.5`
                        : "bg-white text-navy hover:bg-sand/60"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat.label}</span>
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full text-[11px] font-black ${
                        isActive ? "bg-navy text-white" : "bg-sand text-navy"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Result Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b-2 border-navy/10 mb-10">
              <span className="text-sm font-extrabold text-navy">
                Displaying {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "Project" : "Projects"}
                {searchQuery && (
                  <span className="text-muted-foreground font-semibold ml-2">
                    matching &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
              </span>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-bold text-coral hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 ? (
              <div className="rounded-3xl border-2 border-navy bg-white p-12 text-center hard-shadow-sm max-w-lg mx-auto">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border-2 border-navy bg-sunny text-navy mb-4">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-navy">No projects found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  No projects matched &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Dental&rdquo;,
                  &ldquo;Reels&rdquo;, or &ldquo;Websites&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="btn-pill-navy text-xs px-5 py-2.5 mt-6"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Projects Cards Grid */
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-navy bg-white hard-shadow"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-navy bg-sand/50">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                        {project.isConfidential && (
                          <span className="absolute right-3.5 top-3.5 rounded-full border-2 border-navy bg-navy px-2.5 py-0.5 text-[10px] font-bold text-cream">
                            🔒 Confidential NDA
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <p className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                            {project.client} · <span className="text-ocean font-bold">{project.specialty}</span>
                          </p>
                        </div>

                        <h3 className="text-xl font-black text-navy leading-snug">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-xs sm:text-sm text-navy/75 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Top Stats Strip */}
                        <div className="mt-5 grid grid-cols-2 gap-2 border-y-2 border-navy/10 py-3">
                          {project.stats.slice(0, 2).map((stat, i) => (
                            <div key={i}>
                              <span className="block text-lg font-black text-navy">
                                {stat.value}
                              </span>
                              <span className="block text-[11px] font-bold text-muted-foreground">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Deliverable Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="rounded-lg bg-sand/60 px-2 py-0.5 text-[10px] font-bold text-navy/80"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="border-t-2 border-navy/10 p-5 bg-[#faf8f4] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-black text-navy hover:text-ocean flex items-center gap-1.5 transition"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Case Details</span>
                      </button>

                      {project.visitUrl ? (
                        <a
                          href={project.visitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-coral text-xs py-2 px-3.5 flex items-center gap-1 font-bold"
                        >
                          <span>{project.visitText || "Visit Site"}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-bold text-muted-foreground hover:text-navy flex items-center gap-1"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: DOCTOR GROWTH PROCESS BANNER */}
        {/* ============================================================== */}
        <section className="bg-navy py-16 text-cream relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 bg-cream/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-sunny mb-4">
              <Sparkles className="h-4 w-4" />
              The Sociokraft Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-cream tracking-tight">
              Clinical Integrity In Every Frame.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cream/75 max-w-2xl mx-auto">
              We never compromise medical accuracy for cheap viral clicks. Everything we produce is
              doctor-approved, NMC-compliant, and built to foster real diagnostic trust.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-coral text-navy font-black mb-3">
                  01
                </div>
                <h3 className="font-extrabold text-lg text-cream">Zero Fluff Scripting</h3>
                <p className="mt-1.5 text-xs text-cream/70 leading-relaxed">
                  Evidence-based topics answering the questions patients actually search before
                  scheduling surgeries or consultations.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sunny text-navy font-black mb-3">
                  02
                </div>
                <h3 className="font-extrabold text-lg text-cream">High-Conversion UX</h3>
                <p className="mt-1.5 text-xs text-cream/70 leading-relaxed">
                  Websites engineered to load under 1.5s with instant WhatsApp chat routing and
                  frictionless inquiry funnels.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-turq text-navy font-black mb-3">
                  03
                </div>
                <h3 className="font-extrabold text-lg text-cream">Turnkey Execution</h3>
                <p className="mt-1.5 text-xs text-cream/70 leading-relaxed">
                  Only 2-3 hours per month required from the doctor. We handle topic research,
                  teleprompter setups, editing, and posting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: CALL TO ACTION */}
        {/* ============================================================== */}
        <section className="py-20 bg-skylight">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl border-2 border-navy bg-white p-8 sm:p-12 hard-shadow">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-sunny px-3.5 py-1 text-xs font-black uppercase tracking-wider text-navy mb-4">
                <Stethoscope className="h-4 w-4" />
                Ready to elevate your practice?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
                Get a Free Digital Audit of Your Medical Presence.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-navy/80 max-w-xl mx-auto">
                We&apos;ll inspect your Instagram, Google profile, and website opportunities, and provide
                a clear, written 5-step roadmap.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn-pill-coral px-7 py-3.5 text-base font-black"
                >
                  Claim Your Free Audit →
                </button>
                <a
                  href="https://wa.me/919999999999?text=Hi%20Sociokraft,%20I%20saw%20your%20work%20and%20would%20like%20to%20discuss%20growing%20my%20practice."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-card px-6 py-3.5 text-base font-bold flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenAudit={() => setAuditModalOpen(true)} />

      {/* ============================================================== */}
      {/* MODAL: PROJECT CASE STUDY DETAIL MODAL */}
      {/* ============================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 rounded-3xl border-2 border-navy bg-card p-6 md:p-8 hard-shadow text-navy max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-sand text-navy transition hover:bg-coral hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold text-muted-foreground">
                {selectedProject.client} · <span className="text-ocean font-bold">{selectedProject.specialty}</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-navy leading-tight">
              {selectedProject.title}
            </h2>

            {/* Hero Image */}
            <div className="mt-5 overflow-hidden rounded-2xl border-2 border-navy bg-sand/40 aspect-[16/9]">
              <img
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Results Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border-2 border-navy bg-sand/30 p-4">
              {selectedProject.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="block text-xl sm:text-2xl font-black text-navy">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] font-bold text-muted-foreground mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <div className="rounded-2xl border border-navy/15 bg-white p-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-coral mb-1">
                  The Clinical Challenge
                </h4>
                <p className="text-navy/80">{selectedProject.problem}</p>
              </div>

              <div className="rounded-2xl border border-navy/15 bg-white p-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-ocean mb-1">
                  The Sociokraft Solution
                </h4>
                <p className="text-navy/80">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="mt-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-navy mb-3">
                Key Deliverables & Execution:
              </h4>
              <ul className="space-y-2">
                {selectedProject.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80 font-medium"
                  >
                    <span className="grid h-4 w-4 mt-0.5 shrink-0 place-items-center rounded-full bg-emerald text-white">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Action Buttons */}
            <div className="mt-8 pt-5 border-t-2 border-navy/10 flex flex-wrap items-center justify-between gap-4">
              {selectedProject.visitUrl ? (
                <a
                  href={selectedProject.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-coral text-sm py-3 px-5 flex items-center gap-2 font-black"
                >
                  <span>{selectedProject.visitText || "Visit Live Website"}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span className="text-xs font-bold text-muted-foreground">
                  🔒 Proprietary clinical engagement
                </span>
              )}

              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  setAuditModalOpen(true);
                }}
                className="btn-pill-navy text-sm py-3 px-5 font-bold"
              >
                Request Similar Growth Strategy
              </button>
            </div>
          </div>
        </div>
      )}

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
                  Our healthcare growth strategist will inspect your digital channels and contact you
                  within 24 hours with an actionable summary.
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
                  Get an expert review of your Instagram profile, video opportunities, Google presence,
                  and website potential.
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
                      Instagram Handle or Website (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="@drpriyasharma or drpriya.com"
                      value={auditForm.websiteOrHandle}
                      onChange={(e) =>
                        setAuditForm({ ...auditForm, websiteOrHandle: e.target.value })
                      }
                      className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-pill-coral w-full py-3.5 text-sm font-black mt-2"
                  >
                    Submit My Audit Request →
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground mt-2">
                    🔒 Strictly confidential. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
