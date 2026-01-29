import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import { LandingPage } from "@/pages/LandingPage";

// Auth
import { LoginPage, RegisterPage, RoleSelectionPage } from "@/features/auth";

// Project/Founder
import { ProjectSetupPage } from "@/features/project";

// Matching
import { MatchingDashboard, SwipeMatching, StartupExplore } from "@/features/matching";

// Profile
import { CofounderProfileSetup, CofounderProfile } from "@/features/profile";

// Admin
import { AdminDashboard, AlgorithmConfigPage } from "@/features/admin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/role-selection" element={<RoleSelectionPage />} />

          {/* Founder Routes */}
          <Route path="/founder/setup" element={<ProjectSetupPage />} />
          <Route path="/founder/matching" element={<MatchingDashboard />} />
          <Route path="/founder/projects" element={<MatchingDashboard />} />
          <Route path="/founder/explore" element={<MatchingDashboard />} />

          {/* Co-founder Routes */}
          <Route
            path="/co-founder/profile/setup"
            element={<CofounderProfileSetup />}
          />
          <Route
            path="/co-founder/profile"
            element={<CofounderProfile />}
          />
          <Route path="/co-founder/explore" element={<StartupExplore />} />
          <Route path="/co-founder/swipe" element={<SwipeMatching />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/algorithm" element={<AlgorithmConfigPage />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/content" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
