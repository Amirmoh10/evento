type CityPageParams = {
  params: Promise<{ city: string }>;
};

const CityPage = async ({ params }: CityPageParams) => {
  const { city } = await params;

  return <main>{city}</main>;
};

export default CityPage;
