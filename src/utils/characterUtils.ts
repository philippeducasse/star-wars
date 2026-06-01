import { Column } from "@/components/generic/table/DataTable";
import { Character } from "@/types/characters";

export const characterColumns: Column<Character>[] = [
  { header: "Name", accessor: "name" },
  { header: "Height", accessor: "height" },
  { header: "Gender", accessor: "gender" },
  { header: "Birth Year", accessor: "birth_year" },
];
