import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, Check } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button, Input } from "@/components/common";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const passwordStrength = {
    hasMinLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };

  const isPasswordStrong = Object.values(passwordStrength).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isPasswordStrong) {
      setError("Please create a stronger password");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the terms and conditions");
      return;
    }

    try {
      await register(email, password, name);
      navigate("/auth/role-selection");
    } catch {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Visual - Stitch primary #135bec */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Aurora gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-[#135bec] to-orange-500" />

        {/* Floating elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-96 h-96"
          >
            {/* Animated rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 border-2 border-white/20 rounded-full"
                style={{
                  scale: 0.5 + ring * 0.2,
                }}
                animate={{
                  scale: [0.5 + ring * 0.2, 0.6 + ring * 0.2, 0.5 + ring * 0.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: ring * 0.5,
                }}
              />
            ))}

            {/* Center card */}
            <div className="absolute inset-1/4 bg-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center justify-center text-white">
              <span className="text-5xl font-bold mb-2">TU</span>
              <span className="text-sm">Tin-Up</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="text-3xl font-bold mb-3">Start Your Journey</h2>
          <p className="text-white/80">
            Create an account and find your perfect co-founder today.
          </p>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo for mobile - Stitch primary #135bec */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#135bec] via-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">TU</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Tin-Up
              </span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">
              Join the community of innovators and founders
            </p>
          </div>

          {/* LinkedIn Signup */}
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-xl hover:bg-[#095196] transition-colors mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Sign up with LinkedIn
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-500">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}

            <Input
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User className="w-5 h-5" />}
              required
            />

            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="w-5 h-5" />}
              required
            />

            <div>
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leftIcon={<Lock className="w-5 h-5" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
                required
              />

              {/* Password strength indicators */}
              {password && (
                <div className="mt-3 space-y-2">
                  {[
                    { key: "hasMinLength", label: "At least 8 characters" },
                    { key: "hasUppercase", label: "One uppercase letter" },
                    { key: "hasLowercase", label: "One lowercase letter" },
                    { key: "hasNumber", label: "One number" },
                  ].map(({ key, label }) => (
                    <div
                      key={key}
                      className={`flex items-center gap-2 text-sm ${
                        passwordStrength[key as keyof typeof passwordStrength]
                          ? "text-emerald-600"
                          : "text-gray-400"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Input
              type={showPassword ? "text" : "password"}
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              leftIcon={<Lock className="w-5 h-5" />}
              error={
                confirmPassword && password !== confirmPassword
                  ? "Passwords do not match"
                  : undefined
              }
              required
            />

            {/* Stitch primary #135bec */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#135bec] focus:ring-[#135bec]"
              />
              <span className="text-sm text-gray-600">
                I agree to Tin-Up's{" "}
                <Link to="/terms" className="text-[#135bec] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#135bec] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
              disabled={!acceptTerms || !isPasswordStrong}
            >
              Create Account
            </Button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-[#135bec] hover:text-[#0f4ac7]"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterPage;
