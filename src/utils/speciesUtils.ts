import { Column } from "@/components/generic/table/DataTable";
import { Species } from "@/types/species";

export const speciesColumns: Column<Species>[] = [
  { header: "Name", accessor: "name" },
  { header: "Classification", accessor: "classification" },
  { header: "Average Height", accessor: "average_height" },
  { header: "Language", accessor: "language" },
];
