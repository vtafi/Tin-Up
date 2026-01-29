import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { CardProps } from "@/types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, interactive = false, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-xl p-6 border border-gray-100 shadow-sm",
          "transition-all duration-300",
          interactive && [
            "cursor-pointer",
            "hover:shadow-lg hover:border-gray-200 hover:scale-[1.02]",
            "active:scale-[0.98]",
          ],
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

// Card Header component
export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

// Card Title component
export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-lg font-semibold text-gray-900", className)}>
      {children}
    </h3>
  );
}

// Card Description component
export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-gray-500 mt-1", className)}>{children}</p>
  );
}

// Card Content component
export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

// Card Footer component
export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-gray-100", className)}>
      {children}
    </div>
  );
}

// Bento Card - special card with aurora glow on hover (Stitch primary: #135bec)
export function BentoCard({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        // Stitch design: rounded-xl (12px)
        "group relative bg-white rounded-xl p-6 border border-gray-100",
        "transition-all duration-500 overflow-hidden",
        "hover:shadow-xl hover:border-transparent",
        onClick && "cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {/* Aurora gradient background on hover - Updated with Stitch primary */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#135bec]/5 via-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glow effect - Updated with Stitch primary */}
      <div className="absolute -inset-px bg-gradient-to-br from-[#135bec]/20 via-purple-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
}

export default Card;
