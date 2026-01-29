import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Upload,
  Sparkles,
  Plus,
  ArrowRight,
  Cpu,
  BadgeCheck,
  Eye,
  Users,
  FolderOpen,
  Lightbulb,
  Bot,
  FileEdit,
} from "lucide-react";
import {
  useToast,
  NotificationDropdown,
  UserAvatarDropdown,
} from "@/components/common";

const roles = [
  { id: "cofounder", label: "Co-Founder", selected: true },
  { id: "cto", label: "CTO", selected: false },
  { id: "cmo", label: "CMO", selected: false },
  { id: "investor", label: "Investor", selected: false },
];

export function ProjectSetupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  // Form state
  const [projectName, setProjectName] = useState("");
  const [tagline, setTagline] = useState("");
  const [vision, setVision] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>(["cofounder"]);
  const [pitchDeck, setPitchDeck] = useState<File | null>(null);

  const handleRoleToggle = (roleId: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleId)
        ? prev.filter((r) => r !== roleId)
        : [...prev, roleId],
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPitchDeck(file);
      showToast({
        type: "success",
        title: "File Uploaded",
        message: `${file.name} has been uploaded successfully.`,
        duration: 3000,
      });
    }
  };

  const handlePublish = async () => {
    // Validate form
    if (!projectName.trim()) {
      showToast({
        type: "error",
        title: "Missing Project Name",
        message: "Please enter a project name to continue.",
      });
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    showToast({
      type: "success",
      title: "Project Published!",
      message: "Your project is now live and visible to co-founders.",
      duration: 4000,
    });

    navigate("/founder/matching");
  };

  const handleSaveDraft = () => {
    showToast({
      type: "info",
      title: "Draft Saved",
      message: "Your project has been saved as a draft.",
      duration: 3000,
    });
    // Save draft logic
    console.log("Draft saved");
  };

  return (
    <div className="bg-[#f6f6f8] min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Aurora Background Accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-[#135bec]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-teal-400/15 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-purple-400/10 blur-[120px]" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 backdrop-blur-md bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="text-[#135bec]">
                <Cpu className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Tin-Up
              </span>
            </Link>

            {/* Nav Links */}
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

            {/* Profile */}
            <div className="flex items-center gap-3">
              <NotificationDropdown />
              <UserAvatarDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (Bento Grid) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Page Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2 mb-2"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Founder: Project Setup
              </h1>
              <p className="text-slate-500 text-lg">
                Share your vision with the Tin-Up ecosystem.
              </p>
            </motion.div>

            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Project Essentials (Spans 2 columns) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-2 mb-6">
                  <BadgeCheck className="w-5 h-5 text-[#135bec]" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Project Essentials
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <label className="flex flex-col flex-1">
                    <span className="text-sm font-medium text-slate-700 mb-2">
                      Project Name
                    </span>
                    <input
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="e.g. NextGen FinTech"
                      className="w-full h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] text-gray-900 placeholder:text-slate-400 outline-none transition-all"
                    />
                  </label>
                  <label className="flex flex-col flex-1">
                    <span className="text-sm font-medium text-slate-700 mb-2">
                      Tagline
                    </span>
                    <input
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      placeholder="Short elevator pitch (max 60 chars)"
                      maxLength={60}
                      className="w-full h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] text-gray-900 placeholder:text-slate-400 outline-none transition-all"
                    />
                  </label>
                </div>
              </motion.div>

              {/* Card 2: The Vision (Spans 2 columns) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group"
              >
                {/* Decorative gradient blob inside card */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#135bec]/5 rounded-full blur-3xl group-hover:bg-[#135bec]/10 transition-all duration-700" />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#135bec]" />
                    <h3 className="text-lg font-bold text-gray-900">
                      The Vision
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    Markdown Supported
                  </span>
                </div>

                <div className="relative z-10">
                  <textarea
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    placeholder="Describe the problem you are solving and your solution. What makes your approach unique?"
                    maxLength={2000}
                    className="w-full min-h-[200px] resize-y rounded-lg border border-slate-200 bg-slate-50 p-4 text-base focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] text-gray-900 placeholder:text-slate-400 leading-relaxed outline-none transition-all"
                  />
                  <div className="flex justify-end mt-2">
                    <span className="text-xs text-slate-400">
                      {vision.length} / 2000 characters
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Looking For (1 Column) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#135bec]" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Looking For
                  </h3>
                </div>
                <p className="text-sm text-slate-500 mb-4">
                  Select the roles you are actively recruiting for.
                </p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => {
                    const isSelected = selectedRoles.includes(role.id);
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleRoleToggle(role.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          isSelected
                            ? "bg-[#135bec]/10 text-[#135bec] border border-[#135bec]/20 hover:bg-[#135bec] hover:text-white"
                            : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-[#135bec] hover:text-[#135bec]"
                        }`}
                      >
                        {role.label}
                      </button>
                    );
                  })}
                  <button className="px-4 py-2 rounded-lg bg-slate-50 text-slate-600 border border-slate-200 text-sm font-medium hover:border-[#135bec] hover:text-[#135bec] transition-all flex items-center gap-1">
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>
              </motion.div>

              {/* Card 4: Pitch Deck (1 Column) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FolderOpen className="w-5 h-5 text-[#135bec]" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Pitch Deck
                  </h3>
                </div>
                <label className="flex-1 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50/50 p-6 hover:bg-[#135bec]/5 hover:border-[#135bec]/50 transition-all cursor-pointer group">
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  {pitchDeck ? (
                    <div className="text-center">
                      <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 mx-auto">
                        <Upload className="w-6 h-6 text-[#135bec]" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        {pitchDeck.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {(pitchDeck.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setPitchDeck(null);
                        }}
                        className="mt-2 text-xs text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Upload className="w-6 h-6 text-[#135bec]" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        Click to upload
                      </p>
                      <p className="text-xs text-slate-500 text-center">
                        PDF or PPT (Max 10MB)
                      </p>
                    </>
                  )}
                </label>
              </motion.div>
            </div>

            {/* Action Bar Mobile (Visible only on small screens) */}
            <div className="lg:hidden flex gap-4 mt-4">
              <button
                onClick={handleSaveDraft}
                className="flex-1 h-12 rounded-lg border border-slate-200 text-slate-700 font-semibold bg-white hover:bg-slate-50 transition-colors"
              >
                Save Draft
              </button>
              <button
                onClick={handlePublish}
                disabled={isLoading}
                className="flex-1 h-12 rounded-lg bg-[#135bec] hover:bg-blue-700 text-white font-semibold shadow-lg shadow-[#135bec]/30 transition-all disabled:opacity-50"
              >
                {isLoading ? "Publishing..." : "Publish Project"}
              </button>
            </div>
          </div>

          {/* Right Column: AI Assistant (Sticky) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-b from-white to-slate-50 rounded-xl shadow-lg border border-[#135bec]/20 overflow-hidden"
            >
              <div className="bg-[#135bec]/5 p-4 border-b border-[#135bec]/10 flex items-center gap-3">
                <div className="relative">
                  <div className="size-10 rounded-full bg-[#135bec] flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-3 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">
                    Tin-Up AI Coach
                  </h3>
                  <p className="text-xs text-[#135bec] font-medium">
                    Online & Ready to help
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Chat Bubble 1 */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600">
                    <p>Hi there! 👋 I see you're setting up a new project.</p>
                    <p className="mt-2">
                      Investors love clear problem statements. Try starting your
                      vision with the specific "Pain Point" you are solving.
                    </p>
                  </div>
                </div>

                {/* Chat Bubble 2 (Tip) */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-blue-50 p-3 rounded-2xl rounded-tl-none border border-blue-100 text-sm text-slate-600">
                    <div className="flex items-center gap-2 mb-1 text-[#135bec] font-bold text-xs uppercase tracking-wider">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Tip
                    </div>
                    <p>
                      Keep your tagline under 10 words for maximum impact on the
                      "Explore" feed.
                    </p>
                  </div>
                </div>

                {/* Suggestion Chips */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Suggested Actions
                  </p>
                  <div className="flex flex-col gap-2">
                    <button className="text-left text-sm p-2 rounded-lg hover:bg-slate-100 text-[#135bec] transition-colors flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Generate a tagline
                    </button>
                    <button className="text-left text-sm p-2 rounded-lg hover:bg-slate-100 text-[#135bec] transition-colors flex items-center gap-2">
                      <FileEdit className="w-4 h-4" /> Review my vision draft
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex flex-col gap-3">
              <button
                onClick={handlePublish}
                disabled={isLoading}
                className="w-full h-12 rounded-lg bg-[#135bec] hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-[#135bec]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Publish Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <button
                onClick={handleSaveDraft}
                className="w-full h-12 rounded-lg border border-slate-300 text-slate-700 font-semibold bg-white/50 hover:bg-white transition-colors"
              >
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectSetupPage;
