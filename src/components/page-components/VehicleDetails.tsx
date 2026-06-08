import Link from "next/link";
import DetailsViewSection from "@/components/generic/details-view/DetailsViewSection";
import { Vehicle } from "@/types/vehicles";
import { vehicleToRows } from "@/utils/vehicleUtils";

const VehicleDetails = ({ vehicle }: { vehicle: Vehicle }) => (
  <div className="max-w-3xl mx-auto p-6">
    <Link href="/vehicles" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-foreground mb-6 inline-block">
      ← Back
    </Link>
    <h1 className="text-2xl font-bold mb-6 dark:text-foreground">{vehicle.name}</h1>
    <DetailsViewSection title="Details" data={vehicleToRows(vehicle)} />
  </div>
);

export default VehicleDetails;
