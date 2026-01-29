import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Sliders,
  BarChart3,
  Shield,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const adminSidebarSections: SidebarSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Management",
    items: [
      { label: "Users", href: "/admin/users", icon: Users, badge: 12 },
      { label: "Content", href: "/admin/content", icon: FileText, badge: 5 },
      {
        label: "Moderation",
        href: "/admin/moderation",
        icon: Shield,
        badge: 8,
      },
    ],
  },
  {
    title: "Configuration",
    items: [
      { label: "Algorithm Config", href: "/admin/algorithm", icon: Sliders },
      { label: "Notifications", href: "/admin/notifications", icon: Bell },
      { label: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
  {
    title: "Support",
    items: [{ label: "Help Center", href: "/admin/help", icon: HelpCircle }],
  },
];

interface SidebarProps {
  sections?: SidebarSection[];
  className?: string;
}

export function Sidebar({
  sections = adminSidebarSections,
  className,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-16 left-0 bottom-0 z-30",
        "bg-white border-r border-gray-100",
        "flex flex-col",
        className,
      )}
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            {!isCollapsed && (
              <h4 className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h4>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <li key={item.href}>
                    {/* Stitch primary #135bec */}
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                        isActive
                          ? "bg-[#eef4fd] text-[#135bec]"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                        isCollapsed && "justify-center px-0",
                      )}
                      title={isCollapsed ? item.label : undefined}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <>
                          <span className="font-medium flex-1">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="px-2 py-0.5 text-xs font-semibold bg-[#135bec] text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom section */}
      {/* Stitch primary #135bec */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="p-4 bg-gradient-to-br from-[#135bec]/10 via-purple-500/10 to-orange-500/10 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-1">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Check our documentation for guides and tutorials.
            </p>
            <Link
              to="/admin/help"
              className="text-sm font-medium text-[#135bec] hover:text-[#0f4ac7]"
            >
              View Documentation →
            </Link>
          </div>
        </div>
      )}
    </motion.aside>
  );
}

// Main content wrapper that adjusts for sidebar
export function SidebarLayout({
  children,
  showSidebar = true,
}: {
  children: React.ReactNode;
  showSidebar?: boolean;
}) {
  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <main
        className={cn(
          "flex-1 min-h-[calc(100vh-4rem)] transition-all duration-300",
          showSidebar ? "ml-[280px]" : "",
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
