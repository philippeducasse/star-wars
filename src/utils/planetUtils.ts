import { Column } from "@/components/generic/table/DataTable";
import { Planet } from "@/types/planets";

export const planetColumns: Column<Planet>[] = [
  { header: "Name", accessor: "name" },
  { header: "Diameter", accessor: "diameter" },
  { header: "Climate", accessor: "climate" },
  { header: "Terrain", accessor: "terrain" },
];
