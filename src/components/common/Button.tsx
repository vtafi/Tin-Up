import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";
import type { ButtonProps } from "@/types";

// Stitch Primary Color: #135bec
const buttonVariants = {
  primary:
    "text-white shadow-[0_4px_14px_rgba(19,91,236,0.25)] hover:shadow-[0_6px_20px_rgba(19,91,236,0.35)] [background:linear-gradient(135deg,#135bec_0%,#0f4ac7_100%)] hover:[background:linear-gradient(135deg,#0f4ac7_0%,#0b3a9e_100%)]",
  secondary:
    "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
  danger:
    "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700",
  success:
    "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-emerald-700",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
          buttonVariants[variant],
          buttonSizes[size],
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
