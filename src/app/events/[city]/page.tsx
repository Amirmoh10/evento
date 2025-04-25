import EventsList from "@/components/events-list";
import H1 from "@/components/h1";

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

      <EventsList events={events} />
    </main>
  );
};

export default CityPage;
