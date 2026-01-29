import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bell,
  Cpu,
  Globe,
  Github,
  Linkedin,
  User,
  FolderOpen,
  Dna,
  Brain,
  Award,
  Mail,
  Verified,
  Zap,
  DollarSign,
  ExternalLink,
} from "lucide-react";

const profile = {
  name: "Minh Nguyen",
  title: "Technical Co-founder",
  subtitle: "Ex-Grab • HCMC, Vietnam",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_jzSR7BFMPLcx_iSJ2X-vwkqq2rLbw3AVD1Jl4dzO6tJbnngpWY_OU2Hqk9a_h1BFdUZvEp2dKDYACYije1MFM0pX0MU_LPZcrRaggMeyIn23OcRomNGtqymWQEvV5vkBUuyFfsbjV_WejyxMiPU7ailQF5X_5RoMbL82jcS6ed2cu6v7-s1xbGTZzznvq974-sQwADK8w6gDR_eidf7-y9a3ChSb6xfYblyRVzAMRdggK4sJ6dMVAMPKGbQ9PdPCO4luqHWFQag",
  followers: "1.2k",
  vouched: 48,
  bio: `Passionate about FinTech and AI with over 7 years of experience in backend architecture. I previously co-founded a logistics startup that was acquired in 2021. 

Currently, I'm building tools to democratize financial access in SEA. I've built 2 SaaS products to $10k MRR and I'm looking for a visionary business partner (CEO/COO) who can handle operations and fundraising while I focus on the tech stack. Let's scale the next big thing in Vietnam together.`,
  links: [
    { icon: Globe, label: "minh-tech.vn", url: "#" },
    { icon: Github, label: "github.com/minhng", url: "#" },
    { icon: Linkedin, label: "linkedin.com/in/minh", url: "#" },
  ],
  projects: [
    {
      title: "PayViet",
      description: "FinTech Dashboard MVP • 2022",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvb5bybTFL1DhNerRmheaot7PwpRVP556kjxzeaCxn7439_cSZXKz04gDRxjfSz33wtEMmmZMSvD5I8Wer2qncGuInMweA0lGNR6Zbw76qtn6SfbnOCDK04t_sh3HdXNoKJeNf47UuiWj1ZeU_9U7VLl072Ilu36XbyfVmixTjSDdC05qFGcrYxyTN7HcALrKKzZRNnS0bLHemYnm7V0G7ymMkc-OhKBeFgZIv_x6CoV44ZheBl70hDJZVBVqLWlG2SrObveAqc4",
    },
    {
      title: "EduBot",
      description: "EdTech Learning Platform • 2020",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBDDwVf__TVmyan27jXbn_UXHMMTyMjtZzarwVHzddfsXvERXT_Xps-OQ6mJQMne4Ym3I9kzeGK-JtA0zHuzvx1scLBgz0eBVLrEnnxtigf2vRqP4n8XFR5bJ1ERklHH3SWOx7xvEU9qmXfGqWtHhsp_MPWrCv50mNIkpzUAqJh5N2A5SaLkprbKyhHHiKUsniSDbkap5_AJP41JcKOfkOE_c-E8NvR5Mt42I9GHqT-wij22XHhTyccPODLlP_B61DKqnnVGBNxsG0",
    },
  ],
  dna: [
    { label: "Technical", value: 95 },
    { label: "Execution", value: 85 },
    { label: "Leadership", value: 70 },
    { label: "Vision", value: 60 },
  ],
  skills: [
    "#Python",
    "#React",
    "#NodeJS",
    "#PostgreSQL",
    "#AWS",
    "#SaaS",
    "#Fundraising",
  ],
  endorsers: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDY5AccTorKlis-NlrZglq-yYby9G6W17N0zw1bVKglyrznTKk07_4twjReFuLeZKAabcnt4330iJg_rdeLbq9GLSCaV6ynQV75xj04bkmxQowQ7bJTh53qbMuo5Gzm3ee-7IOtT3KZ6aLEfb4_ROY83hcCHixGkWAxKpQsrr7yNJvMiN0BUHx8C8wIRf0_jYlUfQkdWFXceP3C4lX1ZwGvsndh2gNjrF2rIUi_2ZHxXm6Cx1maY_W-fUUJU4LIiURkfZ16V5oJJj4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvYo7nhasX-aAGMXCd7ePIGdFOOLEPuhQfdIc6uTcIR2rWoiNOLLlJ36d5m6KZ1rvIThehu6CaSKt05TDkYaLy0hYkmbzNbehkE9vqrs-G4MHkcijBYCu-De-43OH0HDOdKkgV5436wNdgmeoCuYyjlM4Re8QolbAGs3jLUsa_lv8T1Bezq8jlzbRlGgGgderG-_adLBUmAPMkmlIUOsnRg2PYV3c-1xMbW7xRpGS1-A-eUpaBNjleiRGiniZ9HtdRGKS1p-8fU-Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBc4GzpqljCzwVvdbPRUTWzA6bYXiQ64H24uDEZhwuW5Nguzlnkc6wo1YGZQr8rl6y1TbAXn5LPtBsZapO0RuSuIogDSd3P0KKKmSJ7_K1okYxGpFRmSRH-1xIyC8Jyi8sYqg6wRXW-UGURLu8ynSV8VNO36ezrnoq9FXetliwPQi2-0LrvUp77i9loDyL2FYLCEb0eyQMRmIgIjdGGTDvCCG9T41TLjCpIyZZoAMpsoz0AqSHKi-fK4DMgGwrB2G2pthZfciVHPcA",
  ],
};

export function CofounderProfile() {
  return (
    <div className="bg-[#f6f6f8] min-h-screen flex flex-col relative text-[#0d121b]">
      {/* Aurora Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[90px]" />
      </div>

      {/* Top Navigation (Frosted Glass) */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="text-[#135bec]">
                <Cpu className="w-8 h-8" />
              </div>
              <h2 className="text-[#0d121b] text-xl font-bold tracking-tight">
                Tin-Up
              </h2>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/co-founder/explore"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                Explore
              </Link>
              <Link
                to="/co-founder/projects"
                className="text-sm font-medium text-slate-600 hover:text-[#135bec] transition-colors"
              >
                My Projects
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

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="text-slate-500 hover:text-[#135bec] transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <div
                className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDX242cDPRvmsd2-kKZTkfpAEHGoc8NueLdHy5Yp7zoeiFKYUDjm1d9LLQo4d-ohDgx4PyKdN8HSfQjo3VxZHOcAADPI6zwNcZfsi8kNTmCUh7ft8CiobEu1EQos-pHKMMeCctHBntb3PkU4CNWunLnTz5A8azhRq8ezvGyC1MaGRL_oRs-EJ4WMsx4ndpuWS3UsZE0FylRh_zRZWuBJ1et0mI_ttmTvzd-CjrcJm22pjIjcnS9vsOGVSQnDYleO6IX1WWus5nbH6E')`,
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Profile Card (3 cols) */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-transparent -z-0" />

              <div className="relative z-10 mb-4">
                <div
                  className="w-28 h-28 rounded-2xl bg-cover bg-center shadow-md ring-4 ring-white"
                  style={{ backgroundImage: `url('${profile.avatar}')` }}
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                  <Verified className="w-5 h-5 text-[#135bec]" />
                </div>
              </div>

              <h1 className="text-xl font-bold text-slate-900">
                {profile.name}
              </h1>
              <p className="text-sm font-medium text-[#135bec] mt-1">
                {profile.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">{profile.subtitle}</p>

              <div className="flex gap-2 mt-6 w-full">
                <button className="flex-1 bg-[#135bec] text-white text-sm font-semibold h-10 rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                  Connect
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>

              <div className="w-full h-px bg-slate-100 my-6" />

              <div className="w-full flex justify-between items-center px-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Followers
                  </span>
                  <span className="text-lg font-bold text-slate-800">
                    {profile.followers}
                  </span>
                </div>
                <div className="h-8 w-px bg-slate-100" />
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Vouched
                  </span>
                  <span className="text-lg font-bold text-slate-800">
                    {profile.vouched}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Social / Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
            >
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-400" />
                On the web
              </h3>
              <div className="space-y-3">
                {profile.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#135bec] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#135bec] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="truncate">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Center Column: Main Content (6 cols) */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col gap-6">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-[#135bec]" />
                <h2 className="text-lg font-bold text-slate-900">About Me</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-[15px] whitespace-pre-line">
                {profile.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                  <Zap className="w-3 h-3" /> Serial Founder
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <DollarSign className="w-3 h-3" /> Bootstrapped
                </span>
              </div>
            </motion.div>

            {/* Portfolio Grid Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-[#135bec]" />
                  <h2 className="text-lg font-bold text-slate-900">
                    Past Ventures
                  </h2>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#135bec] hover:text-blue-700"
                >
                  View All
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.projects.map((project) => (
                  <div key={project.title} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl border border-slate-100 aspect-video relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium flex items-center gap-1">
                          View Case <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <h3 className="font-bold text-slate-900 group-hover:text-[#135bec] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Startup DNA & Skills (3 cols) */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col gap-6">
            {/* Startup DNA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-2 mb-6">
                <Dna className="w-5 h-5 text-[#135bec]" />
                <h2 className="text-lg font-bold text-slate-900">
                  Startup DNA
                </h2>
              </div>
              <div className="space-y-5">
                {profile.dna.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">
                        {item.label}
                      </span>
                      <span className="font-bold text-[#135bec]">
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-[#135bec] rounded-full"
                        style={{
                          opacity: 1 - index * 0.15,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills / Tags Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-[#135bec]" />
                <h2 className="text-lg font-bold text-slate-900">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Endorsements Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-[#135bec] to-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-200 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-white/80" />
                  <h3 className="font-bold text-lg">Top Rated</h3>
                </div>
                <p className="text-sm text-blue-100 mb-4">
                  Minh is in the top 5% of technical founders on Tin-Up.
                </p>
                <div className="flex -space-x-2">
                  {profile.endorsers.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-[#135bec] bg-cover bg-center"
                      style={{ backgroundImage: `url('${avatar}')` }}
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#135bec] bg-white text-[#135bec] text-xs font-bold flex items-center justify-center">
                    +12
                  </div>
                </div>
              </div>
              {/* Decor */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CofounderProfile;
