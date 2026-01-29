import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Compass,
  FolderKanban,
  User,
  Settings,
  LayoutDashboard,
  FileText,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, useToast } from "@/components/common";
import { cn } from "@/utils/cn";
import type { NavItem, UserRole } from "@/types";

// Navigation configurations for each role
const navConfigs: Record<UserRole, NavItem[]> = {
  PUBLIC: [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Users },
    { label: "Success Stories", href: "/stories", icon: Briefcase },
  ],
  FOUNDER: [
    { label: "Explore", href: "/founder/explore", icon: Compass },
    { label: "My Projects", href: "/founder/projects", icon: FolderKanban },
    { label: "Network", href: "/founder/network", icon: Users },
    { label: "Messages", href: "/messages", icon: MessageSquare, badge: 3 },
  ],
  CO_FOUNDER: [
    { label: "Explore", href: "/co-founder/explore", icon: Compass },
    { label: "My Profile", href: "/co-founder/profile", icon: User },
    { label: "Network", href: "/co-founder/network", icon: Users },
    { label: "Messages", href: "/messages", icon: MessageSquare, badge: 2 },
  ],
  ADMIN: [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Content", href: "/admin/content", icon: FileText },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ],
};

// Right side CTA button for public users - Stitch primary #135bec
function JoinAlphaButton() {
  return (
    <Link
      to="/auth/register"
      className="px-6 py-2.5 text-white font-medium rounded-xl shadow-[0_4px_14px_rgba(19,91,236,0.25)] hover:shadow-[0_6px_20px_rgba(19,91,236,0.35)] [background:linear-gradient(135deg,#135bec_0%,#0f4ac7_100%)] hover:[background:linear-gradient(135deg,#0f4ac7_0%,#0b3a9e_100%)] transition-all duration-300 active:scale-95"
    >
      Join Alpha
    </Link>
  );
}

// User dropdown menu
function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, logout, userRole } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    showToast({
      type: "info",
      title: "Logged Out",
      message: "You have been successfully logged out.",
      duration: 3000,
    });
    navigate("/");
  };

  if (!user) return null;

  const profileLink =
    userRole === "FOUNDER"
      ? "/founder/profile"
      : userRole === "CO_FOUNDER"
        ? "/co-founder/profile"
        : "/admin/profile";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
      >
        <Avatar
          src={user.avatar}
          name={user.name}
          size="sm"
          showStatus
          status="online"
        />
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-500 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            {/* User info */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Avatar src={user.avatar} name={user.name} size="lg" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <div className="p-2">
              <Link
                to={profileLink}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>My Profile</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </div>

            {/* Logout */}
            <div className="p-2 border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Notification bell with dropdown
function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      title: "New match!",
      message: "Minh Nguyen matched your project",
      time: "2m ago",
      read: false,
    },
    {
      id: 2,
      title: "Connection request",
      message: "Sarah Tran wants to connect",
      time: "1h ago",
      read: false,
    },
    {
      id: 3,
      title: "Profile viewed",
      message: "Your profile was viewed 5 times",
      time: "3h ago",
      read: true,
    },
  ]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkAllRead = () => {
    showToast({
      type: "success",
      title: "Notifications Cleared",
      message: "All notifications marked as read.",
      duration: 2000,
    });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors"
      >
        <Bell className="w-5 h-5 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <button
                onClick={handleMarkAllRead}
                className="text-xs text-[#135bec] hover:underline font-medium"
              >
                Mark all read
              </button>
            </div>

            {/* Notifications list */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={cn(
                    "p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer",
                    !notif.read && "bg-blue-50/50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mt-2 shrink-0",
                        notif.read ? "bg-gray-300" : "bg-[#135bec]",
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-900">
                        {notif.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {notif.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-sm font-medium text-[#135bec] hover:underline"
              >
                View all notifications
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile menu
function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              {/* Stitch primary #135bec */}
              <span className="text-xl font-bold bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Tin-Up
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                // Stitch primary #135bec
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                      isActive
                        ? "bg-[#eef4fd] text-[#135bec]"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-[#135bec] text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Stitch primary #135bec */}
            {!isAuthenticated && (
              <div className="p-4 border-t border-gray-100 space-y-3">
                <Link
                  to="/auth/login"
                  onClick={onClose}
                  className="block w-full px-4 py-3 text-center font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/auth/register"
                  onClick={onClose}
                  className="block w-full px-4 py-3 text-center font-medium text-white rounded-xl [background:linear-gradient(135deg,#135bec_0%,#0f4ac7_100%)] hover:[background:linear-gradient(135deg,#0f4ac7_0%,#0b3a9e_100%)] transition-colors"
                >
                  Join Alpha
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Main SmartNavbar component
export function SmartNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { userRole, isAuthenticated } = useAuth();

  const navItems = navConfigs[userRole];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Stitch primary #135bec */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-[#135bec] via-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TU</span>
                </div>
                <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Tin-Up
                </span>
              </Link>

              {/* Desktop Navigation - Stitch primary #135bec */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200",
                        isActive
                          ? "text-[#135bec] bg-[#eef4fd]"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                      )}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-xs font-semibold bg-[#135bec] text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Right side */}
              <div className="flex items-center gap-2">
                {isAuthenticated ? (
                  <>
                    <NotificationBell />
                    <UserDropdown />
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth/login"
                      className="hidden sm:block px-4 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
                    >
                      Log in
                    </Link>
                    <JoinAlphaButton />
                  </>
                )}

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}

export default SmartNavbar;
