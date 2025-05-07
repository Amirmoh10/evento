import { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
