import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/utils";
import { EventoEvent } from "@prisma/client";
type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event: EventoEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
