import Link from "next/link";
import DetailsViewSection from "@/components/generic/details-view/DetailsViewSection";
import { Starship } from "@/types/starships";
import { starshipToRows } from "@/utils/starshipUtils";

const StarshipDetails = ({ starship }: { starship: Starship }) => (
  <div className="max-w-3xl mx-auto p-6">
    <Link href="/starships" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-foreground mb-6 inline-block">
      ← Back
    </Link>
    <h1 className="text-2xl font-bold mb-6 dark:text-foreground">{starship.name}</h1>
    <DetailsViewSection title="Details" data={starshipToRows(starship)} />
  </div>
);

export default StarshipDetails;
