import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  Search,
  Phone,
  Video,
  Info,
  PlusCircle,
  Smile,
  Send,
  Sparkles,
  Lightbulb,
  BadgeCheck,
  FileText,
  Calendar,
  Code,
  CheckCheck,
} from "lucide-react";
import { NotificationDropdown, UserAvatarDropdown } from "@/components/common";

// Mock data
const chats = [
  {
    id: "1",
    name: "Nguyen Van A",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Ux8LtfqmOiaFq8bbpEaemx_9WLYBdmpYm5I4qjDt7094KfbJ16axMo93ZgU-eCy_NVgphj-CLYiB4rCjrowvyTY6davU9dFydgNdqv9Bd7spXBa2lAJEqUciPHmJeuku7GMEJjVlQJjHw09u6DM3dGm_VYOrkKfdoWe_oD_l75XN29rkXjf0oJhDA3euZ2NR1vQvrsSNjOjcMkGJPwLtE7EhrkPYuW5e41FbRIaWX2xOEzXOxlF7ZwlJw5zNYuURa-Fg7c93Krk",
    lastMessage: "Are you still looking for a tech co-founder?",
    time: "2m",
    online: true,
    active: true,
    role: "Senior Full Stack Dev",
  },
  {
    id: "2",
    name: "Tran Thi B",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzOSkQKWVwi35aAQsz90NhgPkSb7aE_w_vC-OzmXU6PqIOLnhhvve0MH5J_1lEyog9mWbRZnEcgrRFIcjG8RVjwGVFzI36b73JPJxTlOy-1tCl7vqkrTCy5LcYgvPqlHe76DBjUF_gjOqPrR6D-5mXIR2_r9WNIgGFInfcmcwR4Od4RPq-YqVDMZCqInysb5qYTOxQOfinFd-a6hpG0NEcgKX1nOn2Wp-vT7yzzhRtsQHKwBIE078a6vk72-6vGpM6-b79kVNKWDo",
    lastMessage: "I can help with the go-to-market strategy.",
    time: "1h",
    online: false,
    active: false,
    role: "Marketing Lead",
  },
  {
    id: "3",
    name: "Le Van C",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDRvt9GpSziJAsDYltnKQEysP--DIbbtboO4lY4N_RzAGCUllprljGhLbKQp776K1EjfFDgO5BZO1mtVfTSP5yq03CEyk1PwWzFoJU3Y6Ap2Kj1VOvkRXnuJjsU4GswGvqN9YmAdf6PjNcCcy7zgDYYvTOPXyFPJacFfWs57YLHehMSp7LQDUBNTYdG3DC-jKk37Bx6MHd7jB7a2A0NUf2xy1v_vtir9gluTcLxwVD6FETRP39vg0pQtnNu1m1IYlo3oSt6KRTl_k",
    lastMessage: "Let's schedule a call for next Tuesday.",
    time: "1d",
    online: false,
    active: false,
    role: "Product Manager",
  },
];

const messages = [
  {
    id: "1",
    sender: "other",
    text: "Hi! I saw your pitch deck on the platform. Impressive work on the user acquisition strategy.",
    time: "10:24 AM",
  },
  {
    id: "2",
    sender: "other",
    text: "Are you still looking for a technical co-founder? I have 5 years of experience scaling React apps.",
    time: "10:25 AM",
  },
  {
    id: "3",
    sender: "me",
    text: "Hi Nguyen! Yes, absolutely. We are currently building the MVP on React and need someone to lead the architecture.",
    time: "10:28 AM",
    read: true,
  },
];

export function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#f0f4f8] font-display text-slate-900 h-screen overflow-hidden flex flex-col relative">
      {/* Aurora Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[radial-gradient(circle,rgba(19,91,236,0.08)_0%,rgba(255,255,255,0)_70%)] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,rgba(255,255,255,0)_70%)] z-0 pointer-events-none" />

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/20 bg-white/70 backdrop-blur-md px-6 py-3 shadow-sm h-16">
        <Link to="/" className="flex items-center gap-4 text-[#0d121b]">
          <div className="size-8 text-[#135bec] flex items-center justify-center bg-[#135bec]/10 rounded-lg">
            <Rocket className="w-5 h-5" />
          </div>
          <h2 className="text-[#0d121b] text-xl font-bold leading-tight tracking-tight">
            Tin-Up
          </h2>
        </Link>

        <div className="hidden md:flex flex-1 justify-center gap-8">
          <nav className="flex items-center gap-6 bg-slate-100/50 px-6 py-2 rounded-full border border-white/50">
            <Link
              to="/founder/dashboard"
              className="text-slate-500 hover:text-[#135bec] text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/founder/matching"
              className="text-slate-500 hover:text-[#135bec] text-sm font-medium transition-colors"
            >
              Matches
            </Link>
            <span className="text-[#135bec] bg-white shadow-sm px-3 py-1 rounded-full text-sm font-bold leading-normal">
              Workspace
            </span>
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3">
          <NotificationDropdown />
          <UserAvatarDropdown />
        </div>
      </header>

      {/* Main Workspace Area (Bento Grid) */}
      <main className="flex-1 p-4 md:p-6 grid grid-cols-12 gap-4 md:gap-6 h-[calc(100vh-64px)] overflow-hidden relative z-10">
        {/* Left Sidebar: Chat List */}
        <aside className="col-span-12 md:col-span-3 flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60 overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Active Chats
            </h3>
            {/* Search Field */}
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#135bec]/20 placeholder:text-slate-400"
                placeholder="Search messages..."
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {chats.map((chat) => (
              <motion.div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                whileHover={{ scale: 1.01 }}
                className={`group flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-colors border ${
                  selectedChat.id === chat.id
                    ? "bg-blue-50/80 border-blue-100/50"
                    : "border-transparent hover:bg-slate-50 hover:border-slate-100"
                }`}
              >
                <div className="relative shrink-0">
                  <div
                    className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm"
                    style={{ backgroundImage: `url('${chat.avatar}')` }}
                  />
                  <span
                    className={`absolute bottom-0 right-0 size-3 border-2 border-white rounded-full ${
                      chat.online ? "bg-green-500" : "bg-slate-300"
                    }`}
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p className="text-slate-900 text-sm font-semibold truncate">
                      {chat.name}
                    </p>
                    <span
                      className={`text-xs font-medium ${
                        selectedChat.id === chat.id
                          ? "text-[#135bec]"
                          : "text-slate-400"
                      }`}
                    >
                      {chat.time}
                    </span>
                  </div>
                  <p
                    className={`text-xs truncate ${
                      selectedChat.id === chat.id
                        ? "text-slate-600 font-medium"
                        : "text-slate-500"
                    }`}
                  >
                    {chat.lastMessage}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </aside>

        {/* Center: Chat Interface */}
        <section className="col-span-12 md:col-span-6 flex flex-col bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-white overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/50 backdrop-blur-sm z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-10"
                  style={{
                    backgroundImage: `url('${selectedChat.avatar}')`,
                  }}
                />
                {selectedChat.online && (
                  <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div>
                <h3 className="text-slate-900 text-sm font-bold">
                  {selectedChat.name}
                </h3>
                <p className="text-slate-500 text-xs flex items-center gap-1">
                  <Code className="w-3.5 h-3.5" /> {selectedChat.role}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-[#135bec] hover:bg-[#135bec]/5 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-[#135bec] hover:bg-[#135bec]/5 rounded-lg transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-[#135bec] hover:bg-[#135bec]/5 rounded-lg transition-colors">
                <Info className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-slate-50/50 to-white">
            <div className="flex justify-center">
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                Today, 10:23 AM
              </span>
            </div>

            {messages.map((message) =>
              message.sender === "other" ? (
                // Received Message
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="shrink-0 pt-1">
                    <div
                      className="bg-center bg-no-repeat bg-cover rounded-full size-8"
                      style={{
                        backgroundImage: `url('${selectedChat.avatar}')`,
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                      <p className="text-slate-800 text-sm leading-relaxed">
                        {message.text}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 ml-2">
                      {message.time}
                    </span>
                  </div>
                </motion.div>
              ) : (
                // Sent Message
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto"
                >
                  <div className="flex flex-col gap-1 items-end">
                    <div className="bg-[#135bec] p-4 rounded-2xl rounded-tr-none shadow-md shadow-[#135bec]/20">
                      <p className="text-white text-sm leading-relaxed">
                        {message.text}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 mr-2 flex items-center gap-1">
                      {message.time}{" "}
                      {message.read && <CheckCheck className="w-3 h-3" />}
                    </span>
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-end gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 focus-within:border-[#135bec]/50 focus-within:ring-1 focus-within:ring-[#135bec]/20 transition-all">
              <button className="p-2 text-slate-400 hover:text-[#135bec] rounded-xl hover:bg-white transition-colors">
                <PlusCircle className="w-5 h-5" />
              </button>
              <textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 p-2 text-sm text-slate-900 placeholder:text-slate-400 resize-none max-h-32"
                placeholder="Type your message..."
                rows={1}
              />
              <button className="p-2 text-slate-400 hover:text-[#135bec] rounded-xl hover:bg-white transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="p-2 bg-[#135bec] text-white rounded-xl shadow-md shadow-[#135bec]/30 hover:bg-[#135bec]/90 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar: AI Co-pilot */}
        <aside className="hidden md:flex flex-col col-span-3 gap-4 h-full overflow-hidden">
          {/* AI Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group"
          >
            {/* Abstract AI Background */}
            <div className="absolute -right-4 -top-4 size-24 bg-[#135bec]/30 rounded-full blur-2xl group-hover:bg-[#135bec]/50 transition-all duration-700" />
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-base">AI Mentor</h3>
                <p className="text-xs text-slate-300">
                  Real-time matching insights
                </p>
              </div>
            </div>
            {/* Match Score */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-medium text-slate-300">
                  Compatibility Score
                </span>
                <span className="text-2xl font-bold text-white">88%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-400 to-[#135bec] h-1.5 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Scrollable Insights */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {/* Insight Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/60"
            >
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 text-purple-600 p-1.5 rounded-lg shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">
                    Conversation Starter
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Nguyen mentions "scaling" twice. Ask about their experience
                    with high-traffic systems to show alignment.
                  </p>
                  <button className="mt-2 text-xs font-medium text-[#135bec] hover:text-blue-700 hover:underline">
                    Apply suggestion
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Insight Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/60"
            >
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-600 p-1.5 rounded-lg shrink-0">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">
                    Skill Match
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Strong overlap in your technology stacks (React/Node). This
                    is a{" "}
                    <span className="font-bold text-green-600">
                      High Potential
                    </span>{" "}
                    match.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/60"
            >
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h4>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 text-xs font-medium text-slate-700 hover:border-[#135bec]/30 hover:text-[#135bec] transition-all">
                  <span>Request Resume</span>
                  <FileText className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 text-xs font-medium text-slate-700 hover:border-[#135bec]/30 hover:text-[#135bec] transition-all">
                  <span>Schedule Meeting</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default MessagesPage;
