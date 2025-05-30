import "server-only";
import { prisma } from "../../prisma/prisma";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";

export const getEvent = unstable_cache(async (id: string) => {
  const event = await prisma.eventoEvent.findUnique({ where: { id } });

  if (!event) {
    notFound();
  }

  return event;
});

export const getEvents = unstable_cache(async (city: string, page: number) => {
  const numberOfEventsToSkip = (page - 1) * 6;

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: { date: "asc" },
    take: 6,
    skip: numberOfEventsToSkip,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return {
    events,
    totalCount,
  };
});
