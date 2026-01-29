import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  History,
  RotateCcw,
  Code,
  Brain,
  MapPin,
  Briefcase,
  AlertTriangle,
  Maximize2,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { NotificationDropdown, UserAvatarDropdown } from "@/components/common";

// Weight configuration type
interface WeightConfig {
  id: string;
  label: string;
  description: string;
  value: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

export function AlgorithmConfigPage() {
  const [weights, setWeights] = useState<WeightConfig[]>([
    {
      id: "technical",
      label: "Technical Skill Match",
      description: "Weight given to hard skill overlap",
      value: 75,
      icon: <Code className="w-4 h-4" />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "culture",
      label: "Culture & Soft Skills",
      description: "Personality test alignment",
      value: 40,
      icon: <Brain className="w-4 h-4" />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: "location",
      label: "Geographic Proximity",
      description: "Importance of being in the same city",
      value: 60,
      icon: <MapPin className="w-4 h-4" />,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      id: "experience",
      label: "Experience Level",
      description: "Years of industry experience match",
      value: 25,
      icon: <Briefcase className="w-4 h-4" />,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]);

  const [mustHaveFounder, setMustHaveFounder] = useState(true);
  const [industryLock, setIndustryLock] = useState(false);

  const handleWeightChange = (id: string, newValue: number) => {
    setWeights((prev) =>
      prev.map((w) => (w.id === id ? { ...w, value: newValue } : w)),
    );
  };

  return (
    <div className="bg-[#f8f9fc] text-[#0d121b] antialiased overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col">
        {/* Aurora Background Blob */}
        <div
          className="absolute w-[600px] h-[600px] top-[-100px] left-1/2 -translate-x-1/2 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(19, 91, 236, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />

        {/* Top Navigation (Frosted Glass) */}
        <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-white/85 backdrop-blur-md px-4 lg:px-10 py-3 transition-all duration-300">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-[#0d121b]">
              <div className="text-[#135bec]">
                <Cpu className="w-8 h-8" />
              </div>
              <h2 className="text-[#0d121b] text-xl font-bold leading-tight tracking-tight">
                Tin-Up Admin
              </h2>
            </Link>
            <div className="flex flex-1 justify-end gap-8 items-center">
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
                <Link
                  to="/admin/content"
                  className="px-4 py-2 text-sm font-medium text-[#4c669a] hover:text-[#0d121b] hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Content
                </Link>
                <span className="px-4 py-2 text-sm font-medium text-[#135bec] bg-[#ebf0fe] rounded-lg">
                  Settings
                </span>
              </nav>
              <div className="flex items-center gap-3">
                <NotificationDropdown />
                <UserAvatarDropdown />
              </div>
            </div>
          </div>
        </header>

        {/* Main Layout Container */}
        <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 lg:px-10 py-6 lg:py-8 z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Link
              to="/admin/dashboard"
              className="text-[#4c669a] text-sm font-medium hover:underline"
            >
              Admin
            </Link>
            <span className="text-[#9aaac8] text-sm font-medium">/</span>
            <span className="text-[#0d121b] text-sm font-medium">
              AI Configuration
            </span>
          </div>

          {/* Page Header */}
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0d121b] text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Algorithm Configuration
              </h1>
              <p className="text-[#4c669a] text-base font-normal max-w-2xl">
                Fine-tune the co-founder matching logic parameters. Changes will
                affect the match scores for all active users.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-white hover:bg-slate-50 text-[#0d121b] text-sm font-semibold shadow-sm transition-all">
                <History className="w-5 h-5" />
                View Logs
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-white hover:bg-slate-50 text-[#0d121b] text-sm font-semibold shadow-sm transition-all">
                <RotateCcw className="w-5 h-5" />
                Reset Defaults
              </button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Controls (Span 8) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
              {/* Weight Configuration Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-[0_2px_12px_-4px_rgba(6,81,237,0.1)] border border-[#eef2f6] overflow-hidden flex flex-col h-full"
              >
                <div className="px-6 py-5 border-b border-[#f0f4f8] flex justify-between items-center bg-white">
                  <h2 className="text-[#0d121b] text-lg font-bold">
                    Match Criteria Weights
                  </h2>
                  <span className="bg-[#eef4ff] text-[#135bec] text-xs font-bold px-2 py-1 rounded">
                    V 2.4.1
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-8">
                  {weights.map((weight) => (
                    <div key={weight.id} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`p-1.5 rounded ${weight.iconBg} ${weight.iconColor}`}
                          >
                            {weight.icon}
                          </div>
                          <div>
                            <p className="text-[#0d121b] text-sm font-semibold">
                              {weight.label}
                            </p>
                            <p className="text-[#64748b] text-xs">
                              {weight.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-[#135bec] font-mono font-bold text-sm">
                          {weight.value}%
                        </span>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-[#eef2f6]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${weight.value}%` }}
                          transition={{ duration: 0.5 }}
                          className="absolute h-full rounded-full bg-[#135bec]"
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={weight.value}
                          onChange={(e) =>
                            handleWeightChange(
                              weight.id,
                              parseInt(e.target.value),
                            )
                          }
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 size-5 bg-white border-2 border-[#135bec] rounded-full shadow-md cursor-ew-resize hover:scale-110 transition-transform"
                          style={{ left: `calc(${weight.value}% - 10px)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Advanced Toggles */}
                <div className="px-6 py-5 bg-[#fafbfd] border-t border-[#f0f4f8] mt-auto">
                  <h3 className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-4">
                    Advanced Constraints
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#eef2f6] cursor-pointer hover:border-blue-200 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#0d121b]">
                          Must-have Founder
                        </span>
                        <span className="text-xs text-[#64748b]">
                          Force 1 technical founder
                        </span>
                      </div>
                      <button
                        onClick={() => setMustHaveFounder(!mustHaveFounder)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          mustHaveFounder ? "bg-[#135bec]" : "bg-slate-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            mustHaveFounder ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>
                    <label className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#eef2f6] cursor-pointer hover:border-blue-200 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#0d121b]">
                          Industry Lock
                        </span>
                        <span className="text-xs text-[#64748b]">
                          Restrict cross-industry
                        </span>
                      </div>
                      <button
                        onClick={() => setIndustryLock(!industryLock)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          industryLock ? "bg-[#135bec]" : "bg-slate-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            industryLock ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Action Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#101622] text-white rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center shadow-lg gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-sm">
                    <span className="font-bold block">Unsaved Changes</span>
                    <span className="text-white/60">
                      Last simulation ran 2 mins ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium hover:text-white/80 transition-colors">
                    Discard
                  </button>
                  <button className="flex-1 sm:flex-none bg-[#135bec] hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all shadow-[0_0_15px_rgba(19,91,236,0.5)]">
                    Deploy Changes
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visualization (Span 4) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              {/* Radar Chart Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-[0_2px_12px_-4px_rgba(6,81,237,0.1)] border border-[#eef2f6] p-6 flex flex-col items-center relative"
              >
                <div className="w-full flex justify-between items-center mb-6">
                  <h2 className="text-[#0d121b] text-lg font-bold">
                    Impact Preview
                  </h2>
                  <button className="text-[#135bec] hover:bg-[#eef4ff] p-1 rounded transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Legend */}
                <div className="flex gap-4 text-xs font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <span className="text-slate-500">Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#135bec] shadow-[0_0_8px_rgba(19,91,236,0.6)]" />
                    <span className="text-[#0d121b]">Projected</span>
                  </div>
                </div>

                {/* CSS/SVG Radar Chart */}
                <div className="relative w-64 h-64 my-4">
                  <svg
                    className="w-full h-full absolute top-0 left-0 text-slate-100 overflow-visible"
                    viewBox="0 0 100 100"
                  >
                    {/* Background Grid Circles */}
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    {/* Axes */}
                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="0"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="98"
                      y2="35"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="79"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="21"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="2"
                      y2="35"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    {/* Current Shape (Gray) */}
                    <polygon
                      points="50,15 85,40 70,80 30,80 15,40"
                      fill="rgba(226, 232, 240, 0.4)"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                    />
                    {/* New Shape (Blue - Dynamic feel) */}
                    <motion.polygon
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      points="50,10 90,35 75,85 25,85 10,35"
                      fill="rgba(19, 91, 236, 0.15)"
                      stroke="#135bec"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    {/* Data Points */}
                    <circle cx="50" cy="10" r="2" fill="#135bec" />
                    <circle cx="90" cy="35" r="2" fill="#135bec" />
                    <circle cx="75" cy="85" r="2" fill="#135bec" />
                    <circle cx="25" cy="85" r="2" fill="#135bec" />
                    <circle cx="10" cy="35" r="2" fill="#135bec" />
                  </svg>
                  {/* Labels */}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 uppercase">
                    Skill
                  </span>
                  <span className="absolute top-[30%] -right-8 text-[10px] font-bold text-slate-500 uppercase">
                    Loc
                  </span>
                  <span className="absolute bottom-0 -right-4 text-[10px] font-bold text-slate-500 uppercase">
                    Exp
                  </span>
                  <span className="absolute bottom-0 -left-4 text-[10px] font-bold text-slate-500 uppercase">
                    Ind
                  </span>
                  <span className="absolute top-[30%] -left-8 text-[10px] font-bold text-slate-500 uppercase">
                    Cul
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-slate-600">
                    The new configuration leans heavily towards{" "}
                    <span className="text-[#135bec] font-bold">
                      technical skills
                    </span>{" "}
                    and{" "}
                    <span className="text-[#135bec] font-bold">proximity</span>.
                  </p>
                </div>
              </motion.div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stat 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm border border-[#eef2f6] p-4 flex flex-col justify-between h-32 hover:border-blue-100 transition-colors group"
                >
                  <div className="flex justify-between items-start">
                    <TrendingUp className="w-5 h-5 text-slate-400 group-hover:text-[#135bec] transition-colors" />
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      +4.2%
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#0d121b]">86%</p>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Match Quality
                    </p>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-[#eef2f6] p-4 flex flex-col justify-between h-32 hover:border-blue-100 transition-colors group"
                >
                  <div className="flex justify-between items-start">
                    <Users className="w-5 h-5 text-slate-400 group-hover:text-[#135bec] transition-colors" />
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                      -12%
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#0d121b]">1,240</p>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Pool Size
                    </p>
                  </div>
                </motion.div>

                {/* Stat 3 (Full width) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="col-span-2 bg-white rounded-xl shadow-sm border border-[#eef2f6] p-4 flex items-center justify-between hover:border-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 rounded-full p-2">
                      <Shield className="w-4 h-4 text-[#135bec]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0d121b]">
                        Bias Detection
                      </p>
                      <p className="text-xs text-slate-500">
                        Algorithm is within safe limits
                      </p>
                    </div>
                  </div>
                  <div
                    className="h-10 w-24 bg-cover bg-center rounded opacity-60"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEu89yM-CB5-NYwYKqpTOowsW-2T6vh80h_yacUIXjc7vyWU8MxP5hUBkTLKi4iEBG224ZgUYHs3DQxvAVwpF9xF6q-t6Mw9vYSn775m04pYNqbTfULTM_CVrGClJjYBBxIftElUZrNtplC09rswNAiVVpZxBYfRhpNAEEVC4-yrQzjE6ddEnsYHDSYB0q_WmZ-6GV-O2v_leVHjhUOapesKvkSw7i6CB49zuhb22KSZfG-U9VGKfqy_zQKnTehLrpJOZTCEnkWn4')",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmConfigPage;
