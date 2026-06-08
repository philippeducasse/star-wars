import { get } from "@/lib/api";
import { Species } from "@/types/species";
import SpeciesDetails from "@/components/page-components/SpeciesDetails";

const SpeciesDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const species: Species = await get(`species/${id}`);
  return <SpeciesDetails species={species} />;
};

export default SpeciesDetailPage;
