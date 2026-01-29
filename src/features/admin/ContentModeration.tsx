import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Download,
  Plus,
  Search,
  Clock,
  CheckCircle,
  Timer,
  ChevronDown,
  X,
  Check,
} from "lucide-react";
import { NotificationDropdown, UserAvatarDropdown } from "@/components/common";

// Mock data
const projects = [
  {
    id: "VS-2024-001",
    name: "FinTech Edu",
    initial: "F",
    color: "indigo",
    submitter: {
      name: "Nguyen Van A",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5XddmHL2-w35icFsT3FqUjQ47fPcWBcD5cM6bs_SA76KG-ACIoTzf0-a9e4BS5qsqz5eF60OCxClr6q7PMGcO1z2FxQPuU3JtIc8TehNf5f-qvu4vWY8OH9z9Talb7MwZmDUlLF8D-B3pm34LlDEhi9ngzO2K91XtzHJANdMXgzyPh-a8gEx5_9BNKLoaSQ9xlOsy4X7NEqSs7WUYa0RqnMSXjjt4pW-G2UsacjU5waG4Ms2AICnp3RiY9zBsa2_HzJLLyM7LN5k",
    },
    date: "Oct 24, 2023",
    category: "Education",
    categoryColor: "purple",
    status: "Pending Review",
    statusType: "pending",
  },
  {
    id: "VS-2024-004",
    name: "GreenHarvest",
    initial: "G",
    color: "emerald",
    submitter: {
      name: "Tran Thi B",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAA_52ircJPpnE9uCHskORq_Irc9wXAByl4bEsHF27Qw8ntIdfaJmoK_PhRhIwG5llyuFirz9S8XOwTrY07j_XfG4xrUQ0nWb4uVyc02QlHpbRh51dUcr3BmprNHjLb2OoxP5046jcZhKXanjK1vp-1opSPrqlUCyMfgzv1Ucr-fsplAC24zk5erITYPpaSVnTncAXxUjHM5d6xpvZLHZUi2LwOWV2Av-k8C5X6T3NWEgliBTEJGsealfyQDT3oXG85EvgR-q1pIIw",
    },
    date: "Oct 23, 2023",
    category: "AgriTech",
    categoryColor: "green",
    status: "Pending Review",
    statusType: "pending",
  },
  {
    id: "VS-2024-012",
    name: "VietAI Sol",
    initial: "V",
    color: "rose",
    submitter: {
      name: "Le Van C",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-N8pyvHUqVhH8CSOXj6uhWJHMb24eAK4EP0u6kylnjiBVFpsU9ifCQ55MKZ1U8kvi0k29cTehBl3CbnNe5f1YvVHkgm0umoSBu0ip4rH2m7rl-oNrWCpo2c75kMY0TyMDxLgl5f3Sgp_eewMyylIum6uOQ2yuon2sB5RYjidy5FthMhO0xvZmz19wUMqPKECU4d82ujfUb5zpYJ-V_HJ99kMGjhcnUTg3kXscwBq69nWG_ZjGorwix5-vFvB0kMPl7z3_m14RhdM",
    },
    date: "Oct 23, 2023",
    category: "Technology",
    categoryColor: "blue",
    status: "Flagged",
    statusType: "flagged",
  },
  {
    id: "VS-2024-023",
    name: "Mekong Mart",
    initial: "M",
    color: "orange",
    submitter: {
      name: "Pham Thi D",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFp3a3unPcf_Bl0RjjYJ3zOWbWGlpfcKgWqnT-RQGE67DL0AbpKvwYsuQRXndev-QHh-9U6utDKOEhjRObO_XBz8_hiS2M-up-2OqWfkKLs33j612LtNBbyJND-bxpqxWvG76MIrQ3oXe50_tY3_MIkv1CVefLdN8LywGpa8PHAg9Vlu3FB8lEBSPXPtV4i-tP2c4tlzcNqbXa3vav3f5yjWakNPRaw2yYxM3IRMXg0zw7KCq475IlqnBCLWLQMCqRAx-BJkvkEQk",
    },
    date: "Oct 22, 2023",
    category: "E-commerce",
    categoryColor: "slate",
    status: "Pending Review",
    statusType: "pending",
  },
];

const getInitialColors = (color: string) => {
  const colors: Record<string, string> = {
    indigo: "bg-indigo-100 text-indigo-600",
    emerald: "bg-emerald-100 text-emerald-600",
    rose: "bg-rose-100 text-rose-600",
    orange: "bg-orange-100 text-orange-600",
  };
  return colors[color] || colors.indigo;
};

const getCategoryColors = (color: string) => {
  const colors: Record<string, string> = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    slate: "bg-slate-100 text-slate-800",
  };
  return colors[color] || colors.slate;
};

const getStatusColors = (type: string) => {
  const colors: Record<string, { bg: string; dot: string }> = {
    pending: { bg: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
    flagged: { bg: "bg-red-100 text-red-800", dot: "bg-red-500" },
    approved: { bg: "bg-green-100 text-green-800", dot: "bg-green-500" },
  };
  return colors[type] || colors.pending;
};

export function ContentModeration() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="bg-[#f8f9fc] text-slate-900 min-h-screen flex flex-col relative"
      style={{
        background: `
          radial-gradient(circle at 15% 50%, rgba(19, 91, 236, 0.08), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(6, 182, 212, 0.1), transparent 25%),
          #f8f9fc
        `,
      }}
    >
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/75 backdrop-blur-md border-b border-slate-200/60">
        <div className="px-6 lg:px-10 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-[#135bec]">
              <Cpu className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Tin-Up <span className="text-slate-400 font-normal mx-2">/</span>{" "}
              Admin
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/admin/dashboard"
              className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
            >
              Users
            </Link>
            <span className="px-4 py-2 text-sm font-medium text-[#135bec] bg-[#ebf0fe] rounded-lg">
              Content
            </span>
            <Link
              to="/admin/settings"
              className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <NotificationDropdown />
            <UserAvatarDropdown />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 lg:p-10 flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Content Moderation
            </h2>
            <p className="text-slate-500 text-base">
              Review and manage startup project submissions for the platform.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              <Download className="w-5 h-5" />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#135bec] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
              <Plus className="w-5 h-5" />
              Manual Entry
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Pending Reviews
                </p>
                <h3 className="text-3xl font-bold text-slate-900">12</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg text-[#135bec]">
                <Clock className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs font-semibold">
                +2 new
              </span>
              <span className="text-slate-400 text-xs">since yesterday</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Approved Today
                </p>
                <h3 className="text-3xl font-bold text-slate-900">45</h3>
              </div>
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs font-semibold">
                +12%
              </span>
              <span className="text-slate-400 text-xs">vs last week</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">
                  Avg Response Time
                </p>
                <h3 className="text-3xl font-bold text-slate-900">2h 15m</h3>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <Timer className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs font-semibold">
                -5%
              </span>
              <span className="text-slate-400 text-xs">faster than avg</span>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col min-h-[600px]"
          >
            {/* Toolbar */}
            <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-slate-50/30">
              {/* Search */}
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 text-sm"
                  placeholder="Search by project name, submitter..."
                />
              </div>
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                  <span>Status: Pending</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                  <span>Date: Last 7 Days</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                  <span>Category: All</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Project Name
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Submitter
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Date Submitted
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {projects.map((project, index) => {
                    const statusColors = getStatusColors(project.statusType);
                    return (
                      <motion.tr
                        key={project.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="group hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div
                              className={`size-10 rounded-lg flex items-center justify-center font-bold text-lg ${getInitialColors(
                                project.color,
                              )}`}
                            >
                              {project.initial}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">
                                {project.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                ID: #{project.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <div
                              className="size-6 rounded-full bg-slate-200 bg-cover bg-center"
                              style={{
                                backgroundImage: `url('${project.submitter.avatar}')`,
                              }}
                            />
                            <span className="text-sm text-slate-700">
                              {project.submitter.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-600">
                          {project.date}
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColors(
                              project.categoryColor,
                            )}`}
                          >
                            {project.category}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors.bg}`}
                          >
                            <span
                              className={`size-1.5 rounded-full ${statusColors.dot}`}
                            />
                            {project.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                              title="Reject"
                            >
                              <X className="w-5 h-5" />
                            </button>
                            <button
                              className="p-2 rounded-lg text-white bg-[#135bec] hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all transform active:scale-95"
                              title="Approve"
                            >
                              <Check className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-auto border-t border-slate-100 p-4 bg-slate-50/50 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Showing 1-4 of 12 pending projects
              </p>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 text-slate-600 hover:bg-white">
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default ContentModeration;
