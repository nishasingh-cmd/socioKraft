import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HelpCircle,
  Search,
  Sparkles,
  Check,
  X,
  Plus,
  Minus,
  MessageCircle,
  ArrowRight,
  Stethoscope,
  Video,
  Globe,
  ShieldCheck,
  DollarSign,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Clock,
  Award,
  ChevronRight,
  ExternalLink,
  PhoneCall,
  Mail,
  Zap,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "all" | "onboarding" | "content" | "websites" | "compliance" | "pricing";
  categoryLabel: string;
  categoryColor: string;
  question: string;
  answer: string;
  keyPoints?: string[];
  tags?: string[];
}

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle, color: "bg-coral text-navy" },
  { id: "onboarding", label: "Getting Started", icon: Sparkles, color: "bg-sunny text-navy" },
  { id: "content", label: "Video & Content Studio", icon: Video, color: "bg-peach text-navy" },
  { id: "websites", label: "Doctor Websites & SEO", icon: Globe, color: "bg-turq text-navy" },
  { id: "compliance", label: "Ethics & Compliance", icon: ShieldCheck, color: "bg-mint text-navy" },
  { id: "pricing", label: "Pricing & Retainers", icon: DollarSign, color: "bg-lavender text-navy" },
] as const;

const FAQ_DATA: FAQItem[] = [
  // Onboarding & Getting Started
  {
    id: "faq-growth-model",
    category: "onboarding",
    categoryLabel: "Getting Started",
    categoryColor: "bg-sunny text-navy",
    question: "How does Sociokraft help doctors build an authoritative digital presence?",
    answer:
      "We provide an end-to-end growth studio built exclusively for medical professionals. Instead of generic agency marketing, we combine clinical content research, doctor personal branding, high-retention video production (Reels & Shorts), and medical SEO web architecture. We elevate your real-world reputation onto digital channels so patients choose you with confidence before even entering your clinic.",
    keyPoints: [
      "Specialty-specific content mapping tailored to your clinical niche",
      "End-to-end production: research, scripting, editing, and publishing",
      "Patient education emphasis that builds genuine diagnostic authority",
    ],
    tags: ["growth", "branding", "digital presence", "marketing", "authority"],
  },
  {
    id: "faq-time-commitment",
    category: "onboarding",
    categoryLabel: "Getting Started",
    categoryColor: "bg-sunny text-navy",
    question: "How much clinical time do I realistically need to dedicate each month?",
    answer:
      "We respect that your clinic, surgery schedule, and patients come first. Doctors spend only 2 to 3 hours per month with us. We handle 100% of the topic research, teleprompter scripting, video editing, medical captions, thumbnail design, and multi-channel distribution. You simply show up for one comfortable recording session or send us quick voice notes.",
    keyPoints: [
      "Only 2-3 hours/month required from the doctor",
      "Teleprompter-guided scripts provided in advance",
      "Zero editing, posting, or technical hassle on your end",
    ],
    tags: ["doctor time", "time commitment", "clinical hours", "schedule", "hours per month", "time"],
  },
  {
    id: "faq-specialties-cities",
    category: "onboarding",
    categoryLabel: "Getting Started",
    categoryColor: "bg-sunny text-navy",
    question: "Do you work with doctors across different medical specialties and cities?",
    answer:
      "Yes! We currently partner with leading Dermatologists, Plastic Surgeons, Orthopedic Specialists, Pediatricians, Gynecologists, Dentists, Cardiologists, and IVF centers across India and internationally. For doctors in metro cities, we coordinate on-location clinic filming; for doctors elsewhere, we provide remote filming kits and guided iPhone studio workflows.",
    keyPoints: [
      "Specialties: Dermatology, Surgery, Pediatrics, Ortho, Dental, IVF & more",
      "Available across all Tier-1 and Tier-2 cities as well as international clinics",
      "Remote studio kits and filming guides provided for non-metro doctors",
    ],
    tags: ["specialties", "cities", "locations", "remote filming", "clinic shoots"],
  },
  {
    id: "faq-timeline-results",
    category: "onboarding",
    categoryLabel: "Getting Started",
    categoryColor: "bg-sunny text-navy",
    question: "What is the typical timeline to see patient engagement and practice growth?",
    answer:
      "Digital medical authority compounds over time. Within the first 30 to 45 days, you will experience heightened profile reach, high video view completion rates, and active comments/DMs from prospective patients. By months 2 to 3, as your content library and SEO authority mature, doctors typically see a tangible influx of appointment inquiries and second-opinion consults.",
    keyPoints: [
      "Days 1-14: Brand positioning, visual identity, and first script batches",
      "Days 30-45: First surge in video reach, engagement, and follower trust",
      "Months 2-3: Consistent patient inquiries, appointment bookings, and referral growth",
    ],
    tags: ["timeline", "results", "growth", "roi", "patient inquiries", "leads"],
  },

  // Content Creation & Video Production
  {
    id: "faq-scripts-research",
    category: "content",
    categoryLabel: "Video & Content Studio",
    categoryColor: "bg-peach text-navy",
    question: "Do you write the scripts and research medical topics for us?",
    answer:
      "Yes. Our medical copywriters research search trends, seasonal patient questions, and common myths within your specialty. We draft concise, captivating scripts equipped with clinical disclaimers, clear analogies, and strong visual hooks. You review and greenlight every single script before camera roll.",
    keyPoints: [
      "Evidence-backed topics based on real patient search intent",
      "Hooks crafted to stop the scroll in the first 3 seconds",
      "Full doctor review and editorial control before recording",
    ],
    tags: ["scripts", "research", "topics", "content writing", "reels & scripts"],
  },
  {
    id: "faq-camera-shyness",
    category: "content",
    categoryLabel: "Video & Content Studio",
    categoryColor: "bg-peach text-navy",
    question: "What if I feel camera-shy or have never recorded videos before?",
    answer:
      "More than 70% of the doctors we work with had never recorded a video before joining Sociokraft. Our director coaches you through posture, pacing, and tone. We use teleprompter setups so you never have to memorize lines, and we record in short 15-second sentences that our editors stitch seamlessly together with B-roll, infographics, and sound design.",
    keyPoints: [
      "Teleprompter apps and rolling scripts provided",
      "Shoot in brief sentences — our editors handle the seamless flow",
      "Warm-up coaching and supportive on-camera guidance",
    ],
    tags: ["video recording", "camera shy", "recording", "teleprompter", "on camera", "shooting"],
  },
  {
    id: "faq-content-approval",
    category: "content",
    categoryLabel: "Video & Content Studio",
    categoryColor: "bg-peach text-navy",
    question: "How does the content approval process work? Can anything go live without my consent?",
    answer:
      "Absolutely not. Zero content ever goes live without your explicit written approval. We share all draft scripts, edited reels with subtitles, carousel designs, and captions inside a private WhatsApp group or client portal. You review them, request any revisions, and we publish only once you give the green light.",
    keyPoints: [
      "Strict 100% Doctor-Approval Guarantee",
      "Quick 1-tap review via WhatsApp or mobile portal",
      "Revisions included to ensure absolute clinical accuracy",
    ],
    tags: ["content approval", "doctor approval", "approval", "review process", "revisions"],
  },
  {
    id: "faq-platforms-managed",
    category: "content",
    categoryLabel: "Video & Content Studio",
    categoryColor: "bg-peach text-navy",
    question: "Which social media platforms do you manage?",
    answer:
      "We focus on the platforms with the highest patient discovery and conversion value: Instagram (Reels, Carousels, Stories), YouTube (Shorts and long-form patient education guides), LinkedIn (for B2B clinical authority and industry peer recognition), and Google Business Profile (for hyper-local patient footfall).",
    keyPoints: [
      "Instagram & YouTube Shorts for viral patient reach and trust",
      "LinkedIn for peer reputation, speaking invites, and hospital affiliations",
      "Google Business Profile optimization for nearby clinic discovery",
    ],
    tags: ["platforms", "instagram reels", "youtube shorts", "linkedin", "google maps"],
  },

  // Doctor Websites & SEO
  {
    id: "faq-custom-website",
    category: "websites",
    categoryLabel: "Doctor Websites & SEO",
    categoryColor: "bg-turq text-navy",
    question: "Can Sociokraft build a modern, high-converting website for my practice?",
    answer:
      "Yes. We design and build bespoke doctor portfolio websites engineered for instant credibility and conversion. Our websites feature lightning-fast loading speeds, interactive clinic tour galleries, verified patient testimonials, specialty procedure breakdowns, and 1-tap WhatsApp/teleconsultation booking buttons.",
    keyPoints: [
      "Tailored UI designed for high clinical trust and conversion",
      "Mobile-first responsive architecture that loads in under 1.5 seconds",
      "Direct integration with WhatsApp, Calendly, or your clinic CRM",
    ],
    tags: ["doctor websites", "custom website", "website", "clinic site", "appointment booking"],
  },
  {
    id: "faq-google-seo",
    category: "websites",
    categoryLabel: "Doctor Websites & SEO",
    categoryColor: "bg-turq text-navy",
    question: "Will my clinic website rank on Google local search (SEO)?",
    answer:
      "Yes. Every website we build includes our Medical SEO foundation: local schema markup (Physician and MedicalBusiness structured data), Google Search Console configuration, Core Web Vitals optimization, and keyword-targeted treatment landing pages designed to capture patients searching 'Best [Specialist] in [City]'.",
    keyPoints: [
      "Structured MedicalBusiness Schema markup for rich Google search snippets",
      "Local SEO targeting your specific city, neighborhood, and treatments",
      "Google Business Profile alignment for top 3 Local Map Pack ranking",
    ],
    tags: ["google seo", "seo", "local ranking", "google maps", "search visibility"],
  },
  {
    id: "faq-domain-ownership",
    category: "websites",
    categoryLabel: "Doctor Websites & SEO",
    categoryColor: "bg-turq text-navy",
    question: "Do I own my domain name, website code, and creative assets?",
    answer:
      "100% yes. You maintain complete, unconditional ownership of your domain name, website code, recorded raw footage, edited videos, and branding collateral. We never hold your digital assets hostage.",
    keyPoints: [
      "Registered in your name with full administrator access",
      "All master video files and graphic designs belong to you",
      "Zero vendor lock-in or proprietary hostage tactics",
    ],
    tags: ["domain ownership", "code ownership", "intellectual property", "assets"],
  },

  // Medical Ethics & Legal Compliance
  {
    id: "faq-nmc-compliance",
    category: "compliance",
    categoryLabel: "Ethics & Compliance",
    categoryColor: "bg-mint text-navy",
    question: "How do you ensure content follows Medical Council (NMC / IMA) ethical regulations?",
    answer:
      "We strictly adhere to NMC (National Medical Commission), IMA, and international medical advertising guidelines. We strictly avoid misleading cure claims, comparative advertising ('I am the best doctor in town'), or aggressive commercial discounting. Our focus is 100% on evidence-based health education, preventive care tips, and diagnostic awareness.",
    keyPoints: [
      "Full compliance with National Medical Commission ethical guidelines",
      "Focus on patient education rather than commercial self-aggrandizement",
      "Mandatory clinical disclaimers embedded on relevant health topics",
    ],
    tags: ["nmc guidelines", "nmc", "medical ethics", "compliance", "ima regulations", "guidelines"],
  },
  {
    id: "faq-patient-privacy-nda",
    category: "compliance",
    categoryLabel: "Ethics & Compliance",
    categoryColor: "bg-mint text-navy",
    question: "How do you handle patient confidentiality and consent for clinical case videos?",
    answer:
      "Patient privacy is non-negotiable. Before showcasing any before/after transformations, surgical footage, or patient testimonials, we provide formal bilingual patient consent release forms. We obscure identifiable personal details, eyes, or tattoos upon request and maintain strict NDA confidentiality across our entire production crew.",
    keyPoints: [
      "Standard bilingual patient consent documentation provided",
      "Face/identifying feature blurring protocols whenever required",
      "Mutual Non-Disclosure Agreement (NDA) executed before onboarding",
    ],
    tags: ["patient consent", "patient privacy", "nda", "confidentiality", "consent"],
  },

  // Pricing & Retainers
  {
    id: "faq-pricing-structure",
    category: "pricing",
    categoryLabel: "Pricing & Retainers",
    categoryColor: "bg-lavender text-navy",
    question: "How are your packages and deliverables structured?",
    answer:
      "We offer transparent, fixed-monthly retainers based on your desired output volume (e.g. 8 vs 16 high-production Reels per month, website development, or comprehensive multi-channel management). During your free Digital Audit, we assess your current digital footprint and recommend the exact tier that delivers maximum ROI.",
    keyPoints: [
      "Predictable monthly retainers with zero hidden charges or surprise invoices",
      "Customized deliverable packages based on your goals and clinic bandwidth",
      "Clear written service-level agreements (SLAs) for turnaround times",
    ],
    tags: ["pricing", "cost", "packages", "retainers", "monthly cost", "fees"],
  },
  {
    id: "faq-contracts-cancellation",
    category: "pricing",
    categoryLabel: "Pricing & Retainers",
    categoryColor: "bg-lavender text-navy",
    question: "Are there long-term lock-in contracts? Can I cancel if needed?",
    answer:
      "No predatory lock-in contracts. While organic healthcare branding requires at least 90 days to achieve compounding traction, our agreements are month-to-month or quarterly with a straightforward 30-day notice period. We believe in retaining doctor partnerships through outstanding results, not restrictive fine print.",
    keyPoints: [
      "No multi-year lock-in traps",
      "Simple 30-day notice policy",
      "Transparent terms with full project handover if you ever choose to pause",
    ],
    tags: ["contracts", "cancellation", "no lock-in", "notice period", "terms"],
  },
  {
    id: "faq-standalone-services",
    category: "pricing",
    categoryLabel: "Pricing & Retainers",
    categoryColor: "bg-lavender text-navy",
    question: "Can I choose only video editing or only a doctor website?",
    answer:
      "Yes. While our full-stack growth program delivers the highest synergy (connecting high-traffic Reels directly to a conversion-optimized website), you can engage us exclusively for website engineering, brand identity, or video post-production.",
    keyPoints: [
      "Modular services available: Website only, Reels editing only, or Full Growth",
      "Seamless upgrade path to full management whenever you are ready",
      "Custom quotes tailored to specific one-time or recurring scopes",
    ],
    tags: ["standalone", "modular services", "website only", "video only"],
  },
];

// Helper function to match query against question, answer, keyPoints, and tags
function matchesSearch(item: FAQItem, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  const words = q.split(/\s+/).filter(Boolean);
  const searchableText = [
    item.question,
    item.answer,
    item.categoryLabel,
    ...(item.keyPoints || []),
    ...(item.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  return (
    searchableText.includes(q) ||
    words.every((word) => searchableText.includes(word))
  );
}

const CANDIDATE_SEARCH_PILLS = [
  "Doctor Time",
  "NMC Guidelines",
  "Video Recording",
  "Pricing",
  "Patient Consent",
  "Doctor Websites",
  "Google SEO",
  "Content Approval",
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqs, setOpenFaqs] = useState<string[]>([FAQ_DATA[0].id, FAQ_DATA[1].id]);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, "yes" | "no">>({});

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

  // ONLY keep search pills that have related questions in the dataset
  const popularPills = useMemo(() => {
    return CANDIDATE_SEARCH_PILLS.filter((term) => {
      return FAQ_DATA.some((item) => matchesSearch(item, term));
    });
  }, []);

  // Questions matching current search query across entire dataset
  const searchMatchedFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => matchesSearch(item, searchQuery));
  }, [searchQuery]);

  // ONLY keep category pills that have related questions (> 0) under the current search
  const visibleCategories = useMemo(() => {
    return FAQ_CATEGORIES.filter((cat) => {
      if (cat.id === "all") {
        return searchMatchedFaqs.length > 0;
      }
      const count = searchMatchedFaqs.filter((item) => item.category === cat.id).length;
      return count > 0; // Filter out and remove any category pill that has 0 questions
    });
  }, [searchMatchedFaqs]);

  // Auto-reset activeCategory to "all" if the previously selected category has 0 questions
  useEffect(() => {
    if (activeCategory !== "all") {
      const isStillAvailable = visibleCategories.some((c) => c.id === activeCategory);
      if (!isStillAvailable) {
        setActiveCategory("all");
      }
    }
  }, [visibleCategories, activeCategory]);

  // Filtered FAQs to display
  const filteredFaqs = useMemo(() => {
    return searchMatchedFaqs.filter((item) => {
      return activeCategory === "all" || item.category === activeCategory;
    });
  }, [searchMatchedFaqs, activeCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenFaqs(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenFaqs([]);
  };

  const handleFeedback = (faqId: string, val: "yes" | "no") => {
    setFeedbackGiven((prev) => ({ ...prev, [faqId]: val }));
  };

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-coral selection:text-white">
      {/* Header */}
      <Header onOpenAudit={() => setAuditModalOpen(true)} />

      <main>
        {/* ============================================================== */}
        {/* SECTION 1: FAQ HERO */}
        {/* ============================================================== */}
        <section
          id="faq-hero"
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
              Everything You Need to Know{" "}
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="relative z-10 rounded-2xl bg-sunny px-3 sm:px-4 py-0.5 border-2 border-navy inline-block -rotate-1 hard-shadow-sm">
                  About Growing
                </span>
              </span>{" "}
              Your Medical Brand.
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Transparent answers regarding doctor time commitments, NMC compliance, video production,
              pricing models, and how we turn medical expertise into patient trust.
            </p>

            {/* Live Search Bar */}
            <div className="mt-6 mx-auto max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-navy/50 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. 'time commitment', 'NMC ethics', 'pricing')..."
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

              {/* Quick Suggestions - Only pills with related questions are displayed */}
              {popularPills.length > 0 && (
                <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-navy/70">
                  <span>Popular searches:</span>
                  {popularPills.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setActiveCategory("all");
                        setSearchQuery(term);
                      }}
                      className="rounded-full border border-navy/20 bg-white/70 px-2.5 py-0.5 text-navy transition hover:border-navy hover:bg-white"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: CATEGORY FILTER TABS & FAQ ACCORDIONS */}
        {/* ============================================================== */}
        <section id="faq-list" className="py-16 md:py-24 bg-cream">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Chips - Only pills with related questions are kept */}
            {visibleCategories.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
                {visibleCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? searchMatchedFaqs.length
                      : searchMatchedFaqs.filter((i) => i.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                      }}
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
            )}

            {/* List Controls: Result Count & Expand/Collapse */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b-2 border-navy/10 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-navy">
                  Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? "Question" : "Questions"}
                </span>
                {searchQuery && (
                  <span className="text-xs font-semibold text-muted-foreground">
                    matching &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={expandAll}
                  className="text-xs font-bold text-ocean hover:underline flex items-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" /> Expand All
                </button>
                <span className="text-navy/30">|</span>
                <button
                  onClick={collapseAll}
                  className="text-xs font-bold text-muted-foreground hover:text-navy flex items-center gap-1"
                >
                  <Minus className="h-3.5 w-3.5" /> Collapse All
                </button>
                {(searchQuery || activeCategory !== "all") && (
                  <>
                    <span className="text-navy/30">|</span>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="text-xs font-bold text-coral hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Reset Filters
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Empty Search Fallback */}
            {filteredFaqs.length === 0 ? (
              <div className="rounded-3xl border-2 border-navy bg-white p-10 text-center hard-shadow-sm">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border-2 border-navy bg-sunny text-navy mb-4">
                  <HelpCircle className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-navy">No exact matches found</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Have a specific
                  clinical marketing question? Message our medical growth director directly.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="btn-pill-navy text-xs px-5 py-2.5"
                  >
                    Clear Search
                  </button>
                  <a
                    href="https://wa.me/919999999999?text=Hi%20Sociokraft,%20I%20have%20a%20specific%20question%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-coral text-xs px-5 py-2.5 flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              /* FAQ Accordion Items */
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaqs.includes(faq.id);
                  const feedback = feedbackGiven[faq.id];

                  return (
                    <article
                      key={faq.id}
                      className={`overflow-hidden rounded-3xl border-2 border-navy transition-all duration-200 ${
                        isOpen
                          ? "bg-white hard-shadow"
                          : "bg-white hover:border-ocean hover:-translate-y-0.5"
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
                      >
                        <div className="space-y-1.5 flex-1 pr-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${faq.categoryColor}`}
                            >
                              {faq.categoryLabel}
                            </span>
                            <span className="text-[11px] font-bold text-navy/40">
                              Question #{index + 1}
                            </span>
                          </div>
                          <h2 className="text-base sm:text-lg md:text-xl font-black text-navy leading-snug">
                            {faq.question}
                          </h2>
                        </div>

                        {/* Plus / Minus Indicator */}
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border-2 border-navy text-lg font-black transition-all duration-200 ${
                            isOpen
                              ? "bg-coral text-white rotate-45"
                              : "bg-sand text-navy hover:bg-sunny"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* Accordion Body */}
                      {isOpen && (
                        <div className="border-t-2 border-navy/10 bg-[#faf8f4] p-5 sm:p-6 text-navy">
                          <p className="text-sm sm:text-base leading-relaxed text-navy/85 font-medium">
                            {faq.answer}
                          </p>

                          {/* Key Points Checklist */}
                          {faq.keyPoints && faq.keyPoints.length > 0 && (
                            <div className="mt-4 rounded-2xl border border-navy/15 bg-white p-4">
                              <p className="text-xs font-black uppercase tracking-wider text-ocean mb-2.5">
                                Key Takeaways for Doctors:
                              </p>
                              <ul className="space-y-2">
                                {faq.keyPoints.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80 font-medium">
                                    <span className="grid h-4 w-4 mt-0.5 shrink-0 place-items-center rounded-full bg-emerald text-white">
                                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                                    </span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Helpfulness Micro-Feedback Bar */}
                          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4 text-xs">
                            <span className="text-muted-foreground font-semibold">
                              Was this answer helpful?
                            </span>
                            {feedback ? (
                              <span className="text-emerald font-bold flex items-center gap-1">
                                <Check className="h-3.5 w-3.5" /> Thank you for your feedback!
                              </span>
                            ) : (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleFeedback(faq.id, "yes")}
                                  className="flex items-center gap-1 rounded-lg border border-navy/20 bg-white px-2.5 py-1 font-bold text-navy transition hover:bg-emerald hover:text-white hover:border-navy"
                                >
                                  <ThumbsUp className="h-3.5 w-3.5" /> Yes
                                </button>
                                <button
                                  onClick={() => handleFeedback(faq.id, "no")}
                                  className="flex items-center gap-1 rounded-lg border border-navy/20 bg-white px-2.5 py-1 font-bold text-navy transition hover:bg-coral hover:text-white hover:border-navy"
                                >
                                  <ThumbsDown className="h-3.5 w-3.5" /> No
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: DOCTOR TRUST GUARANTEE BANNER */}
        {/* ============================================================== */}
        <section className="bg-navy py-14 text-cream relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-5 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-sunny text-navy font-bold mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-lg text-cream">2-3 Hours / Mo</h3>
                <p className="mt-1 text-xs text-cream/70">
                  Minimal clinical intrusion. We respect your surgical & clinic hours.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-5 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-coral text-navy font-bold mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-lg text-cream">100% Doctor Approved</h3>
                <p className="mt-1 text-xs text-cream/70">
                  Nothing publishes without your explicit review and sign-off.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-5 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-turq text-navy font-bold mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-lg text-cream">NMC Ethical Align</h3>
                <p className="mt-1 text-xs text-cream/70">
                  Evidence-based patient education respecting medical council rules.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cream/20 bg-cream/5 p-5 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-mint text-navy font-bold mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-lg text-cream">No Lock-In Traps</h3>
                <p className="mt-1 text-xs text-cream/70">
                  Transparent agreements with a simple 30-day notice policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: STILL HAVE QUESTIONS? DIRECT CONTACT CARDS */}
        {/* ============================================================== */}
        <section className="py-20 bg-skylight">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy bg-white px-3.5 py-1 text-xs font-black uppercase tracking-wider text-navy">
                <HelpCircle className="h-4 w-4 text-coral" />
                Still Have Questions?
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
                We&apos;re Here to Help Your Practice Grow.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-navy/80">
                Choose the easiest way to connect with our medical brand specialists.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: WhatsApp Chat */}
              <div className="rounded-3xl border-2 border-navy bg-white p-7 hard-shadow transition-transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald text-white border-2 border-navy mb-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy">WhatsApp Chat</h3>
                  <p className="mt-2 text-xs sm:text-sm text-navy/75 leading-relaxed">
                    Have a quick question about video recording, sample scripts, or packages? Text our
                    strategy lead directly.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy/10">
                  <a
                    href="https://wa.me/919999999999?text=Hi%20Sociokraft,%20I%20have%20a%20question%20about%20your%20doctor%20branding%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-pill-coral bg-emerald text-white flex items-center justify-center gap-2 py-3 text-sm font-bold shadow-xs hover:bg-emerald/90"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Card 2: Free Digital Audit */}
              <div className="rounded-3xl border-2 border-navy bg-sunny p-7 hard-shadow transition-transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-navy border-2 border-navy mb-4">
                    <Sparkles className="h-6 w-6 text-ocean" />
                  </div>
                  <h3 className="text-xl font-black text-navy">Free Practice Audit</h3>
                  <p className="mt-2 text-xs sm:text-sm text-navy/85 leading-relaxed">
                    We&apos;ll audit your current Instagram, website, and Google profile, and deliver 5
                    actionable recommendations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy/20">
                  <button
                    onClick={() => setAuditModalOpen(true)}
                    className="w-full btn-pill-navy flex items-center justify-center gap-2 py-3 text-sm font-bold"
                  >
                    <span>Request Free Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Card 3: Email Inquiry */}
              <div className="rounded-3xl border-2 border-navy bg-white p-7 hard-shadow transition-transform hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-coral text-white border-2 border-navy mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-navy">Email Our Studio</h3>
                  <p className="mt-2 text-xs sm:text-sm text-navy/75 leading-relaxed">
                    Prefer formal correspondence or clinic RFPs? Send details and our team will
                    respond within 24 hours.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy/10">
                  <a
                    href="mailto:hello@sociokraft.com?subject=Doctor%20Growth%20Inquiry"
                    className="w-full btn-pill-coral flex items-center justify-center gap-2 py-3 text-sm font-bold"
                  >
                    <span>hello@sociokraft.com</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
