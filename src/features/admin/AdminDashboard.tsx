import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  Users,
  Briefcase,
  Heart,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { SmartNavbar } from "@/components/layout";
import { Sidebar, SidebarLayout } from "@/components/layout";
import { Card, Badge } from "@/components/common";

// Mock data
const userGrowthData = [
  { month: "Jan", users: 1200, matches: 340 },
  { month: "Feb", users: 1800, matches: 520 },
  { month: "Mar", users: 2400, matches: 680 },
  { month: "Apr", users: 3100, matches: 890 },
  { month: "May", users: 4200, matches: 1120 },
  { month: "Jun", users: 5500, matches: 1450 },
];

const weeklyActivityData = [
  { day: "Mon", signups: 45, swipes: 320, matches: 28 },
  { day: "Tue", signups: 52, swipes: 380, matches: 35 },
  { day: "Wed", signups: 38, swipes: 290, matches: 22 },
  { day: "Thu", signups: 65, swipes: 450, matches: 42 },
  { day: "Fri", signups: 78, swipes: 520, matches: 55 },
  { day: "Sat", signups: 42, swipes: 280, matches: 25 },
  { day: "Sun", signups: 35, swipes: 240, matches: 18 },
];

const metrics = [
  {
    label: "Total Users",
    value: "5,482",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "blue",
  },
  {
    label: "Active Projects",
    value: "342",
    change: "+8.2%",
    trend: "up",
    icon: Briefcase,
    color: "purple",
  },
  {
    label: "Total Matches",
    value: "1,456",
    change: "+18.7%",
    trend: "up",
    icon: Heart,
    color: "pink",
  },
  {
    label: "Match Rate",
    value: "23.4%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
    color: "orange",
  },
];

const recentActivity = [
  { type: "signup", user: "Nguyen Van A", time: "2 minutes ago" },
  { type: "match", users: "Tran Thi B & Le Van C", time: "5 minutes ago" },
  {
    type: "project",
    user: "Pham Thi D",
    project: "HealthLink",
    time: "12 minutes ago",
  },
  { type: "signup", user: "Hoang Van E", time: "18 minutes ago" },
  { type: "match", users: "Nguyen Thi F & Vo Van G", time: "25 minutes ago" },
];

// Stitch primary #135bec
const colorMap: Record<string, { bg: string; text: string; gradient: string }> =
  {
    blue: {
      bg: "bg-[#eef4fd]",
      text: "text-[#135bec]",
      gradient: "from-[#135bec] to-[#0f4ac7]",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      gradient: "from-pink-500 to-pink-600",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      gradient: "from-orange-500 to-orange-600",
    },
  };

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SmartNavbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 ml-[280px] p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Overview of platform performance and key metrics
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              const colors = colorMap[metric.color];

              return (
                <Card key={metric.label} className="p-6">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors.gradient}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        metric.trend === "up"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-gray-900">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* User Growth Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                User & Match Growth
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={userGrowthData}>
                    <defs>
                      <linearGradient
                        id="colorUsers"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#135bec"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#135bec"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorMatches"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#a855f7"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#a855f7"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#135bec"
                      fillOpacity={1}
                      fill="url(#colorUsers)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="matches"
                      stroke="#a855f7"
                      fillOpacity={1}
                      fill="url(#colorMatches)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#135bec]" />
                  <span className="text-sm text-gray-600">Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm text-gray-600">Matches</span>
                </div>
              </div>
            </Card>

            {/* Weekly Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Weekly Activity
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="signups"
                      fill="#135bec"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="matches"
                      fill="#a855f7"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#135bec]" />
                  <span className="text-sm text-gray-600">Signups</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm text-gray-600">Matches</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === "signup"
                        ? "bg-[#eef4fd] text-[#135bec]"
                        : activity.type === "match"
                          ? "bg-pink-100 text-pink-600"
                          : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {activity.type === "signup" && (
                      <Users className="w-5 h-5" />
                    )}
                    {activity.type === "match" && <Heart className="w-5 h-5" />}
                    {activity.type === "project" && (
                      <Briefcase className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    {activity.type === "signup" && (
                      <p className="text-gray-900">
                        <span className="font-medium">{activity.user}</span>{" "}
                        joined Tin-Up
                      </p>
                    )}
                    {activity.type === "match" && (
                      <p className="text-gray-900">
                        <span className="font-medium">{activity.users}</span>{" "}
                        matched!
                      </p>
                    )}
                    {activity.type === "project" && (
                      <p className="text-gray-900">
                        <span className="font-medium">{activity.user}</span>{" "}
                        created project{" "}
                        <span className="font-medium">{activity.project}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <Badge
                    variant={
                      activity.type === "signup"
                        ? "blue"
                        : activity.type === "match"
                          ? "purple"
                          : "orange"
                    }
                    size="sm"
                  >
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
