import { clsx, type ClassValue } from "clsx";

/**
 * Utility function to merge class names with clsx
 * Supports conditional classes and Tailwind CSS merge behavior
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
