import { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "../../prisma/prisma";
import { notFound } from "next/navigation";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export const getEvent = async (id: string) => {
  const event = await prisma.eventoEvent.findUnique({ where: { id } });

  if (!event) {
    notFound();
  }

  return event;
};

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getEvents = async (city: string) => {
  const events = prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: { date: "asc" },
  });

  return events;
};
