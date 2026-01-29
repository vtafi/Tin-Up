import { cn } from "@/utils/cn";
import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  showStatus?: boolean;
  status?: "online" | "offline" | "away" | "busy";
  badge?: React.ReactNode;
}

const avatarSizes = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
  "2xl": "w-24 h-24 text-2xl",
};

const statusColors = {
  online: "bg-emerald-500",
  offline: "bg-gray-400",
  away: "bg-amber-500",
  busy: "bg-red-500",
};

const statusSizes = {
  xs: "w-1.5 h-1.5",
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
  xl: "w-4 h-4",
  "2xl": "w-5 h-5",
};

// Get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Generate a consistent color based on name
function getAvatarColor(name: string): string {
  const colors = [
    "from-[#3b7aed] to-[#135bec]",
    "from-purple-400 to-purple-600",
    "from-orange-400 to-orange-600",
    "from-emerald-400 to-emerald-600",
    "from-pink-400 to-pink-600",
    "from-cyan-400 to-cyan-600",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  className,
  showStatus = false,
  status = "offline",
  badge,
}: AvatarProps) {
  const displayName = alt || name || "User";

  return (
    <div className={cn("relative inline-flex", className)}>
      {src ? (
        <img
          src={src}
          alt={displayName}
          className={cn(
            "rounded-full object-cover bg-gray-200",
            avatarSizes[size],
          )}
        />
      ) : name ? (
        <div
          className={cn(
            "rounded-full flex items-center justify-center font-medium text-white",
            "bg-gradient-to-br",
            getAvatarColor(name),
            avatarSizes[size],
          )}
        >
          {getInitials(name)}
        </div>
      ) : (
        <div
          className={cn(
            "rounded-full flex items-center justify-center bg-gray-200 text-gray-500",
            avatarSizes[size],
          )}
        >
          <User className="w-1/2 h-1/2" />
        </div>
      )}

      {/* Status indicator */}
      {showStatus && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-white",
            statusColors[status],
            statusSizes[size],
          )}
        />
      )}

      {/* Badge */}
      {badge && <div className="absolute -top-1 -right-1">{badge}</div>}
    </div>
  );
}

// Avatar Group component
interface AvatarGroupProps {
  avatars: Array<{
    src?: string;
    name?: string;
    alt?: string;
  }>;
  max?: number;
  size?: AvatarProps["size"];
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = "md",
  className,
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          {...avatar}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            "rounded-full flex items-center justify-center",
            "bg-gray-100 text-gray-600 font-medium ring-2 ring-white",
            avatarSizes[size],
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

export default Avatar;
