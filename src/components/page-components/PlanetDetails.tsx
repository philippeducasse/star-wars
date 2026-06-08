import Link from "next/link";
import DetailsViewSection from "@/components/generic/details-view/DetailsViewSection";
import { Planet } from "@/types/planets";
import { planetToRows } from "@/utils/planetUtils";

const PlanetDetails = ({ planet }: { planet: Planet }) => (
  <div className="max-w-3xl mx-auto p-6">
    <Link href="/planets" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-foreground mb-6 inline-block">
      ← Back
    </Link>
    <h1 className="text-2xl font-bold mb-6 dark:text-foreground">{planet.name}</h1>
    <DetailsViewSection title="Details" data={planetToRows(planet)} />
  </div>
);

export default PlanetDetails;
