import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Linkedin,
  User,
  Check,
  Star,
  Cpu,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/common";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();

  // Demo Fill Function
  const fillDemo = (role: "founder" | "co-founder" | "admin") => {
    if (role === "founder") {
      setEmail("founder@tin-up.com");
      setPassword("demo123");
    } else if (role === "co-founder") {
      setEmail("cofounder@tin-up.com");
      setPassword("techwizard99");
    } else {
      setEmail("admin@tin-up.com");
      setPassword("adminpass");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo login logic
    if (email.includes("founder") && !email.includes("co")) {
      login({
        id: "1",
        email,
        name: "Demo Founder",
        role: "FOUNDER",
        avatar: "",
      });
      showToast({
        type: "success",
        title: "Welcome back!",
        message: "Logged in as Founder",
      });
      navigate("/founder/profile");
    } else if (email.includes("cofounder") || email.includes("co-founder")) {
      login({
        id: "2",
        email,
        name: "Demo Co-Founder",
        role: "CO_FOUNDER",
        avatar: "",
      });
      showToast({
        type: "success",
        title: "Welcome back!",
        message: "Logged in as Co-Founder",
      });
      navigate("/co-founder/explore");
    } else if (email.includes("admin")) {
      login({
        id: "3",
        email,
        name: "Admin User",
        role: "ADMIN",
        avatar: "",
      });
      showToast({
        type: "success",
        title: "Welcome back!",
        message: "Logged in as Admin",
      });
      navigate("/admin/dashboard");
    } else {
      showToast({
        type: "error",
        title: "Login Failed",
        message: "Invalid credentials. Try a demo account.",
      });
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* --- LEFT SIDE: Premium Dark Design --- */}
      <div
        className="hidden lg:flex w-5/12 flex-col relative text-white overflow-hidden"
        style={{
          backgroundColor: "#0B1120",
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)
          `,
        }}
      >
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Accent Shape */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top: Logo */}
        <div className="relative z-20 p-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Tin-Up</span>
          </Link>
        </div>

        {/* Middle: Visual Match Representation */}
        <div className="flex-1 relative z-10 flex flex-col justify-center items-center px-12">
          {/* Card 1: Founder */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 rounded-2xl w-64 mb-[-20px] mr-12 transform -rotate-6 relative z-10"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                L
              </div>
              <div>
                <div className="text-sm font-bold">Linh Nguyen</div>
                <div className="text-[10px] text-slate-300">
                  Looking for CTO
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
              <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
            </div>
          </motion.div>

          {/* Connection Badge */}
          <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-[#0B1120] flex items-center justify-center z-20 shadow-xl relative">
            <Check size={20} className="text-white" strokeWidth={3} />
          </div>

          {/* Card 2: Co-founder */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-4 rounded-2xl w-64 mt-[-20px] ml-12 transform rotate-6 relative z-0"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                D
              </div>
              <div>
                <div className="text-sm font-bold">David Tran</div>
                <div className="text-[10px] text-blue-300">
                  Senior Tech Lead
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-[10px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full">
                React
              </span>
              <span className="text-[10px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full">
                AI
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Testimonial */}
        <div className="relative z-20 p-10">
          <div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex gap-1 text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-slate-200 mb-4">
              "I found my co-founder in 3 days. The vetting process is rigorous,
              so you only meet serious builders."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                className="w-8 h-8 rounded-full object-cover border border-white/20"
                alt="User"
              />
              <div className="text-xs">
                <div className="font-bold text-white">Sarah Le</div>
                <div className="text-slate-400">CEO @ EcoVina</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 text-[10px] text-slate-500 font-medium tracking-wide uppercase">
            <span>© 2024 Tin-Up Inc</span>
            <span>Trusted by 500+ Founders</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-7/12 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <div className="text-blue-600">
              <Cpu className="w-8 h-8" />
            </div>
            <span className="font-bold text-xl text-slate-900">Tin-Up</span>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Welcome back
            </h1>
            <p className="text-slate-500">
              Enter your details to access your dashboard.
            </p>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-semibold py-3.5 px-4 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group shadow-sm">
            <Linkedin className="text-[#0077b5] group-hover:scale-110 transition-transform" />
            <span>Sign in with LinkedIn</span>
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email */}
              <div className="input-group group">
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="input-group group">
                <div className="flex justify-between items-center mb-1 ml-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-11 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-500/30 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          {/* Switch to Sign Up */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="font-bold text-blue-600 hover:text-blue-500"
              >
                Sign up now
              </Link>
            </p>
          </div>

          {/* Quick Demo Login */}
          <div className="mt-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Quick Access
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => fillDemo("founder")}
                className="flex items-center justify-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm text-xs font-semibold text-slate-700 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Founder
              </button>
              <button
                onClick={() => fillDemo("co-founder")}
                className="flex items-center justify-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm text-xs font-semibold text-slate-700 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                Technical
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
