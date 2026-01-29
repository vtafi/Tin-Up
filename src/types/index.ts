// ========================================
// Tin-Up Type Definitions
// ========================================

// User Roles
export type UserRole = "PUBLIC" | "FOUNDER" | "CO_FOUNDER" | "ADMIN";

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface FounderProfile extends User {
  role: "FOUNDER";
  company?: string;
  position?: string;
  projects: Project[];
  bio?: string;
  linkedIn?: string;
}

export interface CoFounderProfile extends User {
  role: "CO_FOUNDER";
  skills: Skill[];
  portfolio: PortfolioItem[];
  experience: string;
  lookingFor: string[];
  bio?: string;
  linkedIn?: string;
  startupDNA: StartupDNA;
}

export interface AdminProfile extends User {
  role: "ADMIN";
  permissions: string[];
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 1-5
}

export type SkillCategory =
  | "technical"
  | "business"
  | "design"
  | "marketing"
  | "operations"
  | "finance";

// Startup DNA (for matching algorithm)
export interface StartupDNA {
  technical: number;
  leadership: number;
  creativity: number;
  resilience: number;
  communication: number;
  vision: number;
}

// Portfolio Types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
}

// Project Types
export interface Project {
  id: string;
  name: string;
  vision: string;
  description: string;
  stage: ProjectStage;
  industry: string;
  pitchDeck?: string;
  logo?: string;
  founderId: string;
  requiredSkills: Skill[];
  teamMembers: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectStage =
  | "idea"
  | "mvp"
  | "early_traction"
  | "growth"
  | "scaling";

export interface TeamMember {
  id: string;
  userId: string;
  name: string;
  avatar?: string;
  role: string;
  joinedAt: Date;
}

// Matching Types
export interface Match {
  id: string;
  founderId: string;
  coFounderId: string;
  projectId: string;
  score: number;
  status: MatchStatus;
  createdAt: Date;
}

export type MatchStatus = "pending" | "accepted" | "rejected" | "matched";

export interface MatchCandidate {
  user: CoFounderProfile;
  matchScore: number;
  skillMatch: number;
  dnaMatch: number;
  commonInterests: string[];
}

// Swipe Types
export interface SwipeAction {
  id: string;
  userId: string;
  targetId: string;
  targetType: "project" | "cofounder";
  action: "pass" | "like" | "superlike";
  createdAt: Date;
}

// Chat Types
export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  type: "text" | "image" | "file";
  createdAt: Date;
  readAt?: Date;
}

export interface Chat {
  id: string;
  participants: string[];
  matchId?: string;
  lastMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
}

// Admin Types
export interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  totalMatches: number;
  matchRate: number;
  userGrowth: ChartData[];
  matchGrowth: ChartData[];
}

export interface ChartData {
  date: string;
  value: number;
}

export interface ModerationItem {
  id: string;
  type: "project" | "profile" | "content";
  itemId: string;
  status: "pending" | "approved" | "rejected";
  reportReason?: string;
  reviewedBy?: string;
  createdAt: Date;
  reviewedAt?: Date;
}

export interface AlgorithmConfig {
  skillWeight: number;
  experienceWeight: number;
  locationWeight: number;
  industryWeight: number;
  dnaWeight: number;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: number;
}

export interface NavConfig {
  PUBLIC: NavItem[];
  FOUNDER: NavItem[];
  CO_FOUNDER: NavItem[];
  ADMIN: NavItem[];
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
