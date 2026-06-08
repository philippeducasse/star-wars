import Link from "next/link";
import DetailsViewSection from "@/components/generic/details-view/DetailsViewSection";
import { Species } from "@/types/species";
import { speciesToRows } from "@/utils/speciesUtils";

const SpeciesDetails = ({ species }: { species: Species }) => (
  <div className="max-w-3xl mx-auto p-6">
    <Link href="/species" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-foreground mb-6 inline-block">
      ← Back
    </Link>
    <h1 className="text-2xl font-bold mb-6 dark:text-foreground">{species.name}</h1>
    <DetailsViewSection title="Details" data={speciesToRows(species)} />
  </div>
);

export default SpeciesDetails;
