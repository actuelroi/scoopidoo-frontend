import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const parsePrice = (value?: string) => {
  const price = parseFloat(
    String(value ?? "0")
      .replace(",", ".")
      .replace(/[^\d.]/g, "")
  );

  return isNaN(price) ? 0 : price;
};

export const DeliveredDate = () => {
  const date = new Date();

  date.setDate(date.getDate() + 4);

  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};