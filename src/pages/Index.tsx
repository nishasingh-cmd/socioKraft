import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Play,
  Share2,
  MonitorSmartphone,
  Sparkles,
  Clapperboard,
  Check,
  TrendingUp,
  CalendarDays,
  Heart,
  Camera,
  Globe,
  MessageCircle,
  Star,
  FileText,
  Film,
  Scissors,
  Upload,
  Clock,
  LayoutGrid,
  CircleCheck,
  Ticket,
  Mail,
  ChevronDown,
  ChevronRight,
  Bookmark,
  X,
  Stethoscope,
  Brain,
  Repeat,
  Palette,
  Link2,
  ChartColumn,
  UserRound,
  Quote,
  Monitor,
  Smartphone,
  ExternalLink,
} from "lucide-react";

// Image URLs (from public/assets downloaded from reference)
const doc1Img = "/assets/doc-1-D56fzcjv.jpg";
const doc2Img = "/assets/doc-2-BjDT3-tI.jpg";
const reelImg = "/assets/reel-BeT_mf_x.jpg";
const shootImg = "/assets/shoot-CzRfnzF2.jpg";

export default function Index() {
  // Modal states
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<any>(null);

  // Transformation before/after automated transition (0 = Before, 100 = After)
  const [sliderPos, setSliderPos] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDivider, setShowDivider] = useState(true);
  const transformationSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let startTimer: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Wait 300ms after the section enters view before starting the animation
          startTimer = setTimeout(() => {
            setIsTransitioning(true);
            setShowDivider(true);
            setSliderPos(100);

            clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
              setShowDivider(false);
            }, 1350);
          }, 300);
        } else {
          // Reset when scrolled out of view so it can animate again when returning
          clearTimeout(hideTimer);
          clearTimeout(startTimer);
          setIsTransitioning(false);
          setShowDivider(true);
          setSliderPos(0);
        }
      },
      { threshold: 0.45, rootMargin: "0px 0px 0px 0px" }
    );

    if (transformationSectionRef.current) {
      observer.observe(transformationSectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(hideTimer);
      clearTimeout(startTimer);
    };
  }, []);

  const handleShowBefore = () => {
    setShowDivider(true);
    setIsTransitioning(true);
    setSliderPos(0);
  };

  const handleShowAfter = () => {
    setShowDivider(true);
    setIsTransitioning(true);
    setSliderPos(100);
    setTimeout(() => {
      setShowDivider(false);
    }, 1350);
  };

  const handleReplay = () => {
    setIsTransitioning(false);
    setShowDivider(true);
    setSliderPos(0);
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsTransitioning(true);
        setSliderPos(100);
        setTimeout(() => {
          setShowDivider(false);
        }, 1350);
      }, 40);
    });
  };

  // Content Studio Tab
  const [studioStage, setStudioStage] = useState<"script" | "record" | "edit" | "publish">("script");

  // Website preview tab (desktop/mobile)
  const [webPreviewDevice, setWebPreviewDevice] = useState<"desktop" | "mobile">("desktop");

  // Growth accordion (0 to 3)
  const [activeGrowthCard, setActiveGrowthCard] = useState<number>(0);

  // Portfolio filter
  const [workFilter, setWorkFilter] = useState("All Projects");
  const [savedProjects, setSavedProjects] = useState<string[]>([]);

  // Workspace active item
  const [workspaceItem, setWorkspaceItem] = useState(0);

  // FAQ accordion active indices
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  // Pricing expanded deliverables
  const [expandedPricing, setExpandedPricing] = useState<number | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Audit form state
  const [auditForm, setAuditForm] = useState({
    name: "",
    specialty: "",
    city: "",
    phone: "",
    websiteOrHandle: "",
  });

  const toggleFaq = (idx: number) => {
    if (openFaqs.includes(idx)) {
      setOpenFaqs(openFaqs.filter((i) => i !== idx));
    } else {
      setOpenFaqs([...openFaqs, idx]);
    }
  };

  const toggleBookmark = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (savedProjects.includes(title)) {
      setSavedProjects(savedProjects.filter((t) => t !== title));
    } else {
      setSavedProjects([...savedProjects, title]);
    }
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditSubmitted(true);
    setTimeout(() => {
      setAuditModalOpen(false);
      setAuditSubmitted(false);
      setAuditForm({ name: "", specialty: "", city: "", phone: "", websiteOrHandle: "" });
    }, 2500);
  };

  // Specialties for marquee ticker
  const specialties = [
    { name: "Dermatology & Aesthetics", bg: "bg-coral" },
    { name: "Orthopedics", bg: "bg-card" },
    { name: "Plastic & Reconstructive Surgery", bg: "bg-sunny" },
    { name: "Gynecology & Fertility", bg: "bg-pink" },
    { name: "Dentistry & Dental Implants", bg: "bg-card" },
    { name: "Cardiology", bg: "bg-emerald text-cream" },
    { name: "Neurology", bg: "bg-coral" },
    { name: "Psychiatry", bg: "bg-card" },
    { name: "Pediatrics", bg: "bg-sunny" },
    { name: "Ophthalmology", bg: "bg-pink" },
    { name: "General Physicians", bg: "bg-card" },
    { name: "Multispecialty Clinics", bg: "bg-emerald text-cream" },
  ];

  interface PortfolioProject {
    title: string;
    specialty: string;
    category: string;
    objective: string;
    services: string;
    bg: string;
    aspect: string;
    badge: string;
    image?: string;
    demoUrl?: string;
    isCards?: boolean;
    isLogoPreview?: boolean;
    isWebPreview?: boolean;
    isWebPreview2?: boolean;
  }

  // Portfolio items
  const portfolioProjects: PortfolioProject[] = [
    {
      title: "Skin Myths Reel Series",
      specialty: "Dermatology",
      category: "Reels & Videos",
      objective: "Correct common skincare misconceptions",
      services: "Scripting · Shoot · Editing",
      bg: "bg-mint",
      aspect: "aspect-[3/4]",
      image: reelImg,
      badge: "Concept demo",
    },
    {
      title: "Heart Health Carousel",
      specialty: "Cardiology",
      category: "Educational Content",
      objective: "Explain warning signs simply",
      services: "Research · Design · Copy",
      bg: "bg-[#f6f4ec]",
      aspect: "aspect-square",
      badge: "Concept demo",
      image: "/heart-health-carousel.png",
    },
    {
      title: "Portfolio Website Concept",
      specialty: "Doctor Websites",
      category: "Doctor Websites",
      objective: "One clear home for credentials & inquiries",
      services: "Design · Build · SEO basics",
      bg: "bg-[#072421]",
      aspect: "aspect-[1024/491]",
      badge: "Concept demo",
      image: "/dr-gaurav-site.png",
    },
    {
      title: "Instagram Profile Makeover",
      specialty: "Cardiology",
      category: "Social Media",
      objective: "A recognisable, trustworthy profile",
      services: "Bio · Highlights · Grid system",
      bg: "bg-sunny",
      aspect: "aspect-[3/4]",
      image: doc2Img,
      badge: "Concept demo",
    },
    {
      title: "Clinic Brand Identity",
      specialty: "Multispecialty",
      category: "Branding",
      objective: "A cohesive visual language",
      services: "Logo · Palette · Templates",
      bg: "bg-[#e8e4dc]",
      aspect: "aspect-square",
      badge: "Concept demo",
      image: "/clinic-brand-identity.png",
    },
    {
      title: "Behind-the-Scenes Shoot",
      specialty: "General Physician",
      category: "Reels & Videos",
      objective: "Humanise the doctor's approach",
      services: "Production · B-roll",
      bg: "bg-peach",
      aspect: "aspect-[4/3]",
      image: shootImg,
      badge: "Concept demo",
    },
    {
      title: "Patient FAQ Series",
      specialty: "Gynecology",
      category: "Educational Content",
      objective: "Answer real patient questions",
      services: "Topic research · Design",
      bg: "bg-[#8dd3c7]",
      aspect: "aspect-[3/4]",
      badge: "Concept demo",
      image: "/patient-faq-series.png",
    },
    {
      title: "Dental Implant Landing Page",
      specialty: "Dentistry",
      category: "Doctor Websites",
      objective: "Clear treatment information & 3D guided surgery booking",
      services: "Landing page · WhatsApp CTA",
      bg: "bg-[#0b1f32]",
      aspect: "aspect-[1024/491]",
      badge: "Concept demo",
      image: "/dental-clinic-site.png",
    },
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (workFilter === "All Projects") return true;
    if (workFilter === "Saved (0)" || workFilter.startsWith("Saved")) {
      return savedProjects.includes(p.title);
    }
    return p.category === workFilter;
  });

  const galleryItems = [
    {
      title: "Meet your dermatologist",
      specialty: "Dermatology",
      type: "Intro reel",
      desc: "A warm 30-second introduction to the doctor and their approach.",
      bg: "bg-peach",
      image: doc1Img,
      span: "row-span-2",
    },
    {
      title: "Myth vs Fact: Braces",
      specialty: "Dentistry",
      type: "Carousel",
      desc: "Clears up common worries about orthodontic treatment.",
      bg: "bg-turq",
      image: "/myth-vs-fact-braces.png",
      span: "",
    },
    {
      title: "Your knee pain FAQs",
      specialty: "Orthopedics",
      type: "Talking-head reel",
      desc: "Answers the three questions patients ask most.",
      bg: "bg-sunny",
      image: "/knee-pain-faqs.png",
      span: "",
    },
    {
      title: "Daily dental habits",
      specialty: "Dentistry",
      type: "Education reel",
      desc: "Simple, accurate habits explained with props.",
      bg: "bg-mint",
      image: reelImg,
      span: "row-span-2",
    },
    {
      title: "World Heart Day",
      specialty: "Cardiology",
      type: "Awareness post",
      desc: "Seasonal awareness content tied to a health day.",
      bg: "bg-sky",
      image: doc2Img,
      span: "",
    },
    {
      title: "Inside our clinic",
      specialty: "Multispecialty",
      type: "Clinic tour",
      desc: "A clinic introduction that sets patient expectations.",
      bg: "bg-lavender",
      image: shootImg,
      span: "col-span-2",
    },
    {
      title: "Why I chose pediatrics",
      specialty: "Pediatrics",
      type: "Brand story",
      desc: "A personal story that builds connection and trust.",
      bg: "bg-pink",
      image: "/why-pediatrics.png",
      span: "",
    },
  ];

  // Workspace items
  const workspaceItems = [
    {
      title: "Sunscreen myths",
      format: "Reel",
      status: "Published",
      statusBg: "bg-emerald text-cream",
      hook: '"Is sunscreen only for sunny days? Let\'s talk."',
      p1: "UV reaches skin even on cloudy days.",
      cta: "Save this & share with someone who skips it.",
    },
    {
      title: "Acne FAQ part 2",
      format: "Carousel",
      status: "In approval",
      statusBg: "bg-sunny text-navy",
      hook: '"Do food choices really trigger cystic acne?"',
      p1: "Clinical studies show low-glycemic diets reduce breakouts.",
      cta: "Drop your questions below for part 3.",
    },
    {
      title: "Laser aftercare",
      format: "Reel",
      status: "Editing",
      statusBg: "bg-sky text-navy",
      hook: '"3 things you MUST avoid for 48 hours post-laser."',
      p1: "No direct hot water, retinoids, or heavy makeup.",
      cta: "Bookmark this checklist for your next clinic visit.",
    },
    {
      title: "Monsoon skin tips",
      format: "Post",
      status: "Scripting",
      statusBg: "bg-pink text-navy",
      hook: '"Humidity up, skin barrier down — here is why."',
      p1: "Switch from heavy creams to hydrating gel moisturizers.",
      cta: "Share with a friend suffering from seasonal flareups.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How does Sociokraft help doctors grow their digital presence?",
      a: "We combine strategy, content production, social media management and doctor websites so your expertise is presented clearly and consistently online.",
    },
    {
      q: "Which social media platforms do you manage?",
      a: "Primarily Instagram, with YouTube Shorts and LinkedIn where they suit your goals. Platform mix is agreed during strategy.",
    },
    {
      q: "Do you create reels and write the scripts?",
      a: "Yes. We research topics, write scripts, and edit reels with captions, B-roll and motion graphics. You review everything for accuracy.",
    },
    {
      q: "Do doctors need to record their own videos?",
      a: "It depends on your plan. We can coordinate recording sessions at your clinic or guide you to record simply on your phone. [Confirm availability by city]",
    },
    {
      q: "Can Sociokraft build a professional website for my practice?",
      a: "Yes — portfolio websites covering your qualifications, services, clinic details and inquiry options, built mobile-first with SEO foundations.",
    },
    {
      q: "How does the content approval process work?",
      a: "Scripts and designs are shared with you before publishing. Nothing goes live without your approval.",
    },
    {
      q: "How much time do I need to dedicate each month?",
      a: "This varies with your plan and whether you appear on camera. We'll estimate it with you during onboarding. [Placeholder — to be confirmed]",
    },
    {
      q: "How are packages and deliverables decided?",
      a: "After a discovery call, we recommend a package and agree deliverables, volume and timelines in writing.",
    },
    {
      q: "How do we measure content performance?",
      a: "Through regular reports covering content delivered, publishing activity, engagement and the indicators we agree on together.",
    },
    {
      q: "Can I choose only social media management or website development?",
      a: "Yes. Services can be taken individually, though they work best when connected.",
    },
    {
      q: "How do I get started?",
      a: "Claim a free digital audit or send an inquiry. We'll set up a short discovery call.",
    },
    {
      q: "Do you work with doctors from different specialties and cities?",
      a: "Yes, we work across specialties. Remote collaboration is possible; on-site shoots depend on location. [Confirm service cities]",
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-coral selection:text-white">
      <Header onOpenAudit={() => setAuditModalOpen(true)} />

      <main>
        {/* ============================================================== */}
        {/* SECTION 1: HERO */}
        {/* ============================================================== */}
        <section
          id="top"
          className="relative overflow-hidden bg-skylight min-h-screen flex flex-col justify-center pt-[84px] pb-12 sm:pt-[96px] sm:pb-16 lg:pt-[100px] lg:pb-16"
        >
          {/* Ambient blur glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 hidden h-[300px] w-[300px] rounded-full bg-sunny/40 blur-3xl transition-transform duration-700 ease-out md:block"
          />
          {/* Background dots */}
          <div className="absolute inset-0 dots pointer-events-none" aria-hidden="true" />
          {/* Left soft pink circular background aura matching screenshot */}
          <div
            aria-hidden="true"
            className="absolute -left-20 top-28 h-96 w-96 rounded-full bg-[#fcd4dc]/70 pointer-events-none blur-sm"
          />

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-4 sm:px-6 lg:px-[108px] lg:grid-cols-[1.1fr_1fr]">
            {/* Left Column Content */}
            <div className="max-w-2xl">
              {/* Badge pills */}
              <div className="mb-3.5 sm:mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-navy px-3.5 py-1 text-xs sm:text-[13.5px] font-bold uppercase tracking-widest text-cream">
                  Personal branding for doctors
                </span>
                <span className="rounded-full border-2 border-navy bg-white px-3 py-1 text-xs sm:text-[13.5px] font-bold text-navy">
                  Reels · Social · Websites
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[2.25rem] leading-[1.02] sm:text-[50px] lg:text-[82px] font-black sm:leading-[0.96] tracking-tight text-navy">
                <span className="mr-2 sm:mr-3 inline-block">Great</span>
                <span className="mr-2 sm:mr-3 inline-block">Doctors</span>
                <br />
                <span className="inline-block">
                  Deserve <span className="text-outline">to</span>
                </span>{" "}
                <span className="inline-block">
                  <span className="relative inline-block rounded-xl sm:rounded-2xl border-2 border-navy bg-coral px-3 py-0.5 sm:px-4 sm:py-0.5 -rotate-1 text-navy hard-shadow-sm">
                    Be Seen.
                  </span>
                </span>
              </h1>

              {/* Ocean Blue Subheadline */}
              <p className="mt-3 sm:mt-4 text-lg sm:text-[22px] md:text-[26px] font-bold text-ocean">
                Your expertise changes lives. We help the digital world see it.
              </p>

              {/* Lead Paragraph */}
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-[15.5px] leading-relaxed text-muted-foreground md:text-[18px]">
                Sociokraft builds powerful personal brands for doctors through strategic content,
                premium video production, social media management, and professional digital
                experiences that turn expertise into trust.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3.5">
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn-pill-coral px-5 py-3 sm:px-6 sm:py-3.5 text-base sm:text-[17.5px] font-bold text-center"
                >
                  Claim Your Free Digital Audit
                </button>
                <a
                  href="#work"
                  className="btn-pill-card px-5 py-3 sm:px-6 sm:py-3.5 text-base sm:text-[17.5px] font-bold text-center"
                >
                  Explore Our Work
                </a>
              </div>

              <p className="mt-2 text-xs sm:text-[13.5px] text-muted-foreground">
                No obligation. Just a conversation about your digital growth.
              </p>

              <a
                href="#transformation"
                className="mt-2.5 sm:mt-3 inline-flex items-center gap-2 text-sm sm:text-[15.5px] font-bold text-navy underline decoration-coral decoration-2 underline-offset-4 hover:text-ocean"
              >
                See How We Grow Doctor Brands →
              </a>
            </div>

            {/* Right Collage Visual (Exact layout matching Lovable reference) */}
            <div className="relative mx-auto lg:mr-0 lg:ml-auto h-[440px] w-full max-w-[440px] sm:h-[520px] sm:max-w-[530px] lg:h-[560px]">
              {/* Yellow glow behind dentist card */}
              <div
                aria-hidden="true"
                className="absolute -right-6 top-0 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-lemon/60 blur-3xl pointer-events-none"
              />

              {/* Dotted curving path SVG (black line keeps moving) */}
              <svg viewBox="0 0 560 560" className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
                <path
                  d="M60 470 C 120 360, 40 260, 180 220 S 380 260, 420 140 S 520 60, 520 40"
                  fill="none"
                  stroke="var(--navy)"
                  strokeWidth="2.5"
                  className="animate-dash"
                />
              </svg>

              {/* Coral Star marker top-left */}
              <svg viewBox="0 0 24 24" className="absolute left-[2%] top-[0%] h-6 w-6 sm:h-8 sm:w-8 text-coral animate-spin-slow pointer-events-none" aria-hidden="true">
                <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>

              {/* 1. Doctor 1 Portrait Card (Top Left - Peach Frame) */}
              <div
                className="absolute left-[2%] sm:left-[4%] top-[4%] sm:top-[6%] w-[48%] sm:w-[46%] rounded-[1.6rem] sm:rounded-[2rem] border-2 border-navy bg-peach p-1.5 sm:p-2 hard-shadow z-10"
                style={{ transform: "rotate(-5deg)" }}
              >
                <img
                  src={doc1Img}
                  alt="Concept portrait of a dermatologist for a personal brand shoot"
                  width="768"
                  height="960"
                  className="aspect-[4/5] w-full rounded-[1.3rem] sm:rounded-[1.6rem] object-cover"
                />
                <span className="absolute -bottom-3 sm:-bottom-4 left-2 sm:left-4 rounded-full border-2 border-navy bg-white px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-navy shadow-sm whitespace-nowrap">
                  Dermatology · Brand shoot
                </span>
              </div>

              {/* 2. Dentist Reel Card (Top Right - Navy Frame) */}
              <div
                className="absolute right-[2%] top-[0%] w-[42%] sm:w-[38%] rounded-[1.4rem] sm:rounded-[1.6rem] border-2 border-navy bg-navy p-1 sm:p-1.5 hard-shadow z-10"
                style={{ transform: "rotate(6deg)" }}
              >
                <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.3rem]">
                  <img
                    src={reelImg}
                    alt="Concept reel frame of a dentist explaining dental care"
                    width="768"
                    height="1024"
                    className="aspect-[9/14] w-full object-cover"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-10 w-10 sm:h-14 sm:w-14 place-items-center rounded-full bg-coral border-2 border-navy animate-pulse-soft">
                      <Play className="h-4 w-4 sm:h-6 sm:w-6 fill-navy" />
                    </span>
                  </span>
                  <span className="absolute bottom-1.5 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 rounded-lg sm:rounded-xl bg-white/95 px-1 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-bold text-navy text-center truncate">
                    “3 brushing myths” · Reel
                  </span>
                </div>
              </div>

              {/* Cyan Camera Badge (Top Center) */}
              <span
                className="absolute left-[44%] sm:left-[46%] top-[2%] z-30 grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-xl sm:rounded-2xl border-2 border-navy bg-turq text-navy rotate-12"
              >
                <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>

              {/* Pink Heart Badge (Between Doctor 1 & Dentist Reel - kept higher so it never touches Doctor 1's badge) */}
              <span
                className="absolute right-[40%] sm:right-[38%] top-[34%] sm:top-[40%] z-30 grid h-9 w-9 sm:h-12 sm:w-12 place-items-center rounded-full border-2 border-navy bg-pink"
              >
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-cream text-cream" />
              </span>

              {/* 3. Comment Bubble: Nicely floated above Cardiologist card */}
              <span
                className="absolute left-[32%] sm:left-[40%] bottom-[42%] sm:bottom-[38%] z-30 rounded-xl sm:rounded-2xl rounded-bl-none border-2 border-navy bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold text-navy hard-shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="mr-1 inline h-3 w-3 sm:h-3.5 sm:w-3.5 text-navy" />
                “So helpful, doctor!”
              </span>

              {/* 4. Cardiologist Profile Concept (Center-Left - Solid White Background) */}
              <div
                className="absolute bottom-[4%] left-[16%] sm:left-[22%] w-[48%] sm:w-[44%] rounded-2xl sm:rounded-3xl border-2 border-navy bg-white p-2.5 sm:p-3 hard-shadow z-20"
                style={{ transform: "rotate(3deg)" }}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <img
                    src={doc2Img}
                    alt=""
                    width="768"
                    height="960"
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-navy object-cover"
                  />
                  <div className="text-[10px] sm:text-xs min-w-0">
                    <p className="font-bold text-navy truncate">dr.heart.talks</p>
                    <p className="text-muted-foreground truncate text-[9px] sm:text-xs">Cardiologist · Profile</p>
                  </div>
                </div>
                <div className="mt-1.5 sm:mt-2 grid grid-cols-3 gap-1">
                  <div className="aspect-square rounded-[4px] sm:rounded-md bg-coral" />
                  <div className="aspect-square rounded-[4px] sm:rounded-md bg-turq" />
                  <div className="aspect-square rounded-[4px] sm:rounded-md bg-sunny" />
                  <div className="aspect-square rounded-[4px] sm:rounded-md bg-grape" />
                  <div className="aspect-square rounded-[4px] sm:rounded-md bg-sky" />
                  <div className="aspect-square rounded-[4px] sm:rounded-md bg-pink" />
                </div>
              </div>

              {/* 5. Mon · Reel drop pill: Placed cleanly on left of Cardiologist card, below Doctor 1 badge */}
              <div
                className="absolute left-[0%] bottom-[20%] sm:bottom-[22%] z-20 rounded-xl sm:rounded-2xl border-2 border-navy bg-sunny px-2 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs font-bold text-navy hard-shadow-sm whitespace-nowrap"
                style={{ transform: "rotate(-8deg)" }}
              >
                <CalendarDays className="mr-1 inline h-3 w-3 sm:h-4 sm:w-4" />
                Mon · Reel drop
              </div>

              {/* 6. Reach Trend Card (Lower Right - Mint Frame, fully legible) */}
              <div
                className="absolute bottom-[28%] sm:bottom-[30%] right-[0%] w-[38%] sm:w-[34%] rounded-xl sm:rounded-2xl border-2 border-navy bg-mint p-2 sm:p-3 hard-shadow-sm z-20"
                style={{ transform: "rotate(-4deg)" }}
              >
                <p className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-navy">
                  <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald" /> Reach trend
                </p>
                <svg viewBox="0 0 100 40" className="mt-1 w-full">
                  <polyline
                    points="0,35 20,30 40,32 60,18 80,14 100,4"
                    fill="none"
                    stroke="var(--emerald)"
                    strokeWidth="3"
                  />
                </svg>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">Illustrative chart</p>
              </div>

              {/* 7. Rotating Yellow Circular Seal: Pinned to the top-right corner of Reach Trend */}
              <div className="absolute right-0 top-[44%] z-30 hidden h-24 w-24 sm:block animate-spin-slow pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path id="sealPath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="var(--sunny)" stroke="var(--navy)" strokeWidth="2" />
                  <text fontSize="11" fontWeight="800" fill="var(--navy)">
                    <textPath href="#sealPath">EXPERTISE · CONTENT · TRUST · </textPath>
                  </text>
                </svg>
                <Star className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 fill-coral text-navy" />
              </div>

              {/* Purple Globe Badge (Bottom Right) */}
              <span
                className="absolute right-[4%] sm:right-[6%] bottom-[5%] sm:bottom-[6%] z-30 grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-full border-2 border-navy bg-grape text-cream"
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>

              {/* Ocean 4-point Star (Bottom Center) */}
              <svg viewBox="0 0 24 24" className="absolute right-[44%] bottom-[0%] h-5 w-5 sm:h-6 sm:w-6 text-ocean animate-spin-slow pointer-events-none" aria-hidden="true">
                <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: NAVY VALUE BAR */}
        {/* ============================================================== */}
        <section className="bg-navy py-6 md:py-8 text-cream overflow-hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start sm:items-center gap-4 px-4 sm:px-6 lg:px-[108px] lg:flex-row lg:justify-between">
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex gap-1 text-sunny shrink-0">
                {[...Array(3)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                  </svg>
                ))}
              </div>
              <p className="max-w-[320px] text-base font-bold leading-snug sm:text-lg">
                Building Digital Presence for Modern Healthcare Professionals
              </p>
            </div>
            <div className="w-full -mx-4 px-4 overflow-x-auto no-scrollbar lg:w-auto lg:mx-0 lg:px-0 lg:overflow-visible">
              <div className="flex flex-nowrap items-center gap-2 w-max py-1">
                <div className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold text-navy sm:px-4 sm:py-2 sm:text-sm bg-sunny">
                  Specialty-first strategy
                </div>
                <div className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold text-navy sm:px-4 sm:py-2 sm:text-sm bg-turq">
                  Doctor-approved content
                </div>
                <div className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold text-navy sm:px-4 sm:py-2 sm:text-sm bg-pink">
                  Scripting to publishing
                </div>
                <div className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-bold text-navy sm:px-4 sm:py-2 sm:text-sm bg-sky">
                  Social + website, connected
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: MARQUEE TICKER */}
        {/* ============================================================== */}
        <section className="pause-hover overflow-hidden border-y-2 border-navy bg-lemon py-6" aria-label="Specialties we understand">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-navy">
            Doctor specialties we understand
          </p>
          <div className="flex w-max animate-marquee gap-4">
            {[...specialties, ...specialties].map((spec, i) => (
              <span key={i} className="flex items-center gap-4">
                <span
                  className={`whitespace-nowrap rounded-full border-2 border-navy px-5 py-2.5 text-lg font-extrabold md:text-2xl ${spec.bg} text-navy`}
                >
                  {spec.name}
                </span>
                <span className="text-2xl font-black text-coral">✚</span>
              </span>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: THE PROBLEM */}
        {/* ============================================================== */}
        <section className="relative bg-peach py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                The problem
              </span>
            </div>
            <div>
              <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl text-navy">
                <span className="relative z-10">Being</span> a Great Doctor Is{" "}
                <span className="relative z-0 inline-block rounded-2xl border-2 border-navy bg-card px-3 -rotate-1 text-navy">
                  Only
                </span>{" "}
                the Beginning.
              </h2>
            </div>
            <div>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Patients increasingly discover doctors online. Your expertise, experience, and
                approach to care deserve a digital presence that communicates your value before the
                first appointment.
              </p>
            </div>

            <div className="mt-16 space-y-10">
              {/* Problem 01 */}
              <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
                <span className="text-[7rem] font-black leading-none text-coral md:text-[11rem] select-none">
                  01
                </span>
                <div className="rounded-[2rem] border-2 border-navy bg-coral p-8 hard-shadow text-navy">
                  <h3 className="text-2xl font-extrabold md:text-3xl text-navy">
                    Expertise That Goes Unnoticed
                  </h3>
                  <p className="mt-2 text-navy/90">
                    You have years of medical experience, but your digital presence does not reflect
                    the quality of your work.
                  </p>
                </div>
                <div className="relative hidden h-40 w-32 md:block">
                  <img
                    src={doc2Img}
                    alt=""
                    width="768"
                    height="960"
                    className="h-full w-full rounded-2xl object-cover border-2 border-navy rotate-6"
                  />
                  <span className="absolute -bottom-3 -left-3 rounded-full bg-navy px-3 py-1 text-xs font-bold text-cream">
                    0 posts
                  </span>
                </div>
              </div>

              {/* Problem 02 */}
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:pl-24">
                <div className="rounded-[2rem] border-2 border-navy bg-sunny p-8 hard-shadow md:-rotate-1 text-navy">
                  <h3 className="text-2xl font-extrabold md:text-3xl text-navy">
                    Inconsistent Content
                  </h3>
                  <p className="mt-2 text-navy/90">
                    Posting without a clear strategy makes it difficult to communicate expertise,
                    educate patients, and maintain a recognisable professional identity.
                  </p>
                  <div className="mt-5 flex gap-2">
                    <span className="rounded-lg border-2 border-navy px-2 py-1 text-xs font-bold bg-card">
                      Mar 2
                    </span>
                    <span className="rounded-lg border-2 border-navy px-2 py-1 text-xs font-bold bg-sunny/40 border-dashed">
                      —
                    </span>
                    <span className="rounded-lg border-2 border-navy px-2 py-1 text-xs font-bold bg-sunny/40 border-dashed">
                      —
                    </span>
                    <span className="rounded-lg border-2 border-navy px-2 py-1 text-xs font-bold bg-card">
                      Apr 19
                    </span>
                    <span className="rounded-lg border-2 border-navy px-2 py-1 text-xs font-bold bg-sunny/40 border-dashed">
                      —
                    </span>
                    <span className="rounded-lg border-2 border-navy px-2 py-1 text-xs font-bold bg-card">
                      Jun 7
                    </span>
                  </div>
                </div>
                <span className="order-first text-[7rem] font-black leading-none text-sunny md:order-none md:text-[11rem] select-none">
                  02
                </span>
              </div>

              {/* Problem 03 */}
              <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
                <span className="text-[7rem] font-black leading-none text-ocean md:text-[11rem] select-none">
                  03
                </span>
                <div className="relative overflow-hidden rounded-[2rem] border-2 border-navy bg-navy p-8 text-cream hard-shadow">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-grape/60" />
                  <h3 className="relative text-2xl font-extrabold md:text-3xl text-cream">
                    A Digital Presence That Doesn't Convert
                  </h3>
                  <p className="relative mt-2 max-w-2xl text-cream/80">
                    A weak social profile or an outdated website can make it harder for potential
                    patients to understand your specialty, services, and next steps.
                  </p>
                  <div className="relative mt-5 inline-flex items-center gap-2 rounded-xl bg-cream/10 px-3 py-2 font-mono text-xs">
                    www.old-clinic-site.com{" "}
                    <span className="rounded bg-destructive px-1.5 text-[10px] text-white">
                      Last updated 2017
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 5: THE TRANSFORMATION (Interactive Slider) */}
        {/* ============================================================== */}
        <section id="transformation" ref={transformationSectionRef} className="bg-card py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy bg-mint">
                <span className="h-2 w-2 rounded-full bg-coral" />
                The transformation
              </span>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                From Expertise to{" "}
                <span className="relative inline-block rounded-2xl bg-turq px-3 -rotate-1 text-navy border-2 border-navy">
                  Digital Authority
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Watch the transformation unfold. An illustration of our service approach — not a guaranteed outcome.
              </p>

              {/* Interactive toggle pills & replay */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="inline-flex rounded-full border-2 border-navy bg-card p-1 shadow-sm">
                  <button
                    type="button"
                    onClick={handleShowBefore}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                      sliderPos === 0
                        ? "bg-destructive text-cream shadow-sm"
                        : "text-navy hover:text-navy/70"
                    }`}
                  >
                    Before
                  </button>
                  <button
                    type="button"
                    onClick={handleShowAfter}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                      sliderPos === 100
                        ? "bg-emerald text-cream shadow-sm"
                        : "text-navy hover:text-navy/70"
                    }`}
                  >
                    After
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleReplay}
                  title="Replay animation"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy bg-card px-3.5 py-1.5 text-xs font-bold text-navy hover:bg-sand transition-all active:scale-95 shadow-sm"
                >
                  <Repeat className="h-3.5 w-3.5" />
                  <span>Replay</span>
                </button>
              </div>
            </div>

            {/* Before / After Automated Transition Container */}
            <div className="relative mx-auto mt-10 aspect-[4/5] max-w-5xl select-none overflow-hidden rounded-[2rem] border-2 border-navy hard-shadow sm:aspect-[16/9]">
              {/* BEFORE layer (Sand) - Base layer */}
              <div className="absolute inset-0 grid grid-cols-1 gap-4 bg-sand p-6 sm:grid-cols-2 sm:p-10">
                <div className="hidden flex-col justify-center sm:flex">
                  <span className="mb-3 w-fit rounded-full bg-destructive px-3 py-1 text-xs font-bold text-cream">
                    BEFORE
                  </span>
                  <ul className="space-y-2 text-navy opacity-75">
                    {[
                      "No active social presence or visual branding",
                      "Zero structured video content",
                      "Sporadic, inconsistent posts once in months",
                      "Confusion over medical compliance and topics",
                      "Outdated, non-responsive clinic webpage",
                      "Missed patient inquiries and low digital trust",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 font-semibold line-through">
                        <X className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-destructive/80 p-0.5 text-cream" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative rounded-3xl border-2 border-navy bg-card/60 p-4 grayscale opacity-70">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full border-2 border-navy bg-muted grid place-items-center text-xs font-bold">
                      Dr. ?
                    </div>
                    <div>
                      <p className="font-extrabold text-navy">Private Clinic</p>
                      <p className="text-xs text-muted-foreground">Last active 9 months ago</p>
                    </div>
                  </div>
                  <div className="mt-8 text-center py-6 text-sm text-muted-foreground border-2 border-dashed border-navy/30 rounded-xl">
                    No recent reels or articles
                  </div>
                </div>
              </div>

              {/* AFTER layer (Mint) - Overlaid and clipped by progress */}
              <div
                className="absolute inset-0 grid grid-cols-1 gap-4 bg-mint p-6 sm:grid-cols-2 sm:p-10"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  transition: isTransitioning ? "clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                }}
              >
                <div className="hidden flex-col justify-center sm:flex">
                  <span className="mb-3 w-fit rounded-full bg-emerald px-3 py-1 text-xs font-bold text-cream">
                    AFTER
                  </span>
                  <ul className="space-y-2 text-navy">
                    {[
                      "Consistent and recognisable visual identity",
                      "Strategic short-form video content",
                      "Professional social media profiles",
                      "Educational and engaging posts",
                      "A polished doctor portfolio website",
                      "Clear contact and appointment inquiry pathways",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 font-semibold">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald p-0.5 text-cream" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concept Doctor Card */}
                <div className="relative rounded-3xl border-2 border-navy bg-card p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={doc1Img}
                      alt=""
                      className="h-14 w-14 rounded-full border-2 border-navy object-cover"
                    />
                    <div>
                      <p className="font-extrabold text-navy">Dr. Aesthetic Skin</p>
                      <p className="text-xs text-muted-foreground">Dermatologist · Skin education</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2 text-xs font-bold text-navy">
                    <span className="rounded-full bg-peach px-2 py-1">Myths</span>
                    <span className="rounded-full bg-skylight px-2 py-1">FAQs</span>
                    <span className="rounded-full bg-lavender px-2 py-1">Routines</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div className="grid aspect-square place-items-center rounded-lg bg-coral text-[10px] font-bold text-navy">
                      Reel
                    </div>
                    <div className="grid aspect-square place-items-center rounded-lg bg-turq text-[10px] font-bold text-navy">
                      Carousel
                    </div>
                    <div className="grid aspect-square place-items-center rounded-lg bg-sunny text-[10px] font-bold text-navy">
                      FAQ
                    </div>
                    <div className="grid aspect-square place-items-center rounded-lg bg-pink text-[10px] font-bold text-navy">
                      Reel
                    </div>
                    <div className="grid aspect-square place-items-center rounded-lg bg-sky text-[10px] font-bold text-navy">
                      Tips
                    </div>
                    <div className="grid aspect-square place-items-center rounded-lg bg-grape text-[10px] font-bold text-navy">
                      Story
                    </div>
                  </div>
                  <span className="absolute -right-2 -top-3">
                    <span className="inline-flex items-center rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                      Concept demo
                    </span>
                  </span>
                </div>
              </div>

              {/* Animated Divider Sweep Line and Handle */}
              <div
                className="absolute inset-y-0 z-20 w-1 bg-navy pointer-events-none transition-opacity duration-500"
                style={{
                  left: `${sliderPos}%`,
                  transition: isTransitioning ? "left 1.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                  opacity: showDivider && sliderPos > 2 && sliderPos < 98 ? 1 : 0,
                }}
              >
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-coral text-navy shadow-md font-bold text-xs pointer-events-none">
                  ⇄
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 6: OUR SERVICES */}
        {/* ============================================================== */}
        <section id="services" className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy bg-lavender">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Our services
              </span>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl text-navy">
                A Creative <span className="text-outline">Growth</span>
                <br />
                Studio{" "}
                <span className="relative inline-block rounded-2xl bg-pink px-3 -rotate-1 text-navy border-2 border-navy">
                  for Doctors.
                </span>
              </h2>
            </div>

            {/* Service 01: Content Studio */}
            <div
              id="svc-content"
              className="mt-16 scroll-mt-24 overflow-hidden rounded-[2.5rem] border-2 border-navy bg-coral hard-shadow text-navy"
            >
              <div className="grid gap-10 p-6 md:p-12 lg:grid-cols-2">
                <div>
                  <span className="flex items-center gap-2 font-black text-navy text-lg">
                    <Clapperboard className="h-6 w-6" /> 01 — Content Studio
                  </span>
                  <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl text-navy">
                    Turn Your Expertise Into Content Patients Understand.
                  </h3>
                  <p className="mt-4 text-lg text-navy/90">
                    We help doctors communicate their knowledge through professionally planned,
                    scripted, recorded, and edited content.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Short-form reels and videos",
                      "Medical content scripting",
                      "Educational carousel posts",
                      "Social media creatives",
                      "Content research",
                      "Captions and copywriting",
                      "Professional video editing",
                      "Motion graphics and B-roll",
                      "Monthly content planning",
                      "Clinic recording sessions",
                      "Patient education content",
                      "Content repurposing",
                    ].map((pill, i) => (
                      <span
                        key={i}
                        className="rounded-full border-2 border-navy bg-cream px-3 py-1 text-sm font-semibold text-navy transition hover:-rotate-2 hover:bg-sunny cursor-default"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Visual mockup */}
                <div>
                  <div className="relative overflow-hidden rounded-3xl border-2 border-navy bg-navy">
                    <img
                      src={shootImg}
                      alt="Clinic recording session"
                      width="1024"
                      height="768"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-cream animate-pulse-soft">
                      ● REC
                    </div>
                  </div>

                  {/* Interactive stage tabs */}
                  <div className="mt-4 rounded-2xl border-2 border-navy bg-cream p-4">
                    <div className="flex gap-2" role="tablist">
                      {[
                        { id: "script", label: "Script", icon: FileText },
                        { id: "record", label: "Record", icon: Film },
                        { id: "edit", label: "Edit", icon: Scissors },
                        { id: "publish", label: "Publish", icon: Upload },
                      ].map((tab) => {
                        const Icon = tab.icon;
                        const active = studioStage === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setStudioStage(tab.id as any)}
                            role="tab"
                            aria-selected={active}
                            className={`flex flex-1 flex-col items-center gap-1 rounded-xl border-2 border-navy py-2 text-xs font-bold transition ${active ? "bg-sunny -translate-y-1 shadow-sm text-navy" : "bg-card text-navy/70 hover:bg-sand"
                              }`}
                          >
                            <Icon className={`h-5 w-5 ${active ? "rotate-12" : ""}`} />
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Progress Bar */}
                    <div className="relative mt-3 h-6 overflow-hidden rounded-lg bg-muted">
                      <div
                        className="absolute inset-y-0 left-0 bg-turq transition-all duration-500"
                        style={{
                          width:
                            studioStage === "script"
                              ? "25%"
                              : studioStage === "record"
                                ? "50%"
                                : studioStage === "edit"
                                  ? "75%"
                                  : "100%",
                        }}
                      />
                      <div className="absolute inset-y-1 left-[10%] w-1/5 rounded bg-grape/70" />
                      <div className="absolute inset-y-1 left-[45%] w-1/4 rounded bg-pink/80" />
                    </div>

                    <p className="mt-2 text-sm text-navy font-medium">
                      {studioStage === "script" && "Topics researched and scripted in plain, accurate language."}
                      {studioStage === "record" && "Guided on-site or tele-guided clinic filming sessions."}
                      {studioStage === "edit" && "Cinematic color grading, pacing, captions, and motion graphics."}
                      {studioStage === "publish" && "Scheduled during optimal engagement windows for your audience."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 02: Social Media Growth */}
            <div
              id="svc-social"
              className="mt-12 scroll-mt-24 grid gap-8 lg:grid-cols-[1fr_1.1fr]"
            >
              {/* Left Mockup visual */}
              <div className="relative order-2 min-h-[380px] lg:order-1">
                <div className="absolute inset-0 rounded-[2.5rem] bg-sky" />
                {/* Profile card */}
                <div className="absolute left-6 top-8 w-[55%] rounded-3xl border-2 border-navy bg-card p-4 hard-shadow">
                  <div className="flex items-center gap-2">
                    <img
                      src={doc2Img}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover border-2 border-navy"
                    />
                    <div className="text-xs">
                      <b>Heart Health Daily</b>
                      <p className="text-muted-foreground">Profile concept</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1">
                    <div className="aspect-square rounded bg-coral" />
                    <div className="aspect-square rounded bg-sunny" />
                    <div className="aspect-square rounded bg-turq" />
                    <div className="aspect-square rounded bg-pink" />
                    <div className="aspect-square rounded bg-lavender" />
                    <div className="aspect-square rounded bg-mint" />
                    <div className="aspect-square rounded bg-coral" />
                    <div className="aspect-square rounded bg-sunny" />
                    <div className="aspect-square rounded bg-turq" />
                  </div>
                </div>

                {/* Calendar Card */}
                <div className="absolute right-6 top-4 w-[38%] rounded-2xl border-2 border-navy bg-sunny p-3 hard-shadow-sm animate-float">
                  <p className="text-xs font-bold text-navy">Content calendar</p>
                  <div className="mt-2 grid grid-cols-7 gap-0.5">
                    {[...Array(21)].map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-sm ${i % 4 === 2 ? "bg-navy" : "bg-cream"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Monthly report card */}
                <div className="absolute bottom-6 right-8 w-[45%] rounded-2xl border-2 border-navy bg-card p-3 hard-shadow-sm">
                  <p className="text-xs font-bold text-navy">Monthly report · illustrative</p>
                  <div className="mt-2 flex h-16 items-end gap-1.5">
                    {[18, 27, 24, 36, 33, 45, 51].map((h, i) => (
                      <div key={i} className="flex-1">
                        <div className="rounded-t bg-ocean" style={{ height: `${h}px` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right text details */}
              <div className="order-1 rounded-[2.5rem] border-2 border-navy bg-skylight p-6 md:p-10 lg:order-2 text-navy">
                <span className="flex items-center gap-2 font-black text-ocean text-lg">
                  <Share2 className="h-6 w-6" /> 02 — Social Media Growth
                </span>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl text-navy">
                  Build a Digital Presence That Reflects Your Expertise.
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  We manage and develop a consistent social media presence tailored to your
                  specialty, goals, and audience.
                </p>

                <ul className="mt-6 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                  {[
                    "Instagram profile optimisation",
                    "Account management",
                    "Monthly content calendars",
                    "Strategic content planning",
                    "Competitor & niche research",
                    "Educational content strategy",
                    "Consistent posting",
                    "Audience engagement planning",
                    "Performance reporting",
                    "Platform-specific adaptation",
                    "YouTube Shorts strategy",
                    "LinkedIn presence, where appropriate",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm font-semibold text-navy">
                      <Check className="h-4 w-4 shrink-0 text-ocean mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 03: Doctor Websites & Portfolio */}
            <div
              id="svc-web"
              className="mt-12 scroll-mt-24 rounded-[2.5rem] border-2 border-navy bg-mint p-6 md:p-12 text-navy"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <span className="flex items-center gap-2 font-black text-emerald text-lg">
                    <MonitorSmartphone className="h-6 w-6" /> 03 — Doctor Websites & Portfolio
                  </span>
                  <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl text-navy">
                    Your Expertise Deserves a Professional Home Online.
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Modern, responsive websites that help patients understand your qualifications,
                    specialities, experience, services, and appointment options.
                  </p>

                  <div className="mt-6 columns-2 gap-4 text-sm font-semibold text-navy">
                    {[
                      "Doctor portfolio websites",
                      "Personal branding websites",
                      "Specialty & service pages",
                      "Biography & qualifications",
                      "Clinic information",
                      "Educational articles",
                      "Appointment inquiry forms",
                      "WhatsApp contact integration",
                      "Mobile-responsive design",
                      "SEO foundations",
                      "Contact & location",
                      "Campaign landing pages",
                      "Maintenance options, where offered",
                    ].map((item, i) => (
                      <p key={i} className="mb-2 break-inside-avoid">
                        ✦ {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right Interactive browser frame */}
                <div>
                  {/* Desktop / Mobile toggle */}
                  <div className="mb-4 inline-flex rounded-full border-2 border-navy bg-card p-1">
                    <button
                      onClick={() => setWebPreviewDevice("desktop")}
                      className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-bold transition ${webPreviewDevice === "desktop"
                        ? "bg-navy text-cream shadow-sm"
                        : "text-navy hover:bg-sand"
                        }`}
                    >
                      <Monitor className="h-4 w-4" /> desktop
                    </button>
                    <button
                      onClick={() => setWebPreviewDevice("mobile")}
                      className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-bold transition ${webPreviewDevice === "mobile"
                        ? "bg-navy text-cream shadow-sm"
                        : "text-navy hover:bg-sand"
                        }`}
                    >
                      <Smartphone className="h-4 w-4" /> mobile
                    </button>
                  </div>

                  {/* Browser Mockup */}
                  <div
                    className={`mx-auto overflow-hidden border-2 border-navy bg-card hard-shadow transition-all duration-500 rounded-2xl ${
                      webPreviewDevice === "mobile" ? "max-w-[320px]" : "w-full"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 border-b-2 border-navy bg-sand px-3 py-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                      <span className="h-2.5 w-2.5 rounded-full bg-sunny" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
                      <span className="ml-2 truncate text-[11px] text-navy/80 font-mono font-bold">
                        {webPreviewDevice === "mobile"
                          ? "drgauravgupta.com · mobile view"
                          : "drgauravgupta.com · live website"}
                      </span>
                    </div>

                    <div className="relative w-full overflow-hidden bg-[#072421]">
                      <img
                        key={webPreviewDevice}
                        src={
                          webPreviewDevice === "mobile"
                            ? "/dr-gaurav-mobile.png"
                            : "/dr-gaurav-site.png"
                        }
                        alt={
                          webPreviewDevice === "mobile"
                            ? "Dr. Gaurav Sandeep Gupta Website - Mobile View"
                            : "Dr. Gaurav Sandeep Gupta Website - Desktop View"
                        }
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 7: ADDITIONAL GROWTH SERVICES */}
        {/* ============================================================== */}
        <section id="growth" className="relative bg-lavender py-20 md:py-28">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="block h-10 w-full absolute -top-9 text-lavender left-0 pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M0 30 Q 120 0 240 30 T 480 30 T 720 30 T 960 30 T 1200 30 T 1440 30 V60 H0Z"
              fill="currentColor"
            />
          </svg>

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  Additional growth services
                </span>
                <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-navy">
                  Everything That{" "}
                  <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                    Connects
                  </span>{" "}
                  It All.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="btn-pill-navy px-6 py-3.5 text-base"
              >
                Ask about a service
              </button>
            </div>

            {/* 4 Horizontal Expandable Cards */}
            <div className="mt-12 flex flex-col gap-3 lg:h-[380px] lg:flex-row">
              {/* 01 Brand */}
              <button
                onClick={() => setActiveGrowthCard(0)}
                aria-expanded={activeGrowthCard === 0}
                className={`relative overflow-hidden rounded-[2rem] border-2 border-navy p-6 text-left transition-all duration-500 hard-shadow-sm bg-grape text-cream ${activeGrowthCard === 0 ? "lg:flex-[3]" : "lg:flex-1"
                  }`}
              >
                <span className="text-xs font-black uppercase tracking-widest opacity-80">01</span>
                <p className="mt-2 text-3xl font-extrabold text-cream">Brand</p>
                <ul
                  className={`mt-4 space-y-2 transition-all duration-500 ${activeGrowthCard === 0 ? "opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-0"
                    }`}
                >
                  <li className="w-fit rounded-full border-2 border-current bg-cream/20 px-4 py-1.5 font-bold">
                    Personal Brand Strategy
                  </li>
                  <li className="w-fit rounded-full border-2 border-current bg-cream/20 px-4 py-1.5 font-bold">
                    Digital Profile Optimisation
                  </li>
                  <li className="w-fit rounded-full border-2 border-current bg-cream/20 px-4 py-1.5 font-bold">
                    Content Strategy
                  </li>
                </ul>
                <svg
                  viewBox="0 0 24 24"
                  className={`absolute bottom-4 right-4 h-10 w-10 transition-transform duration-700 ${activeGrowthCard === 0 ? "rotate-180 scale-125 text-sunny" : "text-cream"
                    }`}
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </button>

              {/* 02 Production */}
              <button
                onClick={() => setActiveGrowthCard(1)}
                aria-expanded={activeGrowthCard === 1}
                className={`relative overflow-hidden rounded-[2rem] border-2 border-navy p-6 text-left transition-all duration-500 hard-shadow-sm bg-coral text-navy ${activeGrowthCard === 1 ? "lg:flex-[3]" : "lg:flex-1"
                  }`}
              >
                <span className="text-xs font-black uppercase tracking-widest opacity-80">02</span>
                <p className="mt-2 text-3xl font-extrabold text-navy">Production</p>
                <ul
                  className={`mt-4 space-y-2 transition-all duration-500 ${activeGrowthCard === 1 ? "opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-0"
                    }`}
                >
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Professional Video Production
                  </li>
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Digital Advertising Creative Support
                  </li>
                </ul>
                <svg
                  viewBox="0 0 24 24"
                  className={`absolute bottom-4 right-4 h-10 w-10 transition-transform duration-700 ${activeGrowthCard === 1 ? "rotate-180 scale-125 text-white" : "text-navy"
                    }`}
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </button>

              {/* 03 Discovery */}
              <button
                onClick={() => setActiveGrowthCard(2)}
                aria-expanded={activeGrowthCard === 2}
                className={`relative overflow-hidden rounded-[2rem] border-2 border-navy p-6 text-left transition-all duration-500 hard-shadow-sm bg-turq text-navy ${activeGrowthCard === 2 ? "lg:flex-[3]" : "lg:flex-1"
                  }`}
              >
                <span className="text-xs font-black uppercase tracking-widest opacity-80">03</span>
                <p className="mt-2 text-3xl font-extrabold text-navy">Discovery</p>
                <ul
                  className={`mt-4 space-y-2 transition-all duration-500 ${activeGrowthCard === 2 ? "opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-0"
                    }`}
                >
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Medical Website Design
                  </li>
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Search Engine Optimisation
                  </li>
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Google Business Profile Optimisation
                  </li>
                </ul>
                <svg
                  viewBox="0 0 24 24"
                  className={`absolute bottom-4 right-4 h-10 w-10 transition-transform duration-700 ${activeGrowthCard === 2 ? "rotate-180 scale-125 text-white" : "text-navy"
                    }`}
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </button>

              {/* 04 Inquiries */}
              <button
                onClick={() => setActiveGrowthCard(3)}
                aria-expanded={activeGrowthCard === 3}
                className={`relative overflow-hidden rounded-[2rem] border-2 border-navy p-6 text-left transition-all duration-500 hard-shadow-sm bg-sunny text-navy ${activeGrowthCard === 3 ? "lg:flex-[3]" : "lg:flex-1"
                  }`}
              >
                <span className="text-xs font-black uppercase tracking-widest opacity-80">04</span>
                <p className="mt-2 text-3xl font-extrabold text-navy">Inquiries</p>
                <ul
                  className={`mt-4 space-y-2 transition-all duration-500 ${activeGrowthCard === 3 ? "opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-0"
                    }`}
                >
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Patient Inquiry Funnel Design
                  </li>
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    WhatsApp Inquiry Integration
                  </li>
                  <li className="w-fit rounded-full border-2 border-navy bg-cream/40 px-4 py-1.5 font-bold">
                    Analytics and Reporting
                  </li>
                </ul>
                <svg
                  viewBox="0 0 24 24"
                  className={`absolute bottom-4 right-4 h-10 w-10 transition-transform duration-700 ${activeGrowthCard === 3 ? "rotate-180 scale-125 text-coral" : "text-navy"
                    }`}
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 8: OUR WORK (DIGITAL PEHCHAAN IN ACTION) */}
        {/* ============================================================== */}
        <section id="work" className="bg-sand py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Digital Pehchaan in action
              </span>
              <h2 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl text-navy">
                Ideas, Expertise, and Content That Make Doctors{" "}
                <span className="relative inline-block rounded-2xl bg-turq px-3 -rotate-1 border-2 border-navy text-navy">
                  Stand Out.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                Explore how thoughtful branding, educational storytelling, and consistent creative
                execution can transform a doctor's digital presence.
              </p>
              <p className="mt-2 text-sm font-semibold text-coral">
                All pieces below are conceptual demonstrations, not client work.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pt-2 pb-2.5" role="tablist">
              {[
                "All Projects",
                "Reels & Videos",
                "Social Media",
                "Doctor Websites",
                "Branding",
                "Educational Content",
                `Saved (${savedProjects.length})`,
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setWorkFilter(tab)}
                  role="tab"
                  aria-selected={workFilter === tab}
                  className={`shrink-0 rounded-full border-2 border-navy px-4 py-2 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${workFilter === tab ? "bg-navy text-cream shadow-sm" : "bg-card text-navy hover:shadow-sm"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Project Masonry Grid */}
            <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4 sm:block sm:columns-2 lg:columns-3 sm:overflow-visible">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="mb-5 w-[78vw] shrink-0 snap-center break-inside-avoid sm:w-auto"
                >
                  <article
                    onClick={() => setSelectedProject(project)}
                    className={`group relative overflow-hidden rounded-[1.8rem] border-2 border-navy hard-shadow-sm transition-all duration-300 hover:scale-[1.02] hover:hard-shadow cursor-pointer ${project.bg} ${project.aspect}`}
                  >
                    {/* Image / Graphic Preview */}
                    <div className="pointer-events-none h-full">
                      {project.isWebPreview ? (
                        <div className="flex h-full flex-col p-4 transition-transform duration-500 ease-out group-hover:scale-105">
                          <div className="rounded-t-lg border-2 border-navy bg-card px-2 py-1 text-[10px] text-navy font-mono">
                            ● ● ● concept.site
                          </div>
                          <div className="flex-1 rounded-b-lg border-2 border-t-0 border-navy bg-card p-3">
                            <p className="text-lg font-extrabold leading-tight text-navy">
                              {project.title}
                            </p>
                            <img
                              src={project.image || "/dr-gaurav-site.png"}
                              alt={project.title}
                              className="mt-2 h-20 w-full rounded object-cover object-top border border-navy/15"
                            />
                            <span className="mt-2 inline-block rounded-full bg-coral px-2 py-0.5 text-[10px] font-bold text-navy">
                              Book a consult
                            </span>
                          </div>
                        </div>
                      ) : project.isWebPreview2 ? (
                        <div className="flex h-full flex-col p-4 transition-transform duration-500 ease-out group-hover:scale-105">
                          <div className="rounded-t-lg border-2 border-navy bg-card px-2 py-1 text-[10px] text-navy font-mono">
                            ● ● ● concept.site
                          </div>
                          <div className="flex-1 rounded-b-lg border-2 border-t-0 border-navy bg-card p-3">
                            <p className="text-lg font-extrabold leading-tight text-navy">
                              {project.title}
                            </p>
                            <span className="mt-2 inline-block rounded-full bg-coral px-2 py-0.5 text-[10px] font-bold text-navy">
                              Book a consult
                            </span>
                          </div>
                        </div>
                      ) : project.isCards ? (
                        <div className="relative grid h-full place-items-center p-6 transition-transform duration-500 ease-out group-hover:scale-105">
                          <div
                            className="absolute h-[70%] w-[65%] rounded-2xl border-2 border-navy bg-card p-4 transition-transform duration-500 group-hover:rotate-0"
                            style={{ transform: "rotate(8deg) translate(20px, -12px)" }}
                          />
                          <div
                            className="absolute h-[70%] w-[65%] rounded-2xl border-2 border-navy bg-card p-4 transition-transform duration-500 group-hover:rotate-0"
                            style={{ transform: "rotate(2deg) translate(10px, -6px)" }}
                          />
                          <div
                            className="absolute h-[70%] w-[65%] rounded-2xl border-2 border-navy bg-card p-4 transition-transform duration-500 group-hover:rotate-0"
                            style={{ transform: "rotate(-4deg) translate(0px, 0px)" }}
                          >
                            <p className="text-xs font-bold text-coral">MYTH vs FACT</p>
                            <p className="mt-1 text-lg font-extrabold leading-tight text-navy">
                              {project.title}
                            </p>
                          </div>
                        </div>
                      ) : project.isLogoPreview ? (
                        <div className="grid h-full place-items-center p-6 text-cream transition-transform duration-500 ease-out group-hover:scale-105">
                          <p className="text-center text-4xl font-black leading-none transition-transform duration-700 group-hover:scale-110">
                            Aa
                            <br />
                            <span className="text-sunny">✚</span> Care
                          </p>
                        </div>
                      ) : project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`h-full w-full ${project.aspect?.includes('1024') ? 'object-contain' : 'object-cover group-hover:scale-110'} transition-transform duration-700 ease-out`}
                        />
                      ) : null}
                    </div>

                    {/* Sliding Bottom Drawer on Hover */}
                    <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-[calc(100%+1rem)] rounded-2xl border-2 border-navy bg-card p-4 transition-transform duration-500 ease-out group-hover:delay-150 group-hover:translate-y-0 text-navy">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ocean">
                        {project.specialty} · {project.category}
                      </p>
                      <p className="font-extrabold text-navy">{project.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        <b>Objective:</b> {project.objective}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <b>Services:</b> {project.services}
                      </p>
                    </div>

                    {/* Top Tag */}
                    <div className="absolute left-3 top-3">
                      <span className="inline-flex items-center rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                        {project.badge}
                      </span>
                    </div>

                    {/* Bookmark Button */}
                    <button
                      onClick={(e) => toggleBookmark(project.title, e)}
                      aria-label="Save project"
                      className={`absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-card transition hover:scale-110 ${savedProjects.includes(project.title) ? "text-coral" : "text-navy"
                        }`}
                    >
                      <Bookmark
                        className={`h-4 w-4 ${savedProjects.includes(project.title) ? "fill-coral" : ""}`}
                      />
                    </button>
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="btn-pill-coral px-6 py-3.5 text-base"
              >
                Let's Build Your Digital Identity
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 9: WHY SOCIOKRAFT (WAVY TIMELINE) */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Why Sociokraft
              </span>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                Your Growth Team,{" "}
                <span className="relative inline-block rounded-2xl bg-sunny px-3 -rotate-1 border-2 border-navy text-navy">
                  Without
                </span>{" "}
                the Daily Hassle.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                You focus on patient care. We help manage the creative and digital work that
                supports your professional presence.
              </p>
            </div>

            <div className="relative mt-16">
              {/* Center Wavy SVG Line */}
              <svg
                className="absolute left-1/2 top-0 hidden h-full w-40 -translate-x-1/2 md:block pointer-events-none"
                viewBox="0 0 100 1000"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M50 0 C 100 120, 0 240, 50 360 S 100 600, 50 720 S 0 900, 50 1000"
                  fill="none"
                  stroke="var(--navy)"
                  strokeWidth="2"
                  className="animate-dash"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* 7 Alternating Cards */}
              <div className="space-y-8 md:space-y-4">
                {/* 1. Strategic Thinking (Left, Coral) */}
                <div className="relative md:w-[46%]">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-coral md:-rotate-1 text-navy">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <Brain className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-navy">Strategic Thinking</h3>
                        <p className="mt-1 text-sm opacity-90 text-navy">
                          Every content decision starts with your specialty, professional goals,
                          audience, and brand positioning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -right-[9%]" />
                </div>

                {/* 2. Medical Content Understanding (Right, Turq) */}
                <div className="relative md:w-[46%] md:ml-auto">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-turq md:rotate-1 text-navy">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <Stethoscope className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-navy">Medical Content Understanding</h3>
                        <p className="mt-1 text-sm opacity-90 text-navy">
                          Content is researched and structured to communicate medical concepts clearly
                          and responsibly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -left-[9%]" />
                </div>

                {/* 3. Consistent Execution (Left, Sunny) */}
                <div className="relative md:w-[46%]">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-sunny md:-rotate-1 text-navy">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <Repeat className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-navy">Consistent Execution</h3>
                        <p className="mt-1 text-sm opacity-90 text-navy">
                          A structured workflow for scripting, design, editing, approvals, and
                          publishing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -right-[9%]" />
                </div>

                {/* 4. Creative Quality (Right, Pink) */}
                <div className="relative md:w-[46%] md:ml-auto">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-pink md:rotate-1 text-navy">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <Palette className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-navy">Creative Quality</h3>
                        <p className="mt-1 text-sm opacity-90 text-navy">
                          Premium visuals, thoughtful storytelling, professional video editing, and
                          distinctive design.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -left-[9%]" />
                </div>

                {/* 5. One Connected Digital Presence (Left, Sky) */}
                <div className="relative md:w-[46%]">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-sky md:-rotate-1 text-navy">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <Link2 className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-navy">One Connected Digital Presence</h3>
                        <p className="mt-1 text-sm opacity-90 text-navy">
                          Social media content and your doctor website work together for a consistent
                          professional identity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -right-[9%]" />
                </div>

                {/* 6. Transparent Reporting (Right, Emerald) */}
                <div className="relative md:w-[46%] md:ml-auto">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-emerald md:rotate-1 text-cream">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <ChartColumn className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-cream">Transparent Reporting</h3>
                        <p className="mt-1 text-sm opacity-90 text-cream">
                          Understand content delivered, publishing activity, engagement metrics, and
                          agreed performance indicators.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -left-[9%]" />
                </div>

                {/* 7. Personalised Approach (Left, Grape) */}
                <div className="relative md:w-[46%]">
                  <div className="group rounded-[2rem] border-2 border-navy p-6 hard-shadow-sm transition-all hover:-translate-y-1 hover:hard-shadow bg-grape text-cream md:-rotate-1">
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-navy bg-cream text-navy transition-transform group-hover:rotate-12">
                        <UserRound className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-cream">Personalised Approach</h3>
                        <p className="mt-1 text-sm opacity-90 text-cream">
                          Content and design adapt to your specialty, communication style, goals, and
                          preferred involvement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-navy bg-cream md:block -right-[9%]" />
                </div>
              </div>

              {/* Floating decorative icons */}
              <FileText className="absolute -left-4 top-20 hidden h-12 w-12 rotate-[-12deg] text-ocean animate-float lg:block pointer-events-none" />
              <Film className="absolute -right-4 top-1/2 hidden h-12 w-12 text-coral animate-float-slow lg:block pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 10: OUR CONTENT PROCESS */}
        {/* ============================================================== */}
        <section id="process" className="relative bg-skylight py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Our content process
              </span>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-navy">
                From Idea to{" "}
                <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                  Published
                </span>{" "}
                Content.
              </h2>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-bold">
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-navy px-3 py-1 text-cream">Research</span>
                <span className="text-coral">→</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-navy px-3 py-1 text-cream">Strategy</span>
                <span className="text-coral">→</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-navy px-3 py-1 text-cream">Production</span>
                <span className="text-coral">→</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-navy px-3 py-1 text-cream">Publishing</span>
                <span className="text-coral">→</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-navy px-3 py-1 text-cream">Review</span>
              </span>
            </div>

            {/* Journey path + 4 cards */}
            <div className="relative mt-12 md:h-[760px]">
              <svg
                viewBox="0 0 1000 760"
                className="absolute inset-0 hidden h-full w-full md:block pointer-events-none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  id="journey"
                  d="M180 90 C 600 40, 900 120, 780 230 S 200 330, 260 430 S 800 520, 820 620"
                  fill="none"
                  stroke="var(--ocean)"
                  strokeWidth="4"
                  className="animate-dash"
                />
              </svg>

              <div className="space-y-6 md:space-y-0">
                {/* 01 Discover */}
                <div className="md:absolute md:w-[40%] md:left-[2%] md:top-[2%]">
                  <div className="relative rounded-[2rem] border-2 border-navy p-6 hard-shadow transition hover:-translate-y-1 bg-sunny text-navy">
                    <span className="absolute -top-6 right-6 text-6xl font-black text-outline">
                      01
                    </span>
                    <h3 className="text-2xl font-extrabold text-navy">Discover</h3>
                    <p className="mt-2 text-navy/90">
                      We understand your specialty, professional background, target audience,
                      goals, and existing digital presence.
                    </p>
                  </div>
                </div>

                {/* 02 Strategise */}
                <div className="md:absolute md:w-[40%] md:right-[4%] md:top-[18%]">
                  <div className="relative rounded-[2rem] border-2 border-navy p-6 hard-shadow transition hover:-translate-y-1 bg-pink text-navy">
                    <span className="absolute -top-6 right-6 text-6xl font-black text-outline">
                      02
                    </span>
                    <h3 className="text-2xl font-extrabold text-navy">Strategise</h3>
                    <p className="mt-2 text-navy/90">
                      We develop your content direction, visual identity, content calendar, and
                      topic ideas around your expertise.
                    </p>
                  </div>
                </div>

                {/* 03 Create */}
                <div className="md:absolute md:w-[40%] md:left-[8%] md:top-[48%]">
                  <div className="relative rounded-[2rem] border-2 border-navy p-6 hard-shadow transition hover:-translate-y-1 bg-turq text-navy">
                    <span className="absolute -top-6 right-6 text-6xl font-black text-outline">
                      03
                    </span>
                    <h3 className="text-2xl font-extrabold text-navy">Create</h3>
                    <p className="mt-2 text-navy/90">
                      Scripting, design, recording coordination, editing, and content preparation
                      according to your plan.
                    </p>
                  </div>
                </div>

                {/* 04 Publish & Improve */}
                <div className="md:absolute md:w-[40%] md:right-[2%] md:top-[68%]">
                  <div className="relative rounded-[2rem] border-2 border-navy p-6 hard-shadow transition hover:-translate-y-1 bg-coral text-navy">
                    <span className="absolute -top-6 right-6 text-6xl font-black text-outline">
                      04
                    </span>
                    <h3 className="text-2xl font-extrabold text-navy">Publish & Improve</h3>
                    <p className="mt-2 text-navy/90">
                      Content is published or handed over per the agreed workflow. Performance is
                      reviewed to find improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 11: CONTENT CREATION WORKSPACE */}
        {/* ============================================================== */}
        <section className="bg-lemon py-20 md:py-28 text-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  Content creation workspace
                </span>
                <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-navy">
                  Where Expertise{" "}
                  <span className="relative inline-block rounded-2xl bg-coral px-3 -rotate-1 border-2 border-navy text-navy">
                    Becomes
                  </span>{" "}
                  Content.
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                A visual demonstration of how a month of content moves through our workflow. Select
                an item to see its stage.
              </p>
            </div>

            {/* Studio Board Interactive Panel */}
            <div className="mt-10 rounded-[2rem] border-2 border-navy bg-card p-4 hard-shadow md:p-6">
              <div className="flex items-center justify-between border-b-2 border-navy/10 pb-3">
                <p className="font-extrabold text-navy">Studio board · Dr. Demo (Dermatology)</p>
                <span className="rounded-full bg-lavender px-3 py-1 text-xs font-bold text-navy">
                  Demo workspace
                </span>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.3fr_1fr]">
                {/* 1. Pipeline items */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Pipeline
                  </p>
                  {workspaceItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWorkspaceItem(idx)}
                      className={`flex w-full items-center justify-between rounded-xl border-2 px-3 py-2.5 text-left text-sm transition ${workspaceItem === idx
                        ? "border-navy bg-skylight shadow-sm"
                        : "border-transparent bg-muted hover:border-navy/30"
                        }`}
                    >
                      <span>
                        <b className="text-navy">{item.title}</b>
                        <span className="block text-xs text-muted-foreground">{item.format}</span>
                      </span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${item.statusBg}`}>
                        {item.status}
                      </span>
                    </button>
                  ))}
                </div>

                {/* 2. Script & Timeline Preview */}
                <div className="rounded-2xl bg-navy p-4 text-cream">
                  <p className="text-xs font-bold uppercase tracking-widest text-cream/60">
                    Script preview — {workspaceItems[workspaceItem].title}
                  </p>
                  <div className="mt-3 space-y-2 font-mono text-xs">
                    <p>
                      <span className="text-sunny font-bold">HOOK:</span>{" "}
                      {workspaceItems[workspaceItem].hook}
                    </p>
                    <p>
                      <span className="text-turq font-bold">POINT 1:</span>{" "}
                      {workspaceItems[workspaceItem].p1}
                    </p>
                    <p>
                      <span className="text-pink font-bold">CTA:</span>{" "}
                      {workspaceItems[workspaceItem].cta}
                    </p>
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-cream/60">
                    Edit timeline
                  </p>
                  <div className="relative mt-2 space-y-1.5">
                    <div className="h-4 rounded bg-coral w-3/5" />
                    <div className="h-4 rounded bg-turq w-2/5 ml-[20%]" />
                    <div className="h-4 rounded bg-sunny w-1/3 ml-[45%]" />
                    <div
                      className="absolute -top-1 bottom-[-4px] w-0.5 bg-cream transition-all duration-700"
                      style={{ left: `${(workspaceItem + 1) * 22}%` }}
                    />
                  </div>

                  <div className="mt-4 flex gap-2 text-[10px] font-bold">
                    <span className="rounded-full px-2 py-1 bg-emerald text-cream flex items-center gap-1">
                      <CircleCheck className="h-3 w-3" /> Draft
                    </span>
                    <span className="rounded-full px-2 py-1 bg-cream/10 text-cream">Review</span>
                    <span className="rounded-full px-2 py-1 bg-cream/10 text-cream">Approved</span>
                    <span className="rounded-full px-2 py-1 bg-cream/10 text-cream">Scheduled</span>
                  </div>
                </div>

                {/* 3. Schedule & Carousel draft */}
                <div className="space-y-3">
                  <div className="rounded-2xl bg-peach p-3 text-navy">
                    <p className="flex items-center gap-1 text-xs font-bold text-navy">
                      <Clock className="h-3.5 w-3.5" /> Publishing schedule
                    </p>
                    <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-navy">
                      <div className="rounded py-2 bg-coral">M</div>
                      <div className="rounded py-2 bg-cream">T</div>
                      <div className="rounded py-2 bg-coral">W</div>
                      <div className="rounded py-2 bg-cream">T</div>
                      <div className="rounded py-2 bg-coral">F</div>
                      <div className="rounded py-2 bg-cream">S</div>
                      <div className="rounded py-2 bg-cream">S</div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-mint p-3 text-navy">
                    <p className="flex items-center gap-1 text-xs font-bold text-navy">
                      <LayoutGrid className="h-3.5 w-3.5" /> Carousel draft
                    </p>
                    <div className="mt-2 flex gap-1.5 overflow-hidden">
                      <div className="h-16 w-12 shrink-0 rounded-lg border-2 border-navy bg-turq p-1 text-[8px] font-bold">
                        Slide 1
                      </div>
                      <div className="h-16 w-12 shrink-0 rounded-lg border-2 border-navy bg-sunny" />
                      <div className="h-16 w-12 shrink-0 rounded-lg border-2 border-navy bg-pink" />
                      <div className="h-16 w-12 shrink-0 rounded-lg border-2 border-navy bg-sky" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-lavender p-3 text-navy">
                    <p className="text-xs font-bold">Performance summary</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Content delivered, publishing activity and agreed indicators — shared
                      monthly. Figures shown to clients only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 12: SOCIAL MEDIA CONTENT GALLERY */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-navy py-20 text-cream md:py-28">
          <div className="pause-hover absolute top-6 w-full overflow-hidden opacity-20 pointer-events-none" aria-hidden="true">
            <div className="flex w-max animate-marquee-fast whitespace-nowrap text-7xl font-black">
              REELS · CAROUSELS · FAQ · STORIES · AWARENESS · REELS · CAROUSELS · FAQ · STORIES · AWARENESS ·{" "}
            </div>
          </div>

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px] pt-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sunny">
                Social media content gallery
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl text-cream">
                The Content <span className="rounded-2xl bg-sunny px-3 text-navy">Magazine</span>
              </h2>
              <p className="mt-3 text-cream/70">
                Conceptual formats we produce. Tap any piece to preview — no autoplay, no sound.
              </p>
            </div>

            {/* Masonry Content Grid */}
            <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
              {galleryItems.map((item, idx) => (
                <div key={idx} className={`${item.span}`}>
                  <button
                    onClick={() => setSelectedGalleryItem(item)}
                    className={`group relative h-full w-full overflow-hidden rounded-[1.6rem] border-2 border-cream/80 text-left text-navy transition hover:-rotate-1 ${item.bg}`}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    {!item.image && (
                      <p className="p-5 text-2xl font-extrabold leading-tight text-navy">
                        {item.title}
                      </p>
                    )}

                    {/* Play Icon */}
                    <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-cream text-navy transition group-hover:scale-110">
                      <Play className="h-4 w-4 fill-navy" />
                    </span>

                    {/* Hover Card */}
                    <div className="absolute inset-x-2 bottom-2 rounded-xl bg-cream p-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100 text-navy shadow-lg">
                      <p className="text-[10px] font-bold uppercase text-ocean">
                        {item.specialty} · {item.type}
                      </p>
                      <p className="text-sm font-extrabold text-navy">{item.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 13: PRICING & PACKAGES */}
        {/* ============================================================== */}
        <section id="pricing" className="bg-peach py-20 md:py-28 text-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Pricing & packages
              </span>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                The Right Creative{" "}
                <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                  Partnership
                </span>{" "}
                for Your Practice.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Choose a level of creative support that matches your professional goals and content
                requirements.
              </p>
            </div>

            {/* 3 Packages */}
            <div className="-mx-5 mt-14 flex snap-x gap-6 overflow-x-auto px-5 pb-6 pt-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
              {/* Package 01: Essential Presence */}
              <div className="w-[85vw] shrink-0 snap-center sm:w-[60vw] lg:w-auto">
                <div className="relative flex h-full flex-col rounded-[2rem] border-2 border-navy p-7 hard-shadow bg-skylight text-navy">
                  <div className="absolute -right-3 top-24 h-6 w-6 rounded-full border-2 border-navy bg-peach" />
                  <div className="absolute -left-3 top-24 h-6 w-6 rounded-full border-2 border-navy bg-peach" />

                  <span className="text-xs font-black uppercase tracking-widest text-navy">
                    Package 01
                  </span>
                  <h3 className="mt-1 text-3xl font-extrabold text-navy">Essential Presence</h3>
                  <p className="mt-2 text-sm text-navy/80">
                    For doctors building a consistent and professional digital presence.
                  </p>

                  <div className="my-5 border-t-2 border-dashed border-navy/40 pt-5">
                    <p className="text-3xl font-black text-navy">
                      ₹ —<span className="text-base font-bold"> / month</span>
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground mt-1">
                      Pricing placeholder — final pricing & content quantities confirmed on
                      enquiry. Setup charges, if any, shared upfront.
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-navy">
                    {[
                      "Monthly content strategy",
                      "Short-form reels",
                      "Educational carousel posts",
                      "Social media creatives",
                      "Captions and copywriting",
                    ].map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 rounded-full p-0.5 bg-ocean text-cream" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable deliverables */}
                  {expandedPricing === 1 && (
                    <div className="mt-4 pt-3 border-t border-navy/20 text-xs space-y-1.5 text-navy font-medium">
                      <p>✓ Bio & highlight optimization</p>
                      <p>✓ Monthly performance recap</p>
                      <p>✓ Doctor-first approvals workflow</p>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedPricing(expandedPricing === 1 ? null : 1)}
                    aria-expanded={expandedPricing === 1}
                    className="mt-3 flex items-center gap-1 text-sm font-bold underline underline-offset-4 text-navy"
                  >
                    {expandedPricing === 1 ? "Hide deliverables" : "See all deliverables"}
                    <ChevronDown
                      className={`h-4 w-4 transition ${expandedPricing === 1 ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => setAuditModalOpen(true)}
                      className="btn-pill-coral w-full py-3.5 text-base"
                    >
                      Enquire About Essential
                    </button>
                  </div>
                </div>
              </div>

              {/* Package 02: Growth Partnership (POPULAR) */}
              <div className="w-[85vw] shrink-0 snap-center sm:w-[60vw] lg:w-auto">
                <div className="relative flex h-full flex-col rounded-[2rem] border-2 border-navy p-7 hard-shadow bg-sunny lg:-translate-y-4 text-navy">
                  <span className="absolute -top-4 right-6 rounded-full border-2 border-navy bg-coral px-4 py-1 text-xs font-black text-navy animate-pulse-soft">
                    ★ Popular Choice
                  </span>
                  <div className="absolute -right-3 top-24 h-6 w-6 rounded-full border-2 border-navy bg-peach" />
                  <div className="absolute -left-3 top-24 h-6 w-6 rounded-full border-2 border-navy bg-peach" />

                  <span className="text-xs font-black uppercase tracking-widest text-navy">
                    Package 02
                  </span>
                  <h3 className="mt-1 text-3xl font-extrabold text-navy">Growth Partnership</h3>
                  <p className="mt-2 text-sm text-navy/80">
                    For doctors who want a stronger content presence and structured brand development.
                  </p>

                  <div className="my-5 border-t-2 border-dashed border-navy/40 pt-5">
                    <p className="text-3xl font-black text-navy">
                      ₹ —<span className="text-base font-bold"> / month</span>
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground mt-1">
                      Pricing placeholder — final pricing & content quantities confirmed on
                      enquiry. Setup charges, if any, shared upfront.
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-navy">
                    {[
                      "Everything in Essential Presence",
                      "Higher monthly content volume",
                      "Additional reel editing",
                      "More educational carousel posts",
                      "Advanced content planning",
                    ].map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 rounded-full p-0.5 bg-coral text-navy" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable deliverables */}
                  {expandedPricing === 2 && (
                    <div className="mt-4 pt-3 border-t border-navy/20 text-xs space-y-1.5 text-navy font-medium">
                      <p>✓ YouTube Shorts adaptation</p>
                      <p>✓ Patient FAQ scripting</p>
                      <p>✓ Clinic recording coordination guidance</p>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedPricing(expandedPricing === 2 ? null : 2)}
                    aria-expanded={expandedPricing === 2}
                    className="mt-3 flex items-center gap-1 text-sm font-bold underline underline-offset-4 text-navy"
                  >
                    {expandedPricing === 2 ? "Hide deliverables" : "See all deliverables"}
                    <ChevronDown
                      className={`h-4 w-4 transition ${expandedPricing === 2 ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => setAuditModalOpen(true)}
                      className="btn-pill-navy w-full py-3.5 text-base"
                    >
                      Enquire About Growth
                    </button>
                  </div>
                </div>
              </div>

              {/* Package 03: Authority & Portfolio */}
              <div className="w-[85vw] shrink-0 snap-center sm:w-[60vw] lg:w-auto">
                <div className="relative flex h-full flex-col rounded-[2rem] border-2 border-navy p-7 hard-shadow bg-lavender text-navy">
                  <div className="absolute -right-3 top-24 h-6 w-6 rounded-full border-2 border-navy bg-peach" />
                  <div className="absolute -left-3 top-24 h-6 w-6 rounded-full border-2 border-navy bg-peach" />

                  <span className="text-xs font-black uppercase tracking-widest text-navy">
                    Package 03
                  </span>
                  <h3 className="mt-1 text-3xl font-extrabold text-navy">Authority & Portfolio</h3>
                  <p className="mt-2 text-sm text-navy/80">
                    For doctors seeking a comprehensive personal branding experience.
                  </p>

                  <div className="my-5 border-t-2 border-dashed border-navy/40 pt-5">
                    <p className="text-3xl font-black text-navy">
                      ₹ —<span className="text-base font-bold"> / month</span>
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground mt-1">
                      Pricing placeholder — final pricing & content quantities confirmed on
                      enquiry. Setup charges, if any, shared upfront.
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-navy">
                    {[
                      "Everything in Growth Partnership",
                      "Personal brand development",
                      "Premium content production",
                      "Doctor portfolio website",
                      "Advanced content series",
                    ].map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 rounded-full p-0.5 bg-grape text-cream" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable deliverables */}
                  {expandedPricing === 3 && (
                    <div className="mt-4 pt-3 border-t border-navy/20 text-xs space-y-1.5 text-navy font-medium">
                      <p>✓ Dedicated custom portfolio website</p>
                      <p>✓ Google Business Profile optimization</p>
                      <p>✓ Patient inquiry funnel integration</p>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedPricing(expandedPricing === 3 ? null : 3)}
                    aria-expanded={expandedPricing === 3}
                    className="mt-3 flex items-center gap-1 text-sm font-bold underline underline-offset-4 text-navy"
                  >
                    {expandedPricing === 3 ? "Hide deliverables" : "See all deliverables"}
                    <ChevronDown
                      className={`h-4 w-4 transition ${expandedPricing === 3 ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => setAuditModalOpen(true)}
                      className="btn-pill-coral w-full py-3.5 text-base"
                    >
                      Enquire About Authority
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Deliverables shown are indicative and subject to Sociokraft's confirmed offering. No
              package guarantees reach, patient numbers or revenue.
            </p>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="btn-pill-card px-6 py-3.5 text-base"
              >
                Compare packages
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 14: HOW WE WORK WITH DOCTORS */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-mint py-20 md:py-28 text-navy">
          <svg viewBox="0 0 24 24" className="absolute right-10 top-10 h-16 w-16 text-emerald animate-spin-slow pointer-events-none" aria-hidden="true">
            <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>

          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                How we work with doctors
              </span>
              <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                You Focus on{" "}
                <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                  Medicine.
                </span>{" "}
                We Help Build Your Digital Presence.
              </h2>
            </div>

            <div className="relative mt-14">
              <div className="absolute left-0 right-0 top-10 hidden h-1 border-t-4 border-dashed border-navy/40 lg:block" />

              <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
                {[
                  {
                    num: "01",
                    title: "Discovery Call",
                    desc: "We discuss your practice, goals, specialty, and current digital presence.",
                    bg: "bg-coral",
                    offset: "",
                  },
                  {
                    num: "02",
                    title: "Strategy & Onboarding",
                    desc: "We establish brand direction, content plan, deliverables, and the approval process.",
                    bg: "bg-sunny",
                    offset: "lg:mt-10",
                  },
                  {
                    num: "03",
                    title: "Content Creation",
                    desc: "Our team prepares scripts, designs, videos, and website assets per the agreed scope.",
                    bg: "bg-turq",
                    offset: "",
                  },
                  {
                    num: "04",
                    title: "Review & Approval",
                    desc: "You review content before it's published, ensuring it accurately represents your expertise.",
                    bg: "bg-pink",
                    offset: "lg:mt-10",
                  },
                  {
                    num: "05",
                    title: "Publishing & Reporting",
                    desc: "Content is published per the agreed workflow, and performance is reviewed periodically.",
                    bg: "bg-sky",
                    offset: "",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="w-[75vw] shrink-0 snap-center sm:w-[45vw] lg:w-auto">
                    <div
                      className={`relative grid h-20 w-20 place-items-center rounded-full border-2 border-navy text-2xl font-black hard-shadow-sm text-navy ${step.bg}`}
                    >
                      {step.num}
                    </div>
                    <div
                      className={`mt-5 rounded-3xl border-2 border-navy bg-card p-5 transition hover:-translate-y-1 text-navy ${step.offset}`}
                    >
                      <h3 className="text-lg font-extrabold text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 15: CLIENT STORIES */}
        {/* ============================================================== */}
        <section className="relative bg-card py-20 md:py-28 text-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy bg-pink">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Client stories
              </span>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-navy">
                Stories From the{" "}
                <span className="relative inline-block rounded-2xl bg-sunny px-3 -rotate-1 border-2 border-navy text-navy">
                  Practice.
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  bg: "bg-peach",
                  rotate: "-rotate-2",
                },
                {
                  bg: "bg-skylight",
                  rotate: "rotate-1 md:mt-12",
                },
                {
                  bg: "bg-mint",
                  rotate: "-rotate-1",
                },
              ].map((card, idx) => (
                <div key={idx} className={card.rotate}>
                  <figure
                    className={`relative rounded-[2rem] border-2 border-navy p-7 hard-shadow transition hover:rotate-0 ${card.bg} text-navy`}
                  >
                    <Quote className="absolute -top-5 left-6 h-10 w-10 rounded-full border-2 border-navy bg-coral p-2 text-navy" />
                    <span className="absolute right-4 top-4 rounded-full border-2 border-dashed border-navy bg-card px-2.5 py-0.5 text-[10px] font-black uppercase text-navy">
                      Placeholder
                    </span>
                    <blockquote className="mt-4 italic text-navy/85 text-sm leading-relaxed">
                      “Approved doctor testimonial will appear here once supplied and permission
                      for publication is confirmed.”
                    </blockquote>
                    <figcaption className="mt-5 border-t border-navy/20 pt-4 text-sm text-navy">
                      <b>Doctor name</b> · Specialty
                      <br />
                      <span className="text-muted-foreground text-xs">Clinic name · Project scope</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 16: MEET THE TEAM */}
        {/* ============================================================== */}
        <section id="team" className="relative overflow-hidden bg-lavender py-20 md:py-28 text-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Meet the team
              </span>
              <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                The Creative Minds Behind Your{" "}
                <span className="relative inline-block rounded-2xl bg-card px-3 -rotate-1 border-2 border-navy text-navy">
                  Digital Presence.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Strategists, designers, writers, and video creators working together to bring
                professional stories to life.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto">
              {[
                {
                  name: "Divya Jain",
                  title: "Founder",
                  image: "/team/founder.png?v=2",
                  bg: "bg-coral",
                  delay: "",
                },
                {
                  name: "Prakshal Jain",
                  title: "CTO",
                  image: "/team/cto.png?v=2",
                  bg: "bg-sunny",
                  delay: "md:mt-6",
                },
                {
                  name: "Nisha Singh",
                  title: "Lead Developer",
                  image: "/team/lead-dev.png?v=2",
                  bg: "bg-pink",
                  delay: "",
                },
              ].map((member, idx) => (
                <div key={idx} className={member.delay}>
                  <div className="group text-center">
                    <div
                      className={`mx-auto aspect-square w-full max-w-[200px] overflow-hidden border-2 border-navy transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3 animate-blob ${member.bg} hard-shadow-sm`}
                      style={{ transform: "translateZ(0)" }}
                    >
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <p className="mt-3.5 inline-block rounded-full border-2 border-navy bg-card px-3.5 py-1 text-xs font-bold text-navy shadow-sm">
                      {member.name}
                    </p>
                    <p className="mt-2.5 font-extrabold text-navy text-sm md:text-base">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              The leadership & technical team powering modern healthcare brands.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 17: SPECIAL CAMPAIGNS & OFFERS (TICKETS) */}
        {/* ============================================================== */}
        <section className="bg-cream py-20 md:py-28 text-navy">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[108px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Special campaigns & offers
              </span>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-navy">
                Collect Your{" "}
                <span className="relative inline-block rounded-2xl bg-coral px-3 -rotate-1 border-2 border-navy text-navy">
                  Starting Ticket.
                </span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Offers shown are proposed starting points — availability confirmed on enquiry. No
                deadlines or limited seats.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Free Digital Presence Audit",
                  desc: "A review of your current social profiles and website, with clear next steps.",
                  includes: "Profile & website review · Written pointers · Discovery call",
                  eligibility: "Doctors & clinics",
                  bg: "bg-sunny",
                },
                {
                  title: "Doctor Website Consultation",
                  desc: "Talk through what your portfolio site should communicate and include.",
                  includes: "Structure advice · Content checklist",
                  eligibility: "Doctors planning a website",
                  bg: "bg-turq",
                },
                {
                  title: "Personal Branding Discovery Session",
                  desc: "Explore your positioning, audience and the kind of content that fits you.",
                  includes: "Positioning chat · Content pillar ideas",
                  eligibility: "Doctors new to content",
                  bg: "bg-pink",
                },
              ].map((ticket, idx) => (
                <div key={idx}>
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border-2 border-navy hard-shadow-sm transition duration-300 hover:-translate-y-2 hover:-rotate-1 hover:hard-shadow ${ticket.bg} text-navy`}
                  >
                    <div className="p-6">
                      <span className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-navy">
                        <Ticket className="h-4 w-4 transition group-hover:rotate-12" /> Admit one
                      </span>
                      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-navy">
                        {ticket.title}
                      </h3>
                      <p className="mt-2 text-sm text-navy/90">{ticket.desc}</p>
                    </div>

                    {/* Perforated dashed notch divider */}
                    <div className="relative border-t-2 border-dashed border-navy px-6 py-5">
                      <span className="absolute -left-4 -top-4 h-8 w-8 rounded-full border-2 border-navy bg-cream" />
                      <span className="absolute -right-4 -top-4 h-8 w-8 rounded-full border-2 border-navy bg-cream" />
                      <p className="text-xs text-navy">
                        <b>Includes:</b> {ticket.includes}
                      </p>
                      <p className="mt-1 text-xs text-navy">
                        <b>Eligibility:</b> {ticket.eligibility}
                      </p>
                      <button
                        type="button"
                        onClick={() => setAuditModalOpen(true)}
                        className="btn-pill-navy mt-4 w-full py-2.5 text-sm"
                      >
                        Request this
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 18: FAQS ACCORDION */}
        {/* ============================================================== */}
        <section id="faq" className="bg-skylight py-20 md:py-28 text-navy">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:px-[108px] lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                <span className="h-2 w-2 rounded-full bg-coral" />
                FAQs
              </span>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-navy">
                Questions Doctors Ask{" "}
                <span className="relative inline-block rounded-2xl bg-sunny px-3 -rotate-1 border-2 border-navy text-navy">
                  Before
                </span>{" "}
                Getting Started.
              </h2>
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="btn-pill-coral px-6 py-3.5 text-base mt-8"
              >
                Ask us something else
              </button>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`overflow-hidden rounded-3xl border-2 border-navy transition-colors ${isOpen ? "bg-coral text-navy shadow-sm" : "bg-card text-navy"
                      }`}
                  >
                    <h3>
                      <button
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-navy"
                      >
                        <span>{faq.q}</span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-navy bg-cream text-lg transition-transform duration-300 text-navy font-black ${isOpen ? "rotate-45" : ""
                            }`}
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div className="grid transition-all duration-300">
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-navy/90 text-sm md:text-base leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 19: INSIGHTS & NEWSLETTER */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-grape py-20 text-cream md:py-24">
          <div
            className="absolute -right-20 -top-20 h-80 w-80 bg-pink/50 animate-blob pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:px-[108px] lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sunny">
                Insights
              </span>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-cream">
                Better Content. Stronger Presence. <span className="text-sunny">Smarter Growth.</span>
              </h2>
              <p className="mt-4 text-lg text-cream/80">
                Get practical insights on medical content, professional branding, and building a
                more effective digital presence.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterDone(true);
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="you@clinic.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-full border-2 border-navy bg-cream px-5 py-3.5 text-navy outline-none placeholder:text-navy/50 font-medium"
                />
                <button
                  type="submit"
                  className="btn-pill-coral bg-sunny text-navy px-6 py-3.5 text-base flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> Subscribe
                </button>
              </form>
              {newsletterDone ? (
                <p className="mt-3 text-sm font-bold text-sunny">
                  ✓ Thank you! You're subscribed to Sociokraft Insights.
                </p>
              ) : (
                <p className="mt-3 text-sm font-semibold text-cream">
                  We respect your inbox. No spam, unsubscribe anytime.
                </p>
              )}
            </div>

            {/* Floating Insight Cards on the right */}
            <div className="relative hidden h-80 lg:block">
              <div
                className="absolute w-64 rounded-3xl border-2 border-navy p-5 text-navy hard-shadow animate-float bg-sunny left-10 top-0 -rotate-6"
                style={{ animationDelay: "0s" }}
              >
                <p className="text-xs font-bold uppercase text-navy/70">Insight</p>
                <p className="text-xl font-extrabold text-navy">5 hooks for doctor reels</p>
              </div>
              <div
                className="absolute w-64 rounded-3xl border-2 border-navy p-5 text-navy hard-shadow animate-float bg-turq right-6 top-16 rotate-6"
                style={{ animationDelay: "0.8s" }}
              >
                <p className="text-xs font-bold uppercase text-navy/70">Insight</p>
                <p className="text-xl font-extrabold text-navy">Writing patient-friendly captions</p>
              </div>
              <div
                className="absolute w-64 rounded-3xl border-2 border-navy p-5 text-navy hard-shadow animate-float bg-coral left-24 bottom-0 rotate-2"
                style={{ animationDelay: "1.6s" }}
              >
                <p className="text-xs font-bold uppercase text-navy/70">Insight</p>
                <p className="text-xl font-extrabold text-navy">Your Google profile checklist</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 20: CONTACT / FINAL CTA BANNER */}
        {/* ============================================================== */}
        <section id="contact" className="relative overflow-hidden bg-sunny py-24 md:py-32 text-navy">
          <div className="absolute inset-0 dots pointer-events-none" aria-hidden="true" />
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
          <div className="absolute right-[18%] top-10 hidden rounded-2xl border-2 border-navy bg-card px-4 py-2 font-bold hard-shadow-sm animate-float lg:block text-navy">
            ▶ New reel ready for review
          </div>

          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl text-navy">
              Your Expertise Deserves a{" "}
              <span className="relative inline-block rounded-2xl bg-coral px-3 -rotate-1 border-2 border-navy text-navy">
                Bigger
              </span>{" "}
              Digital Presence.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/90">
              Let's build a digital identity that reflects your experience, communicates your value,
              and helps the right audience discover your practice.
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
            <p className="mt-4 text-sm text-navy/80">
              Tell us about your practice. We'll discuss your goals and explore how we can help.
            </p>
          </div>
        </section>
      </main>

      <Footer onOpenAudit={() => setAuditModalOpen(true)} />

      {/* ============================================================== */}
      {/* MODAL 1: FREE DIGITAL AUDIT MODAL */}
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
                  Our growth strategist will inspect your digital channels and contact you within 24
                  hours with an actionable summary.
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
                  Get a comprehensive review of your Instagram, reels potential, Google profile, and
                  website opportunities.
                </p>

                <form onSubmit={handleAuditSubmit} className="mt-6 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">Doctor / Clinic Name</label>
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
                    <label className="block text-xs font-bold text-navy mb-1">WhatsApp / Phone Number</label>
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
                      onChange={(e) => setAuditForm({ ...auditForm, websiteOrHandle: e.target.value })}
                      className="w-full rounded-xl border-2 border-navy bg-sand/40 px-3.5 py-2.5 text-sm text-navy outline-none focus:border-ocean"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-pill-coral w-full py-3 text-base mt-2"
                  >
                    Send Audit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: PROJECT DETAIL MODAL */}
      {/* ============================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border-2 border-navy bg-card p-6 hard-shadow text-navy">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-sand text-navy transition hover:scale-110"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-bold text-ocean uppercase tracking-wider">
              {selectedProject.specialty} · {selectedProject.category}
            </span>

            <h3 className="mt-2 text-2xl font-black text-navy">{selectedProject.title}</h3>

            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mt-4 h-52 w-full rounded-2xl object-cover object-top border-2 border-navy"
              />
            )}

            <div className="mt-4 space-y-2 text-sm text-navy">
              <p>
                <b>Objective:</b> {selectedProject.objective}
              </p>
              <p>
                <b>Services Included:</b> {selectedProject.services}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed mt-2">
                This conceptual project exemplifies how Sociokraft structures medical messaging,
                engaging hooks, on-brand graphics, and clear calls-to-action for specialized
                healthcare professionals.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.demoUrl && (
                <Link
                  to={selectedProject.demoUrl}
                  className="btn-pill-navy inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm"
                >
                  <span>Explore Live Demo</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setAuditModalOpen(true);
                }}
                className="btn-pill-coral flex-1 py-2.5 text-sm"
              >
                Inquire For Your Practice
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-pill-card px-4 py-2.5 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 3: GALLERY ITEM PREVIEW MODAL */}
      {/* ============================================================== */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border-2 border-navy bg-card p-6 hard-shadow text-navy">
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-sand text-navy transition hover:scale-110"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-bold text-ocean uppercase">
              {selectedGalleryItem.specialty} · {selectedGalleryItem.type}
            </span>
            <h3 className="mt-2 text-xl font-black text-navy">{selectedGalleryItem.title}</h3>

            {selectedGalleryItem.image && (
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="mt-3 aspect-video w-full rounded-2xl object-cover border-2 border-navy"
              />
            )}

            <p className="mt-3 text-sm text-muted-foreground">{selectedGalleryItem.desc}</p>

            <button
              onClick={() => {
                setSelectedGalleryItem(null);
                setAuditModalOpen(true);
              }}
              className="btn-pill-coral w-full py-2.5 text-sm mt-5"
            >
              Request Similar Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
