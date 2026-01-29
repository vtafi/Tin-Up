import { cn } from "@/utils/cn";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  fullScreen?: boolean;
}

const loaderSizes = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export function Loader({
  size = "md",
  className,
  fullScreen = false,
}: LoaderProps) {
  const loader = (
    <div className={cn("relative", loaderSizes[size], className)}>
      {/* Outer ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border-2 border-gray-200",
          loaderSizes[size],
        )}
      />
      {/* Spinning ring with aurora gradient - Stitch primary #135bec */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border-2 border-transparent",
          "border-t-[#135bec] border-r-purple-500",
          "animate-spin",
          loaderSizes[size],
        )}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          {loader}
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return loader;
}

// Page loader with Tin-Up branding
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="flex flex-col items-center gap-6">
        {/* Logo - Stitch primary #135bec */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 rounded-xl animate-pulse" />
          <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 bg-clip-text text-transparent">
              TU
            </span>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-[#135bec] via-purple-500 to-orange-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>

        <p className="text-gray-500 text-sm">Connecting innovators...</p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

// Skeleton loader for content
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]",
        "rounded-lg",
        className,
      )}
    />
  );
}

export default Loader;
