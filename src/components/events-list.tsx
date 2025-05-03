import EventCard from "@/components/event-card";
import { CityEvent } from "@/lib/types";
import { getEvents } from "@/lib/utils";
type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event: CityEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
