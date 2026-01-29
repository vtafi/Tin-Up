import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Search,
  MoreHorizontal,
  MoreVertical,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Users,
  Handshake,
  Calendar,
  Download,
  ArrowRight,
} from "lucide-react";
import { NotificationDropdown, UserAvatarDropdown } from "@/components/common";

// Mock data
const recentSignups = [
  {
    id: "1",
    name: "Nguyen Van A",
    role: "Tech Lead • Hanoi",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuLn9u3hkZt-81rNDOUawf3_MEOEF_ZJy2Yivahls24Z0v9rt1rjLfF-4NmezakjWAfbsYMQR8SAN1AvyEcV1_VS1Pcm8iPjmEFXxtVVg_pQFmDl08upXoA0wwZUx0J79h6IVZUEe6anSpOohuVE7Hk0_xtOqZLZfxbVi1H34pXkoMS0V5Ee9k5tiOGWk71RfPnixfrHa1q25IW92ML-pXo8L5d0ZaeOOWPJmIMplpIfnH4PT7tSamiD01nAyPU5MQcsKxqMH4fL8",
    online: true,
    badge: "Hacker",
    badgeColor: "purple",
  },
  {
    id: "2",
    name: "Le Thi B",
    role: "Marketing • HCMC",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7l-hZGbtl_Z2AnzuAVIQIm6LFNzCQTdOli6Tr8NjmBcLUnQ5kvrPUZg85rRSuSlPww5BIVZiNCzxXDJn6bAtVj0TMlz_8VVIlT7GGkxVCPE1LzX-4WXsOgBINxhgWiApW4_W9g5NcYZrp9HcUYLkVnX_QRl__F-f-ETxvoCWq2rKMs44PIP-iMqCLNEoJ0_fzaTF7_gLKe0wN5selZH3SWRK6iE39rNYwU2ck6slcG9Ef3QAZklpNy9jNbQXYbyG27m73e6AjRfo",
    online: true,
    badge: "Hustler",
    badgeColor: "orange",
  },
  {
    id: "3",
    name: "Tran C",
    role: "Designer • Da Nang",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEjcilX2O8nrqslWZfOiJ-9_sl66Sds7_MoQ-0IexFz-_1MT-Lg-KJ9hlYfStULLyt2-Suax75cqNTwRZ8cXSgG7UcxbzAQ32a_KbPyijliLvpjh9WdxA1_PupkfM6OP9gC1oSqR-_sfuFA5QgJQvl58q0POC2fU8U3b30Ysff2LNKAfUMbd06o9EVv_tp874N5awng5bdtyV6XMeTAj4Y8LEYA2uBhX48ztA3W7TNrukeOL8OV8UGWcz4MQh2LIk9nDcVhPn2E8c",
    online: false,
    badge: "Hipster",
    badgeColor: "pink",
  },
  {
    id: "4",
    name: "Pham D",
    role: "Investor • Hanoi",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYR2XZJQ1LZpIdWxJhcd1d6-dyihCmFmRBMh1SyUJBpqc2N1lBnkFjuXwgaWzRwk_LYaktQHH2bt6wX1cToOvLGlhXj6JEeW4slJ7avaI6pn4xXL_8HbDvOjNrvLIc1Obw2v_PaYOHwOgBYWHkSqui8Ram4wkeLWSdb67Ou28-V0GOlk2QWjIKwe7sxuoFk3zpsBiTRp4JuCa2R4YbroqRB9ACBVnRrettnQnapiA02jimOPzKUnLKX3FkHSvl5eQIwMSEYiWH7uQ",
    online: true,
    badge: "Angel",
    badgeColor: "blue",
  },
  {
    id: "5",
    name: "Wu E",
    role: "Product Mgr • HCMC",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTWNYtENYFbKlopYdPGoqeXem5FKARBNhOU3uSuaLvNlhU54oxTduT93vpNfTc8fiXacUGSg3-j7bzUD2okPrhK7PPU3_vSMPV4OCOSuq1xhC174NQf04yB_J8tM0KPgSUu_00coCx50vnMRg02Ku1kFaYiZuax1FSopploc7eMZLuiRAht1bN7o9StFlpN0KCvZH24cPm4QO2AM7zM6GsC_7zSA8fs64nq04sE11PvtPhrLf14EooR7CizbpX41OtK8r2Gs6D7Pw",
    online: false,
    badge: "Hustler",
    badgeColor: "orange",
  },
];

const getBadgeColors = (color: string) => {
  const colors: Record<string, string> = {
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    pink: "bg-pink-100 text-pink-800",
    blue: "bg-blue-100 text-blue-800",
  };
  return colors[color] || colors.blue;
};

export function AdminDashboard() {
  return (
    <div className="bg-[#f6f6f8] text-[#0d121b] min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-white/80 backdrop-blur-md">
        <div className="px-6 lg:px-12 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-[#135bec]">
              <Cpu className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#0d121b]">
              Tin-Up<span className="text-[#135bec]">Admin</span>
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <span className="px-4 py-2 text-sm font-medium text-[#135bec] bg-[#ebf0fe] rounded-lg">
              Dashboard
            </span>
            <Link
              to="/admin/users"
              className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
            >
              Users
            </Link>
            <Link
              to="/admin/content"
              className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
            >
              Content
            </Link>
            <Link
              to="/admin/settings"
              className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="flex size-10 items-center justify-center rounded-full bg-white border border-gray-200 text-[#4c669a] hover:text-[#135bec] hover:border-[#135bec] transition-all shadow-sm">
              <Search className="w-5 h-5" />
            </button>
            <NotificationDropdown />
            <div className="ml-2">
              <UserAvatarDropdown />
            </div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1600px] mx-auto p-6 lg:p-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0d121b] mb-1">
              Dashboard Overview
            </h2>
            <p className="text-[#4c669a]">
              Welcome back, Admin. Here's what's happening in the ecosystem
              today.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-gray-200 bg-white text-sm font-medium text-[#0d121b] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 shadow-sm transition-all">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </button>
            <button className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-[#135bec] text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 shadow-md shadow-[#135bec]/30 transition-all">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
          {/* Card 1: Platform Growth (Large, spans 3 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-3 lg:col-span-3 row-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(19, 91, 236, 0.05) 0%, rgba(56, 189, 248, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)",
            }}
          >
            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-lg font-semibold text-[#0d121b]">
                  Platform Growth
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold text-[#0d121b]">
                    12,500
                  </span>
                  <span className="text-sm font-medium text-[#4c669a]">
                    Users
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 ml-2">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    +12%
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-black/5 text-[#4c669a] transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full min-h-[280px] mt-6 z-10">
              {/* Custom SVG Chart */}
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 800 300"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#135bec" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#135bec" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="800"
                  y1="250"
                  y2="250"
                />
                <line
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="800"
                  y1="175"
                  y2="175"
                />
                <line
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="800"
                  y1="100"
                  y2="100"
                />
                <line
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="800"
                  y1="25"
                  y2="25"
                />
                {/* Area Path */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  d="M0,250 C100,240 150,180 200,160 C250,140 300,190 400,120 C500,50 550,80 600,60 C650,40 700,20 800,10 V300 H0 Z"
                  fill="url(#chartGradient)"
                />
                {/* Line Path */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                  d="M0,250 C100,240 150,180 200,160 C250,140 300,190 400,120 C500,50 550,80 600,60 C650,40 700,20 800,10"
                  fill="none"
                  stroke="#135bec"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                {/* Tooltip-like circle */}
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  cx="600"
                  cy="60"
                  fill="#fff"
                  r="6"
                  stroke="#135bec"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-[#4c669a] px-2 mt-2 z-10">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </motion.div>

          {/* Card 5: Recent Signups (Tall, Right Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-3 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-[#0d121b]">Recent Signups</h3>
              <Link
                to="/admin/users"
                className="text-xs font-medium text-[#135bec] hover:text-blue-700"
              >
                View All
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {recentSignups.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="relative">
                    <div
                      className="bg-center bg-no-repeat bg-cover rounded-full size-10"
                      style={{ backgroundImage: `url('${user.avatar}')` }}
                    />
                    <span
                      className={`absolute bottom-0 right-0 size-3 border-2 border-white rounded-full ${
                        user.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0d121b] truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-[#4c669a] truncate">
                      {user.role}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${getBadgeColors(
                      user.badgeColor,
                    )}`}
                  >
                    {user.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Pending Approvals (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between group hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="size-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                Action Required
              </span>
            </div>
            <div>
              <p className="text-[#4c669a] text-sm font-medium mt-4">
                Pending Approvals
              </p>
              <p className="text-3xl font-bold text-[#0d121b] mt-1">24</p>
            </div>
            <button className="w-full mt-4 py-2 bg-[#0d121b] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Review Profiles <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 3: Active Users (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="size-10 rounded-full bg-blue-100 text-[#135bec] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <MoreVertical className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-[#4c669a] text-sm font-medium mt-4">
                Active Users
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold text-[#0d121b]">1,240</p>
                <span className="text-xs font-medium text-green-600 flex items-center">
                  <ArrowUpRight className="w-3 h-3" /> 5%
                </span>
              </div>
              <p className="text-xs text-[#4c669a] mt-1">vs last week</p>
            </div>
          </motion.div>

          {/* Card 4: Total Matches (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="size-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <MoreVertical className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-[#4c669a] text-sm font-medium mt-4">
                Total Matches
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold text-[#0d121b]">85</p>
                <span className="text-xs font-medium text-green-600 flex items-center">
                  <ArrowUpRight className="w-3 h-3" /> 2%
                </span>
              </div>
              <p className="text-xs text-[#4c669a] mt-1">Successful pairings</p>
            </div>
          </motion.div>

          {/* Card 6: Demographics Map / Distribution (Wide Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-1 md:col-span-3 lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6"
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#0d121b] mb-2">
                  User Demographics
                </h3>
                <p className="text-sm text-[#4c669a]">
                  Distribution of startups and co-founders across major
                  Vietnamese tech hubs.
                </p>
                <div className="mt-6 space-y-4">
                  {/* HCMC */}
                  <div className="group">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-[#0d121b] flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#135bec]" /> Ho
                        Chi Minh City
                      </span>
                      <span>52%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "52%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-[#135bec] h-2 rounded-full"
                      />
                    </div>
                  </div>
                  {/* Hanoi */}
                  <div className="group">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-[#0d121b] flex items-center gap-2">
                        <span className="size-2 rounded-full bg-purple-500" />{" "}
                        Hanoi
                      </span>
                      <span>34%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "34%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="bg-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                  {/* Da Nang */}
                  <div className="group">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-[#0d121b] flex items-center gap-2">
                        <span className="size-2 rounded-full bg-teal-400" /> Da
                        Nang
                      </span>
                      <span>14%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "14%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-teal-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="text-sm font-medium text-[#135bec] hover:underline">
                  View detailed report
                </button>
              </div>
            </div>

            {/* Simplified Map Visual */}
            <div className="flex-1 rounded-xl bg-gray-50 relative overflow-hidden min-h-[200px]">
              <img
                alt="Stylized background showing connection nodes"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9NbYLn3Qs9t25FGrPx5sY7NObABsUy0zDkdygSFXEKPSspONINeIpn11fuftvIGOR-GnEVsIgc7_qf_lwYdok77kYgBi2rJxiWQktW3mIvbyUheKxT1SrNW_vzeGM-0Qcu9QYMoH634i3C5D-QIuM-9B2i5Z-qRCl045smiVFhgekpEQINcM0kG1XUnCebznrq9nDC4SVMYggvnhcnqGdG0ut2rD4W0nazW2r46DtpXWUzgFMff2dfPV5HojNf1qeJ2nz1gXxHU"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-4">
                  {/* Approximate visual representation of nodes */}
                  <div className="absolute top-[20%] left-[45%] flex flex-col items-center">
                    <span className="size-3 bg-purple-500 rounded-full ring-4 ring-white" />
                    <span className="mt-1 text-xs font-bold bg-white/80 px-1 rounded backdrop-blur-sm">
                      Hanoi
                    </span>
                  </div>
                  <div className="absolute top-[45%] left-[55%] flex flex-col items-center">
                    <span className="size-3 bg-teal-400 rounded-full ring-4 ring-white" />
                    <span className="mt-1 text-xs font-bold bg-white/80 px-1 rounded backdrop-blur-sm">
                      Da Nang
                    </span>
                  </div>
                  <div className="absolute bottom-[20%] left-[40%] flex flex-col items-center">
                    <span className="size-4 bg-[#135bec] rounded-full ring-4 ring-white animate-pulse" />
                    <span className="mt-1 text-xs font-bold bg-white/80 px-1 rounded backdrop-blur-sm">
                      HCMC
                    </span>
                  </div>
                  {/* Connecting lines (simulated) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line
                      stroke="#9ca3af"
                      strokeDasharray="4"
                      strokeWidth="1"
                      x1="45%"
                      x2="55%"
                      y1="22%"
                      y2="47%"
                    />
                    <line
                      stroke="#9ca3af"
                      strokeDasharray="4"
                      strokeWidth="1"
                      x1="55%"
                      x2="41%"
                      y1="47%"
                      y2="80%"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
