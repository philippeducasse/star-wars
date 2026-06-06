import { Column } from "@/components/generic/table/DataTable";
import { Starship } from "@/types/starships";

export const starshipColumns: Column<Starship>[] = [
  { header: "Name", accessor: "name" },
  { header: "Model", accessor: "model" },
  { header: "Manufacturer", accessor: "manufacturer" },
  { header: "Class", accessor: "starship_class" },
];
