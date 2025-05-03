import EventCard from "@/components/event-card";
import { CityEvent } from "@/lib/types";

type EventsListProps = {
  city: string;
};

const EventsList = async ({ city }: EventsListProps) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event: CityEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
