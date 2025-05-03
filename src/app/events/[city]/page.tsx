import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";

type CityPageParams = {
  params: Promise<{ city: string }>;
};

export const generateMetadata = async ({ params }: CityPageParams) => {
  const { city } = await params;

  return {
    title: `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
};
const CityPage = async ({ params }: CityPageParams) => {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default CityPage;
