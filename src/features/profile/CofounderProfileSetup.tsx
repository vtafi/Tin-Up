import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Camera,
  Plus,
  X,
  ArrowRight,
  Sparkles,
  Cpu,
  Search,
  Verified,
  Lightbulb,
  Brain,
  LayoutGrid,
  Briefcase,
  MapPin,
  ExternalLink,
  Pencil,
} from "lucide-react";

const skills = [
  { id: "pm", label: "Product Management", color: "blue" },
  { id: "ux", label: "UX/UI Design", color: "purple" },
  { id: "figma", label: "Figma", color: "indigo" },
  { id: "startup", label: "Startup Experience", color: "orange" },
];

const suggestedSkills = ["Growth Hacking", "Public Speaking", "Python"];

const portfolioItems = [
  {
    id: "1",
    title: "Fintech App Redesign",
    description:
      "Complete overhaul of a banking app focusing on user retention and gamification.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaRKHC4Li5N97xFnc201lOUBPJ21oQfLKUT2oidim5HI9JA6MyZdc3I07pMEP5S8aBt0yXi48wtJw5ejiCAO6sXjHxgLB3GkmI8qVdmCKxOCBq-O-B_MlUZM8et0jkdFm_tdf2-QalDUpeKBbZNRV8Iwk5kzImaX7bfcd5e3RvWXJ0lxZuLsa9VtdwM1LQyYUATd2pDjvr88Tyt82gKEcAmxLYuJ3c2A--r925AEOvJaOkaDNIYNjQ3EX9Koc_jTXegYvyU55OBpo",
    colorAccent: "blue",
  },
  {
    id: "2",
    title: "E-commerce SaaS Platform",
    description:
      "Designed the vendor dashboard for a multi-tenant e-commerce solution.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0DR2ugNZ5NbkwtO18xO7OawsXMCIF3YOv-cIdCUCrhqFamJ5cS9bOHgDT64O3rhtZivICDP52JRukUfqDuciGpoQdclsX88Dtv9gZtCUglRO76SbsUWWT6DRW76gXz5snYD89miTiJWLytwy9hjmP2Ek8SayzBQ9J10iPH8cN9T2txuBQFDEzdOOa2mfGzQIcYFBxA9riVYCD1PCqBFjV9uO25jD5elo84biVHcplvnoEGX2oUI9gkgX7Z5W5X9GaK5_RJLo7ayI",
    colorAccent: "purple",
  },
];

export function CofounderProfileSetup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [displayName, setDisplayName] = useState("Nguyen Minh");
  const [headline, setHeadline] = useState("Product Designer");
  const [location, setLocation] = useState("Ho Chi Minh City, VN");
  const [aboutMe, setAboutMe] = useState(
    "Passionate about fintech and edtech. I have 5 years of experience in product design and I'm looking for a technical co-founder to build the next big thing in Vietnam's startup ecosystem."
  );
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "pm",
    "ux",
    "figma",
    "startup",
  ]);
  const [skillSearch, setSkillSearch] = useState("");

  const handleSkillRemove = (skillId: string) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skillId));
  };

  const handlePublish = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/co-founder/explore");
  };

  const getSkillColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-50 to-blue-100/40 text-blue-700 border-blue-200/60 shadow-[0_4px_12px_-4px_rgba(59,130,246,0.3)]",
      purple:
        "from-purple-50 to-purple-100/40 text-purple-700 border-purple-200/60 shadow-[0_4px_12px_-4px_rgba(168,85,247,0.3)]",
      indigo:
        "from-indigo-50 to-indigo-100/40 text-indigo-700 border-indigo-200/60 shadow-[0_4px_12px_-4px_rgba(99,102,241,0.3)]",
      orange:
        "from-orange-50 to-orange-100/40 text-orange-800 border-orange-200/60 shadow-[0_4px_12px_-4px_rgba(249,115,22,0.3)]",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-700">
      {/* Aurora Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-slate-50">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-500/15 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[10%] right-[-15%] w-[60%] h-[60%] bg-purple-500/15 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-[-10%] left-[20%] w-[50%] h-[60%] bg-orange-400/15 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-400/15 rounded-full blur-[100px] mix-blend-multiply"
        />
      </div>

      {/* Glass Navbar */}
      <nav className="sticky top-0 z-50 w-full shadow-sm transition-all duration-300 backdrop-blur-[24px] bg-white/65 border-b border-white/40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative text-white flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-inner border border-white/20">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                Tin-Up
              </span>
            </Link>

            {/* Nav Pills */}
            <div className="hidden md:flex items-center gap-1.5 bg-white/40 p-1.5 rounded-full border border-white/60 backdrop-blur-md shadow-sm">
              <Link
                to="/co-founder/explore"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-5 py-2 rounded-full hover:bg-white/80 transition-all duration-200"
              >
                Explore
              </Link>
              <span className="text-sm font-bold text-blue-700 bg-white shadow-[0_2px_10px_-2px_rgba(59,130,246,0.2)] px-5 py-2 rounded-full border border-blue-50/50">
                My Profile
              </span>
              <Link
                to="/co-founder/network"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-5 py-2 rounded-full hover:bg-white/80 transition-all duration-200"
              >
                Network
              </Link>
              <Link
                to="/co-founder/messages"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-5 py-2 rounded-full hover:bg-white/80 transition-all duration-200"
              >
                Messages
              </Link>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-5">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-bold text-slate-900">
                  Nguyen Minh
                </span>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  Co-founder
                </span>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-40 transition duration-300 blur-sm" />
                <div
                  className="w-11 h-11 relative rounded-full bg-cover bg-center ring-2 ring-white shadow-md group-hover:ring-offset-1 transition-all duration-300"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARw8QU7PXcV12pc1XdeZhiQpCqp2JVm7hhZf3dA3RQjkusmT2GgDCzYNydW71ng8tlRJFftHYEm9EdRLh-8zM26qKih77OleU-EZBPZEA4rmxYhMHwl-ttOzU8jCDBN9jruLm39liXAJzlp3VJvfmKM687jb6UpY5ol0qVMYfh3rG7xHw1Zq3qXg1P5k5biW6PQ4DHFh-p-K2-9IqVaUE_kBKEiVRp-rU1mBs9c7cRoS2M73KvP2nFaq5RPFXsWnJl8WdTOCDwsZE')",
                  }}
                />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-sm ring-1 ring-emerald-500/20" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm shadow-blue-500/20">
                Step 2 of 4
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
                Build Your
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500">
                Co-founder Profile
              </span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-xl font-medium">
              Complete your profile to find the perfect startup match tailored
              to your skills.
            </p>
          </div>

          {/* Profile Strength Card */}
          <div className="flex-1 max-w-sm w-full bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12),0_0_1px_rgba(0,0,0,0.1)] transition-all duration-300 group">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 shadow-sm">
                  <Verified className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Profile Strength
                </span>
              </div>
              <span className="text-lg font-black text-blue-600">65%</span>
            </div>
            <div className="w-full bg-slate-100/80 rounded-full h-3 mb-4 overflow-hidden shadow-inner border border-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-3 rounded-full relative shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              >
                <div className="absolute inset-0 bg-white/30 w-full h-full animate-pulse" />
              </motion.div>
            </div>
            <p className="text-xs font-semibold text-slate-500 flex items-center gap-2 bg-white/50 p-2 rounded-xl border border-white/50">
              <Lightbulb className="w-4 h-4 text-orange-500" />
              <span>
                Add 2 more skills to reach{" "}
                <span className="text-slate-800 font-bold">80%</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Profile Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] border border-white/60 flex flex-col items-center text-center relative overflow-hidden group hover:bg-white/80 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-blue-100/80 via-purple-50/50 to-transparent" />

              <div className="relative mt-12 mb-8 z-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="w-40 h-40 rounded-full bg-white p-1.5 shadow-2xl relative z-10">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center border-4 border-white"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEhBbcgq6KLu3RmcX-PWcVrZVMlux1UtO4BYJqVf-whSzn4D6idSZ74BmhBC-2z1Gg1q6FEUrTl8NFSJi_iphT27w4nwF66GKzLzsct0bQWhoojlUnY6Dmv2PW9EejdIj5v-2kIfMGfMlPmy6gptczI5lRCe48fB_wOaMH41O3oalkizNQ2QjNIYuC0D4vobEzVfoEjOy1cMoOqL-NYaJEjzCrK6OL5qFxQFt7IPRxTtIDPyCB0Z3WuQuH-VGu2lf-YT6GHZKeiSY')",
                      }}
                    />
                  </div>
                  <button className="absolute bottom-1 right-1 bg-white text-slate-700 p-3 rounded-full shadow-lg border border-slate-100 hover:text-blue-600 hover:border-blue-100 hover:shadow-blue-500/30 transition-all flex items-center justify-center group-hover:scale-110 duration-200 z-20">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="w-full space-y-6 px-8 pb-10 z-10">
                <div className="text-left w-full group/input">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 pl-1 transition-colors group-hover/input:text-blue-600">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full bg-white/50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 font-bold focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-sm hover:border-blue-200"
                  />
                </div>

                <div className="text-left w-full group/input">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 pl-1 transition-colors group-hover/input:text-purple-600">
                    Headline / Role
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within/input:text-purple-500" />
                    <input
                      type="text"
                      value={headline}
                      onChange={(e) => setHeadline(e.target.value)}
                      className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 pr-5 py-3.5 text-slate-900 font-bold focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 focus:bg-white outline-none transition-all shadow-sm hover:border-purple-200"
                    />
                  </div>
                </div>

                <div className="text-left w-full group/input">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 pl-1 transition-colors group-hover/input:text-orange-500">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within/input:text-orange-500" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 pr-5 py-3.5 text-slate-900 font-bold focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm hover:border-orange-200"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] border border-white/60 p-8 flex flex-col h-full hover:bg-white/80 transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-slate-900">About Me</h3>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wide">
                    Saved
                  </span>
                </div>
              </div>
              <div className="relative flex-1">
                <textarea
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  maxLength={500}
                  placeholder="Tell potential co-founders about your background, vision, and what drives you..."
                  className="w-full h-full min-h-[200px] bg-white/50 border border-slate-200 rounded-2xl p-5 text-slate-700 text-base leading-relaxed focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all shadow-inner hover:border-blue-200 placeholder:text-slate-400"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-purple-700 bg-purple-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 border border-purple-100 transition-all hover:shadow-md hover:shadow-purple-100">
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                  AI Enhance
                </button>
                <span className="text-xs font-semibold text-slate-400">
                  {aboutMe.length}/500 characters
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] border border-white/60 p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-purple-50/20 to-transparent -z-10 rounded-bl-full opacity-60" />

              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-3.5 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                    <Brain className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Skills & Expertise
                    </h3>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                      Highlight your top skills to get matched accurately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative group/search z-10">
                  <Search className="absolute left-5 top-[18px] text-slate-400 w-6 h-6 group-focus-within/search:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    value={skillSearch}
                    onChange={(e) => setSkillSearch(e.target.value)}
                    placeholder="Add a skill (e.g., React, Fundraising, Marketing)"
                    className="w-full bg-white border border-slate-200 rounded-2xl pl-14 pr-20 h-16 text-lg text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm hover:shadow-md hover:border-blue-200"
                  />
                  <button className="absolute right-3 top-3 h-10 w-10 flex items-center justify-center bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex gap-3 mt-5 overflow-x-auto pb-2 items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide whitespace-nowrap mr-1">
                    Suggested:
                  </span>
                  {suggestedSkills.map((skill) => (
                    <button
                      key={skill}
                      className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all bg-white hover:shadow-md hover:-translate-y-0.5 transform duration-200"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {skills
                  .filter((s) => selectedSkills.includes(s.id))
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className={`flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-b ${getSkillColor(
                        skill.color
                      )} rounded-2xl border font-bold text-sm hover:-translate-y-0.5 transform duration-200 transition-all cursor-default group`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full bg-${skill.color}-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]`}
                      />
                      {skill.label}
                      <button
                        onClick={() => handleSkillRemove(skill.id)}
                        className={`text-${skill.color}-400 hover:text-${skill.color}-600 hover:bg-${skill.color}-100 rounded-full p-0.5 ml-1 transition-colors`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Portfolio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] border border-white/60 p-8 md:p-10 flex-1"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-orange-400 to-rose-500 p-3.5 rounded-2xl text-white shadow-lg shadow-orange-500/30">
                    <LayoutGrid className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Portfolio
                    </h3>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                      Showcase your past work and projects.
                    </p>
                  </div>
                </div>
                <button className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100 shadow-sm flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Public Link
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
                  >
                    <div
                      className="aspect-[4/3] bg-slate-100 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <span className="bg-white/95 backdrop-blur text-slate-900 px-5 py-2.5 rounded-full font-bold text-xs shadow-xl flex items-center gap-2">
                          View Project <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5 border-t border-slate-50 relative bg-white">
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${item.colorAccent}-400 to-${item.colorAccent === "blue" ? "indigo" : "pink"}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                      />
                      <h4
                        className={`font-bold text-slate-900 text-sm mb-1.5 group-hover:text-${item.colorAccent}-600 transition-colors`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 transform translate-y-2 group-hover:translate-y-0">
                      <button className="bg-white p-2.5 rounded-full text-slate-700 hover:text-blue-600 shadow-lg border border-slate-100 hover:scale-110 transition-all">
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add New Project */}
                <div className="group flex flex-col items-center justify-center aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:border-blue-400 transition-all cursor-pointer hover:shadow-lg">
                  <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 group-hover:shadow-blue-200 group-hover:shadow-md transition-all duration-300 border border-slate-100">
                    <Plus className="w-8 h-8 text-blue-500" />
                  </div>
                  <span className="text-sm font-bold text-slate-500 group-hover:text-blue-700 transition-colors">
                    Add New Project
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="sticky bottom-8 w-full px-4 sm:px-6 z-40 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex justify-center md:justify-end pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-slate-900/90 text-white p-3 pl-8 pr-3 rounded-full shadow-2xl shadow-blue-900/30 flex items-center gap-10 border border-white/10 backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-50" />

            <div className="flex flex-col text-xs gap-0.5 relative z-10">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                Profile Status
              </span>
              <span className="font-bold text-amber-400 flex items-center gap-2 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                </span>
                Draft
              </span>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <button className="px-6 py-3 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                Preview
              </button>
              <button
                onClick={handlePublish}
                disabled={isLoading}
                className="px-8 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Save & Publish
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CofounderProfileSetup;
