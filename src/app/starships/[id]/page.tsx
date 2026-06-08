import { get } from "@/lib/api";
import { Starship } from "@/types/starships";
import StarshipDetails from "@/components/page-components/StarshipDetails";

const StarshipDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const starship: Starship = await get(`starships/${id}`);
  return <StarshipDetails starship={starship} />;
};

export default StarshipDetailPage;
