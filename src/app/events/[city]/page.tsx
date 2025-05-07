import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";

type Params = {
  params: Promise<{ city: string }>;
};

type CityPageParams = Params & {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = async ({
  params,
}: CityPageParams): Promise<Metadata> => {
  const { city } = await params;

  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
};

const CityPage = async ({ params, searchParams }: CityPageParams) => {
  const { city } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + currentPage} fallback={<Loading />}>
        <EventsList city={city} page={currentPage} />
      </Suspense>
    </main>
  );
};

export default CityPage;
