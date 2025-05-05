import { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "../../prisma/prisma";
import { EventoEvent } from "@prisma/client";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export const getEvent = async (id: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events`
  );

  const events = await response.json();

  return events.find((event: EventoEvent) => event.id === Number(id));
};

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getEvents = async (city: string) => {
  if (city === "all") {
    return prisma.eventoEvent.findMany();
  }

  return prisma.eventoEvent.findMany({
    where: {
      city: capitalize(city),
    },
  });
};
