import { get } from "@/lib/api";
import { Planet } from "@/types/planets";
import PlanetDetails from "@/components/page-components/PlanetDetails";

const PlanetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const planet: Planet = await get(`planets/${id}`);
  return <PlanetDetails planet={planet} />;
};

export default PlanetDetailPage;
