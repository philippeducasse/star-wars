import Link from "next/link";
import DetailsViewSection from "@/components/generic/details-view/DetailsViewSection";
import { Character } from "@/types/characters";
import { characterToRows } from "@/utils/characterUtils";

const CharacterDetails = ({ character }: { character: Character }) => (
  <div className="max-w-3xl mx-auto p-6">
    <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-foreground mb-6 inline-block">
      ← Back
    </Link>
    <h1 className="text-2xl font-bold mb-6 dark:text-foreground">{character.name}</h1>
    <DetailsViewSection title="Profile" data={characterToRows(character)} />
  </div>
);

export default CharacterDetails;
