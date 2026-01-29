import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  Compass,
  Users,
  Verified,
  UserPlus,
  MapPin,
  TrendingUp,
  Play,
  Presentation,
  Handshake,
  Banknote,
  Wrench,
  Plus,
  Send,
} from "lucide-react";

// Mock data for the startup
const startupData = {
  name: "PayInstant VN",
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5PQcq5IE2QhATi_3B8h53LEv-r-FbJ2o5v-Al92n6tmmtDRuBor5USAzSk4f_J8Gzi7UBHLik1adtJS5V6S7qToObibEzfOAcQ4eIz5jE2kIk52kF0KZOGyGL_nIyxNspJ-QvIzEftA38kBuR_M7XPujUTGgLRQLN1ZKpCLEVE04dpF4qTDh3BllrXGHyPR5AD3WZb1vEu0p4pjYC-oUXR0kIOw_1Lyaogt-1uLJL0gjStfPZlU2CdlTQq5ewhnEGxlD1J45qoYs",
  verified: true,
  tags: ["Fintech", "B2B"],
  location: "Ho Chi Minh City",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAVuAwrezYyEQmH5kF3U2ODSY0t3UJFRrdYfKe-RPGCrw8VDi0hu4UlBz6-Lz5J_czsroLTofGAK_5EoiJx29W75PTqHPq129VVHphhz4ISVyC4w_LoA4qDvI3WbLKSPghaPTcT25kmC9TOmyXMb8AND6mC7DsPM9QM0o0vavOKISu6CLYCDitoMfHgyJU7i40lDRb1EL1rmcqFcLgp5oEGjNQQstfP6aP2R7FUkxgW9_lIa8InAdl3TyfE4BsccCHfBbegkVk-h5s",
  stats: {
    stage: "Pre-Seed",
    raised: "$50k",
    burnRate: "$2.5k/mo",
    runway: "18 mos",
  },
  vision: {
    headline:
      "Simplifying cross-border payments for Vietnamese SMEs to unlock global markets.",
    description: [
      "We are building the financial infrastructure that enables local businesses to transact globally with lower fees and settlement times under 5 minutes.",
      "Traditional banking SWIFT transfers take 3-5 days and cost up to 5% in fees. PayInstant leverages blockchain settlement layers to reduce this to <1% and near-instant finality, all while maintaining full regulatory compliance within Vietnam.",
    ],
    updatedAt: "2 days ago",
  },
  pitchDeck: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5xp6BDBXK8Dtt-cPmY2O-wy3nrRSzhNuyY-B4CrhYD3AdF7PgS3ar5PN7RcYvKRcts05ZmGlVilC6hEdClZMq2JYPc0dwK9dpSJJFca5bdvIaVR1i9JPUnN_oeHFYYxsL46-VBfk_XKWxWewvCGFpuxeeGNNFJouQcCapA0W_lrprAxfOHK1ceY3MJI9liQoE2Q3tvzPfdZsh-JPV_QNqgTpVJcbJ7HJs2jat4sZE347JkwAiqINbZYNX7NQURZDQew3MLQPNwIk",
    slides: 12,
  },
  metrics: [
    {
      icon: Users,
      value: "1,200+",
      label: "Waitlist Signups",
      color: "orange",
    },
    { icon: Banknote, value: "$250B", label: "Market TAM", color: "green" },
    {
      icon: Handshake,
      value: "3",
      label: "Strategic Partners",
      color: "purple",
    },
  ],
  openings: [
    {
      title: "Technical Co-founder",
      type: "Equity",
      description:
        "Looking for a full-stack expert with blockchain experience (Solidity, Rust).",
      urgent: true,
    },
    {
      title: "Growth Lead",
      type: "Salary",
      description:
        "Someone to drive B2B partnerships and early user acquisition.",
      urgent: false,
    },
  ],
  team: [
    {
      name: "Minh Tran",
      role: "CEO & Founder",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKyGatW7iVYEqPJXY697ytJ4q-KBqGfqKAd337x1-znse3USdNG3AUUj6SB_5TrDGZE9IVnv0lCl__Lw2RgZkTVHbc7EamKt6Muxrz_YkPbn25NZJsZ_temflRi7z3XDL76WfoS8KADY0XIaEn1OwwjIiDyqbBxPqAwzsAbFV-hRyrLMp8l3ldu8iti6KNB-MMTjnB_KZhI1TLpAbGXaQgrLNiYMzzjbOHerV_fhVQjSvaCGtTVo80x4sPCXYpYt68GvYTQquE9zA",
    },
    {
      name: "Sarah Nguyen",
      role: "Head of Product",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_f3VKEiurAp_MD5oU2PoQw_WNzEnYiRMke16PXy-GcE56ZEUvZblwPdmztx3CTMSKXMDqIyg62ddDEBoDM5jNQy3SCuj8O_lzGa9YwV73diUMXY52wfC3lzaF5Qxva_6d1xh1wFzbJRdC7-XRSRgFgFv9BV0_KKcaERba1NQ0PhWIFQ_pqES7LUwGBAN-g8JPdfwjpVu4T8aGPBNP5XLwPCUNUXugVGHXYpaRQlKHoiBC9Jgu_26Y_SZOLR4eRBSgERIbUjVEMN4",
    },
  ],
};

const getMetricColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string }> = {
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
  };
  return colors[color] || colors.orange;
};

export function ProjectDetails() {
  return (
    <div className="font-display bg-[#f6f6f8] text-[#0d121b] min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Aurora Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-purple-200/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#135bec]/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-[#e7ebf3] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 text-[#135bec]">
            <div className="size-8 flex items-center justify-center bg-[#135bec] text-white rounded-lg">
              <Rocket className="w-5 h-5" />
            </div>
            <h2 className="text-[#0d121b] text-lg font-bold tracking-tight">
              Tin-Up
            </h2>
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/founder/explore"
              className="text-[#135bec] font-semibold text-sm leading-normal flex items-center gap-1 bg-[#135bec]/5 px-3 py-1.5 rounded-full transition-colors"
            >
              <Compass className="w-4 h-4" /> Explore
            </Link>
            <Link
              to="/founder/network"
              className="text-[#4c669a] hover:text-[#0d121b] text-sm font-medium leading-normal transition-colors"
            >
              Network
            </Link>
            <Link
              to="/founder/messages"
              className="text-[#4c669a] hover:text-[#0d121b] text-sm font-medium leading-normal transition-colors"
            >
              Messages
            </Link>
          </nav>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <Link
              to="/founder/profile"
              className="text-[#4c669a] hover:text-[#0d121b] text-sm font-medium leading-normal hidden sm:block"
            >
              My Profile
            </Link>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-9 border-2 border-white shadow-sm cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3HAyr3z4vr4894NZPi2CR0G9NJxsk2WAW4KOkR_8Uy-rh95p1kHArT2LYzS9lP7CTyjToxPQpJDBcy0iVgbd0PpCYgy5pCkubagPjxMpOzTzwRTuH2LPyMa-rb4yvH0fAJjE5Py9Gc55iCKA81B24f6tFWs3W59PzRoioaytOtexhjuu-HeDRUkk9WmcQJauYwfp2kwa5hvILqLuxWgepEvE-eRMebs1gqArTfGnuSQo2XIQff6vwfMB5YrWYrt7AhNBItzZpexM')",
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Identity & Stats (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Identity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e7ebf3] flex flex-col items-center text-center gap-4"
            >
              <div className="relative">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-xl size-28 shadow-inner"
                  style={{ backgroundImage: `url('${startupData.logo}')` }}
                />
                {startupData.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 border-2 border-white">
                    <Verified className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#0d121b] text-xl font-bold leading-tight">
                  {startupData.name}
                </h1>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {startupData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-gray-100 text-[#4c669a] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-[#135bec] hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-500/20">
                <UserPlus className="w-4 h-4" />
                Connect
              </button>
              <div className="flex gap-3 w-full pt-2">
                <button className="flex-1 bg-white border border-[#e7ebf3] hover:bg-gray-50 text-[#0d121b] font-medium py-2 rounded-lg text-sm transition-colors">
                  Follow
                </button>
                <button className="flex-1 bg-white border border-[#e7ebf3] hover:bg-gray-50 text-[#0d121b] font-medium py-2 rounded-lg text-sm transition-colors">
                  Share
                </button>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-[#e7ebf3] flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-[#0d121b] font-bold text-sm border-b border-[#e7ebf3] pb-3">
                <TrendingUp className="w-5 h-5 text-[#135bec]" />
                Traction & Funding
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#4c669a] text-xs font-medium uppercase tracking-wider">
                    Stage
                  </p>
                  <p className="text-[#0d121b] text-lg font-bold">
                    {startupData.stats.stage}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#4c669a] text-xs font-medium uppercase tracking-wider">
                    Raised
                  </p>
                  <p className="text-[#135bec] text-lg font-bold">
                    {startupData.stats.raised}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#4c669a] text-xs font-medium uppercase tracking-wider">
                    Burn Rate
                  </p>
                  <p className="text-[#0d121b] text-base font-semibold">
                    {startupData.stats.burnRate}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#4c669a] text-xs font-medium uppercase tracking-wider">
                    Runway
                  </p>
                  <p className="text-[#0d121b] text-base font-semibold">
                    {startupData.stats.runway}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-0 shadow-sm border border-[#e7ebf3] overflow-hidden relative group"
            >
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-sm">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-[#0d121b]">
                  {startupData.location}
                </span>
              </div>
              <div
                className="h-32 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${startupData.mapImage}')` }}
              />
            </motion.div>
          </div>

          {/* Center Column: Vision & Pitch (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-[#e7ebf3]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#135bec]/10 text-[#135bec] text-xs font-bold uppercase tracking-wide">
                  Vision Statement
                </span>
                <span className="text-xs text-gray-400">
                  Updated {startupData.vision.updatedAt}
                </span>
              </div>
              <h2 className="text-[#0d121b] text-2xl sm:text-[32px] font-bold leading-[1.2] mb-6 tracking-tight">
                {startupData.vision.headline}
              </h2>
              <div className="space-y-4 text-[#4c669a] text-base sm:text-lg leading-relaxed font-normal">
                {startupData.vision.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Pitch Deck Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-1 shadow-sm border border-[#e7ebf3] overflow-hidden"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden relative aspect-video group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${startupData.pitchDeck.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full p-4 transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <Play className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Presentation className="w-4 h-4" />
                  Pitch Deck ({startupData.pitchDeck.slides} Slides)
                </div>
              </div>
            </motion.div>

            {/* Highlights / Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {startupData.metrics.map((metric, index) => {
                const colors = getMetricColorClasses(metric.color);
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-[#e7ebf3] shadow-sm flex flex-col gap-2"
                  >
                    <div
                      className={`size-10 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center mb-1`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-[#0d121b]">
                      {metric.value}
                    </span>
                    <span className="text-sm text-[#4c669a]">
                      {metric.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Needs & Team (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Talent Needed Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-[#e7ebf3] flex flex-col gap-4"
            >
              <div className="flex items-center justify-between border-b border-[#e7ebf3] pb-3">
                <div className="flex items-center gap-2 text-[#0d121b] font-bold text-sm">
                  <Wrench className="w-5 h-5 text-[#135bec]" />
                  Talent Needed
                </div>
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Urgent
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {startupData.openings.map((opening, index) => (
                  <div key={index}>
                    {index > 0 && (
                      <hr className="border-dashed border-gray-200 mb-3" />
                    )}
                    <div className="group cursor-pointer">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-sm font-semibold text-[#0d121b] group-hover:text-[#135bec] transition-colors">
                          {opening.title}
                        </h4>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded ${
                            opening.type === "Equity"
                              ? "bg-[#135bec]/10 text-[#135bec]"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {opening.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#4c669a] line-clamp-2">
                        {opening.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-2 py-2 text-xs font-semibold text-[#135bec] bg-[#135bec]/5 hover:bg-[#135bec]/10 rounded-lg transition-colors border border-[#135bec]/20">
                View All Openings
              </button>
            </motion.div>

            {/* Team Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-[#e7ebf3] flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-[#0d121b] font-bold text-sm border-b border-[#e7ebf3] pb-3">
                <Users className="w-5 h-5 text-[#135bec]" />
                Current Team
              </div>
              <div className="flex flex-col gap-4">
                {startupData.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-full bg-cover bg-center border border-gray-200"
                      style={{ backgroundImage: `url('${member.avatar}')` }}
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#0d121b]">
                        {member.name}
                      </span>
                      <span className="text-xs text-[#4c669a]">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Join placeholder */}
                <div className="flex items-center gap-3 opacity-60">
                  <div className="size-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#0d121b]">
                      You?
                    </span>
                    <span className="text-xs text-[#4c669a]">
                      Join the team
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Action Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#135bec] to-blue-600 rounded-xl p-5 shadow-lg text-white flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
              <h3 className="font-bold text-lg relative z-10">Interested?</h3>
              <p className="text-blue-100 text-xs relative z-10 mb-2">
                Connect directly with the founders to discuss synergy.
              </p>
              <button className="bg-white text-[#135bec] text-sm font-bold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors w-full shadow-sm relative z-10 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetails;
