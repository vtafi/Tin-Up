import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type {
  User,
  UserRole,
  FounderProfile,
  CoFounderProfile,
  AdminProfile,
} from "@/types";

// Mock user data for development
const mockUsers = {
  founder: {
    id: "founder-1",
    email: "founder@tin-up.com",
    name: "Nguyen Van A",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
    role: "FOUNDER" as const,
    company: "TechViet",
    position: "CEO & Founder",
    projects: [],
    bio: "Serial entrepreneur with 10+ years experience in tech startups.",
    linkedIn: "https://linkedin.com/in/nguyenvana",
    createdAt: new Date(),
    updatedAt: new Date(),
  } satisfies FounderProfile,

  cofounder: {
    id: "cofounder-1",
    email: "cofounder@tin-up.com",
    name: "Tran Thi B",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cofounder",
    role: "CO_FOUNDER" as const,
    skills: [
      { id: "1", name: "React", category: "technical", level: 5 },
      { id: "2", name: "Node.js", category: "technical", level: 4 },
      { id: "3", name: "UI/UX Design", category: "design", level: 4 },
    ],
    portfolio: [],
    experience: "5+ years in fullstack development",
    lookingFor: ["AI/ML", "FinTech", "EdTech"],
    bio: "Passionate developer looking for innovative startup opportunities.",
    linkedIn: "https://linkedin.com/in/tranthib",
    startupDNA: {
      technical: 90,
      leadership: 70,
      creativity: 85,
      resilience: 75,
      communication: 80,
      vision: 72,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  } satisfies CoFounderProfile,

  admin: {
    id: "admin-1",
    email: "admin@tin-up.com",
    name: "Admin User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    role: "ADMIN" as const,
    permissions: ["all"],
    createdAt: new Date(),
    updatedAt: new Date(),
  } satisfies AdminProfile,
};

interface AuthContextType {
  user: User | FounderProfile | CoFounderProfile | AdminProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  userRole: UserRole;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  setUserRole: (role: UserRole) => void;
  switchToMockUser: (type: "founder" | "cofounder" | "admin") => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userRole: UserRole = user?.role || "PUBLIC";
  const isAuthenticated = !!user;

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock login - determine user type from email
    // IMPORTANT: Check "cofounder" before "founder" since "cofounder" contains "founder"
    if (email.includes("cofounder") || email.includes("co-founder")) {
      setUser(mockUsers.cofounder);
    } else if (email.includes("founder")) {
      setUser(mockUsers.founder);
    } else if (email.includes("admin")) {
      setUser(mockUsers.admin);
    } else {
      // Default to co-founder for demo
      setUser(mockUsers.cofounder);
    }

    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const register = useCallback(
    async (email: string, _password: string, name: string) => {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create new user (default to pending role selection)
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        role: "PUBLIC", // Will be updated after role selection
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setUser(newUser);
      setIsLoading(false);
    },
    [],
  );

  const setUserRole = useCallback(
    (role: UserRole) => {
      if (user) {
        setUser({ ...user, role });
      }
    },
    [user],
  );

  // For development: easily switch between user types
  const switchToMockUser = useCallback(
    (type: "founder" | "cofounder" | "admin") => {
      setUser(mockUsers[type]);
    },
    [],
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      userRole,
      login,
      logout,
      register,
      setUserRole,
      switchToMockUser,
    }),
    [
      user,
      isAuthenticated,
      isLoading,
      userRole,
      login,
      logout,
      register,
      setUserRole,
      switchToMockUser,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
