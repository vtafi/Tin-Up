import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Headphones, Cpu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/common";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);

      // Determine redirect path based on email (role)
      let redirectPath = "/";
      let welcomeMessage = "Welcome back!";

      if (email.includes("cofounder") || email.includes("co-founder")) {
        redirectPath = "/co-founder/explore";
        welcomeMessage = "Welcome to Co-founder Dashboard!";
      } else if (email.includes("founder")) {
        redirectPath = "/founder/matching";
        welcomeMessage = "Welcome to Founder Dashboard!";
      } else if (email.includes("admin")) {
        redirectPath = "/admin/dashboard";
        welcomeMessage = "Welcome to Admin Panel!";
      } else {
        // Default to co-founder
        redirectPath = "/co-founder/explore";
        welcomeMessage = "Welcome to Tin-Up!";
      }

      showToast({
        type: "success",
        title: "Login Successful",
        message: welcomeMessage,
        duration: 3000,
      });

      navigate(redirectPath);
    } catch {
      setError("Invalid email or password");
      showToast({
        type: "error",
        title: "Login Failed",
        message: "Please check your credentials and try again.",
        duration: 5000,
      });
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#f6f6f8] overflow-hidden">
      {/* Left Column: Visual with Testimonial */}
      <div className="hidden lg:block lg:w-1/2 relative h-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop')",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-10 left-10 right-10 text-white p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20"
        >
          <p className="text-lg font-medium leading-relaxed">
            "Tin-Up helped us find our technical co-founder within weeks. The
            matching algorithm is incredibly accurate for the local ecosystem."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://api.dicebear.com/7.x/avataaars/svg?seed=linh')",
              }}
            />
            <div>
              <p className="font-bold text-sm">Linh Nguyen</p>
              <p className="text-xs opacity-80">CEO, FinTech Vietnam</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-[#f6f6f8] relative overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6 lg:px-12">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-900 group cursor-pointer"
          >
            <div className="text-[#135bec]">
              <Cpu className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Tin-Up</h2>
          </Link>
          <div className="text-sm font-medium">
            <span className="text-slate-500">New here?</span>
            <Link
              to="/auth/register"
              className="text-[#135bec] hover:underline ml-1"
            >
              Sign up
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[480px] flex flex-col gap-8"
          >
            {/* Header Text */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                Find your perfect <br />
                <span className="text-[#135bec]">co-founder.</span>
              </h1>
              <p className="text-slate-500 text-base">
                Log in to access the Vietnamese startup ecosystem.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-5">
              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* LinkedIn Login Button */}
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white border border-slate-200 h-14 px-5 text-gray-900 font-bold text-base hover:bg-slate-50 transition-colors shadow-sm relative group overflow-hidden">
                <div className="absolute inset-0 bg-[#135bec]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="w-6 h-6 text-[#0077b5] z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="z-10">Login with LinkedIn</span>
              </button>

              {/* Divider */}
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200" />
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">
                  Or continue with email
                </span>
                <div className="flex-grow border-t border-slate-200" />
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email Input */}
                <label className="flex flex-col w-full group">
                  <span className="sr-only">Email Address</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#135bec] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      required
                      className="flex w-full rounded-xl text-gray-900 bg-white border border-slate-200 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] h-14 pl-12 pr-4 text-base font-normal placeholder:text-slate-400 transition-all shadow-sm outline-none"
                    />
                  </div>
                </label>

                {/* Password Input */}
                <label className="flex flex-col w-full group">
                  <span className="sr-only">Password</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#135bec] transition-colors">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                      className="flex w-full rounded-xl text-gray-900 bg-white border border-slate-200 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] h-14 pl-12 pr-12 text-base font-normal placeholder:text-slate-400 transition-all shadow-sm outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </label>

                {/* Options Row */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-5 w-5 rounded border-slate-300 text-[#135bec] focus:ring-[#135bec]/20 bg-white cursor-pointer"
                    />
                    <span className="text-sm font-medium text-slate-600 select-none">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to="/auth/forgot-password"
                    className="text-sm font-semibold text-[#135bec] hover:text-[#0f4ac7] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-[#135bec] hover:bg-[#0f4ac7] text-white font-bold text-base tracking-wide shadow-lg shadow-[#135bec]/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
            </div>

            {/* Demo Accounts Hint */}
            <div className="p-3 bg-slate-100 rounded-xl">
              <p className="text-xs text-slate-500 text-center">
                Demo: Use "founder@", "cofounder@", or "admin@" in email
              </p>
            </div>

            {/* Footer Help */}
            <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#eef4fd] border border-[#dce9fc]">
              <Headphones className="w-5 h-5 text-[#135bec]" />
              <p className="text-sm text-slate-600">
                Need help?{" "}
                <Link
                  to="/support"
                  className="font-bold text-[#135bec] hover:underline"
                >
                  Contact Support
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element for mobile/tablet only */}
        <div className="lg:hidden h-2 bg-gradient-to-r from-[#135bec] to-purple-500 w-full" />
      </div>
    </div>
  );
}

export default LoginPage;
