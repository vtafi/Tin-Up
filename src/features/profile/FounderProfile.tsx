import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  MapPin,
  Calendar,
  Globe,
  Linkedin,
  Twitter,
  Mail,
  Edit3,
  Share2,
  Plus,
  Users,
  Eye,
  Rocket,
  Target,
  Briefcase,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";
import {
  useToast,
  NotificationDropdown,
  UserAvatarDropdown,
} from "@/components/common";
import { useAuth } from "@/contexts/AuthContext";

// Mock startup data
const startupProfile = {
  name: "TechViet Innovation",
  tagline: "Building the future of Vietnamese fintech",
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=techviet",
  coverImage:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
  founded: "2023",
  location: "Ho Chi Minh City, Vietnam",
  stage: "Seed",
  industry: "FinTech",
  teamSize: "5-10",
  website: "https://techviet.io",
  linkedin: "https://linkedin.com/company/techviet",
  twitter: "https://twitter.com/techviet",
  about: `TechViet Innovation is revolutionizing how Vietnamese consumers interact with financial services. Our AI-powered platform provides personalized financial guidance, making wealth management accessible to everyone.

We're building a team of passionate individuals who want to make a real impact in Southeast Asia's fastest-growing market.`,
  lookingFor: ["CTO", "Lead Engineer", "Product Designer"],
  highlights: [
    { label: "Total Raised", value: "$500K" },
    { label: "Team Size", value: "8 members" },
    { label: "Active Projects", value: "3" },
  ],
};

// Mock projects data
const projects = [
  {
    id: "1",
    name: "FinAI Platform",
    description:
      "AI-powered personal finance assistant for Vietnamese consumers",
    status: "Active",
    statusColor: "green",
    techStack: ["React Native", "Node.js", "Python", "AWS"],
    lookingFor: ["CTO", "ML Engineer"],
    progress: 65,
    views: 234,
    applications: 12,
  },
  {
    id: "2",
    name: "PayViet Gateway",
    description: "Seamless payment integration for local businesses",
    status: "Planning",
    statusColor: "blue",
    techStack: ["Go", "PostgreSQL", "Kubernetes"],
    lookingFor: ["Backend Lead"],
    progress: 25,
    views: 89,
    applications: 5,
  },
  {
    id: "3",
    name: "CreditScore API",
    description: "Alternative credit scoring using AI and behavioral data",
    status: "Draft",
    statusColor: "gray",
    techStack: ["Python", "TensorFlow", "FastAPI"],
    lookingFor: ["Data Scientist"],
    progress: 10,
    views: 0,
    applications: 0,
  },
];

const getStatusColor = (color: string) => {
  const colors: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-gray-100 text-gray-500",
  };
  return colors[color] || colors.gray;
};

export function FounderProfile() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<"projects" | "about">("projects");

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast({
      type: "success",
      title: "Link Copied!",
      message: "Profile link has been copied to clipboard.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-[#f6f6f8] min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 backdrop-blur-md bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-[#135bec]">
                <Cpu className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Tin-Up
              </span>
            </Link>

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

            <div className="flex items-center gap-3">
              <NotificationDropdown />
              <UserAvatarDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#135bec] to-blue-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${startupProfile.coverImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-6 items-start md:items-end"
        >
          {/* Logo */}
          <div className="size-32 rounded-2xl bg-white shadow-xl border-4 border-white overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center bg-[#135bec]/10"
              style={{ backgroundImage: `url('${startupProfile.logo}')` }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 pb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {startupProfile.name}
              </h1>
              <span className="px-2 py-1 text-xs font-semibold bg-[#135bec]/10 text-[#135bec] rounded-full">
                {startupProfile.stage}
              </span>
            </div>
            <p className="text-slate-600 text-lg mb-2">
              {startupProfile.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {startupProfile.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {startupProfile.industry}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Founded {startupProfile.founded}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {startupProfile.teamSize}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pb-4">
            <Link
              to="/founder/setup"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </Link>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#135bec] text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "projects"
                    ? "border-[#135bec] text-[#135bec]"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "about"
                    ? "border-[#135bec] text-[#135bec]"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                About
              </button>
            </div>

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <div className="space-y-4">
                {/* Add New Project */}
                <Link
                  to="/founder/setup"
                  className="flex items-center justify-center gap-2 p-6 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-[#135bec] hover:text-[#135bec] hover:bg-[#135bec]/5 transition-all group"
                >
                  <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Create New Project</span>
                </Link>

                {/* Project Cards */}
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-gray-900">
                            {project.name}
                          </h3>
                          <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(
                              project.statusColor,
                            )}`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          {project.description}
                        </p>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Looking For */}
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-4 h-4 text-[#135bec]" />
                      <span className="text-sm text-slate-600">
                        Looking for:
                      </span>
                      {project.lookingFor.map((role) => (
                        <span
                          key={role}
                          className="px-2 py-0.5 text-xs font-medium bg-[#135bec]/10 text-[#135bec] rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Project Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#135bec] rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {project.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.applications} applications
                        </span>
                      </div>
                      <Link
                        to={`/founder/project/${project.id}`}
                        className="text-sm font-medium text-[#135bec] hover:underline flex items-center gap-1"
                      >
                        View Details
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* About Tab */}
            {activeTab === "about" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  About {startupProfile.name}
                </h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {startupProfile.about}
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <h3 className="font-bold text-gray-900 mb-4">Highlights</h3>
              <div className="space-y-4">
                {startupProfile.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <span className="font-bold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Looking For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#135bec] to-blue-600 rounded-xl p-6 text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5" />
                <h3 className="font-bold">We're Hiring!</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                We're actively looking for talented individuals to join our
                team.
              </p>
              <div className="flex flex-wrap gap-2">
                {startupProfile.lookingFor.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-sm font-medium bg-white/20 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
              <div className="space-y-3">
                {startupProfile.website && (
                  <a
                    href={startupProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#135bec] transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-sm">Website</span>
                  </a>
                )}
                {startupProfile.linkedin && (
                  <a
                    href={startupProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#135bec] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
                {startupProfile.twitter && (
                  <a
                    href={startupProfile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#135bec] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm">Twitter</span>
                  </a>
                )}
                <button className="flex items-center gap-3 text-slate-600 hover:text-[#135bec] transition-colors w-full">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Contact</span>
                </button>
              </div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <h3 className="font-bold text-gray-900 mb-4">Founder</h3>
              <div className="flex items-center gap-4">
                <div
                  className="size-14 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=founder"}')`,
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {user?.name || "Nguyen Van A"}
                  </p>
                  <p className="text-sm text-slate-500">CEO & Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FounderProfile;
