import { getEvents } from "@/lib/server-utils";
import EventCard from "./event-card";
import PaginationControls from "./PaginationControls";

type EventsListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventsListProps) => {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex flex-col gap-20 px-[20px]">
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
