import { cn } from "@/utils/cn";
import { X } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "blue"
    | "purple"
    | "orange"
    | "green"
    | "red"
    | "gray"
    | "aurora";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

// Stitch primary #135bec
const badgeVariants = {
  default: "bg-gray-100 text-gray-700",
  blue: "bg-[#eef4fd] text-[#135bec]",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
  green: "bg-emerald-100 text-emerald-700",
  red: "bg-red-100 text-red-700",
  gray: "bg-gray-100 text-gray-600",
  aurora:
    "bg-gradient-to-r from-blue-100 via-purple-100 to-orange-100 text-gray-700",
};

const badgeSizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  removable = false,
  onRemove,
  className,
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        "transition-all duration-200",
        badgeVariants[variant],
        badgeSizes[size],
        className,
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="flex-shrink-0 p-0.5 rounded-full hover:bg-black/10 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}

// Skill Tag - specialized badge for skills
interface SkillTagProps {
  skill: string;
  level?: number;
  category?:
    | "technical"
    | "business"
    | "design"
    | "marketing"
    | "operations"
    | "finance";
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

const categoryColors: Record<string, BadgeProps["variant"]> = {
  technical: "blue",
  business: "purple",
  design: "orange",
  marketing: "green",
  operations: "gray",
  finance: "red",
};

export function SkillTag({
  skill,
  level,
  category = "technical",
  removable,
  onRemove,
  className,
}: SkillTagProps) {
  return (
    <Badge
      variant={categoryColors[category]}
      removable={removable}
      onRemove={onRemove}
      className={className}
    >
      {skill}
      {level && (
        <span className="ml-1 opacity-70">
          {"●".repeat(level)}
          {"○".repeat(5 - level)}
        </span>
      )}
    </Badge>
  );
}

// Status Badge
interface StatusBadgeProps {
  status:
    | "pending"
    | "approved"
    | "rejected"
    | "active"
    | "inactive"
    | "matched";
  className?: string;
}

const statusConfig: Record<
  StatusBadgeProps["status"],
  { variant: BadgeProps["variant"]; label: string }
> = {
  pending: { variant: "orange", label: "Pending" },
  approved: { variant: "green", label: "Approved" },
  rejected: { variant: "red", label: "Rejected" },
  active: { variant: "green", label: "Active" },
  inactive: { variant: "gray", label: "Inactive" },
  matched: { variant: "purple", label: "Matched" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} size="sm" className={className}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {config.label}
    </Badge>
  );
}

// Match Score Badge
interface MatchScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MatchScoreBadge({
  score,
  size = "md",
  className,
}: MatchScoreBadgeProps) {
  const getScoreColor = (score: number): string => {
    if (score >= 90) return "from-emerald-400 to-emerald-600";
    if (score >= 75) return "from-[#3b7aed] to-[#135bec]";
    if (score >= 60) return "from-purple-400 to-purple-600";
    if (score >= 40) return "from-orange-400 to-orange-600";
    return "from-gray-400 to-gray-600";
  };

  const sizes = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-20 h-20 text-lg",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white",
        "bg-gradient-to-br shadow-lg",
        getScoreColor(score),
        sizes[size],
        className,
      )}
    >
      {score}%
    </div>
  );
}

export default Badge;
