import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Quote, Search, Network } from "lucide-react";
import { SmartNavbar, Footer } from "@/components/layout";

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#f6f6f8]">
      <SmartNavbar />

      {/* Hero Section with Aurora Gradient */}
      <section className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-32 px-4 sm:px-10 overflow-hidden">
        {/* Aurora gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(19, 91, 236, 0.15) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(19, 91, 236, 0.10) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.10) 0px, transparent 50%)
            `,
            backgroundColor: "#f6f6f8",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[800px] flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/20 backdrop-blur-sm self-center">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-slate-600">
                New: Startup Matching Algorithm v2.0
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-gray-900 text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight">
              Connect. <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-purple-600">
                Co-found.
              </span>{" "}
              <br className="sm:hidden" />
              Conquer.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
              The premier matching platform for Vietnam's next generation of
              unicorns. Find your perfect technical or business counterpart
              today.
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full sm:w-auto">
              <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 p-1 pl-4 w-full sm:w-[400px]">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to start"
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm text-gray-800 placeholder-gray-400 px-3 py-2"
                />
                <Link to="/auth/register">
                  <button className="bg-[#135bec] text-white rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap hover:bg-[#0f4ac7] transition-colors">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-8 mt-8 opacity-70">
              <span className="text-sm font-semibold text-slate-400">
                Trusted by founders from
              </span>
              <div className="flex gap-4">
                <div className="h-6 w-20 bg-slate-300 rounded animate-pulse" />
                <div className="h-6 w-20 bg-slate-300 rounded animate-pulse" />
                <div className="h-6 w-20 bg-slate-300 rounded animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="px-4 sm:px-10 py-16 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-slate-500 max-w-2xl">
              See how visionaries across Vietnam are finding their perfect match
              and building the future.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Feature Card (Spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 group relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div
                className="h-full min-h-[300px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop')",
                }}
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 flex flex-col gap-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#135bec]/90 text-white text-xs font-bold w-fit mb-2">
                  Featured Story
                </span>
                <h3 className="text-white text-2xl font-bold">
                  From Match to Unicorn
                </h3>
                <p className="text-gray-200 text-sm md:text-base max-w-[90%]">
                  How Lan and Minh met on Tin-Up and built Vietnam's leading
                  payment gateway in just 18 months.
                </p>
                <Link
                  to="/stories"
                  className="text-white text-sm font-medium mt-2 hover:underline flex items-center gap-1"
                >
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Network className="w-24 h-24 text-[#135bec]" />
              </div>
              <h3 className="text-5xl font-black text-gray-900 mb-2">500+</h3>
              <p className="text-[#135bec] font-bold text-lg mb-1">
                Matches Made
              </p>
              <p className="text-slate-500 text-sm">
                Connecting visionary founders from Hanoi to Ho Chi Minh City.
              </p>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#eef4fd] rounded-xl p-8 border border-[#dce9fc] shadow-sm flex flex-col justify-between"
            >
              <div className="mb-4 text-[#135bec]">
                <Quote className="w-6 h-6" />
              </div>
              <p className="text-gray-900 text-lg font-medium italic leading-relaxed mb-6">
                "I was skeptical about matching platforms, but Tin-Up's
                algorithm is different. I found my technical co-founder in just
                3 days."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://api.dicebear.com/7.x/avataaars/svg?seed=thanh')",
                  }}
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Thanh Nguyen
                  </p>
                  <p className="text-xs text-slate-500">CTO at TechFlow</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Card (Spans 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 bg-gradient-to-r from-[#135bec] to-[#0f4ac7] rounded-xl p-8 shadow-lg text-white flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-md">
                <h3 className="text-2xl font-bold mb-2">
                  Ready to find your match?
                </h3>
                <p className="text-blue-100">
                  Join the exclusive Alpha program and get early access to our
                  premium matching features.
                </p>
              </div>
              <Link to="/auth/register">
                <button className="relative z-10 shrink-0 bg-white text-[#135bec] px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-md">
                  Request Access
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-10 border-t border-gray-200 bg-[#f6f6f8]">
        <div className="max-w-[960px] mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#eef4fd] text-[#135bec] mb-6">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Don't build alone.
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            The journey is tough, but the right partner makes it possible. Join
            10,000+ founders on Tin-Up today.
          </p>

          {/* Search Input */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="w-5 h-5 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for 'CTO', 'Marketing Lead', 'Investor'..."
                className="w-full bg-white border border-slate-300 rounded-full py-4 pl-12 pr-24 shadow-sm focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] text-sm"
              />
              <button className="absolute inset-y-1 right-1 bg-[#135bec] text-white rounded-full px-6 text-sm font-bold hover:bg-[#0f4ac7] transition-colors">
                Find
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
