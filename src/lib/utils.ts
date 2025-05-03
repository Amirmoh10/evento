import { ClassValue } from "clsx";
import { clsx } from "clsx";
import { CityEvent } from "./types";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export const getEvent = async (id: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events`
  );

  const events = await response.json();

  return events.find((event: CityEvent) => event.id === Number(id));
};

export const getEvents = async (city: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  return await response.json();
};
