import { Column } from "@/components/generic/table/DataTable";
import { Vehicle } from "@/types/vehicles";

export const vehicleColumns: Column<Vehicle>[] = [
  { header: "Name", accessor: "name" },
  { header: "Model", accessor: "model" },
  { header: "Manufacturer", accessor: "manufacturer" },
  { header: "Class", accessor: "vehicle_class" },
];
