import { forwardRef, useId } from "react";
import { cn } from "@/utils/cn";
import type { InputProps } from "@/types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, helperText, leftIcon, rightIcon, ...props },
    ref,
  ) => {
    const id = useId();
    const inputId = props.id || id;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              // Base styles - Stitch design with 12px radius
              "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400",
              // Focus states - Stitch primary color #135bec
              "focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec]",
              "transition-all duration-200",
              leftIcon && "pl-12",
              rightIcon && "pr-12",
              error &&
                "border-red-500 focus:ring-red-500/20 focus:border-red-500",
              className,
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
