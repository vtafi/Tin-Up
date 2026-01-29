import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  Bookmark,
  MapPin,
  ArrowRight,
  Bot,
  CreditCard,
  LayoutGrid,
} from "lucide-react";
import {
  useToast,
  NotificationDropdown,
  UserAvatarDropdown,
} from "@/components/common";

const startups = [
  {
    id: "1",
    name: "FintechFlow",
    initial: "F",
    gradient: "from-blue-500 to-cyan-400",
    location: "HCMC, Vietnam",
    description:
      "Revolutionizing micro-payments for street vendors using QR codes and blockchain transparency.",
    skills: [
      { label: "React Native", color: "blue" },
      { label: "Solidity", color: "purple" },
      { label: "Growth", color: "slate" },
    ],
  },
  {
    id: "2",
    name: "GreenLogic",
    initial: "G",
    gradient: "from-green-500 to-emerald-400",
    location: "Can Tho, Vietnam",
    description:
      "Sustainable logistics network connecting Mekong Delta farmers directly to urban consumers.",
    skills: [
      { label: "Operations", color: "emerald" },
      { label: "Supply Chain", color: "slate" },
    ],
  },
  {
    id: "3",
    name: "EduNext",
    initial: "E",
    gradient: "from-orange-400 to-red-400",
    location: "Hanoi, Vietnam",
    description:
      "AI-driven English pronunciation coach tailored specifically for Vietnamese accents.",
    skills: [
      { label: "NLP / AI", color: "indigo" },
      { label: "Python", color: "blue" },
      { label: "B2B Sales", color: "slate" },
    ],
  },
  {
    id: "4",
    name: "HealthPlus",
    initial: "H",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFhebW7o_mg3b_K9QdhnQsnS3muZj8z8sY7poXPABxvdIP2NmZdTLTbi0x7FwTpT1b4Vlp_d8Vrtg9cV404rpRebayOy1C1pEpgFC1GW1QvQ4HSvBp2cIzIxm_ckne-BRM9w3_1-CvL2J_cGZfDTZvwEYySY6Z0uLfMqZEci9WTDJJbZXXXU2AdV2natI5H9cY9c3gGtBrPvaHyBHGYnk-vg2uVLdg9Tj-a-F4OmxlssD2EJUBNnSIY3O0WVkD4tonetGCJeMU8o",
    location: "Da Nang, Vietnam",
    description:
      "Telemedicine platform connecting patients in remote islands with specialists in major cities.",
    skills: [
      { label: "Flutter", color: "sky" },
      { label: "Medical Ops", color: "slate" },
    ],
  },
  {
    id: "5",
    name: "RetailAI",
    initial: "R",
    gradient: "from-purple-600 to-pink-500",
    location: "HCMC, Vietnam",
    description:
      "Computer vision analytics for retail stores to optimize shelf placement and inventory.",
    skills: [
      { label: "Data Science", color: "purple" },
      { label: "UX Design", color: "slate" },
    ],
  },
  {
    id: "6",
    name: "CodeHanoi",
    initial: "C",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_y6JVD_pSPmL8JSdJ7FdJw5nHKRtIXC6cEk2-Vw5jP7BQN2wmdrQLkhqITjtlb9eVwc1XlMLs9XkuL6i7o3Gj6AWyKI_eETo0cII5PP7WdadBz3iDCLMjxgXjIRJnCiDWwd6k2nfJcHuKsGg0STZqFC9_McudGKkkC33hR1JfW44TsuqW3aAa_7Ut1MEjrkrvYhKC5TATSP28N3ugcWvRdj5eSnk4mYQiDXEgXi-gPUu_fwXkEBmHJfaEP9CAqdMGXLrRBgDLPyA",
    location: "Hanoi, Vietnam",
    description:
      "Building the first open-source LLM fine-tuned on Vietnamese cultural and technical data.",
    skills: [
      { label: "Rust", color: "orange" },
      { label: "ML Ops", color: "blue" },
    ],
  },
  {
    id: "7",
    name: "VietSpace",
    initial: "V",
    featured: true,
    location: "Remote",
    description:
      "Democratizing satellite imagery access for urban planning across Southeast Asia.",
    skills: [
      { label: "Geospatial", color: "white" },
      { label: "Backend", color: "white" },
    ],
  },
  {
    id: "8",
    name: "TechHome",
    initial: "T",
    gradient: "bg-slate-900",
    location: "HCMC, Vietnam",
    description:
      "Smart home management platform specifically designed for high-density apartment complexes.",
    skills: [
      { label: "IoT", color: "slate" },
      { label: "Marketing", color: "yellow" },
    ],
  },
];

const filters = [
  { label: "All Industries", active: true },
  { label: "Fintech", active: false },
  { label: "Edtech", active: false },
  { label: "AgriTech", active: false },
  { label: "HCMC", icon: MapPin, active: false },
  { label: "Hanoi", icon: MapPin, active: false },
  { label: "Remote First", active: false },
];

const getSkillColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    slate: "bg-slate-50 text-slate-600 border-slate-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    sky: "bg-sky-50 text-sky-700 border-sky-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    yellow: "bg-yellow-50 text-yellow-700 border-yellow-100",
    white: "bg-white/10 text-white border-white/20",
  };
  return colors[color] || colors.slate;
};

export function StartupExplore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "All Industries",
  ]);
  const [viewMode, setViewMode] = useState<"ai" | "swipe" | "grid">("grid");
  const [savedStartups, setSavedStartups] = useState<string[]>([]);
  const [connectingTo, setConnectingTo] = useState<string | null>(null);
  const { showToast } = useToast();

  const toggleFilter = (label: string) => {
    if (label === "All Industries") {
      setActiveFilters(["All Industries"]);
    } else {
      setActiveFilters((prev) => {
        const newFilters = prev.filter((f) => f !== "All Industries");
        if (prev.includes(label)) {
          return newFilters.filter((f) => f !== label);
        }
        return [...newFilters, label];
      });
    }
  };

  const handleConnect = async (startup: (typeof startups)[0]) => {
    setConnectingTo(startup.id);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setConnectingTo(null);

    showToast({
      type: "success",
      title: "Connection Request Sent!",
      message: `You've requested to connect with ${startup.name}.`,
      duration: 4000,
    });
  };

  const handleSaveStartup = (startup: (typeof startups)[0]) => {
    const isSaved = savedStartups.includes(startup.id);

    if (isSaved) {
      setSavedStartups((prev) => prev.filter((id) => id !== startup.id));
      showToast({
        type: "info",
        title: "Removed from Saved",
        message: `${startup.name} has been removed from your saved list.`,
        duration: 3000,
      });
    } else {
      setSavedStartups((prev) => [...prev, startup.id]);
      showToast({
        type: "success",
        title: "Saved!",
        message: `${startup.name} has been saved to your list.`,
        duration: 3000,
      });
    }
  };

  return (
    <div className="text-slate-900 bg-[#f8f9fc] min-h-screen flex flex-col relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#f8f9fc]">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-100/50 rounded-full blur-[80px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-100/60 rounded-full blur-[80px] opacity-40" />
        <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-purple-100/50 rounded-full blur-[80px] opacity-40" />
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="text-[#135bec]">
                <Cpu className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Tin-Up
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <span className="text-sm font-semibold text-[#135bec]">
                Explore
              </span>
              <Link
                to="/co-founder/profile"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                My Profile
              </Link>
              <Link
                to="/co-founder/network"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                Network
              </Link>
              <Link
                to="/co-founder/messages"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                Messages
              </Link>
            </nav>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <NotificationDropdown />
              <UserAvatarDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mb-8"
        >
          {/* Top Control Row */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="w-full lg:max-w-md relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#135bec] transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search startups, co-founders, or skills..."
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-white shadow-sm ring-1 ring-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-[#135bec] focus:outline-none sm:text-sm transition-shadow"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex p-1 bg-slate-200/60 rounded-xl">
              <button
                onClick={() => setViewMode("ai")}
                className={`relative flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === "ai"
                    ? "bg-white text-[#135bec] shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Bot className="w-4 h-4 mr-2" />
                AI Mode
              </button>
              <button
                onClick={() => setViewMode("swipe")}
                className={`relative flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === "swipe"
                    ? "bg-white text-[#135bec] shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Swipe
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`relative flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-[#135bec] shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Grid
              </button>
            </div>
          </div>

          {/* Filter Chips Row */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const isActive = activeFilters.includes(filter.label);
              const Icon = filter.icon;
              return (
                <button
                  key={filter.label}
                  onClick={() => toggleFilter(filter.label)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#135bec]/50 hover:text-[#135bec]"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_0_15px_rgba(19,91,236,0.3)] hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full ${
                startup.featured
                  ? "bg-gradient-to-br from-[#135bec] to-blue-700 text-white border-transparent relative overflow-hidden"
                  : "bg-white border-slate-100"
              }`}
            >
              {/* Featured decorative elements */}
              {startup.featured && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl -ml-5 -mb-5" />
                </>
              )}

              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {startup.image ? (
                    <div className="size-12 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={startup.image}
                        alt={startup.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`size-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md ${
                        startup.featured
                          ? "bg-white text-[#135bec]"
                          : startup.gradient?.startsWith("bg-")
                            ? startup.gradient
                            : `bg-gradient-to-br ${startup.gradient}`
                      }`}
                    >
                      {startup.initial}
                    </div>
                  )}
                  <div>
                    <h3
                      className={`font-bold leading-tight ${
                        startup.featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {startup.name}
                    </h3>
                    <p
                      className={`text-xs font-medium flex items-center mt-0.5 ${
                        startup.featured ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {startup.location}
                    </p>
                  </div>
                </div>
                {startup.featured ? (
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wide border border-white/20">
                    Featured
                  </span>
                ) : (
                  <button
                    onClick={() => handleSaveStartup(startup)}
                    className={`transition-colors ${
                      savedStartups.includes(startup.id)
                        ? "text-amber-500"
                        : "text-slate-400 hover:text-[#135bec]"
                    }`}
                  >
                    <Bookmark
                      className={`w-5 h-5 ${savedStartups.includes(startup.id) ? "fill-current" : ""}`}
                    />
                  </button>
                )}
              </div>

              <div className="relative z-10 mb-4 flex-grow">
                <p
                  className={`text-sm leading-relaxed ${
                    startup.featured ? "text-blue-50" : "text-slate-600"
                  }`}
                >
                  {startup.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    startup.featured ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  Looking For
                </p>
                <div className="flex flex-wrap gap-2">
                  {startup.skills.map((skill) => (
                    <span
                      key={skill.label}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${getSkillColor(
                        skill.color,
                      )}`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleConnect(startup)}
                  disabled={connectingTo === startup.id}
                  className={`w-full mt-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                    startup.featured
                      ? "bg-white text-[#135bec] hover:bg-blue-50 font-semibold"
                      : "bg-[#135bec]/10 text-[#135bec] hover:bg-[#135bec] hover:text-white group-hover:bg-[#135bec] group-hover:text-white"
                  }`}
                >
                  {connectingTo === startup.id ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      Connect
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10 mb-6"
        >
          <button className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:border-[#135bec] hover:text-[#135bec] transition-all shadow-sm">
            Load More Startups
          </button>
        </motion.div>
      </main>
    </div>
  );
}

export default StartupExplore;
