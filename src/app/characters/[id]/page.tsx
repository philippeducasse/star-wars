import { get } from "@/lib/api";
import { Character } from "@/types/characters";
import CharacterDetails from "@/components/page-components/CharacterDetails";

const CharacterDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const character: Character = await get(`people/${id}`);
  return <CharacterDetails character={character} />;
};

export default CharacterDetailPage;
