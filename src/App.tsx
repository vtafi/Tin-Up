import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastProvider } from "@/components/common";

// Pages
import { LandingPage } from "@/pages/LandingPage";

// Auth
import { LoginPage, RegisterPage, RoleSelectionPage } from "@/features/auth";

// Project/Founder
import { ProjectSetupPage, ProjectDetails } from "@/features/project";

// Matching
import {
  MatchingDashboard,
  SwipeMatching,
  StartupExplore,
  CofounderSwipe,
} from "@/features/matching";

// Profile
import {
  CofounderProfileSetup,
  CofounderProfile,
  FounderProfile,
} from "@/features/profile";

// Admin
import {
  AdminDashboard,
  AlgorithmConfigPage,
  ContentModeration,
} from "@/features/admin";

// Messages
import { MessagesPage } from "@/features/messages";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />

            {/* Auth Routes */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route
              path="/auth/role-selection"
              element={<RoleSelectionPage />}
            />

            {/* Project Details (Public View) */}
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/startup/:id" element={<ProjectDetails />} />

            {/* Founder Routes */}
            <Route path="/founder/setup" element={<ProjectSetupPage />} />
            <Route path="/founder/profile" element={<FounderProfile />} />
            <Route path="/founder/project/:id" element={<ProjectDetails />} />
            <Route path="/founder/matching" element={<MatchingDashboard />} />
            <Route path="/founder/projects" element={<MatchingDashboard />} />
            <Route path="/founder/explore" element={<MatchingDashboard />} />
            <Route path="/founder/network" element={<MatchingDashboard />} />
            <Route path="/founder/messages" element={<MessagesPage />} />
            <Route path="/founder/workspace" element={<MessagesPage />} />

            {/* Co-founder Routes */}
            <Route
              path="/co-founder/profile/setup"
              element={<CofounderProfileSetup />}
            />
            <Route path="/co-founder/profile" element={<CofounderProfile />} />
            <Route path="/co-founder/explore" element={<StartupExplore />} />
            <Route path="/co-founder/swipe" element={<CofounderSwipe />} />
            <Route path="/co-founder/matching" element={<SwipeMatching />} />
            <Route path="/co-founder/network" element={<StartupExplore />} />
            <Route path="/co-founder/messages" element={<MessagesPage />} />
            <Route path="/co-founder/workspace" element={<MessagesPage />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/algorithm" element={<AlgorithmConfigPage />} />
            <Route path="/admin/users" element={<AdminDashboard />} />
            <Route path="/admin/content" element={<ContentModeration />} />
            <Route path="/admin/settings" element={<AdminDashboard />} />

            {/* Fallback */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
