import H1 from "@/components/h1";
import { CityEvent } from "@/lib/types";

type CityPageParams = {
  params: Promise<{ city: string }>;
};

const CityPage = async ({ params }: CityPageParams) => {
  const { city } = await params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
        {events.map((event: CityEvent) => (
          <div key={event.id}>{event.name}</div>
        ))}
      </section>
    </main>
  );
};

export default CityPage;
