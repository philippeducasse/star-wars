import { get } from "@/lib/api";
import { Vehicle } from "@/types/vehicles";
import VehicleDetails from "@/components/page-components/VehicleDetails";

const VehicleDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const vehicle: Vehicle = await get(`vehicles/${id}`);
  return <VehicleDetails vehicle={vehicle} />;
};

export default VehicleDetailPage;
