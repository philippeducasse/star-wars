import { Column } from "@/components/generic/table/DataTable";
import { Vehicle } from "@/types/vehicles";
import { RowData } from "@/components/generic/details-view/DetailsView";
import { getIdFromUrl } from "@/lib/utils";

export const vehicleColumns: Column<Vehicle>[] = [
  {
    header: "Name",
    accessor: "name",
    getHref: (vehicle) => `/vehicles/${getIdFromUrl(vehicle.url)}`,
  },
  { header: "Model", accessor: "model" },
  { header: "Manufacturer", accessor: "manufacturer" },
  { header: "Class", accessor: "vehicle_class" },
];

export const vehicleToRows = (vehicle: Vehicle): RowData[] => [
  { title: "Model", value: vehicle.model },
  { title: "Manufacturer", value: vehicle.manufacturer },
  { title: "Class", value: vehicle.vehicle_class },
  { title: "Cost in Credits", value: vehicle.cost_in_credits },
  { title: "Length", value: vehicle.length },
  { title: "Crew", value: vehicle.crew },
  { title: "Passengers", value: vehicle.passengers },
  { title: "Cargo Capacity", value: vehicle.cargo_capacity },
  { title: "Max Speed", value: vehicle.max_atmosphering_speed },
  { title: "Consumables", value: vehicle.consumables },
];
