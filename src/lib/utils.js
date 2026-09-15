import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names, resolving conflicting utility classes
 * (e.g. "p-2 p-4" -> "p-4") and supporting conditional class objects/arrays.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
