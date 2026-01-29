# 🚀 Tin-Up - User Flow Documentation

> Tài liệu mô tả chi tiết các luồng người dùng theo từng role và URL tương ứng.

---

## 📋 Mục Lục

- [Public Flow](#-public-flow)
- [Auth Flow](#-auth-flow)
- [Founder Flow](#-founder-flow)
- [Co-founder Flow](#-co-founder-flow)
- [Admin Flow](#-admin-flow)

---

## 🌐 Public Flow

> Người dùng chưa đăng nhập - Navbar hiển thị: **Home, About, Success Stories, Join Now**

| #   | Trang                       | URL            | Mô tả                                                                   |
| --- | --------------------------- | -------------- | ----------------------------------------------------------------------- |
| 1   | **Landing Page**            | `/`            | Trang chủ giới thiệu Tin-Up, hero section, success stories, CTA đăng ký |
| 2   | **Project Detail** (Public) | `/project/:id` | Xem chi tiết startup/project công khai                                  |
| 3   | **Startup Detail**          | `/startup/:id` | Xem chi tiết startup (alias)                                            |

### Luồng Public User:

```
Landing Page (/)
    │
    ├── [Get Started] ──→ Register (/auth/register)
    │
    ├── [Read Story] ──→ Project Detail (/project/:id)
    │
    └── [Sign In] ──→ Login (/auth/login)
```

---

## 🔐 Auth Flow

> Luồng đăng nhập/đăng ký - Chuyển hướng dựa trên role đã chọn

| #   | Trang              | URL                    | Mô tả                                 |
| --- | ------------------ | ---------------------- | ------------------------------------- |
| 1   | **Login**          | `/auth/login`          | Form đăng nhập với email/social login |
| 2   | **Register**       | `/auth/register`       | Form đăng ký tài khoản mới            |
| 3   | **Role Selection** | `/auth/role-selection` | Chọn vai trò: Founder hoặc Co-founder |

### Luồng Authentication:

```
Login (/auth/login)
    │
    ├── [Đăng nhập thành công]
    │       │
    │       ├── Role = FOUNDER ──→ Founder Matching (/founder/matching)
    │       ├── Role = CO_FOUNDER ──→ Co-founder Explore (/co-founder/explore)
    │       └── Role = ADMIN ──→ Admin Dashboard (/admin/dashboard)
    │
    └── [Chưa có tài khoản] ──→ Register (/auth/register)

Register (/auth/register)
    │
    └── [Đăng ký thành công] ──→ Role Selection (/auth/role-selection)
                                        │
                                        ├── [Founder] ──→ Project Setup (/founder/setup)
                                        └── [Co-founder] ──→ Profile Setup (/co-founder/profile/setup)
```

---

## 🚀 Founder Flow

> Navbar hiển thị: **Explore, My Projects, Network, Messages, [Avatar]**

| #   | Trang                  | URL                    | Component           | Mô tả                           |
| --- | ---------------------- | ---------------------- | ------------------- | ------------------------------- |
| 1   | **Project Setup**      | `/founder/setup`       | `ProjectSetupPage`  | Tạo/cấu hình startup mới        |
| 2   | **Matching Dashboard** | `/founder/matching`    | `MatchingDashboard` | AI DNA Matching với Radar Chart |
| 3   | **My Projects**        | `/founder/projects`    | `MatchingDashboard` | Danh sách dự án của Founder     |
| 4   | **Explore**            | `/founder/explore`     | `MatchingDashboard` | Khám phá co-founders tiềm năng  |
| 5   | **Project Detail**     | `/founder/project/:id` | `ProjectDetails`    | Chi tiết dự án của Founder      |
| 6   | **Messages**           | `/founder/messages`    | `MessagesPage`      | Nhắn tin với matches            |
| 7   | **Workspace**          | `/founder/workspace`   | `MessagesPage`      | Không gian làm việc chung       |

### Luồng Founder:

```
Role Selection [Founder]
    │
    └── Project Setup (/founder/setup)
            │
            └── [Hoàn thành Setup] ──→ Matching Dashboard (/founder/matching)
                                            │
                                            ├── [View Match] ──→ AI Radar Chart Analysis
                                            │       │
                                            │       ├── [Connect] ──→ Send Connection Request
                                            │       └── [Save] ──→ Save for Later
                                            │
                                            ├── [My Projects] ──→ /founder/projects
                                            │       │
                                            │       └── [Click Project] ──→ Project Detail (/founder/project/:id)
                                            │
                                            └── [Messages] ──→ Messages Page (/founder/messages)
```

### Tính năng Founder Flow:

- ✅ **AI DNA Matching**: Radar chart so sánh kỹ năng với co-founders
- ✅ **Match Score**: Điểm tương thích (%) dựa trên 14 data points
- ✅ **Connect Now**: Gửi yêu cầu kết nối
- ✅ **Save for Later**: Lưu profile để xem sau
- ✅ **Mutual Connections**: Xem kết nối chung

---

## 👤 Co-founder Flow

> Navbar hiển thị: **Explore, My Profile, Network, Messages, [Avatar]**

| #   | Trang                 | URL                         | Component               | Mô tả                                     |
| --- | --------------------- | --------------------------- | ----------------------- | ----------------------------------------- |
| 1   | **Profile Setup**     | `/co-founder/profile/setup` | `CofounderProfileSetup` | Thiết lập hồ sơ co-founder                |
| 2   | **My Profile**        | `/co-founder/profile`       | `CofounderProfile`      | Xem/chỉnh sửa profile cá nhân             |
| 3   | **Explore Startups**  | `/co-founder/explore`       | `StartupExplore`        | Khám phá các startups đang tìm co-founder |
| 4   | **Swipe Matching**    | `/co-founder/swipe`         | `CofounderSwipe`        | Swipe left/right để match                 |
| 5   | **Advanced Matching** | `/co-founder/matching`      | `SwipeMatching`         | Matching nâng cao với filters             |
| 6   | **Messages**          | `/co-founder/messages`      | `MessagesPage`          | Nhắn tin với founders                     |
| 7   | **Workspace**         | `/co-founder/workspace`     | `MessagesPage`          | Không gian làm việc chung                 |

### Luồng Co-founder:

```
Role Selection [Co-founder]
    │
    └── Profile Setup (/co-founder/profile/setup)
            │
            └── [Hoàn thành Setup] ──→ Startup Explore (/co-founder/explore)
                                            │
                                            ├── [View Startup] ──→ Startup Detail
                                            │
                                            ├── [Swipe Mode] ──→ Swipe Matching (/co-founder/swipe)
                                            │       │
                                            │       ├── [Swipe Right] ──→ Like Startup
                                            │       ├── [Swipe Left] ──→ Pass
                                            │       └── [Match!] ──→ Match Celebration 🎉
                                            │
                                            ├── [My Profile] ──→ Profile Page (/co-founder/profile)
                                            │
                                            └── [Messages] ──→ Messages Page (/co-founder/messages)
```

### Tính năng Co-founder Flow:

- ✅ **Swipe Matching**: Tinder-style swipe với Framer Motion animations
- ✅ **Startup Discovery Grid**: Lưới hiển thị các startups phù hợp
- ✅ **Skill Tags**: Hiển thị skills đang tìm kiếm
- ✅ **Match Celebration**: Animation khi có match thành công

---

## 🔧 Admin Flow

> Navbar hiển thị: **Dashboard, Users, Content, Settings, [Avatar]**

| #   | Trang                  | URL                | Component             | Mô tả                                    |
| --- | ---------------------- | ------------------ | --------------------- | ---------------------------------------- |
| 1   | **Dashboard**          | `/admin/dashboard` | `AdminDashboard`      | Overview với metrics, charts, bento grid |
| 2   | **Users Management**   | `/admin/users`     | `AdminDashboard`      | Quản lý người dùng                       |
| 3   | **Content Moderation** | `/admin/content`   | `ContentModeration`   | Duyệt nội dung, báo cáo                  |
| 4   | **Algorithm Config**   | `/admin/algorithm` | `AlgorithmConfigPage` | Điều chỉnh trọng số AI matching          |
| 5   | **Settings**           | `/admin/settings`  | `AdminDashboard`      | Cấu hình hệ thống                        |

### Luồng Admin:

```
Admin Login
    │
    └── Dashboard (/admin/dashboard)
            │
            ├── [Platform Growth] ──→ View Charts & Metrics
            │       ├── Total Users: 12,500+
            │       ├── Active Users: 1,240
            │       ├── Pending Approvals: 24
            │       └── Total Matches: 85
            │
            ├── [Users] ──→ Users Management (/admin/users)
            │       └── [Review Profile] ──→ Approve/Reject User
            │
            ├── [Content] ──→ Content Moderation (/admin/content)
            │       └── [Review Report] ──→ Take Action
            │
            ├── [Algorithm] ──→ Algorithm Config (/admin/algorithm)
            │       ├── Adjust Skill Weight: 0-100%
            │       ├── Adjust Experience Weight: 0-100%
            │       ├── Adjust Location Weight: 0-100%
            │       └── [Save Changes] ──→ Update AI Matching
            │
            └── [Settings] ──→ System Settings (/admin/settings)
```

### Tính năng Admin Flow:

- ✅ **Bento Grid Dashboard**: Layout hiện đại với các cards
- ✅ **Platform Growth Chart**: Biểu đồ tăng trưởng animated
- ✅ **User Demographics**: Phân bố người dùng theo vùng (HCMC, Hanoi, Da Nang)
- ✅ **Algorithm Weights**: Điều chỉnh trọng số matching AI
- ✅ **Recent Signups**: Danh sách đăng ký mới với badges (Hacker, Hustler, Hipster)

---

## 🗺️ Sitemap Tổng Quan

```
Tin-Up Application
│
├── 🌐 PUBLIC
│   ├── / (Landing Page)
│   ├── /project/:id
│   └── /startup/:id
│
├── 🔐 AUTH
│   ├── /auth/login
│   ├── /auth/register
│   └── /auth/role-selection
│
├── 🚀 FOUNDER
│   ├── /founder/setup
│   ├── /founder/matching
│   ├── /founder/projects
│   ├── /founder/explore
│   ├── /founder/project/:id
│   ├── /founder/messages
│   └── /founder/workspace
│
├── 👤 CO-FOUNDER
│   ├── /co-founder/profile/setup
│   ├── /co-founder/profile
│   ├── /co-founder/explore
│   ├── /co-founder/swipe
│   ├── /co-founder/matching
│   ├── /co-founder/messages
│   └── /co-founder/workspace
│
└── 🔧 ADMIN
    ├── /admin/dashboard
    ├── /admin/users
    ├── /admin/content
    ├── /admin/algorithm
    └── /admin/settings
```

---

## 📱 SmartNavbar Role-based Rendering

```typescript
const navConfig = {
  PUBLIC: ["Home", "About", "Success Stories", "Join Now"],
  FOUNDER: ["Explore", "My Projects", "Network", "Messages", "[Avatar]"],
  CO_FOUNDER: ["Explore", "My Profile", "Network", "Messages", "[Avatar]"],
  ADMIN: ["Dashboard", "Users", "Content", "Settings", "[Avatar]"],
};
```

---

_Tài liệu được tạo tự động từ source code Tin-Up_  
_Last updated: 2026-01-29_
