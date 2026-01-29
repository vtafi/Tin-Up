import { useState } from "react";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Save, RotateCcw, Info, Sparkles } from "lucide-react";
import { SmartNavbar, Sidebar } from "@/components/layout";
import { Card, Button } from "@/components/common";
import type { AlgorithmConfig } from "@/types";

const defaultConfig: AlgorithmConfig = {
  skillWeight: 70,
  experienceWeight: 60,
  locationWeight: 40,
  industryWeight: 50,
  dnaWeight: 80,
};

interface SliderConfig {
  key: keyof AlgorithmConfig;
  label: string;
  description: string;
  color: string;
}

const sliderConfigs: SliderConfig[] = [
  {
    key: "skillWeight",
    label: "Skill Match",
    description: "How important matching skills are for the algorithm",
    color: "blue",
  },
  {
    key: "experienceWeight",
    label: "Experience Level",
    description: "Weight given to years of experience in matching",
    color: "purple",
  },
  {
    key: "locationWeight",
    label: "Location Proximity",
    description: "Preference for co-founders in the same city/region",
    color: "green",
  },
  {
    key: "industryWeight",
    label: "Industry Alignment",
    description: "Matching based on industry preferences",
    color: "orange",
  },
  {
    key: "dnaWeight",
    label: "Startup DNA",
    description: "Personality and work style compatibility",
    color: "pink",
  },
];

// Stitch primary #135bec
const colorClasses: Record<
  string,
  { bg: string; fill: string; accent: string }
> = {
  blue: { bg: "bg-[#dce9fc]", fill: "bg-[#135bec]", accent: "accent-[#135bec]" },
  purple: {
    bg: "bg-purple-100",
    fill: "bg-purple-500",
    accent: "accent-purple-500",
  },
  green: {
    bg: "bg-emerald-100",
    fill: "bg-emerald-500",
    accent: "accent-emerald-500",
  },
  orange: {
    bg: "bg-orange-100",
    fill: "bg-orange-500",
    accent: "accent-orange-500",
  },
  pink: { bg: "bg-pink-100", fill: "bg-pink-500", accent: "accent-pink-500" },
};

export function AlgorithmConfigPage() {
  const [config, setConfig] = useState<AlgorithmConfig>(defaultConfig);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleSliderChange = (key: keyof AlgorithmConfig, value: number) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    setHasChanges(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
    setHasChanges(false);
  };

  // Transform config data for radar chart
  const radarData = sliderConfigs.map((item) => ({
    subject: item.label.split(" ")[0],
    value: config[item.key],
    fullMark: 100,
  }));

  // Calculate match preview
  const previewMatch = {
    candidate: "Tran Thi B",
    oldScore: 85,
    newScore: Math.round(
      (config.skillWeight * 0.9 +
        config.experienceWeight * 0.75 +
        config.locationWeight * 1 +
        config.industryWeight * 0.8 +
        config.dnaWeight * 0.85) /
        5,
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SmartNavbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 ml-[280px] p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Algorithm Config
              </h1>
              <p className="text-gray-600 mt-1">
                Fine-tune the matching algorithm weights
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                onClick={handleReset}
                leftIcon={<RotateCcw className="w-5 h-5" />}
              >
                Reset to Default
              </Button>
              <Button
                onClick={handleSave}
                isLoading={isSaving}
                disabled={!hasChanges}
                leftIcon={<Save className="w-5 h-5" />}
              >
                Save Changes
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Sliders */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Weight Configuration
              </h3>

              <div className="space-y-8">
                {sliderConfigs.map((item) => {
                  const colors = colorClasses[item.color];
                  const value = config[item.key];

                  return (
                    <div key={item.key}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {item.label}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Info className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-lg font-bold text-gray-900">
                          {value}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        {item.description}
                      </p>
                      <div className="relative">
                        <div className={`h-2 rounded-full ${colors.bg}`}>
                          <motion.div
                            className={`h-full rounded-full ${colors.fill}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={value}
                          onChange={(e) =>
                            handleSliderChange(item.key, Number(e.target.value))
                          }
                          className={`absolute inset-0 w-full h-2 opacity-0 cursor-pointer`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Preview */}
            <div className="space-y-6">
              {/* Radar chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Weight Distribution
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                      />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        tick={{ fill: "#9ca3af", fontSize: 10 }}
                      />
                      <Radar
                        name="Weights"
                        dataKey="value"
                        stroke="url(#radarGradient)"
                        fill="url(#radarGradient)"
                        fillOpacity={0.4}
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="radarGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#135bec" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Match preview - Stitch primary #135bec */}
              <Card className="p-6 bg-gradient-to-br from-[#eef4fd] via-purple-50 to-orange-50 border-[#dce9fc]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#135bec] via-purple-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Real-time Preview
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      See how your changes affect match scores
                    </p>

                    <div className="p-4 bg-white/80 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-700">
                          Match with <strong>{previewMatch.candidate}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">Old Score</span>
                            <span className="font-medium">
                              {previewMatch.oldScore}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-gray-400 rounded-full"
                              style={{ width: `${previewMatch.oldScore}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-2xl">→</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">New Score</span>
                            <span className="font-medium text-[#135bec]">
                              {previewMatch.newScore}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 rounded-full"
                              initial={{ width: `${previewMatch.oldScore}%` }}
                              animate={{ width: `${previewMatch.newScore}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        {previewMatch.newScore > previewMatch.oldScore
                          ? `+${previewMatch.newScore - previewMatch.oldScore}% increase`
                          : previewMatch.newScore < previewMatch.oldScore
                            ? `${previewMatch.newScore - previewMatch.oldScore}% decrease`
                            : "No change"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tips */}
              <Card className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Configuration Tips
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#135bec] mt-1">•</span>
                    Higher skill weight prioritizes technical compatibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    Startup DNA helps match complementary personalities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Lower location weight for remote-first matching
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    Balance weights to avoid single-factor dominance
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AlgorithmConfigPage;
