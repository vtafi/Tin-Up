import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Quote } from "lucide-react";
import { SmartNavbar, Footer } from "@/components/layout";

// Hero Section
function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(19, 91, 236, 0.08) 0%, rgba(255, 255, 255, 0) 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#135bec]/20 shadow-sm text-[#135bec] text-xs font-bold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec]/60 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
          </span>
          New Matching Algorithm v2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
        >
          Connect.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-cyan-500">
            Co-found.
          </span>{" "}
          <br className="hidden md:block" />
          Conquer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed"
        >
          The premier matching platform for Vietnam's next generation of
          unicorns. Find your perfect technical or business counterpart today.
        </motion.p>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 max-w-md mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#135bec] to-cyan-500 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-200"></div>
          <div className="relative flex bg-white rounded-full p-1.5 shadow-xl shadow-[#135bec]/10 border border-slate-100">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow pl-6 pr-4 py-3 bg-transparent rounded-full text-slate-800 placeholder-slate-400 focus:outline-none"
              placeholder="Enter your email address..."
            />
            <Link to="/auth/register">
              <button className="bg-slate-900 hover:bg-[#135bec] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Trusted Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by founders from
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-8 font-serif text-2xl font-bold text-slate-800">
              VNG
            </div>
            <div className="h-8 font-sans text-2xl font-black italic text-slate-800">
              MOMO
            </div>
            <div className="h-8 font-mono text-2xl font-bold text-slate-800">
              FPT
            </div>
            <div className="h-8 font-sans text-2xl font-bold text-slate-800">
              TIKI
            </div>
            <div className="h-8 font-serif text-2xl font-bold text-slate-800">
              Vingroup
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Featured Bento Grid Section
function FeaturedBento() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Success Stories
            </motion.h2>
            <p className="text-slate-500 max-w-xl text-lg">
              Real founders, real matches. See how visionaries across Vietnam
              are building the future together.
            </p>
          </div>
          <Link
            to="/stories"
            className="hidden md:flex items-center gap-2 text-[#135bec] font-bold hover:gap-3 transition-all"
          >
            View all stories <ArrowRight size={18} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Main Story (Big Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Office meeting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <div className="bg-[#135bec] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                Featured Case Study
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                From Coffee Shop to Series A in 18 Months
              </h3>
              <p className="text-slate-200 mb-6 line-clamp-2">
                How Lan and Minh matched on Tin-Up based on their shared vision
                for EdTech and complementary skill sets.
              </p>
              <button className="flex items-center gap-2 text-white font-bold border-b-2 border-white/20 hover:border-white pb-1 transition-all">
                Read full story <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#135bec]/10 rounded-full"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#135bec] mb-4">
                <TrendingUp size={24} />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">
                500+
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                Matches Made
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-4">
              Across Hanoi, HCMC & Da Nang
            </div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 bg-slate-900 text-white rounded-[2rem] p-8 flex flex-col relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Quote size={80} />
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <p className="text-lg md:text-xl font-medium leading-relaxed italic opacity-90 mb-6">
                "I was skeptical about algorithms finding me a co-founder. But
                Tin-Up didn't just match skills; it matched our{" "}
                <span className="text-[#135bec]">work culture</span>."
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-[#135bec]"
              />
              <div>
                <div className="font-bold">Huy Tran</div>
                <div className="text-xs text-slate-400">CTO @ LogiTech</div>
              </div>
            </div>
          </motion.div>

          {/* Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#135bec] to-purple-600 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users size={32} />
              </div>
            </div>
            <h4 className="font-bold text-xl mb-1">Find Yours</h4>
            <p className="text-blue-100 text-sm">Join the network today</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative p-12 md:p-24 text-center shadow-2xl"
      >
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#135bec] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Don't build alone.
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            The journey is tough, but the right partner makes it possible. Join
            10,000+ founders waiting to connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth/register">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1">
                Request Access
              </button>
            </Link>
            <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              How it works
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Main LandingPage Component
export function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SmartNavbar />
      <Hero />
      <FeaturedBento />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
