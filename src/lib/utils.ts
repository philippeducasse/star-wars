import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(text: string) {
  if (!text) return text;
  return text[0].toUpperCase() + text.slice(1);
}

export const getIdFromUrl = (url: string): string =>
  url.split("/").filter(Boolean).pop() ?? "";
