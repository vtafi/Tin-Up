import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Cpu,
  BarChart3,
  MapPin,
  X,
  Star,
  Heart,
  MessageCircle,
  ArrowRight,
  Rocket,
  Code,
  Verified,
  Zap,
  ChevronUp,
} from "lucide-react";
import { NotificationDropdown, UserAvatarDropdown } from "@/components/common";

const candidates = [
  {
    id: "1",
    name: "Minh Nguyen",
    age: 28,
    title: "Product Lead @ Ex-Grab",
    location: "Hanoi",
    matchScore: 85,
    verified: true,
    tags: ["Fintech", "Technical", "Hanoi"],
    bio: "Looking for a Technical Co-founder to build the next logistics platform in Southeast Asia. I handle product & fundraising.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_KUVb8WjqrrF_LeYS1CFQcIDfGxR2ukABR83jV7rlgtsllbFWHf7nRM09XT51Psch81HGlQx7pqe_jchLjb2AYEsCaYGL_9Onjk060A8_iePY_Q1OYWszQaPueiJGAhFQ-RDIBazmYEPPlZYq2Vza10rFgYo2wT7RR3jqHy-vl2ZMJ3B1GRnrzSnEck6-XpsSCbKkx23j1q4iAYoxYSy4rXCT6OhfBRm9l9uIKl4Py_qvBWjgTpHPhmoJoqUiBYH4BxvkQxBbg-I",
  },
  {
    id: "2",
    name: "Linh Tran",
    age: 26,
    title: "CTO @ StartupVN",
    location: "HCMC",
    matchScore: 92,
    verified: true,
    tags: ["AI/ML", "Technical", "HCMC"],
    bio: "Building AI solutions for Vietnamese SMEs. Looking for a business co-founder to scale our B2B sales.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGJ5TYRMfZNbfmqnMzBwNAqI7OlhS9lj2TKuJZFS6OFZiOpCmv4Go_CyP_uXkA8wNGCuYr2gZo7z6BW40oex7CLfhyJCBQ01Bvm8jPNw5SicuVhNkyazgQoFjG1sCp70qWfW9GiRg25re3jlPzFVuOFwwiqadw__G3bHTwyiRFrKyJ-niqTLMNQvt348UpNPj-sUS5JCXQs0BZKQu6QiaGQZK4KP6fmYkMXFWoPKoujRWvKL0WuEfKToWei8_bVbSnlnPD7nEg3KU",
  },
];

const matches = [
  {
    id: "1",
    name: "Sarah Le",
    title: "Marketing Lead • Fintech",
    online: true,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGJ5TYRMfZNbfmqnMzBwNAqI7OlhS9lj2TKuJZFS6OFZiOpCmv4Go_CyP_uXkA8wNGCuYr2gZo7z6BW40oex7CLfhyJCBQ01Bvm8jPNw5SicuVhNkyazgQoFjG1sCp70qWfW9GiRg25re3jlPzFVuOFwwiqadw__G3bHTwyiRFrKyJ-niqTLMNQvt348UpNPj-sUS5JCXQs0BZKQu6QiaGQZK4KP6fmYkMXFWoPKoujRWvKL0WuEfKToWei8_bVbSnlnPD7nEg3KU",
  },
  {
    id: "2",
    name: "David Tran",
    title: "Fullstack Dev • EdTech",
    online: false,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL0r0prwj26ur0_SXLrMWxctw29-h2Ok8LZ8dGIaKK_1MZlgkAGE5E0lE2yvfqj6sYSreRbewblOjBh-Ycnev-KuRfZvezUIRnzojKp3U6SNVMdlG9_B2CT9uyEJv6BsFz5k2BRtbpmrzZHOlRSkE9n4Xzy59z9tn6Pbqhf3xqUK181Nq-DWxcZVfitB3Xr3oxJOWsu2FxtPB5ovG_94-UY2HiP5InY_ClLY1sIHc5O8a6rvleiB-mi0_1lNX1HH_kNcplE7uT9Bs",
  },
  {
    id: "3",
    name: "Elena Vo",
    title: "Designer • SaaS",
    online: false,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7MppKxFJEL6BCOdS8TUOG_9DfU77dtGx_9cIk3KsrUXZn5ktiXy8NuFf5Gmk4qLEUP5YB6nlOtz-RcAZ44MiNW4CrUCOWVB7Wre046QrHTDUbPOPpzhNGv3ilC6VzqQX7Xf-AU5Z9vacSzSaslMk-Olver0vVk5toFx6Q1c10SXg7GjIxYGvp_an8OwETLaZKn4s9n1wHvZzgkTTpBDPZCJu0ZKR0zvprwmYUiL6fkr-82Vo70XpesLMWCxl1Stjt17ICuRS8wbk",
  },
];

const roleFilters = [
  { label: "Tech Co-Founder", active: true },
  { label: "Marketing", active: false },
  { label: "Operations", active: false },
];

const industryFilters = ["Fintech", "E-commerce", "AI/ML"];

export function CofounderSwipe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "up" | null>(
    null,
  );

  const currentCandidate = candidates[currentIndex % candidates.length];

  const handleSwipe = (dir: "left" | "right" | "up") => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setDirection(null);
    }, 300);
  };

  const getTagIcon = (tag: string) => {
    if (tag.includes("Fintech") || tag.includes("Startup"))
      return <Rocket className="w-3.5 h-3.5" />;
    if (tag.includes("Technical") || tag.includes("Tech"))
      return <Code className="w-3.5 h-3.5" />;
    return <MapPin className="w-3.5 h-3.5" />;
  };

  return (
    <div className="bg-[#f6f6f8] text-slate-900 overflow-x-hidden selection:bg-[#135bec]/20">
      {/* Aurora Background Accents */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#135bec]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-teal-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Layout Container */}
      <div className="relative flex flex-col min-h-screen z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full px-6 py-4 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/30">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="text-[#135bec]">
                <Cpu className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Tin-Up
              </h2>
            </Link>

            {/* Nav Links (Desktop) */}
            <nav className="hidden md:flex items-center bg-white/50 px-2 py-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-sm">
              <span className="px-5 py-2 text-sm font-semibold text-slate-900 bg-white shadow-sm rounded-full">
                Explore
              </span>
              <Link
                to="/co-founder/profile"
                className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-[#135bec] transition-colors"
              >
                My Profile
              </Link>
              <Link
                to="/co-founder/network"
                className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-[#135bec] transition-colors"
              >
                Network
              </Link>
              <Link
                to="/co-founder/messages"
                className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-[#135bec] transition-colors"
              >
                Messages
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <NotificationDropdown />
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <UserAvatarDropdown />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow max-w-[1440px] mx-auto w-full p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Left Bento Grid (Sidebar) */}
          <aside className="hidden lg:flex flex-col col-span-3 gap-6">
            {/* User Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 h-full max-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Your Stats</h3>
                  <BarChart3 className="w-5 h-5 text-[#135bec]" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm text-slate-500 font-medium">
                      Profile Views
                    </span>
                    <span className="text-slate-900 font-bold">1,204</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm text-slate-500 font-medium">
                      Appearances
                    </span>
                    <span className="text-slate-900 font-bold">850</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-2.5 mt-2 text-sm font-semibold text-[#135bec] bg-[#135bec]/10 hover:bg-[#135bec]/20 rounded-xl transition-colors">
                Boost Profile
              </button>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex-grow"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button className="text-sm text-[#135bec] font-medium hover:underline">
                  Reset
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">
                    Role
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {roleFilters.map((filter) => (
                      <span
                        key={filter.label}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-colors ${
                          filter.active
                            ? "bg-[#135bec] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {filter.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">
                    Location
                  </label>
                  <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl">
                    <MapPin className="w-5 h-5 text-slate-500" />
                    <span className="text-sm font-medium">
                      Ho Chi Minh City
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">
                    Industry
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {industryFilters.map((filter) => (
                      <span
                        key={filter}
                        className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg"
                      >
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Center Swipe Stage */}
          <section className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center h-full min-h-[600px]">
            {/* Card Container */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] lg:aspect-[9/13]">
              {/* Background Card (Stack effect) */}
              <div className="absolute top-4 left-0 w-full h-full bg-white/40 rounded-[2rem] scale-95 translate-y-4 blur-[1px] -z-10" />
              <div className="absolute top-2 left-0 w-full h-full bg-white/60 rounded-[2rem] scale-[0.98] translate-y-2 -z-10" />

              {/* Main Active Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCandidate.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x:
                      direction === "left"
                        ? -300
                        : direction === "right"
                          ? 300
                          : 0,
                    y: direction === "up" ? -200 : 0,
                    rotate:
                      direction === "left"
                        ? -15
                        : direction === "right"
                          ? 15
                          : 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${currentCandidate.image}')`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-bold">
                      {currentCandidate.matchScore}% Match
                    </span>
                  </div>

                  {/* Content Info */}
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10 flex flex-col gap-3">
                    <div>
                      <h1 className="text-3xl font-bold leading-tight flex items-center gap-2">
                        {currentCandidate.name}
                        <span className="text-xl font-normal opacity-80">
                          {currentCandidate.age}
                        </span>
                        {currentCandidate.verified && (
                          <Verified className="w-5 h-5 text-blue-400 fill-blue-400" />
                        )}
                      </h1>
                      <p className="text-lg font-medium text-slate-200 mt-1">
                        {currentCandidate.title}
                      </p>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 my-1">
                      {currentCandidate.tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 text-xs font-medium"
                        >
                          {getTagIcon(tag)}
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {currentCandidate.bio}
                    </p>

                    {/* More Info Hint */}
                    <button className="self-start mt-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                      View Full Profile <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating Actions */}
            <div className="mt-8 flex items-center gap-6 lg:gap-8 z-20">
              {/* Pass */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe("left")}
                className="group relative flex items-center justify-center size-16 bg-white rounded-full shadow-lg border border-slate-100 hover:bg-red-50 transition-all duration-200 hover:shadow-xl"
              >
                <X className="w-8 h-8 text-slate-400 group-hover:text-red-500 transition-colors" />
              </motion.button>

              {/* Super Like */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe("up")}
                className="group relative flex items-center justify-center size-14 bg-white rounded-full shadow-lg border border-slate-100 hover:bg-yellow-50 transition-all duration-200 hover:shadow-xl"
              >
                <Star className="w-7 h-7 text-blue-400 group-hover:text-yellow-500 fill-current transition-colors" />
              </motion.button>

              {/* Connect */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe("right")}
                className="group relative flex items-center justify-center size-20 bg-[#135bec] hover:bg-[#0f4bc4] rounded-full shadow-[0_0_15px_rgba(19,91,236,0.4)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(19,91,236,0.6)]"
              >
                <Heart className="w-10 h-10 text-white fill-white" />
              </motion.button>
            </div>
          </section>

          {/* Right Bento Grid (Sidebar) */}
          <aside className="hidden lg:flex flex-col col-span-3 gap-6">
            {/* Recent Matches */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 h-2/3"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">New Matches</h3>
                <span className="text-xs font-bold bg-[#135bec]/10 text-[#135bec] px-2 py-1 rounded-md">
                  3 New
                </span>
              </div>
              <div className="space-y-4 overflow-y-auto max-h-[400px]">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors group"
                  >
                    <div className="relative size-12 rounded-full overflow-hidden shrink-0">
                      <img
                        src={match.avatar}
                        alt={match.name}
                        className="w-full h-full object-cover"
                      />
                      {match.online && (
                        <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-sm truncate text-slate-900">
                        {match.name}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">
                        {match.title}
                      </p>
                    </div>
                    <button className="size-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#135bec] group-hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm font-semibold text-slate-500 hover:text-[#135bec] transition-colors flex items-center justify-center gap-1">
                View All Matches <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Mini Promo / Upcoming Event */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-indigo-600 to-[#135bec] rounded-2xl p-6 shadow-[0_0_15px_rgba(19,91,236,0.3)] text-white flex-grow flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative z-10">
                <span className="inline-block px-2 py-1 bg-white/20 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2">
                  Event
                </span>
                <h3 className="font-bold text-xl mb-1">Startup Mixer HCMC</h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Join 500+ founders this Friday at The Sentry.
                </p>
                <button className="w-full py-2 bg-white text-[#135bec] font-bold rounded-xl text-sm hover:bg-indigo-50 transition-colors">
                  RSVP Now
                </button>
              </div>
            </motion.div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default CofounderSwipe;
