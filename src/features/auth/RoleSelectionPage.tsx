import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Puzzle, ArrowRight, Cpu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/common";
import type { UserRole } from "@/types";

export function RoleSelectionPage() {
  const { setUserRole } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSelectRole = (role: UserRole) => {
    setUserRole(role);

    // Show toast and navigate to the appropriate setup page
    if (role === "FOUNDER") {
      showToast({
        type: "info",
        title: "Founder Role Selected",
        message: "Let's set up your startup project!",
        duration: 3000,
      });
      navigate("/founder/setup");
    } else {
      showToast({
        type: "info",
        title: "Co-founder Role Selected",
        message: "Let's build your profile!",
        duration: 3000,
      });
      navigate("/co-founder/profile/setup");
    }
  };

  return (
    <div className="bg-[#f8f9fc] text-gray-900 min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Aurora Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[80px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(19, 91, 236, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[80px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full blur-[80px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
      </div>

      {/* Frosted Glass Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-slate-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-900 group cursor-pointer"
          >
            <div className="size-8 rounded-lg bg-[#135bec]/10 flex items-center justify-center text-[#135bec] transition-colors group-hover:bg-[#135bec] group-hover:text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Tin-Up</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-[#135bec] transition-colors">
              How it works
            </Link>
            <Link
              to="/stories"
              className="hover:text-[#135bec] transition-colors"
            >
              Stories
            </Link>
            <Link
              to="/auth/login"
              className="text-gray-900 hover:text-[#135bec] transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 py-12 md:py-20">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Join the Vietnamese <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-purple-600">
                Startup Ecosystem
              </span>
            </h1>
            <p className="text-lg text-slate-500 font-normal leading-relaxed">
              Connect with ambitious minds. To get started, tell us about your
              primary goal for joining Tin-Up.
            </p>
          </motion.div>

          {/* Bento Grid Role Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            {/* Founder Card */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => handleSelectRole("FOUNDER")}
              className="group relative overflow-hidden bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-8 md:p-10 text-left h-full min-h-[320px] flex flex-col justify-between transition-all duration-400 hover:-translate-y-2 hover:border-[#135bec] hover:shadow-[0_20px_40px_-10px_rgba(19,91,236,0.15)]"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="size-16 rounded-2xl bg-blue-50 text-[#135bec] flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:bg-[#135bec] group-hover:text-white group-hover:scale-110 group-hover:-rotate-[5deg]">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  I am a Founder
                </h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  I have a startup idea or an existing business and I'm looking
                  for talent, co-founders, or funding to build my vision.
                </p>
              </div>

              {/* Select link */}
              <div className="relative z-10 mt-8 flex items-center gap-2 text-[#135bec] font-semibold text-sm opacity-60 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <span>Select Founder Role</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>

            {/* Co-founder Card */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => handleSelectRole("CO_FOUNDER")}
              className="group relative overflow-hidden bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-8 md:p-10 text-left h-full min-h-[320px] flex flex-col justify-between transition-all duration-400 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.15)]"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="size-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-[5deg]">
                  <Puzzle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  I am a Co-founder
                </h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  I have specialized skills (Tech, Marketing, Ops) and I want to
                  join an early-stage startup to contribute to a bigger vision.
                </p>
              </div>

              {/* Select link */}
              <div className="relative z-10 mt-8 flex items-center gap-2 text-purple-600 font-semibold text-sm opacity-60 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <span>Select Co-founder Role</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>

          {/* Progress Bar Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-xs mx-auto mt-8 opacity-80"
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-6 justify-between items-end">
                <p className="text-slate-600 text-sm font-medium leading-normal">
                  Step 1 of 4
                </p>
                <span className="text-xs text-slate-400">25% completed</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#135bec] transition-all duration-500 ease-out"
                  style={{ width: "25%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default RoleSelectionPage;
