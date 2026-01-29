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
  Star,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/common";

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      showToast({
        type: "error",
        title: "Terms Required",
        message: "Please agree to the Terms and Privacy Policy.",
      });
      return;
    }

    if (password !== confirmPassword) {
      showToast({
        type: "error",
        title: "Password Mismatch",
        message: "Passwords do not match.",
      });
      return;
    }

    // Demo registration - auto login
    login({
      id: "new-user",
      email,
      name: fullName,
      role: "FOUNDER",
      avatar: "",
    });
    showToast({
      type: "success",
      title: "Welcome to Tin-Up!",
      message: "Account created successfully.",
    });
    navigate("/role-selection");
  };

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Left Side - Premium Design for Signup */}
      <div
        className="hidden lg:flex w-5/12 flex-col justify-between p-12 relative text-white"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "90%",
            height: "90%",
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 60%)",
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight opacity-90">
              Tin-Up
            </span>
          </Link>
        </div>

        {/* Central Content */}
        <div className="relative z-10 max-w-sm mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Join the Elite Network
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Create an account to access Vietnam's most exclusive pool of
              technical talent and visionary founders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">
                  Verified Profiles
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Every member is manually vetted for quality assurance.
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <Star size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">
                  Smart Matching
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  AI-powered algorithms to find your perfect complement.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex justify-between text-[10px] text-slate-500 uppercase tracking-widest font-medium">
          <span>Privacy First</span>
          <span>Secure Data</span>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
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
              Create Account
            </h1>
            <p className="text-slate-500">
              Get started with your free account today.
            </p>
          </div>

          {/* LinkedIn Sign Up */}
          <button className="w-full flex items-center justify-center gap-3 bg-[#0a66c2] text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-[#004182] transition-all duration-200 shadow-md shadow-blue-200">
            <Linkedin className="text-white" />
            <span>Sign up with LinkedIn</span>
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-400">
                or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="input-group group">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="input-group group">
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group group">
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="input-group group">
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">
                  Confirm
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center mt-2">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-slate-500"
              >
                I agree to Tin-Up's{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-500 font-semibold"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-500 font-semibold"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-500/30 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-0.5 mt-4"
            >
              Create Account
            </button>
          </form>

          {/* Switch to Login */}
          <div className="text-center pb-8">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-bold text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterPage;
