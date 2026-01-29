import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bell,
  Cpu,
  Download,
  Share2,
  MapPin,
  Star,
  Lightbulb,
  Sparkles,
  Handshake,
  Bookmark,
  Users,
  Briefcase,
  MoreHorizontal,
} from "lucide-react";

// Mock candidate data
const candidate = {
  name: "Minh Nguyen",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-unFOgYBJxOCbBftS25tiNCxvBZrtNlCYVX8hKe4-FWeFy0Pt78thKpP9NiIy2CEoesjjDJYXCJjSnphQ1MSbhu5GCYzKOZxUImsIFvYLw5BRJ1r3KabPb5SrlxeatUz6wRVOzcFm-opyjc4poSFeXuulzYzBGGBeZorymhzc0Owl986ZDCBSlIy-Ghyrx4kpaxCiJuk_FmpVQbw2FXWiHg97KpVZUvPS5Yjzqfom9S-CF1vbnuUVuTAjl8TqTaL9gWbogXROH4",
  title: "CTO / Tech Lead",
  location: "Hanoi, Vietnam",
  rating: 4.9,
  experience: "8 Years",
  education: "RMIT Vietnam",
  lookingFor: "CEO / Biz Dev",
  skills: ["React Native", "Node.js", "AWS", "System Arch"],
  matchScore: 95,
};

const connections = [
  {
    name: "Tuan Le",
    role: "VC at VinaCapital",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-UWVfSGvoQsyTDRwA2mU47oTpL6hEWP9Waw8AW0_JteaXfkwl8P74b4veypt9BJgvM56L_Y2_3ZNk904D22yNUW7VjVNlYLkFMfLViOYZWcVGl7f-IVVkHOXxI7vX8JEiKGghFQcGn4QqVbb0MYbZNe_VMz8xfdnNt9ArtyHMggspC5KquYP7ffpTc1Md_ivrHk85oe7TCqg_0DrVdKfjBkCXYanDDBJsECF0e5Tsx5OlkpYRbYyQ0i2nXWRaXV-f3e9tTXg97h4",
  },
  {
    name: "Sarah Tran",
    role: "Product Manager",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCk9skJIuUzKj0EgF4lMjKIyARMEZe-5nO5Ds5tbD176rhJzSLj-r1VDBlw35Yj2OsPWaPgS0Q5KBjB_FTSJBho2JT4gjMlrOfZ-l4GvPmlt-OFgH4hmAF6HwpdlfOWfVgA34cYGgHhMDmDNs01Kd0OG_PM_NbeA8uPnBp9Ln1exXqzJ7dPUUeiuraoPiirUey3O6iI2_dTnm4MXX8U1mUom4zrEPrPWBC4OpLmRPyKsHszNZnQtqDYZ1ZCJgdcgseifNr-McW-XNg",
  },
  {
    name: "David Nguyen",
    role: "Founder",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDICGK61DurhzUwWjkEQPt2tK2V0mt5ROi8Ir98x3afrVpkIslpNtWN7M-bxshB1Nu22ZmwYvQ8BperP-22Cq5fNGd7btGje64RaWo0xEzLXP_mhdBDnHyG_wV-7YHyf0mgPTTObHZfWqy_p9otHJlrtQMmyWPdhCW-txIY79XLOKq8wEUGR1VgIvMmd6m7pBfylG34owF5I4AmTNQcHvFBt7quzlP0UGwBbEdTEckZpitKGn34xtCZPrKENurtUuNcD970cuomRL0",
  },
];

export function MatchingDashboard() {
  const [, setSelectedCandidate] = useState(candidate);

  // Calculate stroke-dashoffset for circular progress (95% = 502 * 0.05 = ~25)
  const circumference = 2 * Math.PI * 80; // ~502
  const strokeDashoffset = circumference * (1 - candidate.matchScore / 100);

  return (
    <div className="bg-[#f6f6f8] text-gray-900 min-h-screen flex flex-col overflow-x-hidden selection:bg-[#135bec] selection:text-white">
      {/* Frosted Glass Navbar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/50 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="size-8 text-[#135bec] bg-[#135bec]/10 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Tin-Up
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/founder/explore"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                Explore
              </Link>
              <Link
                to="/founder/projects"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                My Projects
              </Link>
              <Link
                to="/founder/network"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                Network
              </Link>
              <Link
                to="/founder/messages"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                Messages
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="h-8 w-[1px] bg-slate-200 mx-1" />
              <div
                className="size-9 rounded-full bg-cover bg-center border border-slate-200 cursor-pointer"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx-p4-CjnuaGijYgm3xWh9216gGnLasKlLuKUhXEvfwhmoKisPAyT2BupQNCq_tN2LXig-1WKTcqp4tJnkv3wTmgWWVRxN4SvQiCuIihLa_IoeK0CW_S3nDZEYSz65kljekPizvdL5ueeGSWl42esOCi__o_bHRUdxmM6JUrkZn2oRMSgyGNnccCOb2TkLWS4XM_dXxlK9atDggOJfZicLGkRvqLzOpCIDZvaSGbX0HJ5hsLoWb4Oq-gTtyDKaMdcHZ_cJa4oHnqo')",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#135bec]/10 text-[#135bec] border border-[#135bec]/20">
                AI DNA Mode
              </span>
              <span className="text-slate-400 text-xs font-medium">
                Last updated 2 mins ago
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Co-Founder Compatibility
            </h2>
            <p className="text-slate-500 mt-1">
              AI-driven analysis of skills, personality, and working style
              synergy.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm text-slate-700">
              <Download className="w-5 h-5" />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
              <Share2 className="w-5 h-5" />
              Share Profile
            </button>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">
          {/* LEFT COLUMN: Candidate Profile (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Decorative Background Blob */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#135bec]/10 rounded-full blur-3xl group-hover:bg-[#135bec]/20 transition-all duration-500" />

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-4">
                  <div
                    className="size-28 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url("${candidate.avatar}")` }}
                  />
                  <div className="absolute -bottom-3 px-2 py-1 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-700">
                      {candidate.rating}
                    </span>
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  {candidate.name}
                </h3>
                <p className="text-[#135bec] font-medium text-sm">
                  {candidate.title}
                </p>

                <div className="flex items-center gap-1 mt-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{candidate.location}</span>
                </div>

                <div className="w-full h-[1px] bg-slate-100 my-4" />

                <div className="w-full flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Experience</span>
                    <span className="font-semibold text-gray-900">
                      {candidate.experience}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Education</span>
                    <span className="font-semibold text-gray-900">
                      {candidate.education}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Looking for</span>
                    <span className="font-semibold text-gray-900">
                      {candidate.lookingFor}
                    </span>
                  </div>
                </div>

                <div className="w-full mt-6 flex flex-col gap-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider self-start mb-1">
                    Top Skills
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {candidate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors">
                View Full Profile
              </button>
            </motion.div>

            {/* Quick Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100"
            >
              <div className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-1.5 text-indigo-600 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-indigo-900 uppercase mb-1">
                    Quick Note
                  </p>
                  <p className="text-sm text-indigo-800 leading-snug">
                    Minh is currently active and replying to messages within 2
                    hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CENTER COLUMN: Radar Chart (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Main Radar Chart Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Skill Synergy Radar
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Comparative analysis of your strengths vs. candidate.
                  </p>
                </div>
                <button className="p-2 rounded-lg hover:bg-slate-50 text-slate-400 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Chart Container */}
              <div className="flex-1 min-h-[300px] flex items-center justify-center relative py-6">
                <div className="relative w-full max-w-[420px] aspect-square">
                  {/* Radar Background Lines (Hexagon) */}
                  <svg
                    className="w-full h-full absolute top-0 left-0 overflow-visible"
                    viewBox="0 0 100 100"
                  >
                    {/* Hexagon layers */}
                    <polygon
                      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <polygon
                      points="50,20 80,35 80,65 50,80 20,65 20,35"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <polygon
                      points="50,35 65,42.5 65,57.5 50,65 35,57.5 35,42.5"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />

                    {/* Axis Lines */}
                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="5"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="95"
                      y2="27.5"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="95"
                      y2="72.5"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="95"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="5"
                      y2="72.5"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="5"
                      y2="27.5"
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />

                    {/* Labels */}
                    <text
                      x="50"
                      y="2"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="3"
                      className="font-medium"
                    >
                      Tech
                    </text>
                    <text
                      x="98"
                      y="25"
                      textAnchor="start"
                      fill="#64748b"
                      fontSize="3"
                      className="font-medium"
                    >
                      Product
                    </text>
                    <text
                      x="98"
                      y="75"
                      textAnchor="start"
                      fill="#64748b"
                      fontSize="3"
                      className="font-medium"
                    >
                      Marketing
                    </text>
                    <text
                      x="50"
                      y="99"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="3"
                      className="font-medium"
                    >
                      Finance
                    </text>
                    <text
                      x="2"
                      y="75"
                      textAnchor="end"
                      fill="#64748b"
                      fontSize="3"
                      className="font-medium"
                    >
                      Sales
                    </text>
                    <text
                      x="2"
                      y="25"
                      textAnchor="end"
                      fill="#64748b"
                      fontSize="3"
                      className="font-medium"
                    >
                      Leadership
                    </text>

                    {/* Data: You (Gray area) */}
                    <polygon
                      points="50,30 75,40 65,60 50,55 35,65 30,35"
                      fill="rgba(148, 163, 184, 0.2)"
                      stroke="#94a3b8"
                      strokeWidth="0.8"
                      strokeDasharray="2 1"
                    />

                    {/* Data: Candidate (Blue area) */}
                    <polygon
                      points="50,10 85,30 60,65 50,75 25,55 40,25"
                      fill="rgba(19, 91, 236, 0.2)"
                      stroke="#135bec"
                      strokeWidth="1.5"
                    />

                    {/* Tooltip Dots for Candidate */}
                    <circle
                      cx="50"
                      cy="10"
                      r="1.5"
                      fill="white"
                      stroke="#135bec"
                      strokeWidth="1"
                    />
                    <circle
                      cx="85"
                      cy="30"
                      r="1.5"
                      fill="white"
                      stroke="#135bec"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="75"
                      r="1.5"
                      fill="white"
                      stroke="#135bec"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400/30 border border-slate-400" />
                  <span className="text-sm text-slate-600 font-medium">
                    Your Profile
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#135bec]/20 border border-[#135bec]" />
                  <span className="text-sm text-gray-900 font-bold">
                    Candidate
                  </span>
                </div>
              </div>
            </motion.div>

            {/* AI Insights Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-[#135bec] to-blue-600 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div className="relative z-10 flex gap-4 items-start">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">AI Analysis Insight</h4>
                  <p className="text-blue-50 text-sm leading-relaxed">
                    Strong technical complementarity detected. Your product
                    background bridges the gap with Minh's deep system
                    architecture expertise. This creates a solid foundation for
                    a tech-heavy startup.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Match Score (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Match Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center justify-center text-center relative h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent rounded-t-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-gray-900 mb-6 relative z-10">
                Match Score
              </h3>

              {/* Circular Progress */}
              <div className="relative size-48 flex items-center justify-center mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="12"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="transparent"
                    stroke="#135bec"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-gray-900 tracking-tighter">
                    {candidate.matchScore}%
                  </span>
                  <span className="text-xs font-semibold text-[#135bec] uppercase tracking-wide mt-1">
                    Exceptional
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-500 mb-6 px-2">
                Based on 14 data points including work style, skill gaps, and
                vision.
              </p>

              <div className="flex flex-col gap-3 w-full relative z-10">
                <button className="w-full py-3 rounded-xl bg-[#135bec] hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Connect Now
                </button>
                <button className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold transition-all flex items-center justify-center gap-2">
                  <Bookmark className="w-5 h-5" />
                  Save for Later
                </button>
              </div>
            </motion.div>

            {/* Shared Traits Mini-Cards */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-3"
              >
                <div className="bg-teal-50 p-2 rounded-lg text-teal-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Shared Interest
                  </p>
                  <p className="text-xs text-slate-500">Fintech, Blockchain</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-3"
              >
                <div className="bg-purple-50 p-2 rounded-lg text-purple-600">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Work Style</p>
                  <p className="text-xs text-slate-500">Fast-paced, Remote</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Full Width Bottom Row: Mutual Connections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:col-span-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Mutual Connections
                </h3>
                <a
                  href="#"
                  className="text-sm text-[#135bec] font-medium hover:underline"
                >
                  View all 12 connections
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                {connections.map((conn, index) => (
                  <div
                    key={conn.name}
                    className={`flex items-center gap-3 pr-6 ${
                      index < connections.length - 1
                        ? "border-r border-slate-100"
                        : ""
                    }`}
                  >
                    <div
                      className="size-10 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${conn.avatar}")` }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {conn.name}
                      </p>
                      <p className="text-xs text-slate-500">{conn.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default MatchingDashboard;
